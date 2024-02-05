import React, { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { LOGIN_BACKGROUND, USER_ICON } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // To reset field values in form to empty whenever switch between Sign In / Sign Up
  useEffect(() => {
    if (name.current) {
      name.current.value = "";
    }
    if (email.current) {
      email.current.value = "";
    }
    if (password.current) {
      password.current.value = "";
    }
  }, [isSignInForm]);

  const handleButtonClick = () => {
    // Form Validation
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign Up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Doing this to update profile picture as this firebase has no direct update with sign in/sign up
          updateProfile(user, {
            photoURL: USER_ICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log(photoURL);
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // Doing this to update profile picture as this firebase has no direct update with sign in/sign up
          updateProfile(user, {
            photoURL: USER_ICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BACKGROUND} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="name"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="font-bold text-red-700 py-2">{errorMessage}</p>

        <button
          className="p-4 my-2 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sing Up Now"
            : "Exisiting User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
