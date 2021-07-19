import { db, auth } from './firebaseConfig';

db.collection("Order").doc().set((doc) => {
    msj: "hola";
});
