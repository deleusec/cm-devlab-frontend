import { HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div id='sidebar' className='py-[30px] w-20 h-full bg-secondary rounded-tr-xl flex flex-col items-center'>
      <nav>
        <ul className='flex flex-col min-w-10'>
          <li>
            <Link className='flex flex-col items-center gap-2 text-white hover:text-primary' to='/'>
              <HomeIcon className='w-5 stroke-2' />
              <span className='text-xs font-medium'>Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;