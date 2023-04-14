import Search from './Search'

function NavBar({search}){
    return(
        <div className="nav--bar--container">
            <div className="nav--bar--container--1">
                <h2>Notes</h2>
                <div className="nav--bar--container--1--1"><Search search = {search}/></div>
            </div>   
        </div>
    )
}

export default NavBar