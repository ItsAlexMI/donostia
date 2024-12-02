  import React from 'react';
  import { Link } from 'react-router-dom';
  import Instagram from '@mui/icons-material/Instagram';
  import Public from '@mui/icons-material/Public';

  const Navbar = () => {
    return (
      <nav className="navbar bg-gray-50 rounded-lg shadow-lg p-4 flex w-full gap-2 max-md:flex-col md:items-center">
        <div className="flex w-full items-center justify-between">
          <div className="navbar-end items-center justify-between max-md:w-full">
            <Link
              className="text-lg font-semibold text-gray-700 no-underline hover:text-gray-900"
              to="/"
            >
              <Public className='text-green-300' style={{fontSize: '40px' }}/>
              Donostia
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="collapse-toggle btn btn-outline btn-primary btn-sm btn-square"
                data-collapse="#default-navbar-collapse"
                aria-controls="default-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="default-navbar-collapse"
          className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
        >
          <ul className="menu md:menu-horizontal bg-gray-50 gap-4 p-0 text-base text-gray-700">
            <li>
              <Link
              
                to="/"
                className="text-md px-3 py-2 rounded-md hover:rounded-full bg-gray-50 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <Public className='text-indigo-400' />
                Hasi
              </Link>
            </li>
            <li>
              
              <Link
                to="/about"
                className="px-3 py-2 rounded-md hover:rounded-full bg-gray-50 text-gray-700 hover:bg-gray-200 hover:text-gray-900 text-md" 
              >
                  <Instagram className='text-violet-400'/>
                _moremnb_
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-md px-3 py-2 rounded-md hover:rounded-full bg-gray-50 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <Instagram className='text-purple-400'/>
                sharys_paolab
              </Link>
            </li>
            <li>
              <Link
                to="/radoksiii"
                className="text-md px-3 py-2 rounded-md hover:rounded-full bg-gray-50 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <Instagram className='text-fuchsia-400'/>
                radoksiii
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;
