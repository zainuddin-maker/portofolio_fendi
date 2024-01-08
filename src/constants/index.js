import {
    mobile,
    ecrime,
    logo_w,
    microverse,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    next,
    meta,
    starbucks,
    tesla,
    shopify,
    quantumStocks,
    space,
    portfolio,
    threejs,
    rails,
    sass,
    express,
    ruby,
    jest,
    reactest,
    bookstore,
    otis1,
    otis2,
    otis,
    virtualclass,
    virtualclass1,
    virtualclass2,
    virtualclass3,
    virtualclass4,
    virtualclass5,
    virtualclass6,
    virtualclass7,
    chartech1,
    chartech2,
    chartech3,
    chartech4,
    chartech5,
    chartech6,
    dcim1,
    dcim2,
    dcim3,
    dcim4,
    dcim5,
    dcim6,
    dcim7,
    dcim8,
    dcim9,
    dcim10,
    dcim11,
    dcim12,
    dcim13,
    dcim14,
    taichang1,
    taichang2,
    taichang3,
    taichang4,
    taichang5,
    taichang6,
    taichang7,
    taichang8,
    taichang9,
    taichang10,
    taichang11,
    taichang12,
    taichang13,
    taichang14,
    taichang15,
    taichang16,
    i4kit1,
    i4kit2,
    i4kit3,
    i4kit4,
    i4kit5,
    i4kit6,
    i4kit7,
    custom1,
    custom2,
    custom3,
    custom4,
    custom5,
    custom6,
    custom7,
    custom8,
    pttep1,
    pttep2,
    pttep3,
    pttep4,
    pttep5,
    logocadit,
    logoicon,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "4+ years working  experience ",
        icon: creator,
    },
    {
        title: "Frontend with React,React Native,Next ,D3 js and Three",
        icon: web,
    },
    {
        title: "Backend with Express and Golang . Communication with mqtt,firebase and socketio",
        icon: mobile,
    },
    {
        title: "Database with  PostgreSQL and MongoDB",
        icon: backend,
    },
];

const technologies = [
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Next",
        icon: next,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Sass",
        icon: sass,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Prisma",
        icon: express,
    },
    {
        name: "Ruby on Rails",
        icon: rails,
    },
    {
        name: "Git & GitHub",
        icon: git,
    },
    {
        name: "Jest",
        icon: jest,
    },
    {
        name: "React Test Lib",
        icon: reactest,
    },
];

