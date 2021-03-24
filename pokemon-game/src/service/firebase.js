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
class  Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        });
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off();
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (newPokemon, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(newPokemon).then(() => cb());
    }
}


export default Firebase;
