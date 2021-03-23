import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDsxS4IhFUZkxPzcmJCrl1uCbTZPh2Xaiw",
    authDomain: "pokemon-game-438f5.firebaseapp.com",
    databaseURL: "https://pokemon-game-438f5-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-438f5",
    storageBucket: "pokemon-game-438f5.appspot.com",
    messagingSenderId: "1034230148969",
    appId: "1:1034230148969:web:5855d230f25981732857f8"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
