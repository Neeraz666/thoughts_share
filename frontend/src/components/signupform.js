import axios from "axios";
import { useState } from "react";

export const SignUp = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [profilephoto, setProfilephoto] = useState(null);
    const [profilebio, setProfilebio] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilephoto(file);
    }
    
    const submitsignup = async e => {
        e.preventDefault();

        if (password !== password1){
            alert("Passwords do not match!");
            return;
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('profilephoto', profilephoto);
        formData.append('profilebio', profilebio);
        formData.append('password', password);
        formData.append('password1', password1);

        try{
        const { data } = await axios.post('http://localhost:8000/api/users/signup', formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        });

        window.location.href = '/login';
    } catch (error) {
        if (error.response && error.response.data) {
            alert (error.response.data.error || error.response.data);
        }
        else {
            console.error('Error signing up: ', error);
            alert("An error occured while signing up. Please try again.");
        }
    }

    }

    return (
        <div className="signupbody">
            <div className="signupcontainer">
                <h2>Sign Up</h2>
                <form id="signupform" onSubmit={submitsignup}>
                    <div className="signupformgroup">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="signupformgroup">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={username} required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="signupformgroup">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" id="firstname" name="firstname" value={firstname} required onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className="signupformgroup">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastname" value={lastname} required onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className="signupformgroup">
                        <label htmlFor="profilephoto">Photo:</label>
                        <input type="file" id="profilephoto" name="profilephoto"  accept="image/*" onChange={handleFileChange} />
                    </div>
                    <div className="signupformgroup">
                        <label htmlFor="profilebio">Bio:</label>
                        <textarea id="profilebio" name="profilebio" defaultValue={profilebio} onChange={(e) => setProfilebio(e.target.value)} ></textarea>
                    </div>
                    <div className="signupformgroup">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="signupformgroup">
                        <label htmlFor="password1">Confirm Password:</label>
                        <input type="password" id="password1" name="password1" value={password1} required onChange={(e) => setPassword1(e.target.value)} />
                    </div>
                    <div className="signupformgroup">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}