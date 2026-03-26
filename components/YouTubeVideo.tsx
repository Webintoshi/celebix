"use client";

import { useState } from "react";
import { Play, Clock, Eye } from "lucide-react";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description?: string;
  duration?: string;
  thumbnailQuality?: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault";
  className?: string;
}

/**
 * YouTube Video Component with SEO optimization
 * Features:
 * - Lazy loading with thumbnail preview
 * - Video Schema compatible
 * - Accessible play button
 * - Responsive design
 */
export default function YouTubeVideo({
  videoId,
  title,
  description,
  duration,
  thumbnailQuality = "maxresdefault",
  className = "",
}: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-dark-900 ${className}`}>
      {/* Video Schema Metadata (hidden) */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description || title} />
      <meta itemProp="thumbnailUrl" content={thumbnailUrl} />
      <meta itemProp="contentUrl" content={videoUrl} />
      <meta itemProp="embedUrl" content={embedUrl} />
      {duration && <meta itemProp="duration" content={duration} />}
      
      {!isLoaded ? (
        // Thumbnail Preview
        <div className="relative aspect-video cursor-pointer group" onClick={() => setIsLoaded(true)}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/20 transition-colors" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-aurora-violet flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
              <Play size={32} className="text-white ml-1" fill="white" />
            </div>
          </div>
          
          {/* Duration Badge */}
          {duration && (
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-dark-900/80 text-white text-sm font-medium flex items-center gap-1">
              <Clock size={14} />
              {duration}
            </div>
          )}
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900/90 to-transparent">
            <h3 className="text-white font-display text-lg line-clamp-2">{title}</h3>
            {description && (
              <p className="text-white/70 text-sm mt-1 line-clamp-1">{description}</p>
            )}
          </div>
        </div>
      ) : (
        // YouTube Embed
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
}

/**
 * Video Card Component for video listings
 */
export function VideoCard({
  videoId,
  title,
  description,
  duration,
  views,
  publishedAt,
}: YouTubeVideoProps & { views?: string; publishedAt?: string }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  
  return (
    <div className="group cursor-pointer" itemScope itemType="https://schema.org/VideoObject">
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description || title} />
      <meta itemProp="thumbnailUrl" content={thumbnailUrl} />
      <meta itemProp="contentUrl" content={`https://www.youtube.com/watch?v=${videoId}`} />
      <meta itemProp="embedUrl" content={`https://www.youtube.com/embed/${videoId}`} />
      {duration && <meta itemProp="duration" content={duration} />}
      {publishedAt && <meta itemProp="uploadDate" content={publishedAt} />}
      
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/10 transition-colors" />
        
        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-aurora-violet/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <Play size={24} className="text-white ml-0.5" fill="white" />
          </div>
        </div>
        
        {/* Duration */}
        {duration && (
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-dark-900/80 text-white text-xs font-medium">
            {duration}
          </div>
        )}
      </div>
      
      <h4 className="font-medium text-dark-900 group-hover:text-aurora-violet transition-colors line-clamp-2">
        {title}
      </h4>
      
      {(views || publishedAt) && (
        <div className="flex items-center gap-3 mt-1 text-sm text-dark-900/60">
          {views && (
            <span className="flex items-center gap-1">
              <Eye size={14} />
              {views}
            </span>
          )}
          {publishedAt && <span>{publishedAt}</span>}
        </div>
      )}
    </div>
  );
}
