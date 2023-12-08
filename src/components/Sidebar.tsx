import { HomeIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

function Sidebar() {
  const isHome = useMatch('/');
  const isJobs = useMatch('/jobs');
  return (
    <div id='sidebar' className='py-[30px] w-20 h-full bg-secondary rounded-tr-xl flex flex-col items-center'>
      <nav>
        <ul className='flex flex-col min-w-10 gap-8'>
          <li>
            <Link title='Accueil' className='flex flex-col items-center gap-2 text-white hover:text-primary' to='/'>
              <HomeIcon className='w-5 stroke-2' />
              {isHome && <span className='text-xs font-medium'>Accueil</span>}
            </Link>
          </li>
          <li>
            <Link title='Métiers' className='flex flex-col items-center gap-2 text-white hover:text-primary' to='/jobs'>
              <BriefcaseIcon className='w-5 stroke-2' />
              {isJobs && <span className='text-xs font-medium'>Métiers</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;