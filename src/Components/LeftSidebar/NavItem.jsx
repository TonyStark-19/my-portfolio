// import link
import { Link } from "react-router-dom";

// import icons
import { IoIosArrowForward } from "react-icons/io";

// nav item componenet
export default function NavItem({ item, isActive, onClick }) {
    const Icon = item.icon;

    return (
        <Link
            to={item.path}
            onClick={onClick}
            className={`
                relative w-full flex items-center justify-between px-4 py-2 rounded-xl
                transition-all duration-200 ease-out group cursor-pointer
                ${isActive
                    ? "bg-white/6 text-white"
                    : "text-[#777777] hover:bg-white/4 hover:text-[#cccccc]"
                }
            `}
        >
            {/* Active indicator bar */}
            {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-5 bg-blue-400 rounded-r-full" />
            )}

            {/* Icon + Label */}
            <div className="flex items-center gap-3.5">
                <span
                    className={`
                        flex items-center justify-center w-8 h-8 rounded-lg text-[16px] transition-all duration-200
                        ${isActive
                            ? "bg-blue-500/15 text-blue-400"
                            : "text-[#555555] group-hover:text-[#aaaaaa]"
                        }
                    `}
                >
                    <Icon />
                </span>

                <span className="text-[15px] font-medium tracking-[0.01em]">
                    {item.name}
                </span>
            </div>

            {/* Arrow */}
            <IoIosArrowForward
                className={`
                    text-sm transition-all duration-200
                    ${isActive
                        ? "opacity-100 text-blue-400 translate-x-0"
                        : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                    }
                `}
            />
        </Link>
    );
}