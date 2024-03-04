import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WishListProvider from "./Context/WishListContext.jsx";
import SearchProvider from "./Context/SearchContext.jsx";
import UserProvider from "./Context/UserContext.jsx";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <WishListProvider>
      <SearchProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </SearchProvider>
    </WishListProvider>
  </React.Fragment>
);
