const React = require('react');

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div className='logs content'>
                <h2>All Logs</h2>

                <ul>
                    {logs && logs.map((log) => {
                        return (
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>
                                    {log.title}
                                </a>
                                <form action={`/logs/${log._id}/edit`}>
                                    <button>Edit</button>
                                </form>
                            </li>
                        )
                    })}
                </ul>
                <link rel="stylesheet" href="/style.css" />
            </div>
            
        )
    }
}

module.exports = Index;