// Skill section container component
export default function SkillSection({ title, children }) {
    return (
        <div className="bg-[#111111] p-8 rounded-4xl border border-[#222222]">
            <h3 className="text-xl font-semibold mb-6 text-white/90">{title}</h3>
            <div className="flex flex-wrap gap-4">
                {children}
            </div>
        </div>
    );
}