const MovieCard = ({ imgURL, title, date ,rating}) => {
    return (
        <>
            <div className="flex flex-col pl-5 gap-2 relative ">
                <img src={imgURL} alt={title} className="w-[9rem] h-[14rem] shadow-sm rounded-md cursor-pointer " />
                <div className="absolute top-[200px] left-7 bg-sky-950 text-xs font-semibold text-white rounded-full w-9 h-9 flex items-center justify-center">
                    {rating}
                </div>
                <div className="flex flex-col w-[9rem] px-2">
                    <h1 className="font-bold cursor-pointer hover:text-cyan-500">{title}</h1>
                    <p className="font-normal text-slate-400 text-sm ">{date}</p>
                </div>
            </div>

        </>
    )
}

export default MovieCard;