import axios from "axios";
import { useState } from "react";

export const Login = () => {

    // Email and password are initialized using the state hook to be null
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // A function named submit is created 
    const submit = async e => {
        e.preventDefault();

        // An object type user variable is declared which saves the key pair values (much like dictionary in Python). 
        const user = {
            email: email,
            password: password
        };

        // POST request is made by the use of axios
        const { data } = await axios.post('http://localhost:8000/api/token/', user, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });


        // The access and refresh token are initialized in the localStorage
        localStorage.clear()

        localStorage.setItem('access_token', data.access);

        localStorage.setItem('refresh_token', data.refresh);

        // In postman while testing api, access token was used as a Bearer in Authorization to authenticate, similarly the code below works the same
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;

        // This redirects the browser to /
        window.location.href = '/'
    }

    return (
        <h1 style={{ marginLeft: '200px' }}>Login</h1>
    )

}