// This's gonna be a form --> some component level state để quản lý input --> useState hook
import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit = e => {
        // Error checking
        if (!firstName || !lastName) {
            M.toast({ html: 'Please enter the first and last name.' })
        } else {
            console.log(firstName, lastName)

            // Clear fields (reset to default when close the modal)
            setFirstName('')
            setLastName('')
        }        
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Add new technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} 
                            onChange={e => setFirstName(e.target.value)} />
                        
                        <label htmlFor="firstName" className="active">First name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} 
                            onChange={e => setLastName(e.target.value)} />
                        
                        <label htmlFor="lastName" className="active">Last name</label>
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

export default AddTechModal