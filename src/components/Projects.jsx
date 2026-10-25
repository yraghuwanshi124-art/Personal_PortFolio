import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../assets/assets/assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.65,
        ease: 'easeOut',
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="project"
      className="relative isolate scroll-mt-20 overflow-hidden py-24 transition-colors duration-300 sm:py-28 lg:py-32"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: 'var(--accent-soft)' }}
        />

        <div
          className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-[110px]"
          style={{ backgroundColor: 'var(--accent-soft)' }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{
              borderColor: 'var(--accent-border)',
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--accent)',
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            What I've Built
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            My{' '}
            <span style={{ color: 'var(--accent)' }}>
              Projects.
            </span>
          </h2>

          <div
            className="mx-auto mt-6 h-1 w-16 rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
          />

          <p
            className="mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base"
            style={{ color: 'var(--text-secondary)' }}
          >
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
                  staggerChildren: shouldReduceMotion ? 0 : 0.1,
                },
              },
            }}
            className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8"
          >
            {projects.map((data, index) => (
              <motion.div
                key={data.id ?? data.title ?? index}
                variants={cardVariants}
                className="min-w-0"
              >
                <div
                  className="group h-full rounded-2xl border p-[1px] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div
                    className="flex h-full min-h-[460px] flex-col overflow-hidden rounded-2xl transition-colors duration-300"
                    style={{ backgroundColor: 'var(--bg-card)' }}
                  >
                    <ProjectCard {...data} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p
            className="py-12 text-center"
            style={{ color: 'var(--text-secondary)' }}
          >
            Projects will appear here soon.
          </p>
        )}

        {/* Bottom note */}
        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-14 text-center text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          Always learning. Always building.{' '}
          <span style={{ color: 'var(--accent)' }}>
            One project at a time.
          </span>
        </motion.p>
      </div>
    </section>
  )
}

export default Projects