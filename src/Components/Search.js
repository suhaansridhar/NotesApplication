import {BsSearch} from 'react-icons/bs';

function Search({search}){
    return(
        <div className="search--bar--container">
            <input type="text" placeholder='search...' onChange={(event) => search(event.target.value)}/>
            <BsSearch />
        </div>
    )
}

export default Search