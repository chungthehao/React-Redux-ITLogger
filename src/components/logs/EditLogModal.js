// This's gonna be a form --> some component level state để quản lý input --> useState hook
import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateLog } from '../../actions/logActions'
import TechSelectOptions from '../techs/TechSelectOptions'


const EditLogModal = ({ current, updateLog }) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    useEffect(() => {
        if (current) {
            setMessage(current.message)
            setAttention(current.attention)
            setTech(current.tech)
        }
    }, [current])

    const onSubmit = e => {
        // Error checking
        if (!message || !tech) {
            M.toast({ html: 'Please enter a message and tech.' })
        } else {
            //console.log(message, tech, attention)

            updateLog({ 
                id: current.id,
                message,
                tech,
                attention
            })

            M.toast({ html: `Log updated by ${tech}.` })

            // Clear fields (reset to default when close the modal)
            setMessage('')
            setTech('')
            setAttention(false)
        }        
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system log</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} 
                            onChange={e => setMessage(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        {/* browser-default: fix materialize ko cho mình pre select cái nào đó (th edit) để sẵn đây luôn */}
                        <select className="browser-default" name="tech" value={tech} onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select technician</option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} 
                                    onChange={e => setAttention(!attention)} />{/* Toggle nó */}

                                <span>Needs attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>{/* End: .modal-content */}

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} 
                    className="modal-close waves-effect waves-light btn blue">Enter</a>
            </div>
        </div>
    )
}

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

const mapStateToProps = state => ({
    current: state.log.current,
})

export default connect(mapStateToProps, { updateLog })(EditLogModal)