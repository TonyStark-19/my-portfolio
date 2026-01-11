// Skill section container component
export default function SkillSection({ title, children }) {
    return (
        <div className="bg-[#111111] p-8 rounded-4xl border border-[#222222]">
            <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <span className="flex-1 h-px bg-[#222222]" />
            </div>

            <div className="flex flex-wrap gap-4">
                {children}
            </div>
        </div>
    );
}