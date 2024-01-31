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
        <div style={{ marginLeft: '200px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <form style={{ width: '100%' }} onSubmit={submit}>
                <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Sign In</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#555' }}>Email</label>
                        <input
                            id="email"
                            style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}
                            placeholder="Enter email"
                            name='email'
                            type='text'
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#555' }}>Password</label>
                        <input
                            id="password"
                            name='password'
                            type="password"
                            style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}
                            placeholder="Enter password"
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', transition: 'background-color 0.3s' }}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )

}