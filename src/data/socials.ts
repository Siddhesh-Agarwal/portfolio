import { SiGithub, SiGmail, SiHashnode, SiLinkedin } from "react-icons/si";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: SiGithub,
    link: "https://www.github.com/siddhesh-agarwal/",
  },
  {
    name: "Gmail",
    icon: SiGmail,
    link: "mailto:contact@siddhesh.cc",
  },
  {
    name: "Hashnode",
    icon: SiHashnode,
    link: "https://blog.siddhesh.cc/",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/siddhesh-agarwal/",
  },
];
