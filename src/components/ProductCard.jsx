import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/Context";

function ProductCard({ id, img, title, price, stock }) {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("");
  const [maxQty, setMaxQty] = useState(0);
  const { updateCartList, cartList } = useContext(context);

  useEffect(() => {
    setMaxQty(stock[size]);
  }, [size]);

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
  };

  return (
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
            onChange={(e) => setSize(e.target.value)}
            defaultValue={""}
          >
            <option disabled value={""}>
              Talle
            </option>
            <option value={"xs"} disabled={stock.xs === 0 ? true : false}>
              XS
            </option>
            <option value={"s"} disabled={stock.s === 0 ? true : false}>
              S
            </option>
            <option value={"m"} disabled={stock.m === 0 ? true : false}>
              M
            </option>
            <option value={"l"} disabled={stock.l === 0 ? true : false}>
              L
            </option>
            <option value={"xl"} disabled={stock.xl === 0 ? true : false}>
              XL
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
                setAmount((state) => (state < maxQty ? state + 1 : maxQty))
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
  );
}

export default ProductCard;
