export default function LoadingMessage() {
    return <div className="flex items-center flex-row gap-5 m-5">
        <div className="animate-spin text-white rounded-full h-8 w-8 border-b-2 border-gray-200"></div>
        <span className="metallic-gradient-text">Generating response...</span>
    </div>
}