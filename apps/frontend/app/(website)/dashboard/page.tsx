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
import { Clipboard, Link2, NotepadText, PanelsTopLeft, Upload, Youtube } from "lucide-react";

const Dashboard = () => {

  const handleFileUpload = () => {
    window.alert("file uploaded")
  }
  const hnadleWebsiteClick = () => {
    window.alert("hnadleWebsiteClick")
  }
  const hnadleYoutubeClick = () => {
    window.alert("hnadleYoutubeClick")
  }
  const hnadleTextClick = () => {
    window.alert("hnadleTextClick")
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
            <DialogDescription className="mt-3 max-md:hidden">
              Resources let QuizLM craft quizzes tailored to the content you care about most.<br/>
              (Examples: YouTube tutorials, PDF handouts, Word documents, copied text snippets, slides, research papers, and more.)
            </DialogDescription>
            <DialogDescription className="text-lg mt-3 md:hidden">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="h-36 rounded-2xl border-1 border-[#b2b2b2] dark:border-[#474747] p-4">
                <div className="flex gap-2 items-center mb-3">
                  <Link2 /> 
                  <div className="font-sans">
                    Link
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <div onClick={hnadleWebsiteClick} className="cursor-pointer flex items-center gap-2 bg-foreground/60 rounded-lg px-3 py-1">
                    <PanelsTopLeft className="text-background" />
                    <div className="text-background text-sm">Website</div>
                  </div>
                  <div onClick={hnadleYoutubeClick} className="cursor-pointer flex items-center gap-2 bg-foreground/60 rounded-lg px-3 py-1">
                    <Youtube className="text-background" />
                    <div className="text-background text-sm">Youtube</div>
                  </div>
                </div>
              </div>
              <div className="h-36 rounded-2xl border-1 border-[#b2b2b2] dark:border-[#474747] p-4">
                <div className="flex gap-2 items-center mb-3">
                  <Clipboard />
                   <div className="font-sans">
                    Paste text
                   </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <div onClick={hnadleTextClick} className="cursor-pointer flex items-center gap-2 bg-foreground/60 rounded-lg px-3 py-1">
                    <NotepadText className="text-background" />
                    <div className="text-background text-sm">Copied text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
