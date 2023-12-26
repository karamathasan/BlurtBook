import "./main.css"

function Navbar(){
    return(
        <nav className="nav">
            <h1 className ="title">
                <a href = ""> BlurtBook</a>
            </h1>
            <ul>
                <li> <a href=""> Your Notes</a></li>
                <li> <a href=""> Page 2</a> </li>
            </ul>
        </nav>
    )
}

export default Navbar;