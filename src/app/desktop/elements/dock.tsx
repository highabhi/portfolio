export default function Dock() {
    const apps = ['finder', 'safari', 'messages', 'mail', 'maps', 'photos', 'facetime', 'calendar', 'contacts', 'reminders', 'notes', 'music']

    return (
        <div className="bg-white/20 backdrop-blur-md h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center space-x-2 px-2">
            {apps.map((app) => (
                <button key={app} className="hover:bg-white/20 p-1 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                    <img src={`/${app}-icon.png`} alt={`Open ${app}`} className="w-10 h-10" />
                </button>
            ))}
        </div>
    )
}