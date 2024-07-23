import React from 'react';
import LoginImg from '../assets/login-background.jpg';
import CTA from '../assets/cta-logo-one.svg'

const Login = (props) => {
    return (
        <div className="overflow-hidden flex flex-col text-center h-[100vh]">
            <div className=" flex flex-col justify-center items-center pt-[80px] pr-[40px]
            text-white text-[50px] mb-[10vw] w-[100%] h-[100%]
             relative min-h-[100vh] box-border">
                <img className="absolute h-[100%] w-[100%]  m-0 z-0"
                     src={LoginImg} alt="Not_Found"
                />
                <div className=" absolute z-10 mb-[2vw] max-w-[1900px] flex-wrap flex flex-col
                 justify-center mt-0 text-center items-center mr-auto ml-auto
                 ease-out transition-opacity duration-200 w-[100%]">
                    <img className="z-1 max-w-full mb-[12px] min-h-[1px] block "
                         src={CTA} alt="Not_Found"/>

                    <a className="w-full">
                    <button className="font-bold w-full max-w-full ml-0
                    bg-[#0063e5] text-[#f9f9f9] tracking-[1.5px] text-[80px] pt-[1.5px] pr-0 rounded-lg
                    hover:bg-[#0483ee] hover:scale-x-105 duration-200"
                    >GET ALL THERE</button>
                        <div>
                            d
                        </div>


                    </a>
                </div>

            </div>
        </div>
    );
};

export default Login;