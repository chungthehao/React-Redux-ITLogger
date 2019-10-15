import React from 'react'

const SearchBar = () => {
    return (
        // https://materializecss.com/navbar.html
        <nav className="blue" style={{ marginBottom: '30px' }}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" />>
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar