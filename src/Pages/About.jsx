// import icons
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineSelfImprovement, MdOutlineMenuBook } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";

// import components
import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";
import useAnimatedNumber from "../Components/About/useAnimatedNumber";
import HobbyCard from "../Components/About/HobbyCard";
import EducationCard from "../Components/About/EducationCard";
import LeftContent from "../Components/About/LeftContent";
import RightContent from "../Components/About/RightContent";

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
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28"
            style={{
                backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                imageRendering: 'pixelated',
            }}
        >
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
                    <LeftContent />

                    {/* Right */}
                    <RightContent animatedDays={animatedDays} />
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
                        <HobbyCard
                            key={h.title} {...h}
                        />
                    ))}
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}