import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const productionRoots = ["app", "lib", "components", "content", "public"];
const importantUrls = [
  "https://celebix.net/tr",
  "https://celebix.net/en",
  "https://celebix.net/tr/ordu-yazilim-sirketi",
  "https://celebix.net/en/ordu-yazilim-sirketi",
  "https://celebix.net/tr/video-pazarlama-2026",
  "https://celebix.net/en/video-pazarlama-2026",
  "https://celebix.net/tr/eposta-pazarlama-kobi",
  "https://celebix.net/en/eposta-pazarlama-kobi",
  "https://celebix.net/tr/blog",
  "https://celebix.net/en/blog",
];

const forbiddenPatterns = [
  {
    pattern: /https?:\/\/(?:www\.)?celebix\.(?!net\b)[a-z.]+/gi,
    label: "non-.net Celebix production domain",
  },
  {
    pattern: /merhaba@celebix\.(?!net\b)[a-z.]+/gi,
    label: "non-.net contact email",
  },
];

const previewPatterns = [
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "coolify",
  "vercel.app",
  "ngrok",
];

const errors = [];

function addError(message) {
  errors.push(message);
}

function readText(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(rootDir, relativePath));
}

function walkTextFiles(relativePath, bucket) {
  const absolutePath = path.join(rootDir, relativePath);
  if (!fs.existsSync(absolutePath)) {
    return;
  }

  for (const entry of fs.readdirSync(absolutePath, { withFileTypes: true })) {
    const entryRelativePath = path.join(relativePath, entry.name);

    if (entry.isDirectory()) {
      walkTextFiles(entryRelativePath, bucket);
      continue;
    }

    try {
      const content = fs.readFileSync(path.join(rootDir, entryRelativePath), "utf8");
      bucket.push({ relativePath: entryRelativePath, content });
    } catch {
      // Ignore binary files.
    }
  }
}

function collectProductionFiles() {
  const files = [];
  for (const relativeRoot of productionRoots) {
    walkTextFiles(relativeRoot, files);
  }
  return files;
}

function ensureNoForbiddenProductionStrings(files) {
  for (const file of files) {
    for (const { pattern, label } of forbiddenPatterns) {
      if (typeof pattern === "string") {
        if (file.content.includes(pattern)) {
          addError(`${file.relativePath} still contains ${label}: ${pattern}`);
        }
        continue;
      }

      const matches = file.content.match(pattern);
      if (matches) {
        addError(
          `${file.relativePath} still contains ${label}: ${[...new Set(matches)].join(", ")}`
        );
      }
    }

    for (const previewPattern of previewPatterns) {
      if (file.content.includes(previewPattern)) {
        addError(`${file.relativePath} contains preview/local reference: ${previewPattern}`);
      }
    }
  }
}

function ensureNoPlaceholderVerification() {
  const filesToCheck = ["app/layout.tsx", "lib/seo/metadata.ts"];
  for (const relativePath of filesToCheck) {
    if (exists(relativePath) && readText(relativePath).includes("your-google-verification-code")) {
      addError(`${relativePath} still contains a placeholder Google verification token`);
    }
  }
}

function ensureRobotsConfiguration() {
  const robotsPath = "app/robots.ts";
  if (!exists(robotsPath)) {
    addError("app/robots.ts is missing");
    return;
  }

  const robotsContent = readText(robotsPath);
  if (
    !robotsContent.includes('absoluteSiteUrl("/sitemap.xml")') &&
    !robotsContent.includes("https://celebix.net/sitemap.xml")
  ) {
    addError("app/robots.ts does not reference https://celebix.net/sitemap.xml");
  }

  if (robotsContent.includes('"/_next/"') || robotsContent.includes("'/_next/'")) {
    addError("app/robots.ts still blocks /_next/ assets");
  }
}

function ensureRootMetadataCanonicalIsGone() {
  const layoutPath = "app/layout.tsx";
  if (!exists(layoutPath)) {
    return;
  }

  const layoutContent = readText(layoutPath);
  if (layoutContent.includes("canonical: \"/\"")) {
    addError("app/layout.tsx still defines a redirecting root canonical");
  }
}

function ensureSearchActionRemoved() {
  for (const relativePath of ["components/SchemaScript.tsx", "lib/seo/schemas.ts"]) {
    if (exists(relativePath) && readText(relativePath).includes("SearchAction")) {
      addError(`${relativePath} still contains SearchAction even though no query-based search route exists`);
    }
  }
}

function ensureUnsupportedRatingsRemoved() {
  for (const relativePath of ["components/SchemaScript.tsx", "lib/seo/schemas.ts"]) {
    if (!exists(relativePath)) {
      continue;
    }

    const content = readText(relativePath);
    if (content.includes("aggregateRating") || content.includes("reviewCount")) {
      addError(`${relativePath} still contains unsupported aggregateRating/reviewCount schema`);
    }
  }
}

function extractSiteUrl() {
  const siteFile = readText("lib/site.ts");
  const match = siteFile.match(/export const SITE_URL = "([^"]+)"/);
  if (!match) {
    addError("lib/site.ts is missing SITE_URL");
    return "https://celebix.net";
  }
  return match[1];
}

function extractStaticPaths() {
  const sitemapContent = readText("app/sitemap.ts");
  const matches = [...sitemapContent.matchAll(/pathname:\s*"([^"]+)"/g)];
  return matches.map((match) => match[1]);
}

function extractBlogSlugs() {
  const postsContent = readText("app/[locale]/blog/posts.ts");
  const matches = [...postsContent.matchAll(/slug:\s*"([^"]+)"/g)];
  return matches.map((match) => match[1]);
}

function ensureSitemapConfiguration() {
  if (exists("public/sitemap.xml")) {
    addError("public/sitemap.xml still exists; sitemap should come from a single generated source");
  }

  if (!exists("app/sitemap.ts")) {
    addError("app/sitemap.ts is missing");
    return;
  }

  const siteUrl = extractSiteUrl();
  const staticPaths = extractStaticPaths();
  const blogSlugs = extractBlogSlugs();
  const urls = [];

  for (const pathname of staticPaths) {
    urls.push(`${siteUrl}${pathname}`);
  }

  for (const slug of blogSlugs) {
    urls.push(`${siteUrl}/tr/blog/${slug}`);
    urls.push(`${siteUrl}/en/blog/${slug}`);
  }

  const seen = new Set();
  for (const url of urls) {
    if (seen.has(url)) {
      addError(`Duplicate sitemap URL generated: ${url}`);
    }
    seen.add(url);

    if (!url.startsWith("https://celebix.net")) {
      addError(`Sitemap URL is not on celebix.net: ${url}`);
    }

    if (url === "https://celebix.net/" || url === "https://celebix.net") {
      addError("Sitemap still includes the redirecting root URL");
    }

    for (const previewPattern of previewPatterns) {
      if (url.includes(previewPattern)) {
        addError(`Sitemap URL contains preview/local host content: ${url}`);
      }
    }
  }

  for (const requiredUrl of importantUrls) {
    if (!seen.has(requiredUrl)) {
      addError(`Sitemap is missing important URL: ${requiredUrl}`);
    }
  }
}

const productionFiles = collectProductionFiles();
ensureNoForbiddenProductionStrings(productionFiles);
ensureNoPlaceholderVerification();
ensureRobotsConfiguration();
ensureRootMetadataCanonicalIsGone();
ensureSearchActionRemoved();
ensureUnsupportedRatingsRemoved();
ensureSitemapConfiguration();

if (errors.length > 0) {
  console.error("SEO audit failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("SEO audit passed.");
