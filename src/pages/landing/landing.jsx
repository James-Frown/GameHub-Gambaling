const signup = () => {

    function signupHandler() {
        console.log("signup clicked");
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
                        <button onClick={signupHandler}>SignUp</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default signup;