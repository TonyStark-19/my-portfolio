// import react icons
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineAutoFixHigh, MdOutlineSelfImprovement, MdOutlineMenuBook, MdOutlineArrowForward } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";

// import link
import { Link } from "react-router-dom";

// import HobbyCard component
import HobbyCard from "../Components/HobbyBox";

// about page component
export default function About() {
    const startDate = new Date("2024-07-09");
    const today = new Date();
    const daysStreak = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-2">About Me</h2>
                    <h1 className="text-5xl font-bold tracking-tighter">Identity & Journey</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-auto gap-4">

                    <div className="md:col-span-2 space-y-4">
                        {/* Profile Image Block */}
                        <div className="relative group rounded-[2.5rem] overflow-hidden border border-[#222222] h-112.5">
                            <img
                                src="/images/profile.jpg"
                                alt="Aditya Chandel"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold">Aditya Chandel</h3>
                                <p className="text-blue-400 text-sm italic">Full Stack Developer</p>
                            </div>
                        </div>

                        {/* Connect With Me Block */}
                        <Link to="/connect" className="block group">
                            <div className="bg-blue-600 hover:bg-blue-500 p-8 rounded-[2.5rem] transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Connect with me</h4>
                                    <p className="text-blue-100/70 text-sm mt-1">Let's build something together</p>
                                </div>
                                <div className="bg-white/20 p-3 rounded-full group-hover:translate-x-2 transition-transform">
                                    <MdOutlineArrowForward className="text-2xl text-white" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Hero Streak Block */}
                        <div className="md:col-span-4 bg-[#111111] border border-[#222222] rounded-[2.5rem] p-10 flex flex-col justify-center relative
                        overflow-hidden group">
                            <div className="relative z-10">
                                <span className="bg-blue-500/10 text-blue-500 text-xs font-mono px-3 py-1 rounded-full border border-blue-500/20">
                                    Non-Stop Progress</span>
                                <h3 className="text-7xl md:text-8xl font-black mt-4 group-hover:text-blue-500 transition-colors">
                                    {daysStreak} <span className="text-3xl font-light text-[#444]">Days</span>
                                </h3>
                                <p className="text-[#888888] text-xl mt-4 max-w-md leading-relaxed">
                                    A journey defined by <span className="text-white font-medium">unwavering consistency</span>.
                                    Turning small wins into major milestones.
                                </p>
                            </div>
                            <HiOutlineSparkles className="absolute -right-10 -bottom-10 text-white/5 text-[15rem] group-hover:rotate-12 transition-transform
                            duration-700" />
                        </div>

                        {/* Philosophy Block */}
                        <div className="md:col-span-2 bg-[#111111] border border-[#222222] rounded-[2.5rem] p-8 hover:border-blue-500/30 transition-all group">
                            <MdOutlineSelfImprovement className="text-blue-500 text-3xl mb-4" />
                            <h4 className="text-xl font-bold mb-4">The 1% Philosophy</h4>
                            <p className="text-sm text-[#666666] leading-relaxed">
                                I focus on detailed, marginal gains. Helping others by giving advice while becoming better <span className="text-white">
                                    every single day</span>.
                            </p>
                        </div>

                        {/* Craft Block */}
                        <div className="md:col-span-2 bg-[#111111] border border-[#222222] rounded-[2.5rem] p-8 hover:border-blue-500/30 transition-all group">
                            <MdOutlineAutoFixHigh className="text-emerald-500 text-3xl mb-4" />
                            <h4 className="text-xl font-bold mb-4">Refined Craft</h4>
                            <p className="text-sm text-[#666666] leading-relaxed">
                                Fascinated by the gears behind the screen. I revisit old codebases to update them with <span className="text-white">
                                    best practices</span>.
                            </p>
                        </div>
                    </div>

                    {/* Hobbies Section: Separate Boxes */}
                    <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <HobbyCard icon={<MdOutlineSelfImprovement />} title="Zen" desc="Meditation & Fitness" />
                        <HobbyCard icon={<MdOutlineMenuBook />} title="Literary" desc="Poetry & Reading" />
                        <HobbyCard icon={<HiOutlineSparkles />} title="Spirit" desc="Travel & Music" />
                        <HobbyCard icon={<FaQuoteLeft />} title="Wit" desc="Articles & Humor" />
                    </div>

                </div>
            </div>
        </div>
    );
}