import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import Earth from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { textVariant } from "../utils/motion";
import Modal from "./Modal";
import { staggerContainer } from "../utils/motion";

// template_9e62rqi
// service_lv0jhj4
// qV7ss43Xpjcm7ewgW

const Contacttemp = ({ dark }) => {
  

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                "service_lv0jhj4",
                "template_9e62rqi",
                {
                    from_name: form.name, 
                    to_name: "Fendi",
                    reply_to: form.email,
                    to_email: "zainuddineffendie022@gmail.com",
                    message: form.message,
                },
                "qV7ss43Xpjcm7ewgW"
            )
            .then(
                () => {
                    setLoading(false);
                    setOpenModal(!openModal);
                    setTimeout(() => {
                        setOpenModal(false);
                    }, 3000);
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    alert("Something went wrong.");
                }
            );
    };

    return (
        <>
            <motion.div variants={textVariant()}>
                <h2
                    className={`${styles.sectionHeadText} dark:text-neutral-900`}>
                    Let's Talk.
                </h2>
            </motion.div>
            <div className='lg:mt-12 lg:flex-row flex-col-reverse flex gap-20 overflow-hidden'>
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='flex-[0.75] bg-tertiary p-8 rounded-2xl dark:bg-slate-100 shadow-md'>
                    <p
                        className={`${styles.sectionSubText} dark:text-neutral-900`}>
                        Get in touch
                    </p>
                    <h3
                        className={`${styles.sectionHeadText} dark:text-neutral-900`}>
                        Contact.
                    </h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-12 flex flex-col gap-8'>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4 dark:text-neutral-900'>
                                Your Name
                            </span>
                            <input
                                required
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className='bg-neutral-800 py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium dark:bg-slate-200 dark:text-neutral-900'
                            />
                        </label>

                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4 dark:text-neutral-900'>
                                Your Email
                            </span>
                            <input
                                required
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className='bg-neutral-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium dark:bg-slate-200 dark:text-neutral-900'
                            />
                        </label>

                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4 dark:text-neutral-900'>
                                Your Message
                            </span>
                            <textarea
                                required
                                rows='7'
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Write your message!'
                                className='bg-neutral-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium dark:bg-slate-200 dark:text-neutral-900'
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-neutral-800 py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl dark:bg-slate-200 dark:text-neutral-900'>
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className='xl:flex-1 xl: md:h-[650px] h-[350px]'>
                    <Earth dark={dark}/>
                </motion.div>
                {openModal && <Modal />}
            </div>
        </>
    );
};

const Contact = ({ dark }) => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className='hash-span' id={"contact"}>
                &nbsp;
            </span>

            <Contacttemp dark={dark} />
        </motion.section>
    );
};

export default Contact;

// export default SectionWrapper(Contact, "contact");
