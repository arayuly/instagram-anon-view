import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="flex min-h-screen">
            {/* Левая часть: Sidebar */}
            <Sidebar />

            {/* Правая часть: Контентная область */}
            <main className="flex-1 ml-20 xl:ml-60 transition-all duration-300">
                <div className="max-w-233.75 mx-auto py-8 px-4 text-[#F2F7FD]">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
