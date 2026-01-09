// import components
import Left from "../Components/LeftSidebar";

// import pages
import Intro from "./Intro";
import Skills from "./Skills";
import Articles from "./Articles";
import Connect from "./Connect";

// import routing
import { Route, Routes } from "react-router-dom";

// Main Page Component
export default function MainPage() {
    return (
        <div className="w-full h-screen flex flex-row bg-linear-to-br from-[#0f0f0f] via-[#171717] to-[#1f1f1f]">
            <Left />

            <div className="flex-1 h-full overflow-y-auto">
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/home" element={<Intro />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/connect" element={<Connect />} />
                </Routes>
            </div>
        </div>
    )
}