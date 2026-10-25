import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Contacts = () => {
  const form = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Indore, Madhya Pradesh, India",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "Send me a message using the form",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      value: "70898XXXXX",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yraghuwanshi124-art",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current || sending) return;

    const name = form.current.elements.namedItem("name").value.trim();
    const email = form.current.elements.namedItem("email").value.trim();
    const message = form.current.elements.namedItem("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      setStatus({
        type: "error",
        message: "Please enter a name with at least 2 characters.",
      });
      form.current.elements.namedItem("name").focus();
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      form.current.elements.namedItem("email").focus();
      return;
    }

    if (message.length < 10) {
      setStatus({
        type: "error",
        message: "Your message must contain at least 10 characters.",
      });
      form.current.elements.namedItem("message").focus();
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_pxqppxe",
        "template_ita013e",
        form.current,
        "8il5j4lChl5ZpHCK9"
      );

      form.current.reset();

      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  const inputStyle = {
    backgroundColor: "var(--bg-primary)",
    color: "var(--text-primary)",
    borderColor: "var(--border-color)",
    "--tw-ring-color": "var(--accent-soft)",
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contacts"
      className="relative isolate scroll-mt-20 overflow-hidden px-5 py-24 transition-colors duration-300 sm:px-8 sm:py-28 lg:py-32"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -left-32 top-20 h-80 w-80 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--accent-soft)" }}
        />
        <div
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--accent-soft)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Let's Connect
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Get In{" "}
            <span style={{ color: "var(--accent)" }}>Touch.</span>
          </h2>

          <div
            className="mx-auto mt-6 h-1 w-16 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <p
            className="mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Have an exciting idea, a project, or an opportunity? Let's connect
            and build something meaningful together.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Contact information */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-3xl border p-6 sm:p-8 lg:col-span-2"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border"
              style={{ borderColor: "var(--accent-border)" }}
            />
            <div
              className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full border"
              style={{ borderColor: "var(--accent-border)" }}
            />

            <div className="relative">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Contact Information
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
                Let's talk about your next project.
              </h3>

              <p
                className="mt-4 text-sm leading-7 sm:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                I'm open to discussing projects, creative ideas, internships,
                and opportunities to learn and grow.
              </p>

              <div className="mt-9 space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 12,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.2 : 0.4,
                        delay: shouldReduceMotion ? 0 : index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4"
                    >
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300"
                        style={{
                          borderColor: "var(--accent-border)",
                          backgroundColor: "var(--accent-soft)",
                          color: "var(--accent)",
                        }}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p
                          className="mt-1 break-words text-sm leading-6"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div
                className="my-8 h-px"
                style={{ backgroundColor: "var(--border-color)" }}
              />

              <h4 className="font-semibold">Follow Me</h4>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Find me online and explore my work.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.name} profile`}
                      title={social.name}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border text-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2"
                      style={{
                        borderColor: "var(--border-color)",
                        backgroundColor: "var(--bg-primary)",
                        color: "var(--text-secondary)",
                        "--tw-ring-color": "var(--accent)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--accent-border)";
                        e.currentTarget.style.backgroundColor =
                          "var(--accent-soft)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--border-color)";
                        e.currentTarget.style.backgroundColor =
                          "var(--bg-primary)";
                        e.currentTarget.style.color =
                          "var(--text-secondary)";
                      }}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border p-6 sm:p-8 lg:col-span-3"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Send Me a Message
              </h3>
              <p
                className="mt-3 text-sm leading-6 sm:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                Fill in the details below and I'll get back to you.
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
              noValidate
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name{" "}
                  <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address{" "}
                  <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full rounded-xl border px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Message{" "}
                  <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={3000}
                  placeholder="Tell me about your idea or project..."
                  required
                  className="w-full resize-y rounded-xl border px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4"
                  style={inputStyle}
                />
                <p
                  className="mt-2 text-right text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Minimum 10 characters
                </p>
              </div>

              {/* Status message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border p-4 text-sm leading-6"
                  style={
                    status.type === "success"
                      ? {
                          borderColor: "rgba(16,185,129,0.3)",
                          backgroundColor: "rgba(16,185,129,0.09)",
                          color: "var(--text-primary)",
                        }
                      : {
                          borderColor: "rgba(239,68,68,0.3)",
                          backgroundColor: "rgba(239,68,68,0.08)",
                          color: "var(--text-primary)",
                        }
                  }
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="mt-1 shrink-0 text-emerald-500" />
                  ) : (
                    <FaExclamationCircle className="mt-1 shrink-0 text-red-500" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                style={{
                  backgroundColor: "var(--accent)",
                  "--tw-ring-color": "var(--accent)",
                  "--tw-ring-offset-color": "var(--bg-card)",
                }}
              >
                {sending ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              <p
                className="text-center text-xs leading-5"
                style={{ color: "var(--text-muted)" }}
              >
                Your information will only be used to respond to your message.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Have a great idea?{" "}
          <span style={{ color: "var(--accent)" }}>
            Let's make it happen.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default Contacts;