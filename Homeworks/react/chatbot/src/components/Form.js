import React from 'react'

const Form = ({ onSubmit, message, setMessage }) => {

    
    return (
        <form onSubmit={onSubmit} className='form'>
            <input
                type="text"
                placeholder="please type here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">send</button>
        </form>
    )
}

export default Form