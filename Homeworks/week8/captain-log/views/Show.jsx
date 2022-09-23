const React = require('react')

class Show extends React.Component {
    render() { 
        const { log } = this.props
        return (
            <div className='log content'>
                <h2>{log.title}</h2>
                <div className="log-content">
                    <p>{log.content}</p>
                    <p>Is the ship broken? {log.isBroken ? 'yes' : 'no'}</p>
                </div>
                <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                    <input type="submit" value='DELETE' />
                </form>
            </div>
        );
    }
}
 
export default Show;