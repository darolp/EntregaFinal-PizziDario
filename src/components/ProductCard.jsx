import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCard({ id, img, title, price, stock }) {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("");
  const { updateCartList, cartList } = useContext(context);


  const notify = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  //cada vez que se selecciona una talle se actualiza tambien la cantidad, 
  //para evitar que se agrege un producto con mas cantidad que la maxima permitida
  const handleSize = (size) => {
    setSize(size);
    setAmount(1);
  }

  const addCart = () => {
    // Busco si el producto existe en el cart
    const productInCart = cartList.find(
      (elem) => elem.idProducto === id && elem.size === size
    );

    // genero un nuevo amount en el caso de que haya y se pueda que incrementar
    let newAmount;
    if (productInCart && productInCart.amount + amount <= stock[size]) {
      newAmount = productInCart.amount + amount;
    }

    // Genero o actualizo el item
    const itemToAdd = {
      id: productInCart?.id || Math.random() * 10000,
      idProducto: id,
      img: img,
      amount: newAmount || amount,
      size: size,
      title: title,
      price: price,
    };

    // Si el item existe en el cart, mapeo el cart y actualizo el amount de ese item
    // si no, agrego el item al cart
    updateCartList(
      productInCart
        ? cartList.map((elem) => {
          if (elem.id === productInCart.id) {
            return itemToAdd;
          }
          return elem;
        })
        : [...cartList, itemToAdd]
    );

    //una vez agregado o actualizado el item se reincian los estados
    notify("se agregó correctamente al carrito")
    resetInputs()
  };

  const resetInputs = () => {
    setAmount(1)
    setSize("")
  }


  return (
    <>
      <div className="productCard">
        <div className="productCard-img">
          <img src={img} alt="product" />
        </div>
        <div className="productCard-text">
          <h2>{title}</h2>
          <span className="tags">$ {price}</span>
        </div>
        <div className="productCard-buttons">
          <div>
            <select
              className="productCard-buttons-select"
              required
              onChange={(e) => handleSize(e.target.value)}
              value={size}
            >
              <option disabled value={""}>
                Talles
              </option>
              <option value={"xs"} disabled={stock.xs === 0 ? true : false} className="stock">
                XS ({stock.xs})
              </option>
              <option value={"s"} disabled={stock.s === 0 ? true : false}>
                S ({stock.s})
              </option>
              <option value={"m"} disabled={stock.m === 0 ? true : false}>
                M ({stock.m})
              </option>
              <option value={"l"} disabled={stock.l === 0 ? true : false}>
                L ({stock.l})
              </option>
              <option value={"xl"} disabled={stock.xl === 0 ? true : false}>
                XL ({stock.xl})
              </option>
            </select>
            <div className="productCard-buttons-amount">
              <label>Cantidad: </label>
              <button onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}>
                -
              </button>
              <input type="number" value={amount} readOnly />
              <button
                onClick={() =>
                  setAmount((state) => (state < stock[size] ? state + 1 : stock[size]))
                }
              >
                +
              </button>
            </div>
          </div>
          <div>
            <Link className="productCard-buttons-detail" to={`/product/${id}`}>
              Ver detalle
            </Link>
            <button
              className="productCard-buttons-addCart"
              onClick={addCart}
              disabled={!size}
            >
              {size ? "Agregar al carrito" : "Seleccionar talle"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ProductCard;
