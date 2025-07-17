import Image from 'next/image'
import React from 'react'
import privacy from '@/public/privacy.svg'

const Privacy = () => {
  return (
    <div className='h-[35rem] bg-[#f8f8fa] dark:bg-[#101010] px-6'>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center gap-4 my-20 md:my-24'>
                <div className='text-center font-sans text-xl md:text-3xl max-w-3xl'>
                We value your privacy and do not use your personal data to train QuizLM.
                </div>
                <div className='text-center font-sans text-sm md:text-xl opacity-60 max-w-4xl'>
                    QuizLM does not use your personal data, including your source uploads, queries, and the responses from the model for training.
                </div>
            </div>
            <Image width={100} src={privacy} alt='quizlm privacy'/>
        </div>
    </div>
  )
}

export default Privacy