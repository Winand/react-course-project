import { useCallback, useState } from 'react';
import './SearchBar.css'

export const SearchBar = () => {
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);
    const doSearch = useCallback(() => {
        setIsSearchDisabled(true);
        setTimeout(() => {setIsSearchDisabled(false)}, 2000);
    }, [setIsSearchDisabled]);
    return (<div className='search-wrapper'>
        <input className="search-bar" type="text" placeholder="🔎︎ Search..." disabled={isSearchDisabled}/>
        <button className="search-button" disabled={isSearchDisabled} onClick={doSearch}>Find</button>
    </div>)
}
