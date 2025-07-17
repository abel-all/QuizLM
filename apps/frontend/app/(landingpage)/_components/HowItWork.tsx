'use client'
import React from 'react'
import Cart from './Cart'
import { Cannabis, Gauge, Hexagon, User,  } from 'lucide-react'


const cardContent = [
    {
        title: "Upload your sources",
        description: "Upload your PDFs, articles, and YouTube videos, and QuizLM will do the rest. Our AI will analyze your content to generate engaging quizzes that make learning interactive and fun.",
        video: "/vid1.mp4",
        Icon: User,
    },
    {
        title: "Instant Quizzes",
        description: "instantly transforming your documents, videos, and articles into interactive quizzes designed to test knowledge and enhance learning.",
        video: "/vid2.png",
        Icon: Gauge,
    },
    {
        title: "Trust in Every Question",
        description: "QuizLM provides a clear citation for every question it generates, pointing you to the exact passage, slide, or timestamp in your original source.",
        video: "/vid3.mp4",
        Icon: Cannabis,
    },
    {
        title: "Engage and Learn on the Go",
        description: "QuizLM makes it easy to test your understanding on the go, directly from your sources.",
        video: "/vid4.mp4",
        Icon: Hexagon,
    },
]

const HowItWork = () => {
  return (
    <div className='flex flex-col gap-14 items-center px-6'>
        <div className='text-center font-sans text-xl md:text-3xl'>
            Your Intelligent Quiz Creation Assistant
        </div>
        <div className='w-full max-w-6xl flex flex-col gap-20'>
            {cardContent.map(({title, description, video, Icon}, index) => (
                <Cart key={index} title={title} description={description} video={video} Icon={Icon} />
            ))}
        </div>
    </div>
  )
}

export default HowItWork