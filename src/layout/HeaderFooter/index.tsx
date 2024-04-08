import React from 'react';
import Header from "../header";
import Footer from "../footer";
import { Outlet } from 'react-router-dom';

function HeaderFooter() {
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={ref}>
            <Header test={ref}/>
            <Outlet />
            <Footer />
        </div>
    );
}

export default HeaderFooter;
