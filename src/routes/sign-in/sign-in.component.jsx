import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utlis';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(response);
    }

    return (
        <div>
            <h1>
                Sign In Page
            </h1>
            <button onClick = {logGoogleUser}>
                Sign in with Google popup
            </button>
        </div>
    )
}

export default SignIn;