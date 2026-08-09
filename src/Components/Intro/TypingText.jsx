// import hooks
import { useEffect, useState } from "react";

// typing text component
export default function TypingText({ phrases }) {
    const [display, setDisplay] = useState("");
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    // useEffect hook to handle typing and deleting animation
    useEffect(() => {
        const current = phrases[phraseIdx];

        if (!deleting && charIdx < current.length) {
            const t = setTimeout(() => {
                setDisplay(current.slice(0, charIdx + 1));
                setCharIdx((c) => c + 1);
            }, 55);
            return () => clearTimeout(t);
        }

        if (!deleting && charIdx === current.length) {
            const t = setTimeout(() => setDeleting(true), 1800);
            return () => clearTimeout(t);
        }

        if (deleting && charIdx > 0) {
            const t = setTimeout(() => {
                setDisplay(current.slice(0, charIdx - 1));
                setCharIdx((c) => c - 1);
            }, 28);
            return () => clearTimeout(t);
        }

        if (deleting && charIdx === 0) {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % phrases.length);
        }
    }, [charIdx, deleting, phraseIdx, phrases]);

    return (
        <span className="inline-flex items-center gap-0.5">
            <span className="text-[#b3b3b3]">{display}</span>
            <span className="inline-block w-0.5 h-[0.9em] bg-blue-400 animate-pulse rounded-sm translate-y-px" />
        </span>
    );
}