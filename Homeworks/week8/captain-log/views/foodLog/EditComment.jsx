const React = require('react');

class EditComment extends React.Component {
    render() { 
        const { foodLog } = this.props
        return (
            <form action={`/foodlogs/${foodLog._id}?_method=PUT`} method='POST'>
                <label htmlFor="entree">Entree: </label>
                <input type="text" id='entree' name='entree' defaultValue={foodLog.entree}/>
                <br />
                <label htmlFor="comment">Captain's Comment: </label>
                <textarea name="comment" id="comment" cols="30" rows="10" defaultValue={foodLog.comment}></textarea>
                <br />
                <button>Submit Update to the Kitchen</button>
                <link rel="stylesheet" href="/style.css" />
            </form>
        );
    }
}
 
export default EditComment;