import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext';


const navigation = [

    { name: 'Popular', router: '/popular', current: false },
    { name: 'Top Rated', router: '/toprated', current: false },
    { name: 'Upcoming', router: '/upcoming', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
    const { state, dispatch } = useContext(AuthContext)
    const router = useNavigate();
    const LOGOUT = () => {
        dispatch({ type: "LOGOUT" })
        router('/')
    }

    const route = useNavigate()

    const handlenavigate = (router) => {
        route(router)
    }



    return (
        <>
            <Disclosure as="nav" className="bg-sky-950 ">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center ml-9  sm:items-stretch sm:justify-start sm:ml-0">
                                    <div className="flex flex-shrink-0 items-center" onClick={()=>router('/')}>
                                        <img
                                            className="h-5 w-auto cursor-pointer"
                                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    onClick={() => handlenavigate(item.router)}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white ' : 'text-white hover:bg-sky-900 hover:text-white',
                                                        'rounded-md px-2 py-2 text-sm font-semibold cursor-pointer'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                {state?.user ? (<>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        {/* <button
                                            type="button"
                                            className="relative rounded-full  p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button> */}
                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <span className='text-white text-sm cursor-pointer  font-semibold rounded-md px-3 py-2 hover:bg-sky-900 '>{state.user.name}</span>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a onClick={LOGOUT} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>Sign out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </>) : (
                                    <>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                            <div className='text-white text-sm cursor-pointer  font-semibold rounded-md px-3 py-2 hover:bg-sky-900 ' onClick={() => router('/login')}>Login</div>
                                            <div className='text-white text-sm cursor-pointer  font-semibold rounded-md px-3 py-2 hover:bg-sky-900 ' onClick={() => router('/register')}>Join TMDB</div>
                                        </div>

                                    </>)}

                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        onClick={() => handlenavigate(item.router)}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default Navbar;