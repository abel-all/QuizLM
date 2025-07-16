"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

const HeroSection = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const stickyY = useTransform(scrollYProgress, [0.8, 1], [0, -100]);
  const stickyOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div
      className="h-[300vh] w-full relative"
      ref={ref}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{
            y: stickyY,
            opacity: stickyOpacity,
          }}
          className="h-full w-full"
        >
          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
            title="Master Any Subject"
            description="Create insightful, AI-powered quizzes from the videos, articles, and documents you trust."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection
