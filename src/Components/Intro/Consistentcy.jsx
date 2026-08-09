// import components
import GitHubCard from "./GitHubCard";
import StreakStat from "./StreakStat";

// consistency component
export default function Consistency({ daysStreak, GITHUB_USERNAME, GITHUB_THEME }) {
    return (
        <div className="mt-24 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-px h-5 bg-blue-400/50 rounded-full" />
                <h4 className="text-[18px] text-white font-medium tracking-tight">
                    Consistent Coder. Daily Learner.
                </h4>
            </div>

            <p className="text-[#555555] text-[15px] leading-6 max-w-3xl">
                I believe in the power of marginal gains — becoming{" "}
                <span className="text-white/70">1% better every single day</span>.
                This discipline led me to consistently share my progress on LinkedIn for{" "}
                <StreakStat days={daysStreak} />{" "}
                and counting.
            </p>

            {/* github card */}
            <GitHubCard
                username={GITHUB_USERNAME}
                theme={GITHUB_THEME}
            />
        </div>
    )
}