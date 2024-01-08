import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon,dark }) => (
    <div className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className='w-full pb-[2px] pr-[2px] rounded-[23px]'
            style={{
                boxShadow: `5px 5px 5px 0px ${dark ? "#FF0000" : "#0D7377" } `,
                background:
                    dark ? "linear-gradient(90.13deg, #FF0000 1.9%, #FF0000 97.5%)":"linear-gradient(90.13deg, #0D7377 1.9%, #0D7377 97.5%)",
            }}>
            <Tilt
                options={{
                    max: 15,
                    scale: 1,
                    speed: 50,
                }}
                className='bg-tertiary rounded-[20px] py-10 px-12 min-h-[280px] flex flex-col items-center justify-between dark:bg-slate-100'>
                <img
                    src={icon}
                    alt={title}
                    className='w-16 object-contain dark:invert'
                />
                <h3 className='text-neutral-300 text-[20px] font-bold text-center dark:text-neutral-800'>
                    {title}
                </h3>
            </Tilt>
        </motion.div>
    </div>
);

const Aboutbeforewrapper = ({dark}) => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} dark:text-neutral-800`}>
                    Introduction
                </p>
                <h2
                    className={`${styles.sectionHeadText} dark:text-neutral-800`}>
                    Overview.
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-[#d0cecf] text-[17px] max-w-3xl leading-[30px] dark:text-neutral-800'>
                I'm a full-stack software developer with experience in
                Typescript, Javascript, and expertise in React,React Native, Express Js, Next.js , Postgressql. I'm a quick learner and
                collaborate closely with clients to create efficient, scalable,
                and user-friendly solutions that solve real-world problems.
                Let's work together to bring your ideas to life!
            </motion.p>

            <div className='mt-20 flex justify-center flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        dark={dark}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

const About = ({dark}) => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className='hash-span' id={"about"}>
                &nbsp;
            </span>

            <Aboutbeforewrapper dark={dark} />
        </motion.section>
    );
};

export default About;

// export default SectionWrapper(About, "about");
