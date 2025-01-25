import ButtonLink from './ButtonLink';


const NavBarDrawer = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </label>
                </div>
                <div className="mx-2 flex-1 px-2"></div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                        <li><ButtonLink href="/informations"> Informations </ButtonLink></li>
                        <li><ButtonLink href="/hebergement"> Hébergement </ButtonLink></li>
                        <li><ButtonLink href="/cadeaux"> Liste de mariage </ButtonLink></li>
                        <li><ButtonLink href="/contact"> Contact </ButtonLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <h5 id="drawer-disabled-backdrop-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <button type="button" data-drawer-hide="drawer-disabled-backdrop" aria-controls="drawer-disabled-backdrop" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>

                <li><ButtonLink href="/informations"> Informations </ButtonLink></li>
                <li><ButtonLink href="/hebergement"> Hébergement </ButtonLink></li>
                <li><ButtonLink href="/cadeaux"> Liste de mariage </ButtonLink></li>
                <li><ButtonLink href="/contact"> Contact </ButtonLink></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBarDrawer;
