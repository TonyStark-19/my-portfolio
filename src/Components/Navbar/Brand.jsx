// import link
import { Link } from "react-router-dom";

// brand component
export default function Brand() {
    return (
        <div className="flex items-center gap-2.5">
            {/* Logo */}
            <img
                src="/images/Other/profile.jpg"
                alt="profile"
                className="w-7 h-7 rounded-full"
            />

            <Link to="/">
                <span className="text-[16px] font-semibold text-white/90 tracking-wide">
                    Aditya Chandel
                </span>
            </Link>
        </div>
    );
}