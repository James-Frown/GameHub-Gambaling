// import fire from '../../config/fire';

import './home.css';

const home = () => {

    function logOut() {
        console.log("logout clicked");
    }

    return (
        <>
            <div>
                <h1>
                    you are logged in
                </h1>
                <button onClick={logOut}>
                    logout
                </button>
            </div>
        </>
    );
};

export default home;