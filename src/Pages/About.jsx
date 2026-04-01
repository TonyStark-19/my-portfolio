// import icons
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineAutoFixHigh, MdOutlineSelfImprovement, MdOutlineMenuBook, MdOutlineArrowForward } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

// import components
import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";
import useAnimatedNumber from "../Components/About/useAnimatedNumber";
import HobbyCard from "../Components/About/HobbyCard";
import PhilosophyCard from "../Components/About/PhilosophyCard";
import EducationCard from "../Components/About/EducationCard";

// constants
const STREAK_START = Date.UTC(2024, 6, 9);

// hobbies data
const HOBBIES = [
    {
        icon: MdOutlineSelfImprovement,
        title: "Zen",
        desc: "Meditation & Fitness",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "hover:border-blue-400/20",
    },
    {
        icon: MdOutlineMenuBook,
        title: "Literary",
        desc: "Poetry & Reading",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "hover:border-purple-400/20",
    },
    {
        icon: HiOutlineSparkles,
        title: "Spirit",
        desc: "Travel & Music",
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "hover:border-amber-400/20",
    },
    {
        icon: FaQuoteLeft,
        title: "Wit",
        desc: "Articles & Humor",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "hover:border-emerald-400/20",
    },
];

// about page component
export default function About() {
    const daysStreak = useDaysStreak(STREAK_START);
    const animatedDays = useAnimatedNumber(daysStreak);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                        About Me
                    </p>

                    <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight leading-none">
                        Identity & Journey
                    </h1>

                    <p className="text-[#444444] mt-3 text-[14px] italic">
                        The story behind my work — built on consistency, curiosity, and continuous evolution.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">

                    {/* Left */}
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

                        <Link to="/connect" className="group">
                            <div className="flex items-center justify-between p-6 rounded-2xl bg-blue-600/90
                            hover:bg-blue-500 active:scale-[0.98] transition-all duration-200">
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

                    {/* Right */}
                    <div className="lg:col-span-3 flex flex-col gap-4">

                        {/* Streak */}
                        <div
                            className="relative overflow-hidden flex flex-col justify-between gap-6 p-7 rounded-2xl h-full bg-white/2 border border-white/6
                            hover:border-blue-400/20 hover:bg-white/4 transition-all duration-300 group"
                        >
                            {/* Accent line */}
                            <div className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-blue-400/0 via-blue-400/40 to-blue-400/0
                            opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Tag */}
                            <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-blue-500/10 border
                            border-blue-500/20 text-blue-400 w-fit">
                                Non-Stop Progress
                            </span>

                            {/* Number */}
                            <div>
                                <div className="flex items-baseline gap-3">
                                    <span
                                        className="text-[72px] md:text-[88px] font-black leading-none tracking-tighter group-hover:text-blue-400
                                        transition-colors duration-300"
                                    >
                                        {animatedDays}
                                    </span>

                                    <span className="text-[20px] font-light text-white/40">
                                        Days
                                    </span>
                                </div>

                                {/* Your Text */}
                                <p className="text-[14px] text-white/60 mt-3 leading-relaxed max-w-sm group-hover:text-white/70 transition-colors duration-300">
                                    A journey defined by{" "}
                                    <span className="text-white font-medium">
                                        unwavering consistency
                                    </span>.
                                    <br />
                                    Turning small wins into major milestones.
                                </p>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                            bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

                            {/* Decorative icon */}
                            <HiOutlineSparkles
                                className="absolute -right-8 -bottom-8 text-white/20 text-[12rem] group-hover:rotate-12 group-hover:scale-105
                                transition-all duration-700 pointer-events-none"
                            />
                        </div>

                        {/* Philosophy */}
                        <div className="grid grid-cols-1 gap-4">
                            <PhilosophyCard
                                icon={MdOutlineSelfImprovement}
                                title="The 1% Philosophy"
                                description="Focus on marginal gains — sharing knowledge while continuously evolving through daily practice and deliberate repetition."
                                iconColor="text-blue-400"
                                tag="Mindset"
                            />
                            <PhilosophyCard
                                icon={MdOutlineAutoFixHigh}
                                title="Refined Craft"
                                description="Fascinated by what lives behind the screen. I revisit old codebases to update them with best practices —
                                elegance through iteration."
                                iconColor="text-emerald-400"
                                tag="Approach"
                            />
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mt-10">
                    <EducationCard
                        title="HRIST College"
                        subtitle="BCA, Computer Science"
                        duration="Sep 2023 - Sep 2026"
                    />
                    <EducationCard
                        title="Happy Model School"
                        subtitle="XII, PCM • 85%"
                        duration=""
                        extra="Class Topper - XII (PCM)"
                    />
                </div>

                {/* Hobbies */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {HOBBIES.map((h) => (
                        <HobbyCard key={h.title} {...h} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}