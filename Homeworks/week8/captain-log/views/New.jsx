const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div className="form">
                <form action="/logs" method='POST'>
                    <label htmlFor="title">Log title: </label>
                    <input type="text" id='title' name='title'/>
                    <label htmlFor="content">Log content: </label>
                    <textarea name="content" id="content" cols="30" rows="10"></textarea>
                    <label htmlFor="checkbox">shipIsBroken</label>
                    <input type="checkbox" id='checkbox' name='isBroken'/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

module.exports = New;