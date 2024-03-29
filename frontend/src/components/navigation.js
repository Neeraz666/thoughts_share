import '../App.css'

export function Navigation({isAuth}) {

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
                        <li className = 'libutton'>
                            {isAuth ?
                                <a href="/logout">
                                    <button style={{ padding: '20px', background: '#c7ebe6', border: '#c7ebe6', borderRadius: '30px', fontSize: '15px'} }>Logout</button>
                                </a> 
                                :
                                <div>
                                <a href="/login">
                                    <button style={{ marginTop: '180px' ,padding: '20px', background: '#c7ebe6', border: '#c7ebe6', borderRadius: '30px', display: "ruby-text", cursor: 'pointer'}}>Login</button>
                                </a>
                                <a href="/signup">
                                    <button style={{ marginTop: '20px', padding: '20px', background: '#c7ebe6', border: '#c7ebe6', borderRadius: '30px', cursor: 'pointer' }}>SignUp</button>
                                </a>
                                </div> 
                                }
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
