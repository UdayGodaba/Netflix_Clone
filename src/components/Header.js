import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { removeAllData } from "../utils/moviesSlice";
import { removeSearchedMovies, toggleSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeAllData());
        navigate("/");
      }
    });

    // unsubscribe the event listener when component unmounts
    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
    dispatch(removeSearchedMovies());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-slate-800 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-center md:justify-normal">
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            className="py-2 px-4 mx-4 my-2 bg-blue-700 text-white rounded-lg"
            onClick={handleSearchClick}
          >
            {!showSearch ? "Search" : "Home"}
          </button>

          <img className="w-12 h-12" alt="usericon" src={user.photoURL} />

          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
