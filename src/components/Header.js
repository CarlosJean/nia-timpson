import Guild from "./Guild";

const Header = ()=>{
    return (
    <header>
        <ul>
            <li><img src="./profile-photo.jpg" /></li>
            <li>Nia Timpson</li>
            <li className="vertical-border">Camera Operator</li>
            <li className="vertical-border">New York, NY</li>
            <li><button className="btn">Download Resume</button></li>
        </ul>    
        <Guild />
    </header>)
}

export default Header;