export const InputMessageWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="relative w-full mx-auto my-1">
        <div className="relative flex items-center">
            {children}
        </div>
    </div>
}