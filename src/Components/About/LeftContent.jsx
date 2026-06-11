// import icons
import { MdOutlineArrowForward } from "react-icons/md";

// import link
import { Link } from "react-router-dom";

// left content component
export default function LeftContent() {
    return (
        <div className="lg:col-span-2 flex flex-col gap-4 h-full">
            <div className="relative group rounded-2xl h-full min-h-105 overflow-hidden border border-white/6 aspect-3/4">
                <img
                    src="/images/Other/profile.jpg"
                    alt="Aditya Chandel"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 
                    transition-all duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5">
                    <h3 className="text-[16px] font-semibold text-white">
                        Aditya Chandel
                    </h3>

                    <p className="text-blue-400 text-[12px] font-mono mt-0.5">
                        Full Stack Developer
                    </p>
                </div>
            </div>

            <Link
                to="/connect"
                className="group"
            >
                <div
                    className="flex items-center justify-between p-6 rounded-2xl bg-blue-600/90
                    hover:bg-blue-500 active:scale-[0.98] transition-all duration-200"
                >
                    <div>
                        <h4 className="text-[15px] font-semibold text-white">
                            Connect with me
                        </h4>

                        <p className="text-blue-100/60 text-[12px] mt-0.5">
                            Let's build something together
                        </p>
                    </div>

                    <MdOutlineArrowForward className="text-[18px] text-white" />
                </div>
            </Link>
        </div>
    )
}