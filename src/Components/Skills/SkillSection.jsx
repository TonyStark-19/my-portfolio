// Skill section container component
export default function SkillSection({ title, children }) {
    return (
        <div className="p-6 rounded-2xl border border-white/6 bg-white/2">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-5">
                <div className="w-px h-4 bg-blue-400/50 rounded-full" />
                <h3 className="text-[14px] font-semibold text-white/80 tracking-wide">
                    {title}
                </h3>
                <span className="flex-1 h-px bg-white/5" />
            </div>

            {/* Cards */}
            <div className="flex flex-wrap gap-2.5">
                {children}
            </div>
        </div>
    );
}