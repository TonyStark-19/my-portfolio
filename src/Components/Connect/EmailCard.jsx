// import usestate
import { useState } from "react";

// import icons
import { LuSend, LuCopy, LuCheck, LuMail } from "react-icons/lu";

// email card component for contact section
export default function EmailCard({ email }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col justify-between gap-8 p-7 bg-white/2 border border-white/6 rounded-2xl
            hover:border-white/10 transition-all duration-300 h-full">
            {/* Icon + text */}
            <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <LuMail className="text-[16px] text-blue-400" />
                </div>

                <div>
                    <h2 className="text-[20px] font-semibold tracking-tight text-white/90">
                        Drop me a message
                    </h2>

                    <p className="text-[13px] text-[#444444] mt-1 leading-relaxed">
                        For collaborations, inquiries, or just a virtual coffee.
                    </p>
                </div>

                {/* Email display */}
                <p className="text-[13px] font-mono text-[#555555] tracking-wide">
                    {email}
                </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
                <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl text-[13px] font-semibold
                        hover:bg-blue-400 hover:text-white active:scale-[0.97] transition-all duration-200 flex-1"
                >
                    <LuSend size={13} /> Send Email
                </a>

                <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-center gap-2 border border-white/8 text-[#777777] px-6 py-2.5 rounded-xl text-[13px] font-medium
                        hover:border-white/15 hover:text-white active:scale-[0.97] transition-all duration-200 flex-1 cursor-pointer"
                >
                    {copied
                        ? <><LuCheck size={13} className="text-green-400" /><span className="text-green-400">Copied!</span></>
                        : <><LuCopy size={13} /> Copy Email</>
                    }
                </button>
            </div>
        </div>
    );
}