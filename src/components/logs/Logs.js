import React, { useState, useEffect } from 'react'

const Logs = () => {
    // Component level state
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)

    // Fetch data (logs)
    const getLogs = async () => {
        setLoading(true)

        try {
            const res = await fetch('/logs')
            const data = await res.json()

            setLogs(data)
            setLoading(false)
        } catch (err) {
            console.error(err.response.data)
        }
    }

    useEffect(() => {
        getLogs()
        // eslint-disable-next-line
    }, []) // Only want this to run once

    if (loading) return <h4>Loading...</h4>

    return (
        // https://materializecss.com/collections.html
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System logs</h4>
            </li>

            {
                !loading && logs.length 
                    ? logs.map(l => <li key={l.id} className="collection-item">{l.message}</li>)
                    : <p className="center">No logs to show.</p>
            }
        </ul>
    )
}

export default Logs