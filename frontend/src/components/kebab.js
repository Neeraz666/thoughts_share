import '../App.css'
import axios from 'axios'

export const Kebab = (props) => {

    const deletepost = async e => {
        e.preventDefault()

        try{
            await axios.delete(`http://localhost:8000/api/home/deletecontent/${props.postId}/`);
            console.log('Post deleted successfully.');
        }
        catch(error){
            alert('Error Deleting post: ', error);
        }

        window.location.href = '/'

    }

    return (
        <div className="kebab">
            <div className="kebabicon"></div>
            <div className="kebabicon"></div>
            <div className="kebabicon"></div>
            <div className="kebabdropdown">
                <a href="#">Edit</a>
                <a href="#" onClick={deletepost}>Delete</a>
            </div>
        </div>
    )
} 