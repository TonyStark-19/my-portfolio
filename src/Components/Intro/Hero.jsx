// import link
import { Link } from "react-router-dom";

// import components
import TypingText from "./TypingText";

// import icons
import { LuArrowRight } from "react-icons/lu";

// hero component
export default function Hero({ TYPING_PHRASES }) {
    return (
        <div className="max-w-5xl">
            <p className="text-[#555555] text-[13px] font-mono tracking-[0.2em] uppercase mb-4">
                Available for work
                <span className="inline-block ml-2 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse -translate-y-px" />
            </p>

            <p className="text-[#555555] text-[28px] md:text-[36px] font-light mb-1">
                Hi, I'm
            </p>

            <h1
                className="text-[13vw] sm:text-[80px] md:text-[92px] font-semibold tracking-tighter leading-none
                bg-linear-to-r from-white via-white/80 to-white/25 bg-clip-text text-transparent"
            >
                Aditya Chandel
            </h1>

            <div className="mt-4 text-[22px] md:text-[28px] font-light h-10">
                <TypingText phrases={TYPING_PHRASES} />
            </div>

            <p className="mt-8 text-[#666666] text-[16px] max-w-xl leading-relaxed">
                I love{" "}
                <span className="text-white/90">building, improving, and contributing</span>{" "}
                to digital projects that challenge me. Coding is how I{" "}
                <span className="text-white/90">feed my creativity</span>{" "}
                and explore new possibilities.
            </p>

            <div className="flex gap-3 mt-10 max-[500px]:flex-col">
                <Link
                    to="/projects"
                    className="max-[500px]:w-full"
                >
                    <button
                        className="flex items-center justify-center gap-2 bg-white text-black px-7 py-3 rounded-xl text-[14px] font-semibold
                        hover:bg-blue-400 hover:text-white active:scale-[0.97] transition-all duration-200 w-full group cursor-pointer"
                    >
                        View Projects
                        <LuArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </button>
                </Link>

                <Link
                    to="/about"
                    className="max-[500px]:w-full"
                >
                    <button
                        className="flex items-center justify-center border border-white/10 text-[#888888] px-7 py-3 rounded-xl text-[14px] font-medium
                        hover:border-white/20 hover:text-white active:scale-[0.97] transition-all duration-200 w-full cursor-pointer"
                    >
                        About me
                    </button>
                </Link>
            </div>
        </div>
    )
}