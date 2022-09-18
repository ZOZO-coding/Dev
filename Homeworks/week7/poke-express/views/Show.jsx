const React = require('react')
const pokemon = require('../models/pokemon')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                
            </div>
        )
    }
}

module.exports = Show;