import axios from "axios";

export const SignUp = () => {
    return (
        <div className="signupbody">
            <div className="signupcontainer">
                <h2>Sign Up</h2>
                <form id="signupform">
                    <div className="signupformgroup">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="signupformgroup">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="signupformgroup">
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="signupformgroup">
                        <label for="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                    <div className="signupformgroup">
                        <label for="photo">Photo:</label>
                        <input type="file" id="photo" name="photo" accept="image/*" />
                    </div>
                    <div className="signupformgroup">
                        <label for="bio">Bio:</label>
                        <textarea id="bio" name="bio"></textarea>
                    </div>
                    <div className="signupformgroup">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="signupformgroup">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required />
                    </div>
                    <div className="signupformgroup">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}