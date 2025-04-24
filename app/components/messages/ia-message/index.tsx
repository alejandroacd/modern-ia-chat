export default  function IaMessage({ message }: { message: string }) {
    return <div className="relative backdrop-blur-md md:max-w-1/2 self-start bg-gradient-to-br from-[#3b0764]/50 to-[#1e3a8a]/50 text-white  px-3 rounded-lg shadow-xl  border border-violet-500/30">
        <div className="pr-10 text-md leading-snug pt-3">
            {message}
        </div>
        <div className="text-xs text-end text-violet-400 pl-6 pb-1">
            Cosmic AI
        </div>
    </div>
}