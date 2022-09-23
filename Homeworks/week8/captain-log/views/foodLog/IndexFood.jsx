const React = require('react');

class IndexFood extends React.Component {
    render() {
        const { foodLogs } = this.props;
        return (
            <div className='logs content'>
                <h2>All Food Logs</h2>

                <ul>
                    {foodLogs && foodLogs.map((foodLog) => {
                        return (
                            <li key={foodLog._id}>
                                <a href={`/foodlogs/${foodLog._id}`}>
                                    {foodLog.entree}
                                </a>
                                <form action={`/foodlogs/${foodLog._id}/edit`}>
                                    <button>Update Captain's Comments</button>
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

module.exports = IndexFood;