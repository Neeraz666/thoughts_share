import { useEffect, useState } from "react";
import axios from "axios";

export const Logout = () => {
    useEffect(() => {

        // The function gets the refresh token from the localstorage and calls the url for logout and it clears the access tokens and refresh tokens from the local storage and redirects to /login

        (async () => {
            try {
                const { data } = await axios.post('http://localhost:8000/api/logout/', {
                    refresh_token: localStorage.getItem('refresh_token')
                }, {
                    headers: { 'Content-Type': 'application/json' }
                }, { withCredentials: true });

                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login'
            }
            catch (e) {
                console.log('logout not working', e)
            }
        })();
    }, []);

    return (
        <div></div>
    )

}