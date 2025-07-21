import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

const CreateNewSection = () => {
  return (
    <div className='w-full flex justify-end'>
        <Button className="rounded-full">
            <Plus /> Create new
        </Button>
    </div>
  )
}

export default CreateNewSection