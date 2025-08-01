"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  title: string
  description: string
  icon: LucideIcon
  skills: string[]
  details: string
  gradient: string
  delay: number
}

export function SkillCard({ title, description, icon: Icon, skills, details, gradient, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white/50 to-gray-50/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm group">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <motion.div
              className={`p-2 rounded-lg bg-gradient-to-r ${gradient} text-white`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.1 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {details}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
