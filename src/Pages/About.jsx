import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineAutoFixHigh, MdOutlineSelfImprovement, MdOutlineMenuBook, MdOutlineArrowForward } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";

// ─── Constants ────────────────────────────────────────────────────────────────

const STREAK_START = Date.UTC(2024, 6, 9);

const HOBBIES = [
    { icon: MdOutlineSelfImprovement, title: "Zen", desc: "Meditation & Fitness", color: "text-blue-400", bg: "bg-blue-400/10", border: "hover:border-blue-400/20" },
    { icon: MdOutlineMenuBook, title: "Literary", desc: "Poetry & Reading", color: "text-purple-400", bg: "bg-purple-400/10", border: "hover:border-purple-400/20" },
    { icon: HiOutlineSparkles, title: "Spirit", desc: "Travel & Music", color: "text-amber-400", bg: "bg-amber-400/10", border: "hover:border-amber-400/20" },
    { icon: FaQuoteLeft, title: "Wit", desc: "Articles & Humor", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "hover:border-emerald-400/20" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function HobbyCard({ icon: Icon, title, desc, color, bg, border }) {
    return (
        <div className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl text-center
            bg-white/[0.02] border border-white/[0.06] ${border}
            hover:bg-white/[0.04] transition-all duration-200 group`}>
            <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center
                group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`text-[18px] ${color}`} />
            </div>
            <div>
                <h5 className="text-[13px] font-semibold text-white/80">{title}</h5>
                <p className="text-[11px] font-mono text-[#3a3a3a] uppercase tracking-widest mt-0.5">{desc}</p>
            </div>
        </div>
    );
}

function StatBlock({ value, label }) {
    return (
        <div className="flex flex-col">
            <span className="text-[28px] font-bold text-white tracking-tight leading-none">{value}</span>
            <span className="text-[11px] font-mono text-[#3a3a3a] uppercase tracking-widest mt-1">{label}</span>
        </div>
    );
}

function PhilosophyCard({ icon: Icon, title, description, iconColor }) {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]
            hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200 group">
            <div className={`text-[20px] ${iconColor}`}>
                <Icon />
            </div>
            <div>
                <h4 className="text-[14px] font-semibold text-white/90">{title}</h4>
                <p className="text-[13px] text-[#555555] leading-relaxed mt-1.5 group-hover:text-[#777777] transition-colors duration-200">
                    {description}
                </p>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function About() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                        About Me
                    </p>
                    <h1 className="text-[36px] md:text-[52px] font-bold tracking-tight leading-none">
                        Identity & Journey
                    </h1>
                </div>

                {/* ── Main grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                    {/* Left col — profile + connect */}
                    <div className="lg:col-span-2 flex flex-col gap-4">

                        {/* Profile image */}
                        <div className="relative group rounded-2xl h-105 overflow-hidden border border-white/[0.06] aspect-[3/4]">
                            <img
                                src="/images/Other/profile.jpg"
                                alt="Aditya Chandel"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            <div className="absolute bottom-5 left-5">
                                <h3 className="text-[16px] font-semibold text-white">Aditya Chandel</h3>
                                <p className="text-blue-400 text-[12px] font-mono mt-0.5">Full Stack Developer</p>
                            </div>
                        </div>

                        {/* Connect CTA */}
                        <Link to="/connect" className="group">
                            <div className="flex items-center justify-between p-6 rounded-2xl bg-blue-600/90
                                hover:bg-blue-500 active:scale-[0.98] transition-all duration-200">
                                <div>
                                    <h4 className="text-[15px] font-semibold text-white">Connect with me</h4>
                                    <p className="text-blue-100/60 text-[12px] mt-0.5">Let's build something together</p>
                                </div>
                                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center
                                    group-hover:translate-x-1 transition-transform duration-200">
                                    <MdOutlineArrowForward className="text-[18px] text-white" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right col */}
                    <div className="lg:col-span-3 flex flex-col gap-4">

                        {/* Streak hero block */}
                        <div className="relative overflow-hidden flex flex-col justify-between gap-6 p-7 rounded-2xl
                            bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group">

                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1
                                    rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                    Non-Stop Progress
                                </span>
                            </div>

                            <div>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-[72px] md:text-[88px] font-black leading-none tracking-tighter
                                        group-hover:text-blue-400 transition-colors duration-300">
                                        {daysStreak}
                                    </span>
                                    <span className="text-[20px] font-light text-[#333333]">Days</span>
                                </div>
                                <p className="text-[14px] text-[#555555] mt-2 leading-relaxed max-w-sm group-hover:text-[#777777] transition-colors duration-300">
                                    A journey defined by{" "}
                                    <span className="text-white/70">unwavering consistency</span>.
                                    Turning small wins into major milestones.
                                </p>
                            </div>

                            {/* Stats row */}
                            <div className="flex items-center gap-8 pt-4 border-t border-white/[0.05]">
                                <StatBlock value="6+" label="Projects" />
                                <StatBlock value="4+" label="Internships" />
                                <StatBlock value="2+" label="Freelance" />
                            </div>

                            {/* Decorative sparkle */}
                            <HiOutlineSparkles className="absolute -right-8 -bottom-8 text-white/[0.03] text-[12rem]
                                group-hover:rotate-12 transition-transform duration-700 pointer-events-none" />
                        </div>

                        {/* Philosophy cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <PhilosophyCard
                                icon={MdOutlineSelfImprovement}
                                title="The 1% Philosophy"
                                description="I focus on marginal gains — sharing knowledge while continuously evolving through daily practice."
                                iconColor="text-blue-400"
                            />
                            <PhilosophyCard
                                icon={MdOutlineAutoFixHigh}
                                title="Refined Craft"
                                description="Fascinated by what's behind the screen. I revisit old codebases to update them with best practices."
                                iconColor="text-emerald-400"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Hobbies ── */}
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {HOBBIES.map((h) => (
                        <HobbyCard key={h.title} {...h} />
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    );
}