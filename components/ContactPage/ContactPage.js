"use client"
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import SocialMedias from '../SocialMedias/SocialMedias'
import { sendEmail } from '@/actions/sendEmail';

import { PulseLoader } from 'react-spinners';
import { FaAngleDown } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const InfoBox = ({ success, handleOkClick, message = "" }) => {
    return (
        <motion.div
            className='fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-[5000]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className='w-full max-w-[400px] text-center flex flex-col gap-y-5 items-center justify-center p-10 bg-[var(--bg-color)] rounded-xl border-2 border-[var(--border-color)]'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                exit={{ opacity: 0, scale: 0.5 }}
            >
                <div className='text-[7rem]'>{success ? <FaCheckCircle /> : <MdCancel />}</div>
                <h2 className='text-[2rem] font-bold'>{success ? "Successfully sent message!" : message !== "" ? message : "Something went wrong!"}</h2>
                <button
                    onClick={(e) => {
                        handleOkClick();
                    }}
                    className='flex items-center justify-center py-2 px-5 rounded-md cursor-pointer border-none outline-none bg-[var(--action-color)] font-bold'
                >
                    OK
                </button>
            </motion.div>
        </motion.div>
    );
};


const ContactPage = () => {
    const [loading, setLoading] = useState(false)
    const [showInfoBox, setShowInfoBox] = useState(null)
    const [errorMessage, setErrorMessage] = useState("");
    const [faqs, setFaqs] = useState([
        {
            question: "What services do you offer?",
            answer: "I specialize in web development (React.js, Next.js, Node.js), AI/ML integration, and vector tracing. Whether it's building a dynamic website, developing AI-powered applications, or crafting high-quality designs, I can help!",
            show: false
        },
        {
            question: "Do you take freelance projects?",
            answer: "Yes! I am open to freelance work and collaborations. If you have a project idea, feel free to reach out through my contact page or message me directly.",
            show: false
        },
        {
            question: "What technologies do you use?",
            answer: "I primarily work with: - Frontend: React.js, Next.js, Tailwind CSS | - Backend: Node.js, Express.js | - Database: MongoDB | - AI/ML: Python, TensorFlow, scikit-learn | - Others: Git/GitHub, Firebase, Netlify, Vercel",
            show: false
        },
        {
            question: "Can you build a website for me?",
            answer: "Absolutely! I can design and develop a custom website tailored to your needs, whether it's a portfolio, e-commerce store, or web app. Let's discuss your requirements!",
            show: false
        },
        {
            question: "How can I see your past work?",
            answer: "You can check out my Portfolio page, where I showcase my best projects, including web applications, AI-based projects, and freelance work.",
            show: false
        },
        {
            question: "How can I contact you?",
            answer: "You can reach me via email, LinkedIn, or GitHub (links provided on my Contact page). I’m always happy to discuss new opportunities and projects!",
            show: false
        }
    ])

    const formRef = useRef()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onSubmit",
        defaultValues: {
            name: "",
            email: "",
            mobileNumber: "",
            subject: "",
            message: "",
        }
    });

    const onSubmit = async (data) => {
        if (loading) {
            return;
        }
        setLoading(true);

        try {
            const result = await sendEmail(data);
            if (result.error) {
                setShowInfoBox("failure")
                setErrorMessage(result.error)
            }
            if (result.apiError) {
                setShowInfoBox("failure")
                setErrorMessage(result.apiError)
            }
            setShowInfoBox("success");
            formRef.current.reset();
        } catch (error) {
            setShowInfoBox("failure");
            formRef.current.reset();
        } finally {
            setLoading(false); // Reset loading state in all cases
        }
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email) || 'Please enter a valid email address!';
    };

    const validateName = (name) => {
        const regex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        return regex.test(name) || 'Please enter a valid name!';
    };
    const validateMobileNumber = (number) => {
        const regex = /^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        return regex.test(number) || 'Please enter a valid mobile number';
    };

    const handleFaq = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) =>
                i === index ? { ...faq, show: !faq.show } : faq
            )
        );
    }

    const handleOkClick = () => {
        setShowInfoBox(null)
    }

    return (
        <main>
            <AnimatePresence>
                {showInfoBox ? (
                    showInfoBox === "success" ? (
                        <InfoBox success={true} handleOkClick={handleOkClick} />
                    ) : (
                        <InfoBox success={false} handleOkClick={handleOkClick} message={errorMessage} />
                    )
                ) : null}
            </AnimatePresence>
            <motion.section className='flex flex-col gap-[100px]'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='flex flex-col gap-y-2 text-center items-center justify-center'>
                    <h1 className='font-bold sm:text-5xl text-4xl'>Get In Touch</h1>
                    <p className='w-full max-w-[500px] text-[1.1rem] text-[var(--sec-text)]'>
                        To work with me, fill up the details below and send messages or contact me on social media platforms.
                    </p>
                </div>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[800px] mx-auto flex flex-col'>
                    <div className='flex flex-wrap justify-between'>
                        <div className='flex flex-col mb-20 w-full md:max-w-[340px] lg:max-w-[375px]'>
                            <input
                                type='text'
                                className='w-full py-3 text-[1.1rem] text-[var(--pri-text)] bg-inherit border-b-2 border-[var(--border-color)] outline-none hover:border-[var(--action-color)] focus:border-[var(--action-color)] transition-colors duration-200'
                                aria-invalid={errors.name ? "true" : "false"}
                                aria-describedby="name-error"
                                {...register('name', {
                                    required: 'Name is required',
                                    validate: validateName, // Pass the function reference here
                                })}
                                placeholder='Full Name'
                            />
                            {errors.name && <span id='name-error' className="mt-2 text-[.85rem] text-[var(--action-color)]">{errors.name.message}</span>}
                        </div>
                        <div className='flex flex-col mb-20 w-full md:max-w-[340px] lg:max-w-[375px]'>
                            <input
                                type='email'
                                className='w-full py-3 text-[1.1rem] text-[var(--pri-text)] bg-inherit border-b-2 border-[var(--border-color)] outline-none hover:border-[var(--action-color)] focus:border-[var(--action-color)] transition-colors duration-200'
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby="email-error"
                                {...register('email', {
                                    required: 'Email is required',
                                    validate: validateEmail,
                                })}
                                placeholder='Email Address'
                            />
                            {errors.email && <span id='email-error' className="mt-2 text-[.85rem] text-[var(--action-color)]">{errors.email.message}</span>}
                        </div>
                        <div className='flex flex-col mb-20 w-full md:max-w-[340px] lg:max-w-[375px]'>
                            <input
                                type='tel'
                                className='w-full py-3 text-[1.1rem] text-[var(--pri-text)] bg-inherit border-b-2 border-[var(--border-color)] outline-none hover:border-[var(--action-color)] focus:border-[var(--action-color)] transition-colors duration-200'
                                aria-invalid={errors.mobileNumber ? "true" : "false"}
                                aria-describedby="mobileNumber-error"
                                {...register('mobileNumber', {
                                    required: 'Mobile number is required',
                                    validate: validateMobileNumber,
                                })}
                                placeholder='Mobile Number'
                            />
                            {errors.mobileNumber && <span id='mobileNumber-error' className="mt-2 text-[.85rem] text-[var(--action-color)]">{errors.mobileNumber.message}</span>}
                        </div>
                        <div className='flex flex-col mb-20 w-full md:max-w-[340px] lg:max-w-[375px]'>
                            <input
                                type='text'
                                className='w-full py-3 text-[1.1rem] text-[var(--pri-text)] bg-inherit border-b-2 border-[var(--border-color)] outline-none hover:border-[var(--action-color)] focus:border-[var(--action-color)] transition-colors duration-200'
                                aria-invalid={errors.subject ? "true" : "false"}
                                aria-describedby="subject-error"
                                {...register('subject', {
                                    required: 'Subject is required',
                                    maxLength: {
                                        value: 80,
                                        message: "No more than 80 characters!"
                                    }
                                })}
                                placeholder='Subject'
                            />
                            {errors.subject && <span id='subject-error' className="mt-2 text-[.85rem] text-[var(--action-color)]">{errors.subject.message}</span>}
                        </div>
                        <div className='relative flex flex-col mb-20 w-full'>
                            <textarea
                                className='w-full py-3 text-[1.1rem] text-[var(--pri-text)] bg-inherit border-b-2 border-[var(--border-color)] outline-none hover:border-[var(--action-color)] focus:border-[var(--action-color)] transition-colors duration-200 min-h-[150px] resize-y' // Added min-height and resize for better UX
                                aria-invalid={errors.message ? "true" : "false"}
                                aria-describedby="message-error"
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Message must be at least 10 characters',
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: 'Message cannot exceed 500 characters',
                                    },
                                })}
                                placeholder='Enter your Message'
                            />
                            {errors.message && (
                                <span id="message-error" className="text-[.85rem] text-[var(--action-color)] mt-1">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-5'>
                        <button disabled={loading} type="submit" className="flex items-center justify-center outline-none bg-[var(--action-color)] text-[1.1rem] font-bold rounded-[5px] w-[200px] h-[60px] transition-all duration-100 ease-linear hover:bg-[var(--bg-color)] hover:border-2 hover:border-[var(--border-color)] hover:scale-y-105 origin-bottom">{loading ? <PulseLoader color='var(--action-color)' /> : "Send message"}</button>
                        <SocialMedias />
                    </div>
                </form>
            </motion.section>
            <section className='flex flex-col gap-[100px]'>
                <h1 className='hidden sm:block mx-auto font-bold sm:text-5xl text-4xl text-center w-full xl:max-w-[500px]'>Frequently Asked Questions</h1>
                <h1 className='sm:hidden mx-auto font-bold sm:text-5xl text-4xl text-center w-full xl:max-w-[500px]'>FAQs</h1>
                <div className='flex w-full flex-col items-center xl:items-start xl:flex-row xl:justify-between gap-x-10 gap-y-10'>
                    <motion.ul className="flex flex-col gap-y-10 w-full md:max-w-[900px] xl:max-w-[570px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {faqs.length > 0 &&
                            faqs.map((item, index) => (
                                index < 3 && <li
                                    key={index}
                                    className={`w-full flex flex-col sm:gap-y-5 gap-y-10 overflow-hidden border-b-[1px] border-[var(--border-color)] pb-8 transition-all duration-400 ease-out ${item.show ? "sm:max-h-[160px] max-h-[270px]" : "sm:max-h-[60px] max-h-[80px]"}`}
                                >
                                    <div
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => handleFaq(index)}
                                    >
                                        <h2 className="font-bold text-[1.4rem]">{item.question}</h2>
                                        <motion.div className="flex items-center justify-center text-[1.5rem]"
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: item.show ? 180 : 0 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            <FaAngleDown />
                                        </motion.div>
                                    </div>
                                    <p className="text-[var(--sec-text)]">{item.answer}</p>
                                </li>
                            ))}
                    </motion.ul>
                    <motion.ul className="flex flex-col gap-y-10 w-full md:max-w-[900px] xl:max-w-[570px]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {faqs.length > 0 &&
                            faqs.map((item, index) => (
                                index > 2 && <li
                                    key={index}
                                    className={`w-full flex flex-col sm:gap-y-5 gap-y-10 overflow-hidden border-b-[1px] border-[var(--border-color)] pb-8 transition-all duration-400 ease-out ${item.show ? "sm:max-h-[160px] max-h-[270px]" : "sm:max-h-[60px] max-h-[80px]"}`}
                                >
                                    <div
                                        className="flex items-center justify-between gap-x-2 cursor-pointer"
                                        onClick={() => handleFaq(index)}
                                    >
                                        <h2 className="font-bold text-[1.5rem]">{item.question}</h2>
                                        <motion.div className="flex items-center justify-center text-[1.5rem]"
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: item.show ? 180 : 0 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            <FaAngleDown />
                                        </motion.div>
                                    </div>
                                    <p className="text-[var(--sec-text)]">{item.answer}</p>
                                </li>
                            ))}
                    </motion.ul>
                </div>

            </section>
        </main>
    );
};

export default ContactPage