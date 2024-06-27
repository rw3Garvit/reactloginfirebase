import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import Profile from "./Components/Profile";
import { getAllData, saveItem } from "./firebase/functions";

const App = () => {
  let productName = useRef();
  let price = useRef();

  // let { loginWithRedirect, logout } = useAuth0();

  let addItem = async () => {
    let product = {
      productName: productName.current.value,
      price: price.current.value,
    };

    let res = await saveItem(product);
    console.log(res);
  };

  useEffect(() => {
    getAllData();
  });

  return (
    <div>
      <input type="text" ref={productName} />
      <input type="text" ref={price} />
      <button onClick={addItem}>Submit</button>
      {/* <Profile />
      <button onClick={() => loginWithRedirect()}>Login</button>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button> */}
    </div>
  );
};

export default App;
