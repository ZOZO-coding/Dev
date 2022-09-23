const React = require('react');

class Edit extends React.Component {
    render() { 
        const { log } = this.props
        console.log(log);
        return (
            <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                <label htmlFor="title">Log title: </label>
                <input type="text" id='title' name='title' defaultValue={log.title}/>
                <br />
                <label htmlFor="content">Log content: </label>
                <textarea name="content" id="content" cols="30" rows="10" defaultValue={log.content}></textarea>
                <br />
                <label htmlFor="checkbox">shipIsBroken</label>
                {log.shipIsBroken ? (
                    <input type="checkbox" id='checkbox' name='isBroken' defaultChecked/>
                ) : <input type="checkbox" id='checkbox' name='isBroken'/>}
                <br />
                <button>Submit</button>
            </form>
        );
    }
}
 
export default Edit;