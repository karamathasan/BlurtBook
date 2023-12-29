// import "./src/styles/Navbar.css"
import "./Navbar.css"

function Navbar(){
    return(
        <div className="textContainer">
            <nav className="nav">
                <h1 className ="title">
                    <a href = "/"> BlurtBook</a>
                </h1>
                <ul>
                    <li> <a href="/Your_Notes"> Your Notes</a></li>
                    {/* <li> <a href=""> Page 2</a> </li> */}
                    {/* <li> <a href=""> Page 3</a> </li> */}
                </ul>
            </nav>
        </div>

    )
}

export default Navbar;