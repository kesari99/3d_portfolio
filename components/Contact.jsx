import { motion } from "framer-motion";
import Link from "next/link";

import { slideIn } from "../utils/motion";
import { socials } from "../constants";
import EmailIcon from "../public/assets/icons/email.svg";

function Contact() {
  const email = "kesaridevaraya@gmail.com";

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="glass-panel xl:my-36 md:w-2/5 w-full xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-xl"
      id="contact"
    >
      <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>
      <p className="mt-3 max-w-xl text-ctnSecondaryDark text-[16px] leading-7">
        Let&apos;s talk about roles, freelance builds, AI automation, or full-stack
        product work. The fastest way to reach me is email or LinkedIn.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={`mailto:${email}?subject=Portfolio%20inquiry`}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-tertiary transition-all duration-200 hover:-translate-y-1 hover:bg-tertiary"
        >
          <EmailIcon className="h-5 w-5" />
          {email}
        </Link>
        {socials.map((social) => (
          <Link
            href={social.link}
            target="_blank"
            rel="noreferrer"
            key={social.id}
            className="glass-chip flex h-11 w-11 items-center justify-center rounded-lg p-2 text-ctnPrimaryDark transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
            aria-label={`Open ${social.id}`}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Contact;
