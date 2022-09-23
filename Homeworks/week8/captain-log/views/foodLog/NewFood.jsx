const React = require('react');

class NewFood extends React.Component {
    render() {
        return (
            <div className="form">
                <form action="/foodlogs" method='POST'>
                    <label htmlFor="entree">Today's Entree: </label>
                    <input type="text" id='entree' name='entree'/>
                    <br />
                    <label htmlFor="comment">Captain's Comment: </label>
                    <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                    <br />
                    <input type="submit" />
                </form>
                <link rel="stylesheet" href="/style.css" />
            </div>
        )
    }
}

module.exports = NewFood;