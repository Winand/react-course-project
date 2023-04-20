import { useCallback, useState } from 'react';
import './SearchBar.css'

export const SearchBar = () => {
    const [isSearchDisables, setIsSearchDisables] = useState(false);
    const doSearch = useCallback(() => {
        setIsSearchDisables(true);
        setTimeout(() => {setIsSearchDisables(false)}, 2000);
    }, [setIsSearchDisables]);
    return (<div>
        <input className="search-bar" type="text" placeholder="🔎︎ Search..." disabled={isSearchDisables}/>
        <button disabled={isSearchDisables} onClick={doSearch}>Find</button>
    </div>)
}
