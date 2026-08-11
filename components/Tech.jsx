import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "@/utils/motion";

const tech = [
  technologies.languages,
  technologies.frontend,
  technologies.backendData,
  technologies.tools,
];

const techVariants = ["Languages", "Frontend", "Backend & Data", "Tools"];

function Tech() {
  const skillGroups = tech.map((technology, index) => (
    <div
      className="glass-card glass-card-hover w-full h-fit rounded-lg p-4"
      key={techVariants[index]}
    >
      <h3 className="mb-4 dark:text-ctnPrimaryDark text-ctnPrimaryLight font-semibold">
        {techVariants[index]}
      </h3>
      <motion.div
        className="w-full flex flex-row flex-wrap gap-3"
        variants={fadeIn("up", "spring", index * 0.1, 0.65)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {technology.map((tech) => (
          <Link
            href={tech.link}
            key={tech.name}
            target="_blank"
            rel="noreferrer"
            className="glass-chip group flex items-center gap-2 rounded-md px-3 py-2 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="w-[28px] h-[28px] relative shrink-0">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              />
            </div>
            <span className="text-sm dark:text-ctnPrimaryDark text-ctnPrimaryLight">
              {tech.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </div>
  ));

  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I have learnt so far</p>
        <h2 className={"sectionHeadText"}>Skills.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-5xl w-full h-full leading-[30px] grid md:grid-cols-2 gap-4 mx-auto"
      >
        {skillGroups}
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");
