'use client'
import StatusBar from "./elements/statusbar"
import Dock from "./elements/dock"

export default function Dashboard() {
    return (
        <div className="h-screen w-screen bg-gradient-to-br from-fuchsia-500 to-purple-600 overflow-hidden flex flex-col">
            <StatusBar />
            <div className="flex-1" />
            <Dock />
        </div>
    )
}