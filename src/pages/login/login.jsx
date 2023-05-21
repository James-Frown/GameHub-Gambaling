// import fire from '../../config/fire';

// import './login.css';

const login = () => {

    function loginHandler() {
        console.log("login clicked");
    }

    return (
        <>
            <div>
                <div>
                    <h1>
                        Login Page
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
                            Please enter your Password:
                            <input id="password" type='text' placeholder='eg: 123456789'>
                            </input>
                        </label>
                        <div>
                            <button onClick={loginHandler}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default login;