// skill tag component for experience page
export default function SkillTag({ label }) {
    return (
        <span className="text-[10px] font-mono tracking-wider text-[#444444] group-hover:text-[#666666] transition-colors duration-300">
            #{label}
        </span>
    );
}