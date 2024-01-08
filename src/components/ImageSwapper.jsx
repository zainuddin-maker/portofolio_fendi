
import { useState ,useEffect} from "react";

import { motion, AnimatePresence } from "framer-motion"

export default function ImageSwapper({images,name}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

  
    // if (images.length > 1){
      setTimeout(() => {

    
      
          if(currentIndex === images.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 3000)
    // }
    
      
      // return () => clearInterval(intervalId);
  }, [currentIndex])

  return (
     
          // <img src={images[currentIndex]}  className="w-full h-full object-cover rounded-2xl "/>

          <AnimatePresence>
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1 , y: 0 }}
            exit={{ opacity: 0 , y: -100 }}
            className="w-full h-full rounded-2xl"
            style={{position:"absolute"}}
          />
            <div className='absolute  flex justify-start m-3 card-img_hover' style={{bottom:"0px"}}>
                 
                     
                     
                            <button
                                type='button'
                                // onMouseEnter={() => setLiveHover(true)}
                                // onMouseLeave={() => setLiveHover(false)}
                                // onClick={() =>
                                //     window.open(live_demo_link, "_blank")
                                // }
                                className='z-10 mr-2  w-10 h-10 rounded-full bg-neutral-800 flex justify-center items-center cursor-pointer dark:bg-neutral-200'>
                               {currentIndex + 1}/{images.length}
                            </button>
                       
                    </div>
        </AnimatePresence>
     
  )
}