const experiences = [
    {
        title: "IOT Applicationn in R&D Team ( Fullstack Developer)  ",
        company_name: "CAD-IT Consultant ",
        icon: logocadit,
        iconBg: "#1e1e1e",
        date: "Jun 2021 - Present",
        points: [
            `As a Supervisor for the i4kit Digital Factory Suite Web at CAD-IT Company, I oversee the implementation and optimization of this crucial tool. The i4kit is an innovative solution, utilizing sensors to accurately represent real industry systems.

            In my supervisory role, I orchestrate various tasks, including the meticulous preparation of tags in the Kepware system. I am responsible for defining the seamless flow from frontend to backend, encompassing display, data management, and tag mapping. My role extends to providing support to the team, addressing challenges in both frontend and backend aspects.
            
            Primarily, this website serves the purpose of sensor monitoring and offers a user-friendly interface for PLC control within the i4kit framework. Notably, it incorporates advanced machine learning techniques to predict boiler temperature based on specific inputs. This machine learning process is a synergy of Python programming and ANSYS simulation software.
            
            Furthermore, the system ensures timely notifications through email and the Line app, enhancing overall operational efficiency and responsiveness. My involvement in this project underscores my commitment to driving innovation and efficiency in digital factory solutions at CAD-IT Company.`,
            `Develop  Data Center Infrastructure Management (DCIM) Web for CDC Singapore, focusing on comprehensive asset management, real-time incident tracking, and power consumption monitoring for each asset. The system also includes Rack and Item Management, providing detailed monitoring of racks, tracking items, recording changes, monitoring connectivity, and visualizing item placement.
          
          Key Features:
          
          Real-time Consumption Dashboard: Tracks power consumption, cooling water usage, and rack-specific power consumption.
          Real-time Monitoring: Utilizes OPC UA and Kepware for real-time monitoring, with over 3000 tags connected to PLC machines.
          3D Visualization: Enables visualization of racks and assets for enhanced user interaction.
          Status Display: Real-time status updates for machines, indicating operational states.
          Alarming System: Monitors and alerts in real-time for incidents and alarms.
          Historical Data Management: Processes and inserts read tags into a PostgreSQL database for historical data used in charts.
          Multilingual Support: Offers support for multiple languages, enhancing accessibility.
          This DCIM implementation optimizes asset management, increases operational efficiency, and ensures real-time insights into the data center environment.`,
            `Developed the Mold Factory Web for CAD-IT Company in Taicang, China. This platform facilitates the real-time monitoring of 31 machines, encompassing a total of 3175 tags across various types, including 16 injection molding machines, 9 CNC machines, and 6 EDM machines. Key features of the website include:
            3D visualization of all 31 machines, enabling real-time interaction using the React Three Fiber Library.
            Real-time status display for each machine, indicating operational states such as running, on hold, idle, stopped, or offline.
            Utilization tracking for each machine through dynamic timeline and bar charts, with updates every 5 seconds.
            Real-time monitoring of alarms generated by each machine.
            Detailed insights into machine components, including temperature, speed, pressure, and usage duration.
            Bilingual support for Chinese and English languages.
            Integration of a real-time notification system using Socket.IO.`,
            `Specializing in developing custom components for various projects within ThingWorx, I have successfully delivered intricate displays that demand parallel development to maintain workflow continuity. My portfolio includes creating custom applications such as Export Custom Document in Excel and PDF formats, Snake Timeline Chart, Custom Area Chart, Custom Bar Chart, Custom Double Y Axis amalgamating group chart and line chart, Custom Pie Chart, Custom Line Chart, Custom Map Tracking, Notification App (utilizing Socket.IO, MQTT, Firebase), and a sophisticated Maintenance Calendar. These custom solutions not only showcase technical prowess but also demonstrate a commitment to delivering innovative and tailored solutions to enhance project functionalities.`,
            `Developed CCTV and 3D Web solutions for PTTEP-TH, leveraging cutting-edge technologies to enhance security and visualization capabilities.

            Orchestrated the access to all CCTV cameras through RTSP streaming, coupled with the creation of a custom website to display the feeds with additional functionalities.
            
            Implemented a sophisticated 3D web interface that visualizes the company's buildings and assets, utilizing Three.js, D3.js, HTML5, and CSS3.
            
            Leveraged a Golang backend and Docker to streamline CCTV access, ensuring robust and efficient functionality.
            
            Spearheaded tasks encompassing the configuration of PC requirements for optimal 3D rendering and RTSP video rendering.
            
            Established RTSP connections using Golang, demonstrating technical proficiency in backend development.
            
            Contributed to the development of applications for RTSP and the 3D web, showcasing a comprehensive skill set in web development and security solutions.
            
            This project exemplifies my commitment to delivering innovative solutions that enhance security measures and provide advanced visualization capabilities for PTTEP-TH.`,
        ],
    },
    {
        title: "Junior Developer",
        company_name: "PT IKONSULTAN INOVATAMA",
        icon: logoicon,
        iconBg: "#282828",
        date: "Feb 2020 - Jun 2021",
        points: [
            `I spearheaded the development of MSR Report, a sophisticated web application tailored for Otis Company. MSR Report serves as a pivotal tool for technicians within OTIS, facilitating the seamless creation of Machine Service Reports (MSRs). This innovative application empowers technicians to conduct comprehensive maintenance assessments on elevators and lifts, ensuring meticulous evaluation of their operational conditions. The generated reports undergo a meticulous approval process led by the respective supervisors, guaranteeing the highest standards of maintenance and service excellence. Thriving at the intersection of technology and elevator management, MSR Report exemplifies my commitment to advancing efficiency and precision within the maintenance sector.`,
          `I spearheaded the development of  Virtual Class for Iconsultant Inovatama ,Virtual class is an e-learning that is used for Iconsultan Inovatama company, in this web has 3 roles in general, namely Learner, Trainer and Admin. this web has a total of more than 30 different pages and over 100 APIs in use, responsive on various devices and browsers such as desktops, tablets and cellphones, integrates with email and several social media as a method of registering and logging. realtime communication in the discussion room provided, uses data encryption for the security needed, and using the react testing library and Jest for web testing.`,
         `I spearheaded the development of CARTECH for Carfix Company , Cartech is basically a web that is a further implementation of the Virtual Class that has been successful before, so it has the same features as the virtual class web with more than 30 different pages and more than 100 APIs used.",`,
        ],
    },
    // {
    //     title: "Project Engineer",
    //     company_name: "eCrime forense",
    //     icon: ecrime,
    //     iconBg: "#282828",
    //     date: "Jul 2020 - Jun 2022",
    //     points: [
    //         "Assisted in the implementation of secure architectures for various companies, resulting in substantial cost savings by preventing fraud.",
    //         "Conducted over 30 evaluations based on the NIST framework for companies of different sizes.",
    //     ],
    // },
];

