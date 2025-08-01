"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  achievements: string[]
  skills: string[]
  delay: number
}

export function ExperienceCard({ title, company, location, period, achievements, skills, delay }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-gradient-to-b border-l-blue-500 bg-gradient-to-br from-white/80 to-blue-50/30 dark:from-gray-900/80 dark:to-blue-950/20 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CardTitle className="bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
                  {title}
                </CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CardDescription className="flex items-center gap-2 mt-1">
                  <span className="font-medium">{company}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {location}
                  </span>
                </CardDescription>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center gap-1 text-sm text-muted-foreground mt-2 sm:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Calendar className="h-3 w-3" />
              {period}
            </motion.div>
          </div>
        </CardHeader>
        <CardContent>
          <motion.ul
            className="space-y-2 text-sm text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.5 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="hover:text-foreground transition-colors duration-200"
              >
                • {achievement}
              </motion.li>
            ))}
          </motion.ul>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.6 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
