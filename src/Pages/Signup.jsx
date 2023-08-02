import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { authConfig } from "../firebase";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/app';

function Signup() {
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                authConfig,
                email,
                password
            )
            window.alert("Berhasil registrasi, silahkan masuk menggunakan email yang terdaftar");
            navigation('/login')
        } catch (error) {
            console.log(error.messsage)
        }


    }
    return (
        <>
            <div className="h-screen bg-gray-800 grid content-center">

                <div className="h-fit w-fit mx-auto bg-gray-700 p-12 lg:p-16 rounded-sm">
                    <form onSubmit={handleSignup}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" className="block text-white py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" onChange={(e) => { setEmail(e.target.value) }} required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-white peer" onChange={(e) => { setPassword(e.target.value) }} required />
                            <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="w-full grid justify-items-center">
                            <button type="submit" className="bg-white hover:bg-gray-200 px-5 py-1 text-xs text-center rounded-sm">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Signup;