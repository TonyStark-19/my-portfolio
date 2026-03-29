// import components
import SkillSection from "../Components/Skills/SkillSection";
import SkillCard from "../Components/Skills/SkillCard";
import Footer from "../Components/Footer/Footer";

// Data for skill sections and their respective skills
const SKILL_SECTIONS = [
    {
        title: "Frontend Development",
        skills: [
            { img: "/images/Skills/HTML5.png", label: "HTML5" },
            { img: "/images/Skills/CSS3.png", label: "CSS3" },
            { img: "/images/Skills/JavaScript.png", label: "JavaScript" },
            { img: "/images/Skills/React.png", label: "React" },
            { img: "/images/Skills/Tailwind.png", label: "Tailwind CSS" },
            { img: "/images/Skills/Bootstrap.png", label: "Bootstrap" },
            { img: "/images/Skills/Vite.js.png", label: "Vite" },
            { img: "/images/Skills/TypeScript.png", label: "TypeScript" },
        ],
    },
    {
        title: "Backend & Database",
        skills: [
            { img: "/images/Skills/Node.js.png", label: "Node.js" },
            { img: "/images/Skills/Express.png", label: "Express" },
            { img: "/images/Skills/MongoDB.png", label: "MongoDB" },
            { img: "/images/Skills/sql.jpg", label: "SQL" },
            { img: "/images/Skills/Postman.png", label: "Postman" },
        ],
    },
    {
        title: "Data Science & AI/ML",
        skills: [
            { img: "/images/Skills/Python.png", label: "Python" },
            { img: "/images/Skills/NumPy.png", label: "NumPy" },
            { img: "/images/Skills/Pandas.png", label: "Pandas" },
            { img: "/images/Skills/Matplotlib.png", label: "Matplotlib" },
            { img: "/images/Skills/Seaborn.png", label: "Seaborn" },
            { img: "/images/Skills/scikit-learn.png", label: "Scikit-Learn" },
            { img: "/images/Skills/Streamlit.png", label: "Streamlit" },
            { img: "/images/Skills/Jupyter.png", label: "Jupyter Notebook" },
        ],
    },
    {
        title: "Languages, Tools & Platforms",
        skills: [
            { img: "/images/Skills/C.png", label: "C" },
            { img: "/images/Skills/Cpp.png", label: "C++" },
            { img: "/images/Skills/Java.png", label: "Java" },
            { img: "/images/Skills/Git.png", label: "Git" },
            { img: "/images/Skills/GitHub.png", label: "GitHub" },
            { img: "/images/Skills/VS.png", label: "VS Code" },
        ],
    },
];

// Skills page component
export default function Skills() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                        Skills
                    </p>

                    <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight leading-none">
                        Technical Stack
                    </h1>

                    <p className="text-[#444444] mt-3 text-[14px] italic">
                        Tools, languages, and frameworks I use to feed my creativity.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-4">
                    {SKILL_SECTIONS.map((section) => (
                        <SkillSection key={section.title} title={section.title}>
                            {section.skills.map((skill) => (
                                <SkillCard
                                    key={skill.label}
                                    img={skill.img}
                                    label={skill.label}
                                />
                            ))}
                        </SkillSection>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}