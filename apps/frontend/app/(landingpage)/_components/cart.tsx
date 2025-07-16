import React, { useRef, useEffect } from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface props {
  title: string;
  description: string;
  video: string;
  Icon: LucideIcon;
}

const Cart = ({ title, description, video, Icon }: props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isImage = video.includes(".png");

  useEffect(() => {
    if (isImage || !videoRef.current) return;

    const video = videoRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) video.play().catch(console.error);
          else video.pause();
        });
      },
      { threshold: 1.0 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full flex md:flex-row flex-col gap-10">
      <div className="flex flex-col gap-2 w-full md:max-w-2/5">
        <Icon size={35} />
        <div className="font-sans text-lg md:text-xl">{title}</div>
        <div className="mt-3 font-sans text-sm md:text-lg opacity-60">
          {description}
        </div>
      </div>
      <div className={`w-full md:max-w-3/5`}>
        {isImage ? (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
            <Image
              src={video}
              alt="QuizLM"
              fill
              sizes="(max-width: 768px) 100vw, 660px"
              className="object-cover"
            />
          </div>
        ) : (
          <video 
            ref={videoRef}
            className="rounded-3xl w-fit" 
            src={video} 
            loop
            muted
            playsInline
          />
        )}
      </div>
    </div>
  );
};

export default Cart;