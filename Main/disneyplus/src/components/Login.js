import React from 'react';
import LoginImg from '../assents/login-background.jpg';

const Login = (props) => {
    return (
        <div className="overflow-hidden flex flex-col text-center h-[100vh]">
            <div className=" flex flex-col justify-center items-center pt-[80px] pr-[40px]
            text-white text-[50px] mb-[10vw] w-[100%] h-[100%]
             relative min-h-[100vh] box-border">
                <LoginImg/>
            </div>
        </div>
    );
};

export default Login;