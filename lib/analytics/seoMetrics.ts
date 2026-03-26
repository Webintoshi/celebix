/**
 * SEO Performance Metrics Tracking System
 * Celebix - Analytics and Reporting
 */

// Core Web Vitals thresholds
export const CWV_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 },
  FCP: { good: 1800, poor: 3000 },
};

export interface SEOMetrics {
  organicTraffic: number;
  organicTrafficChange: number;
  avgPosition: number;
  top3Keywords: number;
  top10Keywords: number;
  bounceRate: number;
  avgSessionDuration: number;
  pagesPerSession: number;
  coreWebVitals: {
    lcp: number;
    inp: number;
    cls: number;
  };
  indexedPages: number;
  crawlErrors: number;
  totalBacklinks: number;
  referringDomains: number;
  domainAuthority: number;
}

export interface PageMetrics {
  url: string;
  pageviews: number;
  uniquePageviews: number;
  avgTimeOnPage: number;
  bounceRate: number;
  exitRate: number;
  searchImpressions: number;
  searchClicks: number;
  searchPosition: number;
}

export interface KeywordData {
  keyword: string;
  position: number;
  previousPosition: number;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  url: string;
  lastUpdated: string;
}

export const SEO_TARGETS_2026 = {
  monthlyOrganicTraffic: 5000,
  trafficGrowthRate: 0.15,
  avgPosition: 15,
  top3Keywords: 10,
  top10Keywords: 50,
  bounceRate: 0.60,
  avgSessionDuration: 180,
  pagesPerSession: 2.5,
  lcp: 2500,
  cls: 0.1,
  monthlyBlogPosts: 4,
  avgPostLength: 1500,
  monthlyNewBacklinks: 5,
  domainAuthority: 35,
};

export function calculateSEOHealth(metrics: Partial<SEOMetrics>): number {
  let score = 0;
  let totalWeight = 0;
  
  if (metrics.organicTrafficChange !== undefined) {
    const trafficScore = Math.min(Math.max(metrics.organicTrafficChange + 1, 0), 2) * 50;
    score += trafficScore * 0.25;
    totalWeight += 0.25;
  }
  
  if (metrics.avgPosition !== undefined) {
    const rankingScore = Math.max(0, (30 - metrics.avgPosition) / 30) * 100;
    score += rankingScore * 0.25;
    totalWeight += 0.25;
  }
  
  if (metrics.bounceRate !== undefined) {
    const engagementScore = Math.max(0, (100 - metrics.bounceRate) / 100) * 100;
    score += engagementScore * 0.20;
    totalWeight += 0.20;
  }
  
  if (metrics.coreWebVitals) {
    const { lcp, cls } = metrics.coreWebVitals;
    const lcpScore = Math.max(0, (4000 - lcp) / 4000) * 100;
    const clsScore = Math.max(0, (0.25 - cls) / 0.25) * 100;
    const technicalScore = (lcpScore + clsScore) / 2;
    score += technicalScore * 0.20;
    totalWeight += 0.20;
  }
  
  if (metrics.domainAuthority !== undefined) {
    const backlinkScore = (metrics.domainAuthority / 50) * 100;
    score += Math.min(backlinkScore, 100) * 0.10;
    totalWeight += 0.10;
  }
  
  return totalWeight > 0 ? Math.round(score / totalWeight) : 0;
}

export function getHealthColor(score: number): string {
  if (score >= 80) return "green";
  if (score >= 60) return "yellow";
  if (score >= 40) return "orange";
  return "red";
}

export function getHealthLabel(score: number): string {
  if (score >= 80) return "Mükemmel";
  if (score >= 60) return "İyi";
  if (score >= 40) return "Geliştirilmeli";
  return "Kritik";
}
