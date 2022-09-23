const React = require('react')

class HomePage extends React.Component {
    render() { 
        return (
            <div>
                <h1>Which Log Type Would You Like to Access?</h1>
                <form action="/logs">
                    <button type='submit'>Captain's Log</button>
                </form>
                <form action="/foodlogs">
                    <button type='submit'>Food Log</button>
                </form>
            </div>
        );
    }
}
 
export default HomePage;