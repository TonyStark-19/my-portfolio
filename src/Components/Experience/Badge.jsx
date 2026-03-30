// badge component for experience entries, with styling based on whether it's a promotion or not
export default function Badge({ label, isPromotion }) {
    if (!label) return null;

    if (isPromotion) {
        return (
            <span className="inline-flex items-center text-[10px] font-mono tracking-widest uppercase px-2.5 py-1
            rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                {label}
            </span>
        );
    }
    
    return (
        <span className="inline-flex items-center text-[10px] font-mono tracking-widest uppercase px-2.5 py-1
        rounded-full bg-white/4 border border-white/[0.07] text-[#555555]">
            {label}
        </span>
    );
}