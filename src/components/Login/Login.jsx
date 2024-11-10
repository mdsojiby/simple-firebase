import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firtebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user,setUser]=useState(null);
 const provider= new GoogleAuthProvider();
 const githubProvider= new GithubAuthProvider();

    

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)

        .then(result=>{
            console.log(result.user)
            setUser (result.user)
        })

        .catch(error=>{
            console.log('Error',error)
            setUser(null)
        })

       
       
    }

    const handleGithubSignIn=()=>{
        signInWithPopup(auth,githubProvider)
        
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })

        .catch(error=> {
            console.log('error',error)
        })
    }


    const handleSignOut=()=>{

       signOut(auth)

       .then (()=>{
        console.log('sign out')
        setUser(null)
       })

       .catch(error=>{
        console.log(error)
       })
    }

    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login With Google</button>
             <button onClick={handleSignOut} >Sign out</button> */}


            {

                user ?  <button onClick={handleSignOut} >Sign out</button>:
                <>


                <button onClick={handleGoogleSignIn}>Login With Google</button>
                <button onClick={handleGithubSignIn}>Github Sign  In</button>

                </>


            }
            {
                user && 
                
                <div>
                    <h4> Name:{user.displayName}</h4>
                    <p>email:{user.email}</p>
                    <p>id:{user.providerId}</p>



                </div>
            }
        </div>
    );
};

export default Login;