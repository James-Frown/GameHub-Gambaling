// import fire from '../../config/fire';

// import './login.css';

const signup = () => {

    function signupHandler() {
        console.log("signup clicked");
    }

    return (
        <>
            <div>
                <div>
                    <h1>
                        SignUp Page
                    </h1>
                    <p>
                        Enter Your Details...
                    </p>
                </div>

                <div>
                    <form id="login-form">
                        <label>
                            Please enter your Email:
                            <input id="email" type='text' placeholder='eg: name@gmail.com'>
                            </input>
                        </label>
                        <label>
                            Please enter a Password:
                            <input id="password" type='text' placeholder='eg: 123456789'>
                            </input>
                        </label>
                        <div>
                            <button onClick={signupHandler}>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default signup;