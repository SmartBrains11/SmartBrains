'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LiteYouTubeEmbedProps {
    videoId: string;
    title: string;
    className?: string;
    thumbnailQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault';
}

/**
 * Lightweight YouTube embed component that loads the iframe only on click.
 * 
 * Benefits:
 * - Reduces initial page load by ~500KB per video
 * - Improves LCP and TBT significantly
 * - No external scripts loaded until user interaction
 * 
 * @param videoId - YouTube video ID (e.g., "dQw4w9WgXcQ")
 * @param title - Accessible title for the video
 * @param className - Optional CSS classes
 * @param thumbnailQuality - YouTube thumbnail quality (default: maxresdefault)
 */
export function LiteYouTubeEmbed({
    videoId,
    title,
    className = '',
    thumbnailQuality = 'hqdefault',
}: LiteYouTubeEmbedProps) {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const [thumbnailError, setThumbnailError] = useState(false);

    // Try hqdefault first, fallback to mqdefault if it fails
    const thumbnailUrl = thumbnailError
        ? `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
        : `https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`;
    const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    const handleClick = () => {
        setIsIframeLoaded(true);
    };

    return (
        <div
            className={`relative w-full h-full overflow-hidden bg-black cursor-pointer group ${className}`}
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Play video: ${title}`}
        >
            {!isIframeLoaded ? (
                <>
                    {/* Thumbnail Image */}
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                        onError={() => setThumbnailError(true)}
                    />

                    {/* Light overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-200">
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Video Title Overlay (optional, shows on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <p className="text-white text-sm md:text-base font-medium line-clamp-2">
                            {title}
                        </p>
                    </div>
                </>
            ) : (
                /* YouTube iframe - loaded only after click */
                <iframe
                    src={iframeSrc}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                />
            )}
        </div>
    );
}
