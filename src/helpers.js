import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import naruto from "../src/IMG/1.jpg"
import boruto from "../src/IMG/2.jpg"
import pain from "../src/IMG/3.jpg"
import ishiki from "../src/IMG/4.jpg"
import sasuke from "../src/IMG/5.jpg"
import jiraya from "../src/IMG/6.jpg"


// toastify functions
export const toastErr = (msg)=> {
    toast.error(msg)
}
export const toastSuc = (msg)=> {
    toast.success(msg)
}


// create user function
export const register = async (email, username, firstName, lastName, password) => {
    await createUserWithEmailAndPassword(auth, email, password, username, lastName, firstName)
    .then( async (usdrCredential)=> {
        const user = usdrCredential.user;
        console.log("user created: ", user);

        // adding user informations to db
        await addDoc(collection(db, "messages"), {
            email: email,
            username: username,
            firstName: firstName,
            lastName: lastName,
            timeStamp: serverTimestamp()
        })
        .then(()=> {
            console.log("user profile written to db");
        })
        .catch((err)=> {
            console.log("couldnt write to the database: ", err);
        });
    })
    .catch((err)=> {
        console.log(err.message);
    })
}

export const login = async (email, password)=> {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
        const user = userCredential.user;
        console.log(user);
    })
    .then((err)=> {
        console.log(err);
    })
}


// sample array for testing
export const users = [
    {
        name: "Naruto Uzumaki",
        img: naruto
    },
    {
        name: "Boruto Uzumaki",
        img: boruto
    },
    {
        name: "Nagato Pain",
        img: pain
    },
    {
        name: "Isshiki Otsutsuki",
        img: ishiki
    },
    {
        name: "Sasuke Uchiha",
        img: sasuke
    },
    {
        name: "Jiraiya",
        img: jiraya
    }
]