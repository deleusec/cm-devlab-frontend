import { HomeIcon, BriefcaseIcon, ArrowRightOnRectangleIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

function Sidebar() {
  const isHome = useMatch('/');
  const isJobs = useMatch('/metiers');
  const isUsers = useMatch('/users');
  return (
    <div id='sidebar' className='py-[30px] w-20 h-full bg-secondary rounded-tr-xl flex flex-col gap-8 items-center'>
      <nav>
        <ul className='flex flex-col min-w-10 gap-8'>
          <li>
            <Link title='Accueil' className={`flex flex-col items-center gap-2 hover:text-primary ${isHome ? "text-primary" : "text-white"}`} to='/'>
              <HomeIcon className='w-5 stroke-2' />
              {isHome && <span className='text-xs font-medium'>Accueil</span>}
            </Link>
          </li>
          <li>
            <Link title='Métiers' className={`flex flex-col items-center gap-2 hover:text-primary ${isJobs ? "text-primary" : "text-white"}`} to='/metiers'>
              <BriefcaseIcon className='w-5 stroke-2' />
              {isJobs && <span className='text-xs font-medium'>Métiers</span>}
            </Link>
          </li>
          <li>
            <Link title='Accueil' className={`flex flex-col items-center gap-2 hover:text-primary ${isUsers ? "text-primary" : "text-white"}`} to='/users'>
              <ArchiveBoxIcon className='w-5 stroke-2' />
              {isUsers && <span className='text-xs font-medium'>Users</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className='w-10 h-[2px] bg-white'></div>
      <nav>
        <ul className='flex flex-col min-w-10 gap-8'>
          <li>
            <Link title='Déconnexion' className='flex flex-col items-center gap-2 hover:text-primary text-white' to='/login'>
              <ArrowRightOnRectangleIcon className='w-5 stroke-2' />
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Sidebar;