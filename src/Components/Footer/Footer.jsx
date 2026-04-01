// import components
import useDaysStreak from "./useDaysStreak";
import StreakBadge from "./StreakBadge";

// streak constant
const STREAK_START = Date.UTC(2024, 6, 9); // July 9, 2024

// footer component
export default function Footer() {
    const year = new Date().getFullYear();
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <footer className="w-full border-t border-white/4 bg-[#0a0a0a] mt-20">
            <div className="max-w-7xl mx-auto px-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">

                {/* Copyright */}
                <p className="text-[12px] text-[#3a3a3a] tracking-wide">
                    © {year}{" "}
                    <span className="text-[#606060] font-medium">Aditya Chandel</span>
                    <span className="mx-2 text-[#2a2a2a]">·</span>
                    All rights reserved.
                </p>

                {/* Streak Badge */}
                <StreakBadge days={daysStreak} />
            </div>
        </footer>
    );
}