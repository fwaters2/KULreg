import React from 'react'
import firebase from '../Firebase'
export default function AuthPlay(props) {
    const [user, updateUser ] = React.useState("")
      const googleAuth = () => firebase.auth.onAuthStateChanged(function(user) {
        if (user) {
          updateUser(user)
        } else {
          // No user is signed in.
        }
      });
    return (
        <div className="App">
          <header className="App-header">
              {/* {firebase.auth.onAuthStateChanged(function(user) {
        if (user) {
          updateUser(user)
        } else {
          // No user is signed in.
        }})} */}
            <div>User: {user} </div>
            {console.log(props)}
            {
              user 
                ? <p>Hello, {user.displayName}</p>
                : <p>Please sign in.</p>
            }
            {
              user
                ? <button >Sign out</button>
                : <button onClick={googleAuth}>Sign in with Google</button>
            }
          </header>
        </div>
      )
        }