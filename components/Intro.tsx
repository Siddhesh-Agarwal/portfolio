import React from 'react'; // 6.9 k (gzipped: 2.7k)
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa'; // 5.3 k (gzipped: 2.5k)
import {
    SiAmazonaws,
    SiC,
    SiCplusplus,
    SiDjango,
    SiDocker,
    SiFastapi,
    SiGit,
    SiGnubash,
    SiHaskell,
    SiLaravel,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNeovim,
    SiPhp,
    SiPython,
    SiScikitlearn,
    SiScipy,
    SiTailwindcss,
    SiTensorflow,
    SiTypescript,
} from 'react-icons/si'; // 36.9 k (gzipped: 15.6k)
import Typewriter from 'typewriter-effect'; // 30.3 k (gzipped: 9.5k)
import { motion } from 'framer-motion'; // 97.7 k (gzipped: 32k)
import { SocialLink } from '@/types/SocialLink';
import { ToolLink } from '@/types/ToolLink';


function SocialLinks() {
    const socialLinks: SocialLink[] = [
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="inline-block" />,
            link: "https://www.linkedin.com/in/siddhesh-agarwal"
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="inline-block" />,
            link: "https://www.twitter.com/siddhesh0205"
        },
        {
            name: "Email",
            icon: <FaEnvelope className="inline-block" />,
            link: "mailto:siddhesh.agarwal@gmail.com",
        },
    ]

    // Use Tailwind for styling purposes
    return (
        <div className="row-auto">
            <div className="col-span-12 flex flex-wrap justify-center">
                {
                    socialLinks.map((link, index) => {
                        return (
                            <motion.a
                                href={link.link}
                                rel="noreferrer noopener" target="_blank"
                                className="m-1 bg-blue-500 rounded px-2 py-1 text-white text-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                key={index}
                            >
                                {link.icon}
                                <p className="inline-block mx-2">
                                    {link.name}
                                </p>
                            </motion.a>
                        )
                    })
                }
            </div>
        </div>
    )
}


function Tools() {
    const links: ToolLink[] = [
        {
            name: "Python",
            icon: <SiPython />,
        },
        {
            name: "FastAPI",
            icon: <SiFastapi />,
        },
        {
            name: "Django",
            icon: <SiDjango />,
        },
        {
            name: "SciPy",
            icon: <SiScipy />,
        },
        {
            name: "Scikit Learn",
            icon: <SiScikitlearn />,
        },
        {
            name: "TensorFlow",
            icon: <SiTensorflow />,
        },
        {
            name: "C",
            icon: <SiC />,
        },
        {
            name: "C++",
            icon: <SiCplusplus />,
        },
        {
            name: "MySQL",
            icon: <SiMysql />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />,
        },
        {
            name: "PHP",
            icon: <SiPhp />,
        },
        {
            name: "Laravel",
            icon: <SiLaravel />,
        },
        {
            name: "Haskell",
            icon: <SiHaskell />,
        },
        {
            name: "Git",
            icon: <SiGit />,
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
        },
        {
            name: "Linux",
            icon: <SiLinux />,
        },
        {
            name: "GNU Bash",
            icon: <SiGnubash />,
        },
        {
            name: "Docker",
            icon: <SiDocker />,
        },
        {
            name: "AWS",
            icon: <SiAmazonaws />,
        },
        {
            name: "Neovim",
            icon: <SiNeovim />,
        }
    ]

    // Create a list of icons with names that appear on hover
    return (
        <div className="inline-flex justify-center w-full flex-wrap px-4">
            {
                links.map(
                    (link, index) => {
                        return (
                            <motion.div
                                className="m-2 text-blue-500 font-semibold inline-block lg:text-4xl text-3xl w-fit cursor-pointer"
                                whileHover={{ scale: 1.25 }}
                                whileTap={{ scale: 0.8 }}
                                key={index}
                                title={link.name}
                            >
                                {link.icon}
                            </motion.div>
                        )
                    }
                )
            }
        </div>
    )
}


function Roles() {
    const delay = 1000;
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: delay / 1000 }}
            transition={{ delay: delay / 1000 }}
            className="text-4xl lg:text-6xl flex text-center justify-center"
        >
            <Typewriter
                onInit={
                    (typewriter) => {
                        typewriter
                            .pauseFor(delay)
                            .typeString("<span class='text-blue-500 inline-flex'>Full Stack Developer</span>")
                            .pauseFor(delay)
                            .deleteChars(20)
                            .pauseFor(delay / 4)
                            .typeString("<span class='text-blue-500 inline-flex'>ML Engineer</span>")
                            .pauseFor(delay)
                            .deleteChars(11)
                            .pauseFor(delay / 4)
                            .typeString("<span class='text-blue-500 inline-flex'>DevOps Developer</span>")
                            .pauseFor(delay)
                            .deleteChars(16)
                            .pauseFor(delay / 4)
                            .start();
                    }
                }
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 20,
                }}
            />
        </motion.span>
    )
}


export const Intro: React.FC = () => {
    return (
        <div className="container py-4 dark:text-white">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl">Hello, I'm <span className="text-blue-500 font-bolder">Siddhesh</span></h1>
                    <h2 className="text-3xl md:text-6xl"><Roles /></h2>
                </div>
            </div>
            {/* List things proficient in  */}
            <div className="row my-10">
                <div className="col-12 text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl w-full">
                        <p className="mb-3">
                            I'm proficient in:
                        </p>
                        <Tools />
                    </h3>
                </div>
            </div>
            {/* Ways to contact me */}
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl mb-3">You can contact me on:</h3>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}