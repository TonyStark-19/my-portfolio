// import react icons
import { LuBriefcase, LuCalendar, LuMapPin, LuExternalLink, LuTrophy, LuCircle } from "react-icons/lu";

// Experience Page Component
export default function Experience() {
    const experiences = [
        {
            role: "AI-ML Data Science Intern",
            company: "EiSystems Technologies",
            type: "Internship",
            duration: "Aug 2025 - Sep 2025",
            location: "Remote",
            description: [
                "Collaborated with Technex'25, IIT BHU Varanasi for a 6-week intensive program.",
                "Built and deployed a Movie Recommendation System using Streamlit.",
                "Mastered data manipulation with NumPy, Pandas, and Matplotlib."
            ],
            skills: ["Machine Learning", "Python", "Streamlit"],
            logo: "/images/Experience/EI-Systems.jpg"
        },
        {
            role: "Technical Lead",
            company: "GDG on Campus HRIT",
            type: "Full-time",
            duration: "Dec 2024 - Sep 2025",
            location: "Ghaziabad, India",
            description: [
                "Leading technical initiatives and community building for 500+ students.",
                "Architecting workshops focused on Google Cloud and Web technologies.",
                "Mentoring junior devs to bridge the gap between theory and practice."
            ],
            skills: ["Leadership", "Community Building", "Public Speaking"],
            logo: "/images/Experience/Gdg.webp"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-8 lg:p-24 selection:bg-blue-500/30">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <div className="mb-20">
                    <h2 className="text-sm font-mono tracking-[0.3em] text-blue-500 uppercase mb-4">History</h2>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Experience.</h1>
                </div>

                <div className="relative border-l border-[#222222] ml-4 md:ml-0">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-20 last:mb-0 relative pl-10 md:pl-16 group">

                            {/* Timeline Node */}
                            <div className="absolute -left-2.25 top-2">
                                <div className="relative flex items-center justify-center">
                                    <LuCircle className="text-[#222222] fill-[#0a0a0a] group-hover:text-blue-500 transition-colors duration-500" size={18} />
                                    <div className="absolute w-2 h-2 bg-blue-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500
                                    shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                                </div>
                            </div>

                            {/* Experience Content */}
                            <div className="flex flex-col gap-6">
                                {/* Top Info */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-5">
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-[#333333] grayscale
                                            group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                                            <p className="text-[#888888] font-medium">{exp.company} <span className="text-[#333333] mx-2">|</span> {exp.type}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end text-xs font-mono text-[#555555] tracking-widest uppercase">
                                        <span className="flex items-center gap-2"><LuCalendar size={14} /> {exp.duration}</span>
                                        <span className="flex items-center gap-2 mt-1"><LuMapPin size={14} /> {exp.location}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="bg-[#111111]/50 border border-[#1a1a1a] p-6 rounded-2xl group-hover:border-[#333333] transition-all
                                duration-500 backdrop-blur-sm">
                                    <ul className="space-y-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-[#888888] leading-relaxed text-sm flex gap-3">
                                                <span className="text-blue-500/50">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Skills used in this role */}
                                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[#222222]">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-tighter text-[#444444] group-hover:text-blue-400/80
                                            transition-colors">
                                                #{skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}