const MovieCard =({imgURL,title,date})=>{
    return(
        <>
        <div className="flex flex-col pl-5 gap-2">
            <img src={imgURL} alt={title} className="w-[9rem] h-[14rem] shadow-sm rounded-md" />
            <div className="flex flex-col w-[9rem] px-2">
                <h1 className="font-bold">{title}</h1>
                <p className="font-normal text-slate-400">{date}</p>
            </div>
        </div>
        
        </>
    )
}

export default MovieCard;