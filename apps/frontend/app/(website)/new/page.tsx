import { redirect } from 'next/navigation'

const NewQuizPage = () => {
  return (
    redirect("/dashboard")
  )
}

export default NewQuizPage