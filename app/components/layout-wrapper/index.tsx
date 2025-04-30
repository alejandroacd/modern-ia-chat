import Header from "../header"
export default async function ContentWrapper({children}: {children: React.ReactNode}) {
    return <section className="lg:w-3/4 mx-auto">
        <Header />
        {children}
    </section>
}