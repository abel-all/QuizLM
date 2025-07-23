'use client'

import React from "react";
import CreateNewSection from "../_components/CreateNewSection";
import QuizzesSection from "../_components/QuizzesSection";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import logo from '@/public/logo.svg'
import logo_white from '@/public/logo_white.svg'
import Image from "next/image";
import { Upload } from "lucide-react";

const Dashboard = () => {

  const handleFileUpload = () => {
    window.alert("file uploaded")
  }

  return (
    <div>
      <Dialog>
        <CreateNewSection />
        <QuizzesSection />
        <DialogContent className="bg-muted w-full max-w-3/4">
          <DialogHeader>
            <DialogTitle>
              <Image className='dark:hidden' height={40} src={logo} alt='QuizLM'/>
              <Image className='dark:block hidden' height={40} src={logo_white} alt='QuizLM'/>
              <div className="mt-4">
                Add sources
              </div>
              </DialogTitle>
            <DialogDescription className="mt-3 max:md:hidden">
              Resources let QuizLM craft quizzes tailored to the content you care about most.<br/>
              (Examples: YouTube tutorials, PDF handouts, Word documents, copied text snippets, slides, research papers, and more.)
            </DialogDescription>
            <DialogDescription className="text-lg mt-3 md:block hidden">
              Get started by selecting sources
            </DialogDescription>
          </DialogHeader>
          <div>
            <div className="border-2 border-dashed border-[#b2b2b2] dark:border-[#474747] rounded-2xl py-10 flex flex-col items-center">
              <input id="file" className="sr-only" type="file" onChange={handleFileUpload} />
              <label htmlFor="file">
                <div className="cursor-pointer flex justify-center items-center h-12 w-12 bg-foreground hover:bg-foreground/80 rounded-full">
                  <Upload className="text-background"/>
                </div>
              </label>
              <div className="font-bold max-md:text-sm">Upload sources</div>
              <div className="mt-2 text-foreground/70 font-sans max-md:text-sm">Drag and drop or <label htmlFor="file" className="text-blue-500 cursor-pointer">choose file</label> to upload</div>
              <div className="mt-8 text-foreground/70 font-sans text-sm max-md:text-xs">Supported file types: PDF, .txt, Markdown</div>
            </div>
            <div className="grid grid-cols-1 md:grid-col-2 gap-4">
              <div className="h-16 rounded-2xl border border-[#b2b2b2] dark:border-[#474747]"></div>
              <div className="h-16 rounded-2xl border border-[#b2b2b2] dark:border-[#474747]"></div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
