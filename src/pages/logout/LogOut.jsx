import { useAuthContext } from "../../services/authContext";
import { signOutEndpoint } from "../../services/backend";

const LogOut = (props) => {
    const { onSignOut } = useAuthContext();

  return (
<div>Thanks for visiting...
{
   (() => {
    signOutEndpoint();
    onSignOut();
   })()
}

</div>
        );
}
export { LogOut }