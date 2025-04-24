export default function MessagesWrapper({ children }: { children: React.ReactNode }) {
    return <section className="messages absolute bottom-0 overflow-y-auto gap-4 max-h-[78vh] p-3 rounded-xl w-full flex flex-col gap-3">
        {children}
    </section>
}