const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div className="form">
                <form action="/logs" method='POST'>
                    <label htmlFor="title">Log title: </label>
                    <input type="text" id='title' name='title'/>
                    <br />
                    <label htmlFor="content">Log content: </label>
                    <textarea name="content" id="content" cols="30" rows="10"></textarea>
                    <br />
                    <label htmlFor="checkbox">shipIsBroken</label>
                    <input type="checkbox" id='checkbox' name='isBroken'/>
                    <br />
                    <input type="submit" />
                </form>
                <link rel="stylesheet" href="/style.css" />
            </div>
        )
    }
}

module.exports = New;