// import component
import useDaysStreak from "./useDaysStreak";

// Footer Component
export default function Footer() {
    // Get current year and days streak
    const year = new Date().getFullYear();
    const daysStreak = useDaysStreak(Date.UTC(2024, 6, 9));

    return (
        <footer className="w-full border-t border-[#1a1a1a] bg-[#0a0a0a] mt-20">
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-0 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#555555]">
                    © {year} <span className="text-white/90 font-medium">Aditya Chandel</span>. All rights reserved.
                </p>

                <p className="text-xs text-[#333333] font-mono tracking-wider">
                    Building in public · {daysStreak} days
                </p>
            </div>
        </footer>
    );
}