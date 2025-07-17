import { LucideIcon } from 'lucide-react';
import React from 'react';

interface Props {
    Icon: LucideIcon;
    title: string;
    description: string;
    word: string;
}

const HowToUseCard = ({ Icon, title, description, word }: Props) => {
    return (
        <div className='flex flex-col gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 font-sans min-h-[250px] sm:min-h-[300px] md:min-h-[400px]'>
            <div className="flex-shrink-0">
                <Icon color="#7082FF" size={40} className="sm:w-12 sm:h-12 md:w-14 md:h-14" />
            </div>
            <div className="flex-1 flex flex-col gap-2 sm:gap-3">
                <h3 className="text-base sm:text-lg md:text-xl font-medium leading-tight">
                    {title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-70 leading-relaxed">
                    {description}
                </p>
                <p className="text-sm sm:text-sm md:text-base opacity-60 italic mt-auto">
                    {word}
                </p>
            </div>
        </div>
    );
};

export default HowToUseCard;