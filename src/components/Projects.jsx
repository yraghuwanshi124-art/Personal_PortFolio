
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../assets/assets/assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="project"
      className="relative isolate overflow-hidden bg-[#080c0a] py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/[0.07] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-400/[0.05] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.06] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
              What I've Built
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            My{' '}
            <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-green-300 to-emerald-600" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of projects where I turn ideas into interactive,
            responsive, and practical web experiences.
          </p>
        </motion.div>

        {/* Projects grid */}
        {projects?.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.12,
                },
              },
            }}
            className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {projects.map((data, index) => (
              <motion.div
                key={data.id ?? data.title ?? index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: shouldReduceMotion ? 0.2 : 0.6,
                      ease: 'easeOut',
                    },
                  },
                }}
                className="min-w-0"
              >
<div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-[1px] transition-colors duration-300 hover:border-green-400/30">
  <div className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-2xl">
    <ProjectCard {...data} />
  </div>
</div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="py-12 text-center text-gray-400">
            Projects will appear here soon.
          </p>
        )}

        {/* Bottom note */}
        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-14 text-center text-sm text-gray-500"
        >
          Always learning. Always building.{' '}
          <span className="text-green-400">One project at a time.</span>
        </motion.p>
      </div>
    </section>
  )
}

export default Projects
