import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
function About() {
  const stack = [
    "Frontend: React, Next.js, TypeScript, Redux",
    "Backend: Node.js, Express, Python, Java",
    "Data: PostgreSQL, MongoDB, Firebase",
    "Exploring: distributed systems, AI agent architectures",
  ];

  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div className="max-w-4xl space-y-5">
          <p className="text-[20px] font-semibold dark:text-ctnPrimaryDark text-white leading-8">
            Hi, I&apos;m Kesari — a Full Stack Developer building AI-driven
            systems that solve real business problems.
          </p>
          <p>
            I&apos;m working at an early-stage startup, Repaio, where I build
            Voice AI and WhatsApp automation platforms for debt collection at
            scale — integrating telephony, STT/TTS, and LLMs into multilingual,
            production-grade systems.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {stack.map((item) => (
              <div
                key={item}
                className="glass-card glass-card-hover rounded-lg px-4 py-3 text-[14px] leading-6"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="glass-chip flex h-10 w-10 items-center justify-center rounded-lg p-2 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="document/full_stack_resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
