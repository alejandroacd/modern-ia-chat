export const InputMessageWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="relative w-full mx-auto my-2 md:my-4">
        <div className="relative flex items-center">
            {children}
        </div>
    </div>
}