"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Linkedin,
  Mail,
  MapPin,
  Code,
  FileText,
  Award,
  Github,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-background/90 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 relative">
            {/* Center Navigation */}
            <div className="flex items-center justify-center">
              <nav className="flex items-center space-x-8">
                {[
                  "About",
                  "Skills",
                  "Experience",
                  "Projects",
                  "Education",
                  "Contact",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-sm font-medium transition-colors hover:text-foreground/80 relative group cursor-pointer px-3 py-2"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="absolute right-0 flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20"
      >
        <motion.div
          className="absolute inset-0 -z-10 opacity-30"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-950/10 dark:via-purple-950/5 dark:to-pink-950/10" />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-8 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                animate="animate"
              >
                <motion.span
                  className="inline-block text-sm font-medium text-muted-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  variants={fadeInUp}
                >
                  Computer Application Student & Developer
                </motion.span>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                  variants={fadeInUp}
                >
                  Furqan Mohammad
                </motion.h1>

                <motion.p
                  className="text-xl text-muted-foreground font-medium"
                  variants={fadeInUp}
                >
                  BCA Student with Honors in Data Science
                </motion.p>

                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                  variants={fadeInUp}
                >
                  Results-oriented Computer Application student with experience
                  in programming, video editing, and graphic design. Proficient
                  in HTML, CSS, JavaScript, Python, and Stable Diffusion AI,
                  with expertise in content creation and team leadership.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("projects")}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 bg-transparent px-8"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {[
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/furqan-mohammad/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/Dokja-pvt",
                    label: "GitHub",
                  },
                  {
                    icon: Mail,
                    href: "mailto:mabbpl1@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                    >
                      <Link
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{label}</span>
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={isHeroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Image
                    src="/Furqan.jpg?height=400&width=400"
                    alt="Furqan Mohammad - Professional Headshot"
                    width={400}
                    height={400}
                    className="relative rounded-full object-cover border-4 border-background shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                Passionate about technology, design, and creating innovative
                digital solutions.
              </motion.p>
            </div>

            <div className="grid gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-center gap-3 text-xl">
                      <FileText className="h-6 w-6 text-blue-600" />
                      Profile Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg text-center">
                      Results-oriented Computer Application student with
                      experience in programming, video editing, and graphic
                      design. Proficient in HTML, CSS, JavaScript, Python, and
                      Stable Diffusion AI, with expertise in content creation
                      and team leadership. High enthusiasm to leverage emerging
                      technologies and creative skills to drive innovative
                      digital solutions and community engagement.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.4,
                }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-center">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
                      <motion.div
                        className="flex items-center justify-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span>Bhopal, Madhya Pradesh</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span>mabbpl1@gmail.com</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <span className="text-lg">📞</span>
                        <span>8819926480</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Linkedin className="h-5 w-5 text-muted-foreground" />
                        <span>linkedin.com/in/furqan-mohammad/</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Skills & Expertise
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                Technical skills and creative abilities that drive innovation.
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Programming",
                  icon: Code,
                  skills: ["C", "C++", "HTML", "CSS", "JavaScript", "Python"],
                  description:
                    "Proficient in multiple programming languages with focus on web development and data analysis.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Creative Skills",
                  icon: Award,
                  skills: [
                    "Video Editing",
                    "Graphic Design",
                    "Stable Diffusion AI",
                    "Content Creation",
                  ],
                  description:
                    "Creative expertise in visual design, video production, and AI-powered content generation.",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Soft Skills",
                  icon: FileText,
                  skills: [
                    "Team Leadership",
                    "Project Management",
                    "Community Engagement",
                    "Problem Solving",
                  ],
                  description:
                    "Strong leadership and management skills with experience in team coordination and project delivery.",
                  gradient: "from-green-500 to-teal-500",
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white/50 to-gray-50/30 dark:from-gray-900/50 dark:to-gray-800/30 group text-center">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex flex-col items-center gap-3 text-xl">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-r ${skill.gradient} text-white`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <skill.icon className="h-6 w-6" />
                        </motion.div>
                        {skill.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {skill.skills.map((item, skillIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: index * 0.2 + skillIndex * 0.05,
                              duration: 0.3,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-sm hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300 px-3 py-1"
                            >
                              {item}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-center">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Professional Experience
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                Leadership roles and professional development in technology and
                design.
              </motion.p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Design Team Lead",
                  company: "LakeCity Hack 2025",
                  location: "Bhopal, MP",
                  period: "2025",
                  achievements: [
                    "Spearheaded the design of visual and promotional assets, including brochures, posters, and social media graphics, for a university hackathon",
                    "Supervised a team of designers, ensuring timely delivery of multi-channel campaign materials",
                    "Mentored junior designers to enhance engagement and maintain brand consistency",
                  ],
                },
                {
                  title: "Design Head",
                  company: "Placement & Industry Interaction Club",
                  location: "Jagran Lakecity University",
                  period: "2024-2025",
                  achievements: [
                    "Lead a creative team in designing brochures, social media posts, and event materials for workshops, guest lectures, and placement drives",
                    "Coordinated with multiple departments to ensure consistent visual branding across all materials",
                    "Improved event visibility and engagement through strategic design implementations",
                  ],
                },
                {
                  title: "Web Developer",
                  company: "Freelance",
                  location: "Remote",
                  period: "2024 - Present",
                  achievements: [
                    "Created websites using HTML, CSS, and JavaScript, focusing on intuitive designs and user-friendly interfaces",
                    "Developed responsive web applications with modern design principles",
                    "Collaborated with clients to deliver custom web solutions meeting their specific requirements",
                  ],
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 bg-gradient-to-br from-white/80 to-blue-50/30 dark:from-gray-900/80 dark:to-blue-950/20 text-center">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-center">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: index * 0.2 + 0.1,
                              duration: 0.5,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            viewport={{ once: true }}
                          >
                            <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent mb-2">
                              {exp.title}
                            </CardTitle>
                          </motion.div>
                          <motion.div
                            className="flex flex-col items-center gap-2 text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: index * 0.2 + 0.2,
                              duration: 0.5,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            viewport={{ once: true }}
                          >
                            <span className="font-medium">{exp.company}</span>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </motion.div>
                        </div>
                        <motion.div
                          className="flex items-center gap-2 text-muted-foreground"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.2 + 0.3,
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          viewport={{ once: true }}
                        >
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{exp.period}</span>
                        </motion.div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-left max-w-3xl mx-auto">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: index * 0.2 + 0.4 + i * 0.1,
                              duration: 0.5,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            viewport={{ once: true }}
                          >
                            <span className="text-blue-500 mt-1 text-lg">
                              •
                            </span>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                Innovative projects showcasing technical skills and creative
                problem-solving.
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Accident Data Analysis",
                  description:
                    "Comprehensive EDA on road accident dataset using Python for data insights and visualization.",
                  image: "/placeholder.svg?height=200&width=400",
                  technologies: [
                    "Python",
                    "Data Analysis",
                    "EDA",
                    "Visualization",
                  ],
                  details:
                    "Conducted exploratory data analysis on road accident dataset using Python, implementing statistical analysis and data visualization techniques to identify patterns and insights.",
                },
                {
                  title: "Financial Tracker Project",
                  description:
                    "Offline web application for expense tracking with interactive visualizations and local storage.",
                  image: "/placeholder.svg?height=200&width=400",
                  technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
                  details:
                    "Developed a comprehensive financial tracking web application with HTML5, CSS3, JavaScript, and Chart.js for expense tracking with localStorage and interactive visualizations.",
                },
                {
                  title: "Visual Branding for LakeCity Hack 2025",
                  description:
                    "Complete branding package including logos, banners, and promotional materials for university hackathon.",
                  image: "/placeholder.svg?height=200&width=400",
                  technologies: [
                    "Graphic Design",
                    "Branding",
                    "Adobe Creative Suite",
                    "Visual Identity",
                  ],
                  details:
                    "Designed comprehensive branding materials for LakeCity Hack 2025, including logos, banners, social media graphics, and promotional materials to enhance event visibility and engagement.",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-gradient-to-b border-l-blue-500 bg-gradient-to-br from-white/80 to-blue-50/30 dark:from-gray-900/80 dark:to-blue-950/20 group overflow-hidden text-center">
                    <div className="relative overflow-hidden"></div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: index * 0.2 + techIndex * 0.05,
                              duration: 0.3,
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="outline"
                              className="text-sm px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-center">
                        {project.details}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Education & Certifications
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                Academic background and professional certifications in
                technology and design.
              </motion.p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10 hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-center gap-3 text-xl">
                      <Award className="h-6 w-6 text-blue-600" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-lg mb-2">
                        Bachelor of Computer Applications (BCA)
                      </h4>
                      <p className="text-muted-foreground mb-1">
                        Honors in Data Science • CGPA: 7.7
                      </p>
                      <p className="text-muted-foreground mb-1">
                        Jagran Lakecity University, Bhopal
                      </p>
                      <p className="text-muted-foreground mb-2">
                        July 2022 - July 2025
                      </p>
                      <p className="text-muted-foreground">
                        Relevant Coursework: Data Structures and Algorithms,
                        Object Oriented Programming
                      </p>
                    </motion.div>
                    <Separator />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-lg mb-2">
                        Secondary Education
                      </h4>
                      <p className="text-muted-foreground mb-1">
                        St. Sec. Co-Ed. School, Bhopal
                      </p>
                      <p className="text-muted-foreground">
                        Class 12th - 67% • Class 10th - 67%
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10 hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-center gap-3 text-xl">
                      <Award className="h-6 w-6 text-purple-600" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-w-3xl mx-auto">
                      {[
                        "What is Data Science? – IBM",
                        "Fundamentals of Graphic Design – California Institute of the Arts",
                        "Course on Essentials – Google",
                        "Basics of Cyber Networking – LearnQuest",
                        "Foundations of User Experience (UX) Design – Google",
                        "Google Photos Plugins and Prototypes in Figma – Google",
                      ].map((cert, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.3 + index * 0.1,
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <div className="flex-shrink-0">
                            <Award className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="leading-relaxed text-left flex-1">
                            {cert}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.4,
                }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gradient-to-br from-green-50/50 to-teal-50/30 dark:from-green-950/20 dark:to-teal-950/10 hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-center gap-3 text-xl">
                      <Award className="h-6 w-6 text-green-600" />
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-left max-w-3xl mx-auto">
                      {[
                        "Grew a social media account to over 20,000 followers through consistent content creation and community engagement",
                        "Successfully led the design team for LakeCity Hack 2025, delivering all promotional materials on time and enhancing event visibility",
                        "Participated in an inter-university Neo-Code Hackathon, showcasing programming and problem-solving skills",
                        "Won an online AI Art Competition organized on Instagram, demonstrating creative and technical abilities",
                      ].map((achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-green-500 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Let's Connect
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                Have a question, idea, or opportunity to discuss? I'm always
                open to meaningful collaborations and creative projects. Feel
                free to get in touch — I'd love to connect.
              </motion.p>
            </div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20">
                <CardContent className="p-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6 text-center lg:text-left">
                      <h3 className="text-xl font-semibold">Get in Touch</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I'm always open to discussing new opportunities,
                        creative projects, and innovative ideas in technology
                        and design.
                      </p>
                      <div className="space-y-4">
                        <motion.div
                          className="flex items-center justify-center lg:justify-start gap-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <span>mabbpl1@gmail.com</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center justify-center lg:justify-start gap-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <span className="text-xl">📞</span>
                          <span>+91 8819926480</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center justify-center lg:justify-start gap-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <span>Bhopal, Madhya Pradesh</span>
                        </motion.div>
                      </div>
                    </div>
                    <div className="space-y-6 text-center lg:text-left">
                      <h3 className="text-xl font-semibold">Connect With Me</h3>
                      <div className="grid gap-4">
                        {[
                          {
                            icon: Linkedin,
                            label: "LinkedIn",
                            href: "https://linkedin.com/in/furqan-mohammad/",
                          },
                          {
                            icon: Github,
                            label: "GitHub",
                            href: "https://github.com/Dokja-pvt",
                          },
                          {
                            icon: Mail,
                            label: "Email",
                            href: "mailto:mabbpl1@gmail.com",
                          },
                        ].map(({ icon: Icon, label, href }, index) => (
                          <motion.div
                            key={label}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.4 + index * 0.1,
                              duration: 0.5,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            viewport={{ once: true }}
                          >
                            <Button
                              variant="outline"
                              className="justify-center lg:justify-start hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 transition-all duration-300 w-full bg-transparent h-12"
                              asChild
                            >
                              <Link
                                href={href}
                                target={
                                  href.startsWith("http") ? "_blank" : undefined
                                }
                                rel={
                                  href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                <Icon className="mr-3 h-5 w-5" />
                                {label}
                              </Link>
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
