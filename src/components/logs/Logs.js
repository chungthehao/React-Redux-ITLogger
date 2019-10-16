import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: {logs, loading}, getLogs }) => {
    useEffect(() => {
        getLogs()
        // eslint-disable-next-line
    }, []) // Only want this to run once

    if (loading || logs === null) return <Preloader />

    return (
        // https://materializecss.com/collections.html
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System logs</h4>
            </li>

            {
                !loading && logs.length 
                    ? logs.map(l => <LogItem log={l} key={l.id} />)
                    : <p className="center">No logs to show.</p>
            }
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    log: state.log 
    // - log: tên property 'log' sẽ là trở thành props đc truyền vào component này
    // - state.log: chữ 'log' này pertains to in our rootReducer
    /*
        export default combineReducers({
            log: logReducer
        })
    */
})

// getLogs action sẽ trong props đc truyền vô component này
export default connect(mapStateToProps, { getLogs })(Logs)