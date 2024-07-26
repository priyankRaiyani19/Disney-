import React from 'react';
import Logo from '../assets/logo.svg'


const NavBar = (props) => {
    return (
        <div className="z-10 fixed flex justify-between tracking-[16px] items-center top-0 right-0 left-0 h-[250px] bg-[#090b13] pl-[200px] pr-[200px]
        font-medium">
            <div className="flex flex-row items-center flex-nowrap ">
            <img className="h-full w-[350px] mt-[4px] max-h-[870px] block"
                src={Logo} alt=""/>
            <div className=" flex flex-row relative items-center flex-nowrap ml-[200px] mt-[50px] text-7xl sm:hidden lg:flex ">
                Menu
            </div>
        </div>
        </div>
    );
};

export default NavBar;