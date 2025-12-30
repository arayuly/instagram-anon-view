import { HomeIcon, SavedIcon, SearchIcon } from "../icons/Icons";

const Sidebar = () => {
    const menuItems = [
        { icon: <HomeIcon />, label: "Home" },
        { icon: <SavedIcon />, label: "Saved" },
        { icon: <SearchIcon />, label: "Search" },
        // { icon: <Search />, label: "Поисковый запрос" },
        // { icon: <Explore />, label: "Интересное" },
        // { icon: <Film />, label: "Reels" },
        // { icon: <MessageCircle />, label: "Сообщения" },
        // { icon: <Heart />, label: "Уведомления" },
        // { icon: <PlusSquare />, label: "Создать" },
        // { icon: <User />, label: "Профиль" },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-20 xl:w-60 border-r border-[#454545] bg-[#080806] text-[#F2F7FD] p-3 flex flex-col transition-all">
            <div className="mb-10 pt-6 px-3">
                <h1 className="text-xl font-bold hidden xl:block">Instagram</h1>
                <div className="xl:hidden">
                    <img src="/insta_icon.png" alt="Instagram" />
                </div>
            </div>

            <nav className="flex-1">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center p-3 mb-2 hover:bg-[#1a1a1a] rounded-lg cursor-pointer group duration-300"
                    >
                        <span className="group-hover:scale-110 transition-transform">
                            {item.icon}
                        </span>
                        <span className="ml-4 text-lg hidden xl:block">
                            {item.label}
                        </span>
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
