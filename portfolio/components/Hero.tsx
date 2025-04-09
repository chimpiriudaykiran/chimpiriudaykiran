// "use client";

// import { motion } from "framer-motion";
// import { portfolioData } from "@/data/portfolioData";

// const Hero: React.FC = () => (
//   <section
//     id="home"
//     className="hero min-h-screen bg-base-200 flex items-center justify-center"
//   >
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="text-center"
//     >
//       <h1 className="text-5xl md:text-6xl font-bold">
//         Hello World, I am{" "}
//         <span className="text-primary">{portfolioData.name}</span>
//       </h1>
//       <p className="text-2xl mt-4">{portfolioData.intro}</p>
//       <div className="mt-6 flex justify-center gap-4">
//         <a
//           href={portfolioData.linkedin}
//           target="_blank"
//           className="btn btn-outline rounded-2xl border-2 border-dashed  px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
//         >
//           LinkedIn
//         </a>
//         {/* <a href="/Resume.pdf" download className="btn btn-primary">
//           Download Resume
//         </a> */}
//         <a href="/Resume.pdf" download className="btn btn-primary rounded-2xl border-2 border-dashed border-black px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
//             Download Resume
//         </a>
//       </div>
//     </motion.div>
//   </section>
// );

// export default Hero;


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
        
      {/* Background Image with Parallax */}
      {/* <motion.div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50" />
      </motion.div> */}

      {/* Foreground Content */}
      <motion.div
        className="relative text-center z-10 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ y: textY }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hello World, I am <span className="text-primary">{portfolioData.name}</span>
        </h1>
        <p className="text-2xl mt-4">{portfolioData.intro}</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href={portfolioData.linkedin} target="_blank" className="btn btn-outline">
            LinkedIn
          </a>
          <a href="/resume.pdf" download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;