import React, { useCallback } from "react";
import { User as FirebaseUser } from "firebase/auth";
import {
    Authenticator,
    buildCollection,
    buildProperty,
    EntityReference,
    FirebaseCMSApp
} from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";
import TimesheetSchema from "./schemas/TimesheetSchema";
import WorkerSchema from "./schemas/WorkerSchema";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};


export default function App() {

    const myAuthenticator: Authenticator<FirebaseUser> = useCallback(async ({
                                                                    user,
                                                                    authController
                                                                }) => {
       
        // This is an example of retrieving async data related to the user
        // and storing it in the user extra field.
        const sampleUserRoles = await Promise.resolve(["admin"]);
        authController.setExtra(sampleUserRoles);

        return true;
    }, []);

    return <FirebaseCMSApp
        name={"My Online Shop"}
        authentication={myAuthenticator}
        collections={[WorkerSchema, TimesheetSchema]}
        firebaseConfig={firebaseConfig}
    />;
}