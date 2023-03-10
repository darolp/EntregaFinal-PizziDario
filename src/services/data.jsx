import { getFirestore, doc, getDoc, collection, getDocs, addDoc, updateDoc } from 'firebase/firestore'




const getAll = async () => {
  const db = getFirestore();
  const productsColections = collection(db, 'productos')
  const response = await getDocs(productsColections);

  const products = response.docs.map(doc => ({ id: doc.id, ...doc.data() }))


  return products
}

const updeteStock = async (id, size, newAmount) => {
  const db = getFirestore();
  const productDoc = doc(db, 'productos', id);
  const updateObj = {};
  updateObj[`stock.${size}`] = newAmount;
  await updateDoc(productDoc, updateObj);
}


const get = async (id) => {
  const db = getFirestore();
  const productDoc = doc(db, 'productos', id);
  const response = await getDoc(productDoc);
  if (response.exists()) {
    const product = { id: response.id, ...response.data() }
    return product
  }
  return false
}

const newOrder = (order) => {
  const db = getFirestore();
  
  const ordersCollection = collection(db, 'orders');

  return addDoc(ordersCollection, order)
}


export const productService = { getAll, get, newOrder, updeteStock }