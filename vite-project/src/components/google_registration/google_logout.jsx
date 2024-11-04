import { GoogleLogout } from "react-google-login";
const clientId =
  "4957128503-g7h1fqfmcvjuvc98gnu6cji9k9o870an.apps.googleusercontent.com";


function GLogout() {
  const onSuccess = () => {
    console.log("Log out successfull!");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default GLogout;
