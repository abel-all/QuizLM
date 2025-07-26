"use client";

import { DialogTrigger } from "@/components/ui/dialog";
import { EllipsisVertical, Plus } from "lucide-react";
import React from "react";
import Image from "next/image";

const cardContent = [
  {
    Icon: '/yout.svg',
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
    date: "21 Jul 2025",
    opacityBg: "bg-[#F73140]/60 dark:bg-[#F73140]/30",
    hoverBg:   "hover:bg-[#F73140]/20 dark:hover:bg-[#F73140]/15",
  },
  {
    Icon: '/doc.svg',
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
    date: "21 Jul 2025",
    opacityBg: "bg-[#006FE8]/60 dark:bg-[#006FE8]/30",
    hoverBg:   "hover:bg-[#006FE8]/20 dark:hover:bg-[#006FE8]/15",
  },
  {
    Icon: '/text.svg',
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
    date: "21 Jul 2025",
    opacityBg: "bg-[#5C9CEE]/60 dark:bg-[#5C9CEE]/30",
    hoverBg:   "hover:bg-[#5C9CEE]/20 dark:hover:bg-[#5C9CEE]/15",
  },
  {
    Icon: '/pdf.svg',
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
    date: "21 Jul 2025",
    opacityBg: "bg-[#DE3B38]/60 dark:bg-[#DE3B38]/30",
    hoverBg:   "hover:bg-[#DE3B38]/20 dark:hover:bg-[#DE3B38]/15",
  },
];

const QuizzesSection = () => {
  const handleIconClick = () => {
    window.alert("clicked");
  };

  const handleCardClick = () => {
    window.alert("card clicked");
  };

  return (
    <div className="mt-10">
      <div className="font-sans text-xl md:text-2xl mb-4">Recent quizzes</div>
      <div className="card-container grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:gap-6 md:gap-8 gap-6">
        <DialogTrigger asChild>
            <div className="create-new-card group cursor-pointer h-56 border-2 border-muted rounded-2xl flex flex-col gap-3 justify-center items-center">
            <div className="group-hover:text-background group-hover:bg-foreground transition-all duration-300 rounded-full bg-muted h-16 w-16 flex justify-center items-center">
                <Plus size={26} />
            </div>
            <div className="font-sans text-xl md:text-2xl">Create new quizz</div>
            </div>
        </DialogTrigger>
        {cardContent.map(({ Icon, title, date, opacityBg, hoverBg }, index) => (
          <div
            key={index}
            onClick={handleCardClick}
            className={`card ${opacityBg} transition-all duration-300 cursor-pointer h-56 border-2 border-muted rounded-2xl flex flex-col justify-between p-6`}
          >
            <div className="icon-and-bulk flex justify-between">
              <Image width={40} height={40} src={Icon} alt='icon' />
              <div className={`p-3 ${hoverBg} rounded-full cursor-pointer`}>
                <EllipsisVertical
                  size={20}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIconClick();
                  }}
                />
              </div>
            </div>
            <div className="title-and-date flex flex-col gap-2">
              <div
                className="font-sans text-xl md:text-2xl line-clamp-2"
                title={title}
              >
                {title}
              </div>
              <div className="text-xs md:text-sm opacity-70">{date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizzesSection;
