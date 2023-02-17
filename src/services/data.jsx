import { getFirestore, doc, getDoc, collection, getDocs, addDoc } from 'firebase/firestore'




const getAll = async () => {
  const db = getFirestore();
  const productsColections = collection(db, 'productos')
  const response = await getDocs(productsColections);

  const products = response.docs.map(doc => ({ id: doc.id, ...doc.data() }))


  return products
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


export const productService = { getAll, get, newOrder }