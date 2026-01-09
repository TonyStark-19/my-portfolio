// import icons
import { FaLinkedinIn, FaTwitter, FaGithub, FaMediumM, FaInstagram, FaEnvelope } from "react-icons/fa";
import { LuSend, LuCopy, LuExternalLink } from "react-icons/lu";

// import useState from react
import { useState } from "react";

// Connect Page Component
export default function Connect() {
    const [copied, setCopied] = useState(false);
    const email = "adityaatwork20@email.com";

    // Calculate streak dynamically
    const startDate = new Date("2024-07-09");
    const today = new Date();
    const daysStreak = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    // Function to copy email to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Social media links data
    const socials = [
        { name: "LinkedIn", handle: "@in/aditya-chandel-dev", icon: <FaLinkedinIn />, color: "hover:bg-[#0077B5]", url: "https://www.linkedin.com/in/aditya-chandel-dev" },
        { name: "Twitter", handle: "@iamaditya_3", icon: <FaTwitter />, color: "hover:bg-[#1DA1F2]", url: "https://twitter.com/iamaditya_3" },
        { name: "GitHub", handle: "@TonyStark-19", icon: <FaGithub />, color: "hover:bg-[#333]", url: "https://github.com/TonyStark-19" },
        { name: "Medium", handle: "@adityachandel371", icon: <FaMediumM />, color: "hover:bg-[#00AB6C]", url: "https://medium.com/@adityachandel371" },
        { name: "Instagram", handle: "@aaditya_ch124", icon: <FaInstagram />, color: "hover:bg-[#E4405F]", url: "https://instagram.com/aaditya_ch124" },
    ];

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl font-bold tracking-tight mb-4">Let's Connect</h1>
                    <p className="text-[#888888] text-xl max-w-2xl">
                        I'm always open to discussing new projects, creative ideas, or being part of your visions.
                        Join my <span className="text-white font-semibold">{daysStreak}-day journey</span> of consistency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big Email Card */}
                    <div className="md:col-span-2 bg-[#111111] border border-[#222222] p-10 rounded-[2.5rem] flex flex-col justify-between group">
                        <div>
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                                <FaEnvelope className="text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold mb-2">Drop me a message</h2>
                            <p className="text-[#666666]">For collaborations, inquiries, or just a virtual coffee.</p>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                            <a href={`mailto:${email}`} className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center
                            justify-center gap-2 hover:bg-blue-400 transition-all">
                                <LuSend /> Send Email
                            </a>
                            <button
                                onClick={copyToClipboard}
                                className="w-full sm:w-auto border border-[#222222] px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-2
                                hover:bg-[#1a1a1a] transition-all cursor-pointer"
                            >
                                {copied ? "Copied!" : <><LuCopy /> Copy Email</>}
                            </button>
                        </div>
                    </div>

                    {/* Social Grid */}
                    <div className="md:col-span-1 grid grid-cols-1 gap-4">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-between p-6 bg-[#111111] border border-[#222222] rounded-3xl transition-all group
                                    ${social.color}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-2xl text-white group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold leading-none">{social.name}</p>
                                        <p className="text-xs text-[#555555] group-hover:text-white/70 mt-1">{social.handle}</p>
                                    </div>
                                </div>
                                <LuExternalLink className="text-[#333] group-hover:text-white transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Footer Quote */}
                <div className="mt-20 text-center">
                    <p className="text-[#333] font-serif italic text-lg">
                        "Your network is your net worth."
                    </p>
                </div>
            </div>
        </div>
    );
}