import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify"


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