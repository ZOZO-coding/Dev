const React = require('react')

class FoodShow extends React.Component {
    render() { 
        const { foodLog } = this.props
        return (
            <div className='log content'>
                <h2>Entree Served: {foodLog.entree}</h2>
                <div className="log-content">
                    <p>Captains Comments: </p>
                    <p>{foodLog.comment}</p>
                </div>
                <form action={`/foodlogs/${foodLog._id}?_method=DELETE`} method='POST'>
                    <input type="submit" value='DELETE' />
                </form>
                <form action="/foodlogs">
                    <input type="submit" value='BACK TO HOMEPAGE' />
                </form>
                <link rel="stylesheet" href="/style.css" />
            </div>
        );
    }
}
 
export default FoodShow;