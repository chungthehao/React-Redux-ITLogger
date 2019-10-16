import React, { useState, useEffect } from 'react'

import TechItem from './TechItem'

const TechListModal = () => {
    // Component level state
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(false)

    // Fetch data (techs)
    const getTechs = async () => {
        setLoading(true)

        try {
            const res = await fetch('/techs')
            const data = await res.json()

            setTechs(data)
            setLoading(false)
        } catch (err) {
            console.error(err.response.data)
        }
    }

    useEffect(() => {
        getTechs()
        // eslint-disable-next-line
    }, []) // Only want this to run once

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician list</h4>

                <ul className="collection">
                    {
                        !loading && techs.length 
                            ? techs.map(t => <TechItem tech={t} key={t.id} />)
                            : <p className="center">No techs to show.</p>
                    }
                </ul>
            </div>

            {/* <div className="modal-footer">
                <a href="#" onClick={} 
                    className="modal-close waves-effect waves-light btn blue">Enter</a>
            </div> */}
        </div>
    )
}

export default TechListModal