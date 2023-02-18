import { createContext, useState, useEffect } from "react";

const context = createContext({});

const ContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const updateCartList = (value) => {
    // setCartList((prevState) => [...prevState, value]);
    setCartList(value);
  };

  const removeCartItem = (itemId) => {
    const newcartList = cartList.filter((item) => item.id !== itemId);
    setCartList(newcartList);
  };

  const cleanCart = () => {
    setCartList([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <context.Provider
      value={{ cartList, updateCartList, removeCartItem, cleanCart }}
    >
      {children}
    </context.Provider>
  );
};

export { ContextProvider, context };
