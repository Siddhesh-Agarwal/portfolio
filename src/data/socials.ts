import { SiGithub, SiGmail, SiHashnode } from "@icons-pack/react-simple-icons";
import { FileTextIcon } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";
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
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/siddhesh-agarwal/",
  },
  {
    name: "Resume",
    icon: FileTextIcon,
    link: "https://resume.siddhesh.cc",
  },
];
