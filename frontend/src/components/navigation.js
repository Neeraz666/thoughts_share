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

    // display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0' ,padding: '15px' 

    return (
        <div style={{ margin: '0', padding: '0', width: '300px', backgroundColor: '#f1f1f1', position: 'fixed', height: '100%', overflow: 'auto', textAlign: 'center', float: 'left' }}>
            <h1 style={{ marginTop: '100px' }}>Soch</h1>
            <div style={{ margin: '10em 0' }}>
                {isAuth && <a className='navkobich' href="/">Home</a>}
                {isAuth && <a className='navkobich' href="/">Profile</a>}
                {isAuth && <a className='navkobich' href="/">Settings</a>}
            </div>
            <div style={{ marginLeft: '100px' }}>
                <nav>

                    <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', margin: 0, padding: 0 }}>
                        <li>
                            {isAuth ?
                                <a href="/logout">
                                    <button style={{ padding: '20px', background: '#c7ebe6', border: '#c7ebe6', borderRadius: '30px', fontSize: '15px'} }>Logout</button>
                                </a> : <a href="/login">
                                    <button style={{ padding: '20px', background: '#c7ebe6', border: '#c7ebe6', borderRadius: '30px' }}>Login</button>
                                </a>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
