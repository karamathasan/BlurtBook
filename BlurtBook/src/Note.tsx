export default function Note(prop: any){
    return(
        <>
        <div className = "note">
            <ul>
                <li> <a href = {"/Your_Notes/" + prop.name}> {prop.name} </a> </li>
                <li> {prop.date} </li>
            </ul>
        </div>
        <br></br>

        {/* <button className = "note" onClick={}>
            {prop.text}
        </button> */}
        </>
    )
}