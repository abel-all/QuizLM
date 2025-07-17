import { GraduationCap, Layers2, Lightbulb } from 'lucide-react'
import React from 'react'
import HowToUseCard from './HowToUseCard'

const HowToUseCardsContent = [
    {
        Icon: GraduationCap,
        title: "Supercharge Your Studying",
        description: "Upload lecture notes, textbook chapters, and research articles. QuizLM instantly generates practice tests and targeted questions to reinforce your understanding. Move beyond passive reading and actively master your material.",
        word: "Learn faster and test smarter.",
    },
    {
        Icon: Layers2,
        title: "Automate Quiz Creation",
        description: "Upload your source content and let QuizLM design a comprehensive quiz for you. Our AI will craft relevant questions and answers pulled directly from your materials, creating a ready-to-use assessment in seconds.",
        word: "Test understanding effortlessly.",
    },
    {
        Icon: Lightbulb,
        title: "Uncover Deeper Insights",
        description: "Upload complex articles, training materials, and research documents. By generating quizzes, QuizLM helps you identify the most critical information, revealing key themes and knowledge gaps you might have missed.",
        word: "See your content in a whole new light.",
    },
]

const HowToUse = () => {
  return (
    <div className='flex flex-col gap-14 items-center container mx-auto px-6'>
        <div className='text-center font-sans text-xl md:text-3xl'>
            Your Intelligent Quiz Creation Assistant
        </div>
        <div className='w-full flex max-md:flex-col gap-6'>
            {HowToUseCardsContent.map(({Icon, title, description, word}, index) => (
                <HowToUseCard key={index} Icon={Icon} title={title} description={description} word={word}/>
            ))}
        </div>
    </div>
  )
}

export default HowToUse