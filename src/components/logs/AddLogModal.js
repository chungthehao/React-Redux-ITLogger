// This's gonna be a form --> some component level state để quản lý input --> useState hook
import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = () => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = e => {
        // Error checking
        if (!message || !tech) {
            M.toast({ html: 'Please enter a message and tech.' })
        } else {
            console.log(message, tech, attention)
        }        
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system log</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} 
                            onChange={e => setMessage(e.target.value)} />
                        
                        <label htmlFor="message" className="active">Log message</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        {/* browser-default: fix materialize ko cho mình pre select cái nào đó (th edit) để sẵn đây luôn */}
                        <select className="browser-default" name="tech" value={tech} onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Harry White">Harry White</option>
                            <option value="Mary Johnson">Mary Johnson</option>
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
                <a href="#" onClick={onSubmit} 
                    className="modal-close waves-effect waves-light btn blue">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal