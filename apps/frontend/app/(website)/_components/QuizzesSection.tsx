'use client'

import { Apple, EllipsisVertical, Plus } from 'lucide-react'
import React from 'react'

const cardContent = [
    {
        Icon: Apple,
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
        date: "21 Jul 2025",
    },
    {
        Icon: Apple,
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
        date: "21 Jul 2025",
    },
    {
        Icon: Apple,
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
        date: "21 Jul 2025",
    },
    {
        Icon: Apple,
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
        date: "21 Jul 2025",
    },
]

const QuizzesSection = () => {

    const handleIconClick = () => {
        window.alert("clicked")
    }

    const handleCardClick = () => {
        window.alert("card clicked")
    }

  return (
    <div className='mt-10'>
        <div className='font-sans text-xl md:text-2xl mb-4'>
            Recent quizzes
        </div>
        <div className='card-container grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:gap-6 md:gap-8 gap-6'>
            <div className='create-new-card group cursor-pointer h-56 border-2 border-muted rounded-2xl flex flex-col gap-3 justify-center items-center'>
                <div className='group-hover:text-background group-hover:bg-foreground transition-all duration-300 rounded-full bg-muted h-16 w-16 flex justify-center items-center'>
                    <Plus size={26}/>
                </div>
                <div className='font-sans text-xl md:text-2xl'>
                    Create new quizz
                </div>
            </div>
            {cardContent.map(({Icon, title, date}, index) => (
                <div key={index} onClick={handleCardClick} className='card hover:bg-background transition-all duration-300 bg-muted cursor-pointer h-56 border-2 border-muted rounded-2xl flex flex-col justify-between p-6'>
                    <div className='icon-and-bulk flex justify-between'>
                        <Icon size={40} />
                        <div className="p-3 hover:bg-muted rounded-full cursor-pointer">
                            <EllipsisVertical size={20} onClick={(e) => {
                                e.stopPropagation()
                                handleIconClick()
                            }} />
                        </div>
                    </div>
                    <div className='title-and-date flex flex-col gap-2'>
                        <div className='font-sans text-xl md:text-2xl line-clamp-2' title={title}>{title}</div>
                        <div className='text-xs md:text-sm opacity-70'>{date}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default QuizzesSection