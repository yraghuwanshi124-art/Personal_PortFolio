import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaSnapchat
} from 'react-icons/fa'

const Contacts = () => {

    const form = useRef()
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        const name = form.current.name.value.trim()
        const email = form.current.email.value.trim()
        const message = form.current.message.value.trim()

        // Name validation
        if (name === '') {
            alert('Please enter your name.')
            form.current.name.focus()
            return
        }

        if (name.length < 2) {
            alert('Please enter a valid name.')
            form.current.name.focus()
            return
        }

        // Email validation
        if (email === '') {
            alert('Please enter your email address.')
            form.current.email.focus()
            return
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address. Example: example@gmail.com')
            form.current.email.focus()
            return
        }

        // Message validation
        if (message === '') {
            alert('Please enter your message.')
            form.current.message.focus()
            return
        }

        if (message.length < 10) {
            alert('Please enter a message of at least 10 characters.')
            form.current.message.focus()
            return
        }

        // Send email
        setSending(true)
        setSent(false)

        emailjs.sendForm(
            'service_sv5q25o',
            'template_6k2w10u',
            form.current,
            '-gLXeBx0TDJ3jJntR'
        )
            .then(() => {
                setSending(false)
                setSent(true)
                e.target.reset()
            })
            .catch((error) => {
                console.log('Email Error:', error)
                console.log('Status:', error.status)
                console.log('Text:', error.text)

                setSending(false)

                alert('Message Send Failed. Please try again.')
            })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
            id="contacts"
        >

            <div className="container mx-auto px-6">

                <h2 className="text-3xl font-semibold text-center">
                    Get In <span className="text-green-500">Touch</span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-center mb-8">
                    Have a project in mind or want to collaborate? lets talk.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">

                    {/* LEFT SIDE */}

                    <div>

                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="space-y-6"
                        >

                            {/* NAME */}

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-300 mb-2 text-xl font-semibold"
                                >
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full bg-dark-300 border rounded-lg px-4 py-3 outline"
                                />
                            </div>


                            {/* EMAIL */}

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-300 mb-2 text-xl font-semibold"
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-dark-300 border rounded-lg px-4 py-3 outline"
                                />
                            </div>


                            {/* MESSAGE */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-300 mb-2 text-xl font-semibold"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    className="w-full bg-dark-300 border h-40 rounded-lg px-4 py-3 outline"
                                />
                            </div>


                            {/* SEND BUTTON */}

                            <button
                                type="submit"
                                disabled={sending}
                                className="bg-blue-500 px-5 py-4 rounded-lg
                                w-full text-3xl hover:bg-blue-700
                                transition duration-300 cursor-pointer
                                disabled:opacity-50"
                            >
                                {sending ? 'Sending...' : 'Send'}
                            </button>


                            {/* SUCCESS MESSAGE */}

                            {sent && (
                                <p className="text-green-500 text-center font-semibold">
                                    Message sent successfully! ✅
                                </p>
                            )}

                        </form>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="space-y-8 ml-15 mt-8">

                        <div className="flex items-start">

                            <div className="text-green-500 text-xl">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3 className="ml-2 text-xl font-semibold mb-2">
                                    Location
                                </h3>

                                <p className="text-gray-200 text-lg">
                                    Indore,Madhya Pradesh,India
                                </p>
                            </div>

                        </div>


                        <div className="flex items-start">

                            <div className="text-green-500 text-xl">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3 className="ml-2 text-xl font-semibold mb-2">
                                    Email Address
                                </h3>

                                <p className="text-gray-200 text-lg">
                                    yraghuwanshi92@gmail.com
                                </p>
                            </div>

                        </div>


                        <div className="flex items-start">

                            <div className="text-green-500 text-xl">
                                <FaPhoneAlt />
                            </div>

                            <div>
                                <h3 className="ml-2 text-xl font-semibold mb-2">
                                    Phone Number
                                </h3>

                                <p className="text-gray-200 text-lg">
                                    708988XXXX
                                </p>
                            </div>

                        </div>


                        <div>

                            <h3 className="text-lg font-semibold mb-4">
                                Follow Me
                            </h3>

                            <div className="flex space-x-4">

                                <a
                                    href="https://github.com/yraghuwanshi124-art"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-dark-300
                                    flex items-center text-2xl justify-center
                                    text-green-500 hover:bg-green-600
                                    hover:text-white transition duration-300"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/yash-raghuwanshi-2nd-44a498365/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-dark-300
                                    flex items-center text-2xl justify-center
                                    text-green-500 hover:bg-green-700
                                    hover:text-white transition duration-300"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="https://www.instagram.com/_yasssh._05?igsh=dnE3NXk4eWlpYjB2"
                                    className="w-12 h-12 rounded-full bg-dark-300
                                    flex items-center text-2xl justify-center
                                    text-green-500 hover:bg-green-700
                                    hover:text-white transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="https://www.snapchat.com/add/yash_r20255402?share_id=q3d8CXm6e00&locale=en-GB"
                                    className="w-12 h-12 rounded-full bg-dark-300
                                    flex items-center text-2xl justify-center
                                    text-green-500 hover:bg-green-700
                                    hover:text-white transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaSnapchat />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </motion.div>
    )
}

export default Contacts