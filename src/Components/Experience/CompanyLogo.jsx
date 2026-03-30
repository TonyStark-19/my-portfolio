// company logo with grayscale hover effect
export default function CompanyLogo({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            className="w-10 h-10 rounded-xl object-contain bg-white p-1 border border-white/8 grayscale group-hover:grayscale-0
            transition-all duration-500 shrink-0"
        />
    );
}