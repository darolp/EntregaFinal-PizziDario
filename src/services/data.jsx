import {getFirestore, doc, getDoc, collection, getDocs} from 'firebase/firestore'




const getAll = async () => {
  const db = getFirestore();
  const productsColections = collection(db, 'productos')
  const response = await getDocs(productsColections);

  const products = response.docs.map(doc => ({id: doc.id, ...doc.data()}))


  return products
}


const get = async (id) => {
  const db = getFirestore();
  const productDoc = doc(db, 'productos' , id);
  const response = await getDoc(productDoc);
  return { id: response.id, ...response.data()}
}


export const productService = { getAll, get }