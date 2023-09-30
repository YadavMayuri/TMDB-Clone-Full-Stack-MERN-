const SliderSection = ({ title, children }) => {

    return (
        <>
            <section className="pt-[1rem] ">
                <div className="flex items-center gap-5 px-10">
                    <h1 className="font-bold text-2xl">{title}</h1>
                </div>
                <div className="pt-5">
                    {children}
                </div>

            </section>
        </>
    )
}

export default SliderSection;