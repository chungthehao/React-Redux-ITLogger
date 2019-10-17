import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { searchLogs } from '../../actions/logActions'

const SearchBar = ({ searchLogs }) => {
    const onChange = e => {
        //console.log(e.target.value)
        searchLogs(e.target.value)
    }

    return (
        // https://materializecss.com/navbar.html
        <nav className="blue" style={{ marginBottom: '30px' }}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input onChange={onChange} id="search" type="search" placeholder="Search logs..." />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(SearchBar)