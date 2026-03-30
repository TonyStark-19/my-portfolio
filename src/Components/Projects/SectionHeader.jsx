// section header component for projects page
export default function SectionHeader({ label, title, description }) {
    return (
        <div className="mb-8">
            <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                {label}
            </p>

            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight leading-none">
                {title}
            </h2>

            {description && (
                <p className="text-[#444444] mt-3 text-[14px] leading-relaxed max-w-xl">
                    {description}
                </p>
            )}
        </div>
    );
}