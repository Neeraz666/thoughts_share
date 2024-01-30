import React, { useState, useEffect } from 'react'
import '../App.css'

export function Navigation() {

    /*
        Used useState and useEffect Hook. At first isAuth is set to false using useState hook. Then using if conditionals, we check the localStorage if there is access_token in localStorage is not null then isAuth is set to true. Created a navigation bar using html and css.
    */

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
            <h1>Soch</h1>
            <div>
                {isAuth && <a className='navkobich' href="/">Home</a>}
                {isAuth && <a className='navkobich' href="/">Profile</a>}
                {isAuth && <a className='navkobich' href="/">Settings</a>}
            </div>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', margin: 0, padding: 0 }}>
                    <li>
                        {isAuth ?
                            <a href="/logout">
                                <button style={{ padding: '20px', background: '#6ccdd4', border: '#6ccdd4', borderRadius: '30px' }}>Logout</button>
                            </a> : <a href="/login">
                                <button style={{ padding: '20px', background: '#6ccdd4', border: '#6ccdd4', borderRadius: '30px' }}>Login</button>
                            </a>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}
