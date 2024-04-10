import Header from "../../components/header";
import Footer from "../../components/footer";
import { ReactNode } from "react";

type HeaderFooterProps = {
    children: ReactNode;
}

function HeaderFooter({ children }: HeaderFooterProps) {

    return (
        <div className="w-full h-full absolute top-0 left-0 flex flex-col text-darkClassic">
            <Header />
            <div className='flex-1 p-10'>
                { children }
            </div>
            <Footer />
        </div>
    );
}

export default HeaderFooter;
