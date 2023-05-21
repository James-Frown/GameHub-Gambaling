const signup = () => {

    function signupPage() {
        console.log("signup clicked");
    }

    function loginPage() {
        console.log("login clicked");
    }

    return (
        <>
            <div>
                <div>
                    <h1>
                        Landing Page
                    </h1>
                    <p>
                        Signin Or Sign Up
                    </p>
                </div>

                <div>
                    <div>
                        <button onClick={signupPage}>SignUp</button>
                        <button onClick={signupPage}>SignUp</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default signup;