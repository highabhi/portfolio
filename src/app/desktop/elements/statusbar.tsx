import { useState } from 'react'
import { Apple, Wifi, Search, BatteryMedium } from 'lucide-react'

export default function StatusBar() {
    return (
        <div className="bg-black/20 backdrop-blur-md text-white h-6 px-4 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
                <Apple size={16} />
                <span className="font-semibold">Portfolio</span>
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>History</span>
                <span>Bookmarks</span>
                <span>Window</span>
                <span>Help</span>
            </div>
            <div className="flex items-center space-x-2">
                <Wifi size={16} />
                <Search size={16} />
                <BatteryMedium size={16} />
                <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        </div>
    )
}