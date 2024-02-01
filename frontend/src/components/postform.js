import { useState, useEffect } from "react";
import axios from "axios";

export const Postform = () => {
    return (
        <div className="formcontainer">
            <h2 className="formtitle">Post Your Thoughts</h2>
            <form id="postForm">
                <div className="formgroup">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className="formgroup">
                    <label for="thoughts">Thoughts:</label>
                    <textarea id="thoughts" name="thoughts" required></textarea>
                </div>
                <button type="submit" className="formbtn">Post</button>
            </form>
        </div>
    );
}