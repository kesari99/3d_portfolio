import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "../public/assets/icons/github.svg";
import RocketLogo from "../public/assets/icons/rocket.svg";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
  featured,
}) {
  const CHAR_LIMIT = featured ? 420 : 260;
  const hasSource = Boolean(source_code_link);
  const hasDemo = Boolean(deployed_link && deployed_link !== "#");

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={featured ? "md:w-[760px] w-full" : ""}
    >
      <Tilt
        tiltMaxAngleX="10"
        tiltMaxAngleY="10"
        className={`glass-card glass-card-hover p-5 rounded-lg sm:w-[370px] w-full h-full min-h-[560px] ${
          featured ? "md:w-full" : ""
        }`}
      >
        <div className={`relative w-full ${featured ? "md:h-[280px]" : "h-[230px]"}`}>
          <div className="glass-chip w-full h-full object-cover rounded-lg relative overflow-hidden">
            <Image
              src={image}
              alt="project_image"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              className="object-contain"
            />
          </div>

          {featured && (
            <span className="absolute left-3 top-3 rounded-md border border-primary/30 bg-bgPrimaryDark/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              Featured
            </span>
          )}

          {hasDemo && (
            <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
              <button
                onClick={() => window.open(deployed_link, "_blank")}
              className="glass-chip w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110 hover:border-primary/40"
                aria-label={`Open ${name} live demo`}
              >
                <RocketLogo className="w-1/2 h-1/2 mr-[2px] z-10" />
              </button>
            </div>
          )}

          {hasSource && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="glass-chip w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110 hover:border-primary/40"
                aria-label={`Open ${name} source code`}
              >
                <GithubLogo className="w-2/3 h-2/3 z-10" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-5 flex h-[calc(100%-250px)] flex-col">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px] leading-6">
            {truncateText(description, CHAR_LIMIT)}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[13px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            {hasDemo && (
              <button
                onClick={() => window.open(deployed_link, "_blank")}
                className="glass-chip flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold dark:text-ctnPrimaryDark text-ctnPrimaryLight transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
              >
                <RocketLogo className="h-4 w-4" />
                Live
              </button>
            )}
            {hasSource && (
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="glass-chip flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold dark:text-ctnPrimaryDark text-ctnPrimaryLight transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
              >
                <GithubLogo className="h-4 w-4" />
                Code
              </button>
            )}
            {!hasDemo && !hasSource && (
              <span className="glass-chip rounded-md px-3 py-2 text-sm dark:text-ctnSecondaryDark text-ctnSecondaryLight">
                Architecture available on request
              </span>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

function Works() {
  return (
    <section className="xl:my-36 md:mx-36 p-8 " id="projects">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText"}>My work</p>
        <h2 className={"sectionHeadText"}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          These projects showcase my practical skills and experience, each with
          descriptions and links to code repositories and live demos. They
          demonstrate my ability to handle complex challenges, adapt to
          different technologies, and oversee projects from start to finish.
        </motion.p>
      </div>

      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Works;
