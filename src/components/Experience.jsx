import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, dark }) => {

  console.log("dark ExperienceCard" )
  console.log(dark)
    return (
        <VerticalTimelineElement
            contentStyle={{ background: dark ? "#1e1e1e" :"#f1f5f9", color: dark ? "#ffffff" :"#000000" ,  boxShadow: `5px 5px 5px 0px ${dark ? "#FF0000" : "#0D7377" } `}} 
            contentArrowStyle={{ borderRight: dark ? "0px solid #1e1e1e" : "0px solid #f1f5f9" }} 
            date={experience.date}
            iconStyle={{ background: dark ? "#000000" :"#ffffff" , boxShadow : `0 0 0 4px ${ dark ? "#fff" :"#323232" }, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`}}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className=' h-[50%] object contain'
                    />
                </div>
            }>
            <div>
                <h3 className='dark:text-neutral-800 text-[24px] font-bold'>
                    {experience.title}
                </h3>
                <p
                    className='dark:text-neutral-800 text-[16px] font-semibold'
                    style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='dark:text-neutral-800 text-[14px] pl-1 tracking-wider'>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};

const Experiencebeforewrapper = ({ dark }) => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p
                    className={`${styles.sectionSubText} mt-16 dark:text-neutral-900`}>
                    What I have done so far
                </p>
                <h2
                    className={`${styles.sectionHeadText} dark:text-neutral-900`}>
                    Work Experience.
                </h2>
            </motion.div>
            <div className='mt-10 flex flex-col'>
                <VerticalTimeline lineColor={ dark ? "#ffffff":"#323232"}>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                            dark={dark}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

const Experience = ({ dark }) => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className='hash-span' id={"experience"}>
                &nbsp;
            </span>

            <Experiencebeforewrapper dark={dark} />
        </motion.section>
    );
};

export default Experience;

// export default SectionWrapper(Experience, '');
