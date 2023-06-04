'use client'
import React, { useState } from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { navLinks } from '@/constants';

export const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const pathname = usePathname();
    const [ navbar, setNavbar ] = useState(false);
    const [ active, setActive ] = useState('Inicio');

  return (
    <header className='text-gray-600 body-font w-full mx-auto px-4 sm:px-20 fixed top-0 z-20 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600'>                      
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            {
                currentTheme === 'dark'
                ? (
                    <button
                        className ='bg-slate-100 p-2 rounded-xl'
                        onClick={() => setTheme('light')}
                    >
                        <RiSunLine size={15} color={'black'} />
                    </button>
                )
                : (
                    <button
                        className='bg-slate-100 p-2 rounded-xl'
                        onClick={() => setTheme('dark')}
                    >
                        <RiMoonFill size={15} />
                    </button>
                )
            }
                <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NAAS</span>
            </a>
            <div className='mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <ul className='list-none sm:flex hidden justify-end items-end'>
                {
                    navLinks.map((nav, index) => (
                        <li 
                            key={nav.id}
                            className={`font-poppins cursor-pointer text-[16] dark:text-white
                                ${ active === nav.title ? 'text-gray-300' : 'text-dimWhite'} 
                                ${ index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } `}
                            onClick={() => setActive(nav.title)}
                        >
                            <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                                <a href={`#${nav.id}`} className='mr-5 hover:text-gray-900 gradient'>{nav.title}</a>
                            </nav>
                            
                        </li>
                    ))
                }
                </ul>
            </div>  
            <button 
                className={`sm:hidden p-2 text-gray-800 rounded-md outline-none inline-flex focus:border-gray-500 focus:border`}
                onClick={() => setNavbar(!navbar)}
            >
            {
                navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />
            }
            </button>
            <div
                className={`${!navbar ? 'hidden' : 'flex' } p-6 absolute top-3 right-0 mx-4 my2 min-w-[140px] sidebar`}
            >
                <ul className='list-none flex justify-end items-end flex-1 flex-col'>
                {
                    navLinks.map((nav, index) => (
                        <li 
                            key={nav.id}
                            className={`font-poppins cursor-pointer text-[8] top-20
                                ${ active === nav.title ? 'text-white' : 'text-dimWhite'} 
                                ${ index === navLinks.length - 1 ? 'mb-0' : 'mb-4' } `}
                            onClick={() => { setActive(nav.title); setNavbar(!navbar) }  }
                        >
                            <nav className='md:ml-auto flex flex-wrap items-center text-base justify-end'>
                                <a href={`#${nav.id}`} className='mr-5 hover:text-gray-900 gradient'>{nav.title}</a>
                            </nav>
                            
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    </header>
  )
}

{
    /*
    
    <header className='text-gray-600 body-font w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
        {
            currentTheme === 'dark'
            ? (
                <button
                    className ='bg-slate-100 p-2 rounded-xl'
                    onClick={() => setTheme('light')}
                >
                    <RiSunLine size={15} color={'black'} />
                </button>
            )
            : (
                <button
                    className='bg-slate-100 p-2 rounded-xl'
                    onClick={() => setTheme('dark')}
                >
                    <RiMoonFill size={15} />
                </button>
            )
        }
        <span className="ml-3 text-2xl text-gradient font-bold">NAAS</span>
        </a>
        <div className='mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <ul className='list-none sm:flex hidden justify-end items-end'>
            {
                navLinks.map((nav, index) => (
                    <li 
                        key={nav.id}
                        className={`font-poppins cursor-pointer text-[16] text-gradient
                            ${ active === nav.title ? 'text-white' : 'text-dimWhite'} 
                            ${ index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } `}
                        onClick={() => setActive(nav.title)}
                    >
                        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                            <a href={`#${nav.id}`} className='mr-5 hover:text-gray-900 gradient'>{nav.title}</a>
                        </nav>
                        
                    </li>
                ))
            }
            </ul>
        </div>  
        <button 
            className={`sm:hidden p-2 text-gray-300 rounded-md outline-none inline-flex focus:border-gray-400 focus:border`}
            onClick={() => setNavbar(!navbar)}
        >
        {
            navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />
        }
        </button>
        <div
            className={`${!navbar ? 'hidden' : 'flex' } p-6 text-gradient absolute top-3 right-0 mx-4 my2 min-w-[140px] sidebar`}
        >
            <ul className='list-none flex justify-end items-start flex-1 flex-col'>
            {
                navLinks.map((nav, index) => (
                    <li 
                        key={nav.id}
                        className={`font-poppins cursor-pointer text-[8] top-20
                            ${ active === nav.title ? 'text-white' : 'text-dimWhite'} 
                            ${ index === navLinks.length - 1 ? 'mb-0' : 'mb-4' } `}
                        onClick={() => { setActive(nav.title); setNavbar(!navbar) }  }
                    >
                        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-end'>
                            <a href={`#${nav.id}`} className='mr-5 hover:text-gray-900 gradient'>{nav.title}</a>
                        </nav>
                        
                    </li>
                ))
            }
            </ul>


        </div>

  </div>
    </header>
    */
}