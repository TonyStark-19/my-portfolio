// import components
import PhilosophyCard from "./PhilosophyCard";

// import icons
import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineAutoFixHigh, MdOutlineSelfImprovement } from "react-icons/md";

// right content component
export default function RightContent({ animatedDays }) {
    return (
        <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Streak */}
            <div
                className="relative overflow-hidden flex flex-col justify-between gap-6 p-7 rounded-2xl h-full bg-white/2 border border-white/6
                hover:border-blue-400/20 hover:bg-white/4 transition-all duration-300 group"
            >
                {/* Accent line */}
                <div
                    className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-blue-400/0 via-blue-400/40 to-blue-400/0
                    opacity-0 group-hover:opacity-100 transition-all duration-500"
                />

                {/* Tag */}
                <span
                    className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-blue-500/10 border
                    border-blue-500/20 text-blue-400 w-fit"
                >
                    Non-Stop Progress
                </span>

                {/* Number */}
                <div>
                    <div className="flex items-baseline gap-3">
                        <span
                            className="text-[72px] md:text-[88px] font-bold leading-none tracking-tighter group-hover:text-blue-400
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
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                    bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none"
                />

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
    )
}