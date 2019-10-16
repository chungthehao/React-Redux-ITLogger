import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const TechItem = ({ tech }) => {
    return (
        <li className="collection-item">
            <div>
                <span>
                    {tech.firstName} {tech.lastName}
                </span>

                <a href="#" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}

export default TechItem