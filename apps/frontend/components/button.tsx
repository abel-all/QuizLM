import React from 'react'

interface props {
    title: string;
}

const Button = ({title}: props) => {
  return (
    <button className="cursor-pointer transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300  hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        {title}
    </button>
  )
}

export default Button