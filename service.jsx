import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';



const firebaseConfig = {
    apiKey: "AIzaSyBeb-Htvu5NgO7vG3VVvGG6iE_-SicvGC8",
    authDomain: "a4dabul-123fe.firebaseapp.com",
    projectId: "a4dabul-123fe",
    storageBucket: "a4dabul-123fe.appspot.com",
    messagingSenderId: "241904223870",
    appId: "1:241904223870:web:5aba4bb6085451f9c4ba2f",
    measurementId: "G-STCQ4E78GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async () => {
    return await getDocs(collection(db, "products"));
}

export const addNProducts = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "products"), {
            name: data.name,
            category: data.category,
            description: data.description,
            price: data.price,
            image: data.image,
            ingredients: data.ingredients
        });

        console.log("Document written with ID: ", docRef.id);
        return docRef.id
    } catch (e) {
        console.error("Error adding document: ", e);
        return (e)
    }
}

export const deleteProducts = async (id) => {
    return await deleteDoc(doc(db, "products", id));

}

export const getCategories = async () => {
    return await getDocs(collection(db, "categories"));
}

export const updateProducts = async (data) => {

    const updateRef = doc(db, "products", data.id);

    await updateDoc(updateRef, {
        name: data.name,
        category: data.category,
        description: data.description,
        price: data.price,
        image: data.image,
        ingredients: data.ingredients
    });

    return updateRef.id
}

export const loginAuth = async (data) => {


    const auth = getAuth(app);
    return await signInWithEmailAndPassword(auth, data.username, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            sessionStorage.setItem('token', user.accessToken)
            toast('Login successful!', { hideProgressBar: true, autoClose: 3000, type: 'success' })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            toast('Invalid credential', { hideProgressBar: true, autoClose: 3000, type: 'error' })
        });
}

export const signOutAuth = async () => {
    const auth = getAuth();
    return await signOut(auth).then(() => {
        sessionStorage.clear()
    }).catch((error) => {
    });
}