const projects = [
    {
        name: "MSR Report for Otis Company",
        description:
            "MSR Report is a web application for creating MSR (Machine Service Report) used by technicians at OTIS companies to provide maintenance assessments of the condition of elevators and lifts, with the approval of the relevant supervisor.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Rest API",
                color: "text-violet-700",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
        ],
        image: [otis, otis1, otis2],
        source_code_link: "",
        live_demo_link: "",
        // note : "I can't share my private github and live web because this is a private web for this company, but if you are curious I can explain to you in detail."
    },
    {
        name: "Virtual Class for Iconsultant Inovatama",
        description:
            "Virtual class is an e-learning that is used for Iconsultan Inovatama company, in this web has 3 roles in general, namely Learner, Trainer and Admin. this web has a total of more than 30 different pages and over 100 APIs in use, responsive on various devices and browsers such as desktops, tablets and cellphones, integrates with email and several social media as a method of registering and logging. realtime communication in the discussion room provided, uses data encryption for the security needed, and using the react testing library and Jest for web testing.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "text-violet-700",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
            {
                name: "Loopback API",
                color: "green-text-gradient",
            },
            {
                name: "SSO",
                color: "text-violet-700",
            },
            {
                name: "React Testing Library",
                color: "pink-text-gradient",
            },
            {
                name: "JEST",
                color: "green-text-gradient",
            },
        ],
        image: [
            virtualclass,
            virtualclass1,
            virtualclass2,
            virtualclass3,
            virtualclass4,
            virtualclass5,
            virtualclass6,
            virtualclass7,
        ],
        source_code_link:
            "https://github.com/jmonto55/book-an-appointment-frontend",
        live_demo_link:
            "https://book-an-appointment-frontend-git-dev-jmonto55.vercel.app/",
        // note : "I can't share private github and live web because this is a private web, but if you are curious I can explain to you in detail."
    },
    {
        name: "CARTECH for Carfix Company",
        description:
            "Cartech is basically a web that is a further implementation of the Virtual Class that has been successful before, so it has the same features as the virtual class web with more than 30 different pages and more than 100 APIs used.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "text-violet-700",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
            {
                name: "Loopback API",
                color: "green-text-gradient",
            },
            {
                name: "SSO",
                color: "text-violet-700",
            },
            {
                name: "React Testing Library",
                color: "pink-text-gradient",
            },
            {
                name: "JEST",
                color: "green-text-gradient",
            },
        ],
        image: [
            chartech1,
            chartech2,
            chartech3,
            chartech4,
            chartech5,
            chartech6,
        ],
        source_code_link: "https://github.com/jmonto55/budget-app",
        live_demo_link: "https://rails-kb31.onrender.com",
        // note : "I can't share private github and live web because this is a private web, but if you are curious I can explain to you in detail."
    },
    {
        name: "DCIM for CDC Singapore",
        description:
            "DCIM is used for CDC asset management(monitoring the quantity and condition of assets, tracking incidents within assets, and also monitoring power consumption for each asset), Rack and Item Management( encompasses detailed monitoring of racks, tracking items on racks, noting changes occurring on racks, monitoring the connectivity used on racks, and visualizing the placement of items on the racks) , And Consumption Dashboard (tracks consumption in the data center, such as power consumption, cooling water usage, and power consumption for each rack ) . Monitoring is conducted in real-time using OPC UA and Kepware. Real-time readings are obtained through tags on Kepware, which are connected to the PLC machine. The number of tags used exceeds 3000. For real-time notifications, using  Socket.IO . And for historical data used in charts, the read tags are processed and insert into database PostgreSQL , there are moren than 100 api and 150 queries in postgressql",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Kepware",
                color: "text-violet-700",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "Postgressql",
                color: "green-text-gradient",
            },
            {
                name: "OPC UA",
                color: "text-violet-700",
            },
            {
                name: "Socket IO",
                color: "pink-text-gradient",
            },
        ],
        image: [
            dcim1,
            dcim2,
            dcim3,
            dcim4,
            dcim5,
            dcim6,
            dcim7,
            dcim8,
            dcim9,
            dcim10,
            dcim11,
            dcim12,
            dcim13,
            dcim14,
        ],
        source_code_link: "https://github.com/jmonto55/budget-app",
        live_demo_link: "https://rails-kb31.onrender.com",
        // note : "I can't share private github and live web because this is a private web, but if you are curious I can explain to you in detail."
    },
    {
        name: "Mold Factory Web for CAD-IT Company in Taichang",
        description:
            "This website is used for monitoring 31 machines, totaling 3175 tags , more than 80 api, and more 150 queries in postgresql  for all machines (16 injection molding machines, 9 CNC machines, and 6 EDM machines) located in Taicang, China. The website features include: 1. Visualizing the 31 machines in the field in 3D, allowing users to interact with the machines in real-time. This feature using React Three Fiber Library 2. Displaying the real-time status of all machines, indicating whether they are running, on hold, idle, stopped, or offline 3. Showing the utilization of each machine through two charts—a timeline chart and a bar chart—with updates every 5 seconds 4. Monitoring all alarms sent from each machine in real-time 5. Displaying detailed information and values for each part of every machine, such as temperature, speed, pressure, and the duration of usage 6. Supporting two languages, Chinese and English 7. Incorporating a real-time notification system using socket.io",

        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "React Three Fiber",
                color: "pink-text-gradient",
            },
            {
                name: "ApexChart",
                color: "text-violet-700",
            },
            {
                name: "i18n-internationalization",
                color: "text-violet-700",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "Postgressql",
                color: "green-text-gradient",
            },
            {
                name: "OPC UA",
                color: "text-violet-700",
            },
            {
                name: "Kepware",
                color: "text-violet-700",
            },
            {
                name: "Socket IO",
                color: "pink-text-gradient",
            },
        ],
        image: [
            taichang1,
            taichang2,
            taichang3,
            taichang4,
            taichang5,
            taichang6,
            taichang7,
            taichang8,
            taichang9,
            taichang10,
            taichang11,
            taichang12,
            taichang13,
            taichang14,
            taichang15,
            taichang16,
        ],
        source_code_link: "https://github.com/jmonto55/budget-app",
        live_demo_link: "https://rails-kb31.onrender.com",
        // note : "I can't share private github and live web because this is a private web, but if you are curious I can explain to you in detail."
    },
    {
        name: "i4kit digital factory suite Web for CAD-IT Company",
        description:
            "This website is employed to support the i4kit tool at CAD-IT company. i4kit is a tool comprised of sensors used to represent actual industry systems. In this project, I serve as a SUPERVISOR, with tasks including preparing tags in the Kepware system, determining the flow from the frontend to the backend (display, data, and tag mapping), assisting the team in case of difficulties in both frontend and backend aspects. Generally, this website functions to monitor sensors and provides a UI for controlling PLC in i4kit. It also incorporates machine learning to predict boiler temperature with specific inputs. This machine learning combines Python and ANSYS simulation software. Additionally, notifications are sent using email and the Line app.          ",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Line-notify",
                color: "pink-text-gradient",
            },
            {
                name: "email-notification",
                color: "pink-text-gradient",
            },
            {
                name: "ApexChart",
                color: "text-violet-700",
            },
            {
                name: "Postgressql",
                color: "green-text-gradient",
            },
            {
                name: "OPC UA",
                color: "text-violet-700",
            },
            {
                name: "Kepware",
                color: "text-violet-700",
            },
            {
                name: "Python",
                color: "pink-text-gradient",
            },
            {
                name: "Ansys Simulation",
                color: "pink-text-gradient",
            },
        ],
        image: [i4kit1, i4kit2, i4kit3, i4kit4, i4kit5, i4kit6, i4kit7],
        source_code_link: "https://github.com/jmonto55/budget-app",
        live_demo_link: "https://rails-kb31.onrender.com",
        // note : "I can't share private github and live web because this is a private web, but if you are curious I can explain to you in detail."
    },
    {
        name: "Custom Component for Several Project in Thingwork",
        description:
            "Several projects require complex custom displays that necessitate parallel development to avoid disrupting the main flow. Some custom applications that I have created include Export Custom Document to Excel and PDF formats, Snake Timeline Chart, Custom Area Chart, Custom Bar Chart, Custom Double Y Axis combining group chart and line chart, Custom Pie Chart, Custom Line Chart, Custom Map Tracking, Notification App (Socket IO, MQTT, Firebase), and Maintenance Calendar.",
        tags: [
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS3",
                color: "pink-text-gradient",
            },
            {
                name: "D3.js",
                color: "pink-text-gradient",
            },
            {
                name: "Apache",
                color: "text-violet-700",
            },
            {
                name: "Leaflet",
                color: "green-text-gradient",
            },
            {
                name: "Three",
                color: "text-violet-700",
            },
            {
                name: "Firebase",
                color: "text-violet-700",
            },
            {
                name: "Socket.IO",
                color: "pink-text-gradient",
            },
            {
                name: "MQTT",
                color: "pink-text-gradient",
            },
        ],
        image: [
            custom1,
            custom2,
            custom3,
            custom4,
            custom5,
            custom6,
            custom7,
            custom8,
        ],
        source_code_link: "https://github.com/jmonto55/budget-app",
        live_demo_link: "https://rails-kb31.onrender.com",
        // note : "I can't share private github and live web because this is a private web, but if you are curious I can explain to you in detail."
    },
    {
        name: "CCTV and 3D Web for PTTEP-TH",
        description:
            "Accessing all CCTV cameras is achieved through RTSP streaming, followed by creating a website to display these CCTV feeds with custom additional functions. And a 3D web interface visualizes all buildings and assets of this company. The CCTV access is facilitated by a Golang backend and Docker, and the 3D web interface is developed using Three.js, D3.js, HTML5, and CSS3. In this project, my tasks included configuring PC requirements for 3D rendering and RTSP video rendering, establishing RTSP connections using Golang, and developing applications for RTSP and the 3D web.",
        tags: [
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS3",
                color: "green-text-gradient",
            },
            {
                name: "THREE",
                color: "pink-text-gradient",
            },
            {
                name: "D3",
                color: "blue-text-gradient",
            },
            {
                name: "RTSP",
                color: "green-text-gradient",
            },
            {
                name: "CCTV",
                color: "pink-text-gradient",
            },
            {
                name: "Golang",
                color: "pink-text-gradient",
            },
            {
                name: "Docker",
                color: "green-text-gradient",
            },
        ],
        image: [pttep1, pttep2, pttep3, pttep4, pttep5],
        source_code_link: "https://github.com/jmonto55/Portfolio-V2",
        live_demo_link: "https://portfolio-ci7x.onrender.com/",
    },
    {
        name: "This Portfolio",
        description:
            "A complete built from scratch React project with emphasis in UX and usage of advance libraries and packages like Framer Motion and Three Js.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Three",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: [portfolio],
        source_code_link: "https://github.com/jmonto55/Portfolio-V2",
        live_demo_link: "https://portfolio-ci7x.onrender.com/",
    },
];

export { services, technologies, experiences, projects };
