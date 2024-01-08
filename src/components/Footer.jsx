import { SectionWrapper } from "../hoc";
import { AiFillLinkedin, AiFillGithub, AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="text-center flex w-full flex-col items-center gap-6 dark:text-neutral-900">
        © 2024 Zainuddin Efendi. All rights reserved.
      <div className="w-full flex items-center justify-center gap-2">
        Built with
        <AiFillHeart size={20} className="animate-pulse" />
        in Bandung,Indonesia
      </div>
      <div className="w-full flex justify-center gap-8">
        <AiFillLinkedin
          size={30}
          className="cursor-pointer hover:opacity-80"
          onClick={() => window.open("https://www.linkedin.com/in/zainuddin-efendi-36166a141/")}
          />
        <AiFillGithub
          size={30}
          className="cursor-pointer hover:opacity-80"
          onClick={() => window.open("https://github.com/zainuddin-maker")}
        />
      </div>
    </div>
  )
}

export default SectionWrapper(Footer, '');
