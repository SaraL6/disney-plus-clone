import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBC-_YDhJqZ7-gc_yfNrrussTUwu4eutxc",
    authDomain: "disneyplus-clone-3f6a6.firebaseapp.com",
    projectId: "disneyplus-clone-3f6a6",
    storageBucket: "disneyplus-clone-3f6a6.appspot.com",
    messagingSenderId: "759111674005",
    appId: "1:759111674005:web:bd8a7cf3601c57091d139c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;