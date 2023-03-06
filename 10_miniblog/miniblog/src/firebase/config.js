
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4lP0RuJRrUcOg89h6MJMqBpQ6hwnx_Vg",
  authDomain: "miniblog-78e09.firebaseapp.com",
  projectId: "miniblog-78e09",
  storageBucket: "miniblog-78e09.appspot.com",
  messagingSenderId: "375520962253",
  appId: "1:375520962253:web:0baaf804e14c2b2e8c2b84"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }