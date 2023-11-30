import { useState } from "react"
export default function SearchBar({ query, setQuery, className = 'searchbar' }) {
    const style = {
        backgroundColor: '#20293A',
        padding: '1.2em 2em',
        width: '350px',
        borderRadius: '1em',
        margin: '2em auto',
        fontSize: '',
        border: '0',
        color: '#CDD5E0'
    }
    return (
        <input style={style} className={className}
            placeholder='username' value={query} onChange={(e) => setQuery(e.target.value)} />
    )
}