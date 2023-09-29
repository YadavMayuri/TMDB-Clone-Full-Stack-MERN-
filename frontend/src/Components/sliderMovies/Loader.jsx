const Loader = () =>{
    return(
        <>
         <div className="flex flex-col pl-5 gap-2">
            <img src="https://fl-1.cdn.flockler.com/embed/no-image.svg" alt="" className="w-[9rem] h-[14rem] shadow-sm rounded-md object-cover" />
            <div className="flex flex-col w-[9rem] px-2">
                <h1 className="font-bold"></h1>
                <p className="font-normal text-slate-400"></p>
            </div>
        </div>
        </>
    )
}

export default Loader;