const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div className="form">
                <form action="/logs" method='POST'>
                    <input type="text" id='title' name='title'/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <label for="checkbox">shipIsBroken</label>
                    <input type="checkbox" name='checkbox'/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

module.exports = New;