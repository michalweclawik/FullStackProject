import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Send us a message</h2>

                    <form >
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Your name</label>
                            <input type={"text"}
                                className="form-control "
                                placeholder='Enter your name'
                                name="your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Your email  address</label>
                            <input type={"text"}
                                className="form-control "
                                placeholder='Enter your email address'
                                name="horsepower"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Message</label>
                            <textarea type={"text"}
                                rows="5"
                                className="form-control "
                                placeholder='Enter your message'
                                name="message"
                            />
                        </div>

                        <Link to="/" type='submit' className='btn btn-outline-primary'>Send</Link>
                        <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact