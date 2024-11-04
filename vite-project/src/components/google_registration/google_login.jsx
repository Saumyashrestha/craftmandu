import { GoogleLogin } from 'react-google-login';
const clientId = "4957128503-g7h1fqfmcvjuvc98gnu6cji9k9o870an.apps.googleusercontent.com";

function GLogin() {

    const onSuccess = (res) => {
        console. log("LOGIN SUCCESS! Current user: ", res.profileobj);
        }
        const onFailure = (res) => {
        console. log("LOGIN FAILED! res: ", res);
        }

    return(
    <div id="signInButton">
    <GoogleLogin
    clientId={clientId}
    buttonText="Continue with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />
    </div>
    )
}

export default GLogin;