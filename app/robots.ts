import { MetadataRoute } from "next";
import { SITE_URL, absoluteSiteUrl } from "@/lib/site";

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: absoluteSiteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
