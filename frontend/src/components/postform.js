import { useState } from "react";
import axios from "axios";

export const Postform = () => {

    // Title and thoughts are initialized using state hook
    const [title, setTitle] = useState('');
    const [thoughts, setThoughts] = useState('');

    // Postform function is made 
    const postform = async e => {
        e.preventDefault();

        // A postdata object type is created to save title and thoughts
        const postdata = {
            title: title,
            thoughts: thoughts
        };

        /* 
            POST request is made to api/home/postthought to get the data from backend.
        */ 

        const { data } = await axios.post('http://localhost:8000/api/home/postthought/', postdata, {
            headers: { 'Content-Type': 'application/json' }
        });

        window.location.href = '/'

    }

    return (
        <div className="formcontainer">
            <h2 className="formtitle">Post Your Thoughts</h2>
            <form id="postForm" onSubmit={postform}>
                <div className="formgroup">
                    <label for="title">Title:</label>
                    <input 
                    type="text" 
                    id="title" 
                    name="title"
                    value={title} 
                    required
                    onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="formgroup">
                    <label for="thoughts">Thoughts:</label>
                    <textarea 
                    id="thoughts" 
                    name="thoughts"
                    value={thoughts} 
                    required 
                    onChange={e => setThoughts(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="formbtn">Post</button>
            </form>
        </div>
    );
}