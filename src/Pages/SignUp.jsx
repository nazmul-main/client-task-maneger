import { Link, useNavigate } from "react-router-dom";
import login from '../assets/images/banner-3.png'
import SocialLogin from "./SocialLogin";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {

    const navigate = useNavigate()
    const {createUser} = useAuth()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, photo, password);

         /* password validation */
         if (password.length < 6) {
            Swal.fire(" password is less than 6 characters");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            Swal.fire("don't have a capital letter");
            return;
        }

        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            Swal.fire("don't have a special character");
            return;
        }

        /* creatting  user */
        createUser(email, password)
            .then(res => {
                console.log(res);
                Swal.fire("User Created Successfully");
                navigate('/')

                
            })
            .then(err => console.log(err))
    }





    return (
        <div>
            <section className="relative">
                <div className=" min-h-screen absolute inset-0 bg-black bg-opacity-50" style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative z-10">
                    <Link to='/' className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        <img className="w-8 h-8 mr-2" src={login} alt="logo" />
                        Home
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Create an Acount
                            </h1>
                           
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your Email" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your Email" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Photo URL</label>
                                    <input type="text" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your Email" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                </div>
                                <button type="submit" className="w-full bg-[#F47068] text-[#fff] hover:bg-[#d2514a] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</button>
                                <p className="text-sm  text-gray-500 ">
                                    A;ready Have Acount? <Link to='/signin' className="font-medium text-primary-600 hover:underline "><span className="text-[#F47068] font-bold">Sign in</span></Link>
                                </p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;