import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// const db = getFirestore();

// // collection ref
// const colRef = collection(db, "watchlist");

// // get collection data
// let watchlists = [];

// getDocs(colRef)
//   .then((snapshot) => {
//     console.log('snapshot.docs-----------',snapshot.docs)
//     console.log('auth.uid-------', auth.lastNotifiedUid)
//     snapshot.docs.forEach((doc) => {
//       watchlists.push({ ...doc.data(), id: doc.id });
//     });
//     console.log('firebase watchlist-------', watchlists);

//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// // adding docs
// export const addToWatchlist = (ticker) => {
//   setDoc(colRef, {
//     uid: auth.lastNotifiedUid,
//     symbols: [...ticker],
//   }).then(docRef => {
//     console.log("Document has been added successfully");
//   }).catch(err => {
//     console.log(err);
//   })
// };

// // deleting docs
// export const deleteFromWatchList = (ticker) => {
//   setDoc(colRef, {
//     uid: auth.lastNotifiedUid,
//     symbols: watchlist.filter((elem) => elem !== ticker),
//   });
// };

// export const getUser = () => {
//   console.log(auth)

//   if (user) {
//     // User is signed in.
//     console.log("user-------", user);
//   } else {
//     // No user is signed in.
//     console.log("no user");
//   } 
// }

