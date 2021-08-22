export const Images = ()=>
    (
        <div className="flex flex-wrap h-1/4 justify-start mt-2 md:h-1/3 divide-x-4">
            <div className="h-full w-1/2 md:h-full md:w-1/2">
                <img src="./main.jpg" className="h-full w-full rounded" />
            </div>
            <div className="h-full w-1/2 md:h-full md:w-1/3 flex justify-start flex-wrap divide-y-8 divide-solid divide-white">
                <img src="./main.jpg" alt="" className="h-1/2 w-full md:w-full md:h-1/2 rounded" />
                <img src="./main.jpg" alt="" className="h-1/2 w-full md:w-full md:h-1/2 rounded" />
            </div>
        </div>    
    ) 