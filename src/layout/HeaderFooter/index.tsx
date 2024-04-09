import React from 'react';
import Header from "../header";
import Footer from "../footer";
import { Outlet } from 'react-router-dom';

function HeaderFooter() {
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <div className="w-full h-full absolute top-0 left-0 flex flex-col text-darkClassic" ref={ref}>
            <Header test={ref}/>
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default HeaderFooter;
