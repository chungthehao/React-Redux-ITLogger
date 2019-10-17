import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TechItem from './TechItem'
import { getTechs } from '../../actions/techActions'

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
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
                        !loading && techs !== null 
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

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal)