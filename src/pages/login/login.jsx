import fire from '../../config/fire';

const loginPage = () => {

    function login() {

    }

    function signup() {

    }

    return (
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
                <form>
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
                </form>
            </div>
            <div>
                <button onClick={login}>Login</button>
                <button onClick={signup}>SignUp</button>
            </div>
        </div>
    );
};

export default loginPage;