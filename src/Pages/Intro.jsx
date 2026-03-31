// import icons
import { LuArrowRight } from "react-icons/lu";

// import link
import { Link } from "react-router-dom";

// import components
import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";
import ParticleBackground from "../Components/Intro/ParticleBackground";
import TypingText from "../Components/Intro/TypingText";
import FeaturedProjects from "../Components/Intro/FeaturedProjects";
import GitHubCard from "../Components/Intro/GitHubCard";
import StreakStat from "../Components/Intro/StreakStat";

// constants
const STREAK_START = Date.UTC(2024, 6, 9);
const GITHUB_USERNAME = "TonyStark-19";

// typing animation phrases
const TYPING_PHRASES = [
    "Full Stack Developer",
    "Open Source Contributor",
    "Freelancer",
    "Learning AI ML and Data Science",
];

// GitHub calendar theme (dark mode only)
const GITHUB_THEME = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

// Intro page component
export default function Intro() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <div className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col">

            {/* Particle bg — hero only */}
            <div className="absolute inset-0 h-screen overflow-hidden">
                <ParticleBackground />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#0a0a0a] to-transparent" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 w-full flex-1 p-10 lg:p-20 max-lg:pt-28 max-[500px]:p-5 flex flex-col justify-center">

                {/* ── Hero ── */}
                <div className="max-w-5xl">
                    <p className="text-[#555555] text-[13px] font-mono tracking-[0.2em] uppercase mb-4">
                        Available for work
                        <span className="inline-block ml-2 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse -translate-y-px" />
                    </p>

                    <p className="text-[#555555] text-[28px] md:text-[36px] font-light mb-1">
                        Hi, I'm
                    </p>

                    <h1 className="text-[13vw] sm:text-[80px] md:text-[96px] font-bold tracking-tighter leading-none
                    bg-linear-to-r from-white via-white/80 to-white/25 bg-clip-text text-transparent">
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
                        <Link to="/projects" className="max-[500px]:w-full">
                            <button className="flex items-center justify-center gap-2 bg-white text-black px-7 py-3 rounded-xl text-[14px] font-semibold
                            hover:bg-blue-400 hover:text-white active:scale-[0.97] transition-all duration-200 w-full group cursor-pointer">
                                View Projects
                                <LuArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
                            </button>
                        </Link>

                        <Link to="/about" className="max-[500px]:w-full">
                            <button className="flex items-center justify-center border border-white/10 text-[#888888] px-7 py-3 rounded-xl text-[14px] font-medium
                            hover:border-white/20 hover:text-white active:scale-[0.97] transition-all duration-200 w-full cursor-pointer">
                                About me
                            </button>
                        </Link>
                    </div>
                </div>

                {/* ── Featured Projects ── */}
                <FeaturedProjects />

                {/* ── Consistency ── */}
                <div className="mt-24 max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-px h-5 bg-blue-400/50 rounded-full" />
                        <h4 className="text-[18px] text-white font-medium tracking-tight">
                            Consistent Coder. Daily Learner.
                        </h4>
                    </div>

                    <p className="text-[#555555] text-[15px] leading-relaxed max-w-2xl">
                        I believe in the power of marginal gains — becoming{" "}
                        <span className="text-white/70">1% better every single day</span>.
                        This discipline led me to consistently share my progress on LinkedIn for{" "}
                        <StreakStat days={daysStreak} />{" "}
                        and counting.
                    </p>

                    <GitHubCard username={GITHUB_USERNAME} theme={GITHUB_THEME} />
                </div>

                <Footer />
            </div>
        </div>
    );
}