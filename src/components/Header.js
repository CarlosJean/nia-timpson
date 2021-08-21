import Guild from "./Guild";

const Header = ()=>{
    return (
        <header className="flex h-20">
            <img src="./profile-photo.jpg" className="rounded-full max-h-full"/>
            <ul className="h-full w-full flex">
                <li className="h-full float-left border-r flex flex-grow justify-center items-center"> NIA TIMPSON </li>
                <li className="h-full float-left border-r flex flex-grow justify-center items-center">Camera Operator</li>
                <li className="h-full float-left border-r flex flex-grow justify-center items-center">New York, NY</li>
                <li className="h-full float-left flex flex-grow justify-center items-center">
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded w-3/4">Download Resume</button>
                </li>
            </ul>
        </header>
    )
}

export default Header;