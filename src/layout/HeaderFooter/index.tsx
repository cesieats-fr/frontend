import React from 'react';
import Header from "../header";
import Footer from "../footer";
import { Outlet } from 'react-router-dom';

function HeaderFooter(props: any) {
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={ref}>
            <Header />
            <Outlet />
            <Footer test={ref}/>
        </div>
    );
}

export default HeaderFooter;
