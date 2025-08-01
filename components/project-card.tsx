"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  details: string
  githubUrl: string
  liveUrl: string
  delay: number
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  details,
  githubUrl,
  liveUrl,
  delay,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-gray-50/50 dark:from-gray-900/80 dark:to-gray-800/50 backdrop-blur-sm">
        <div className="aspect-video relative overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: delay + 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="secondary" size="icon" asChild className="bg-white/90 hover:bg-white">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="secondary" size="icon" asChild className="bg-white/90 hover:bg-white">
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.span>
          </CardTitle>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardDescription>{description}</CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.3 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {details}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
