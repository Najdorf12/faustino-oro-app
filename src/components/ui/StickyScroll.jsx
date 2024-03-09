import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--neutral-900)",
    "var(--black)",
    "var(--slate-900)",
  ];

  return (
    <>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-screen w-full overflow-x-hidden overflow-y-auto flex justify-center relative rounded-md py-10 px-2 lg:gap-20"
        ref={ref}
      >
        <section className="absolute w-full inset-2 py-4">
          <Link to={"/"}>
          <i className="-mt-3 bx bx-left-arrow-circle text-[#f7ae27] font-light text-5xl pl-4 hover:cursor-pointer hover:scale-110 hover:text-slate-600 duration-500 md:text-6xl md:pl-12 md:mt-2"></i>
          </Link>
          <h1 className="px-1 pb-4 mt-6 mr-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-slate-600 font-semibold text-4xl self-center leading-6 text-center md:text-6xl lg:mt-8 lg:mb-4">
            Proximos torneos
          </h1>
        </section>
        
          <div className="max-w-2xl mt-14 px-3 lg:mt-24">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className="my-6 md:my-28 h-64 flex flex-col justify-end pb-8"
              >
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-200 max-w-sm mt-10 font-semibold"
                >
                  {item.description}
                </motion.p>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm font-semibold mt-4"
                >
                  {item.date}
                </motion.p>
              </div>
            ))}
            <div className="h-60" />
          </div>
        
        <motion.div
          className={cn(
            "hidden md:block h-52 w-80 rounded-lg object-cover sticky top-10 overflow-hidden my-48 lg:mt-64",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </motion.div>
    </>
  );
};

export default StickyScroll;
