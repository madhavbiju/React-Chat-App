import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../context/auth";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history.replace("/login");
  };
  return (
    <nav>
      <div class="branding">
        <div class="logo">
      <img src="https://icons.iconarchive.com/icons/wineass/ios7-redesign/256/Messages-icon.png"></img>
      </div>
      <h3>
        <Link to="/">ReChat</Link>
      </h3>
      </div>
      <div>
        {user ? (
          <>
            <button className="btn" onClick={handleSignout}>
              Logout
            </button>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
