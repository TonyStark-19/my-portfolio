// import icons
import { FaLinkedinIn, FaTwitter, FaGithub, FaMediumM, FaInstagram } from "react-icons/fa";

// import components
import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";
import EmailCard from "../Components/Connect/EmailCard";
import SocialCard from "../Components/Connect/SocialCard";

// contants
const STREAK_START = Date.UTC(2024, 6, 9);
const EMAIL = "adityaatwork20@email.com";

// socials data
const SOCIALS = [
    {
        name: "LinkedIn",
        handle: "@aditya-chandel-dev",
        icon: FaLinkedinIn,
        url: "https://www.linkedin.com/in/aditya-chandel-dev",
        accent: "hover:border-[#0077B5]/40 hover:bg-[#0077B5]/[0.06]"
    },
    {
        name: "GitHub",
        handle: "@TonyStark-19",
        icon: FaGithub,
        url: "https://github.com/TonyStark-19",
        accent: "hover:border-white/[0.15] hover:bg-white/[0.04]"
    },
    {
        name: "Twitter",
        handle: "@iamaditya_3",
        icon: FaTwitter,
        url: "https://twitter.com/iamaditya_3",
        accent: "hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/[0.06]"
    },
    {
        name: "Medium",
        handle: "@adityachandel371",
        icon: FaMediumM,
        url: "https://medium.com/@adityachandel371",
        accent: "hover:border-[#00AB6C]/40 hover:bg-[#00AB6C]/[0.06]"
    },
    {
        name: "Instagram",
        handle: "@aaditya_ch124",
        icon: FaInstagram,
        url: "https://instagram.com/aaditya_ch124",
        accent: "hover:border-[#E4405F]/40 hover:bg-[#E4405F]/[0.06]"
    },
];

// connect page
export default function Connect() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28"
            style={{
                backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                imageRendering: 'pixelated',
            }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                        Connect
                    </p>

                    <h1 className="text-[36px] md:text-[52px] font-bold tracking-tight leading-none">
                        Let's Connect
                    </h1>

                    <p className="text-[#444444] mt-4 text-[15px] leading-relaxed max-w-xl">
                        Always open to new projects, creative ideas, or just a conversation.
                        Follow my{" "}
                        <span className="text-[#666666]">{daysStreak}-day journey</span>{" "}
                        of consistency.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    {/* Email card — wider */}
                    <div className="lg:col-span-3 h-full">
                        <EmailCard email={EMAIL} />
                    </div>

                    {/* Socials — narrower */}
                    <div className="lg:col-span-2 flex flex-col gap-2.5">
                        {SOCIALS.map((social) => (
                            <SocialCard
                                key={social.name}
                                social={social}
                            />
                        ))}
                    </div>
                </div>

                {/* Quote */}
                <p className="mt-16 text-center text-[#393939] text-[13px] font-mono italic tracking-wide">
                    "Your network is your net worth."
                </p>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}