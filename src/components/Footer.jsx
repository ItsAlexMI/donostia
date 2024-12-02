import Instagram from '@mui/icons-material/Instagram';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
const Footer = () => {
    return (<div class="w-full">
   
        <footer class="footer bg-gray-50 items-center rounded-t-box px-6 py-4 shadow">
          <aside class="grid-flow-col items-center">
          <p>
        <a href="https://www.instagram.com/itsalexmi" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-semibold">
          <Instagram fontSize="large" className="inline-block text-orange-500" />
          itsalexmi
        </a>
      </p>
          </aside>
          <nav className="text-base-content/90 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a className="link link-hover text-blue-500" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <FaReact size={30} />
        </a>
        <a className="link link-hover text-cyan-500" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <SiTailwindcss size={30} />
        </a>
        <a className="link link-hoverd text-green-500" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <FaNodeJs size={30} />
        </a>
      </nav>
        </footer>
      </div>);

};

export default Footer;