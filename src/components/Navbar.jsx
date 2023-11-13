import React from 'react'
import { navLinks } from '../constants'
import { logo, iconmenu, iconmenuclose } from '../assets'
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-8 justify-center items-center">
        <div className='md:w-[80%] w-[100%] flex justify-betweens items-center'>
            <img src={logo} alt="hoobank" className="w-[20%] h-[20%] sm:w-[8%]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-inter hover:text-secondary hover:font-semibold font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-secondary font-semibold" : "text-primary"
                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    onClick={() => setActive(nav.title)}
                >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                src={toggle ? iconmenuclose : iconmenu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
                />

                <div
                className={`${
                    !toggle ? "hidden" : "flex"
                } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[250px]`}
                >
                <ul className="list-none flex justify-end py-3 items-start flex-1 flex-col">
                    {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-medium p-3 cursor-pointer text-[18px] ${
                        active === nav.title ? "text-secondary font-bold" : "text-dimWhite"
                        } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
