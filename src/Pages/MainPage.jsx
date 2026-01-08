// import components
import Left from "../Components/LeftSidebar"

// import pages
import Intro from "./Intro"

// Main Page Component
export default function MainPage() {
    return (
        <div className="w-full h-screen flex flex-row bg-linear-to-br from-[#0f0f0f] via-[#171717] to-[#1f1f1f]">
            <Left />

            <div className="flex-1 h-full overflow-y-auto">
                <Intro />
            </div>
        </div>
    )
}