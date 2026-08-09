// article tag component
export default function ArticleTag({ label, variant = "default" }) {
    // define styles for the tag based on the variant
    const styles = {
        default: "bg-white/[0.04] border border-white/[0.07] text-[#555555]",
        featured: "bg-emerald-400/10 border border-emerald-400/20 text-emerald-400",
    };

    return (
        <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full ${styles[variant]}`}>
            {label}
        </span>
    );
}