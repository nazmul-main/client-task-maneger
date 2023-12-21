/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";


const SocialLogin = () => {

    const {  googleLogin } = useAuth()
    const navigate = useNavigate()
    

    const handleSocialLogin = (loginFunction) => {
        loginFunction()
        .then(res => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signin Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(location?.state ? location.state : '/')
            
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "something was wrong",
                footer: '<a href="#">Why do I have this issue?</a>'
              });

        });
    }





    return (
        <div>
            <div className="w-full mx-auto">
            <div className='divider '>Countinew With</div>
            <div>
                <button onClick={() => handleSocialLogin(googleLogin)} type="button" className="w-full flex items-center justify-center bg-blue-50 text-black py-2 rounded-lg border-4">
                    <img className="w-8 h-8" src="https://i.ibb.co/3S2cbdW/7611770-removebg-preview.png" alt="google logo" />
                    <p className="font-semibold">Sign in with Google</p>
                </button>
            </div>
        </div>
        </div>
    );
};

export default SocialLogin;