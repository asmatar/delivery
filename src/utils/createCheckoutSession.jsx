// @ts-nocheck
import {
  collection, doc, addDoc, onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase-config';

async function createCheckoutSession(uid, cart) {
  const collectionRef = collection(db, `customers/${uid}/checkout_sessions`);
  const { id } = await addDoc(collectionRef, {
    mode: 'payment',
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    collect_shipping_address: true,
    line_items: cart.map((item) => ({
      quantity: item.quantity,
      price: item.priceId,
    })),
  });
  window.localStorage.removeItem('basketProducts');
  window.localStorage.removeItem('totalQuantity');
  window.localStorage.removeItem('subTotal');

  const cancelStreaming = onSnapshot(
    doc(db, `customers/${uid}/checkout_sessions/${id}`),
    (snapshot) => {
      const { url } = snapshot.data();
      if (url) {
        cancelStreaming();
        window.location.href = url;
      }
    },
  );
}

export default createCheckoutSession;
