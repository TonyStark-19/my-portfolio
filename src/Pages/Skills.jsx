// import components
import SkillSection from "../Components/SkillSection";
import SkillCard from "../Components/SkillCard";
import Footer from "../Components/Footer";

// Skills Page Component
export default function Skills() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-blue-400 font-mono tracking-widest uppercase text-sm mb-2">Skills</h2>
                    <h1 className="text-4xl font-bold tracking-tight">Technical Stack</h1>
                    <p className="text-[#888888] mt-2 italic">Tools, languages, and frameworks I use to feed my creativity.</p>
                </div>

                <div className="space-y-12">
                    {/* Category: Frontend */}
                    <SkillSection title="Frontend Development">
                        <SkillCard img="/images/Skills/HTML5.png" label="HTML5" />
                        <SkillCard img="/images/Skills/CSS3.png" label="CSS3" />
                        <SkillCard img="/images/Skills/JavaScript.png" label="JavaScript" />
                        <SkillCard img="/images/Skills/React.png" label="React" />
                        <SkillCard img="/images/Skills/Tailwind.png" label="Tailwind CSS" />
                        <SkillCard img="/images/Skills/Bootstrap.png" label="Bootstrap" />
                        <SkillCard img="/images/Skills/Vite.js.png" label="Vite" />
                    </SkillSection>

                    {/* Category: Backend & DB */}
                    <SkillSection title="Backend & Database">
                        <SkillCard img="/images/Skills/Node.js.png" label="Node.js" />
                        <SkillCard img="/images/Skills/Express.png" label="Express" />
                        <SkillCard img="/images/Skills/MongoDB.png" label="MongoDB" />
                        <SkillCard img="/images/Skills/sql.jpg" label="SQL" />
                    </SkillSection>

                    {/* Category: AI & Data Science */}
                    <SkillSection title="Data Science & AI/ML">
                        <SkillCard img="/images/Skills/Python.png" label="Python" />
                        <SkillCard img="/images/Skills/NumPy.png" label="NumPy" />
                        <SkillCard img="/images/Skills/Pandas.png" label="Pandas" />
                        <SkillCard img="/images/Skills/Matplotlib.png" label="Matplotlib" />
                        <SkillCard img="/images/Skills/Seaborn.png" label="Seaborn" />
                        <SkillCard img="/images/Skills/scikit-learn.png" label="Scikit-Learn" />
                        <SkillCard img="/images/Skills/Streamlit.png" label="Streamlit" />
                    </SkillSection>

                    {/* Category: Languages & Tools */}
                    <SkillSection title="Languages & Tools">
                        <SkillCard img="/images/Skills/C.png" label="C" />
                        <SkillCard img="/images/Skills/Cpp.png" label="C++" />
                        <SkillCard img="/images/Skills/Java.png" label="Java" />
                        <SkillCard img="/images/Skills/Git.png" label="Git" />
                        <SkillCard img="/images/Skills/VS.png" label="VS Code" />
                        <SkillCard img="/images/Skills/Figma.png" label="Figma" />
                    </SkillSection>
                </div>
            </div>

            <Footer />
        </div>
    );
}