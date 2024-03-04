import React, { createContext } from "react";
import useLocal from "../Hooks/useLocal";
export const WishListContext = createContext(); 
function WishListProvider({ children }) {
  const [wishlist, setWishlist] = useLocal("wishlist", []);

  function addWishList(item) {
    const elementindex = wishlist.findIndex((x) => x._id === item._id);
    if (elementindex === -1) {
      setWishlist([ ...wishlist, item ]);
      return;
    }
  }
  function removeWishList(item) {
    setWishlist(wishlist.filter((x) => x._id !== item._id));
  }
  function isWishList(item) {
    return wishlist.findIndex((x) => x._id === item._id) === -1 ? false : true;
  }

  return (
    <WishListContext.Provider value={{ wishlist, addWishList,removeWishList,isWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;
