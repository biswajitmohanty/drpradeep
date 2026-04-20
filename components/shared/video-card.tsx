"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  id: string;
  title: string;
  date: string;
}

export function VideoCard({ id, title, date }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col rounded-lg border border-border bg-surface overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 90vw"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/20"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play
                  size={26}
                  className="ml-0.5 text-primary"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2">
        <p className="text-caption text-text-muted">{date}</p>
        <p className="text-body-sm text-text-primary leading-relaxed break-words">
          {title}
        </p>
      </div>
    </div>
  );
}
