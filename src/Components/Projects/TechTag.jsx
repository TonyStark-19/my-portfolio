// tech tag component
export default function TechTag({ label }) {
    return (
        <span className="text-[11px] uppercase tracking-widest px-3 py-1 bg-white/3 border border-white/6 text-[#555555]
        group-hover:text-[#888888] group-hover:border-white/10 rounded-full transition-all duration-300">
            {label}
        </span>
    );
}