import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png'
import useAuth from "../Hook/useAuth";


const Navbar = () => {
    const { user, signOutUser } = useAuth()
    const navLink = <>


        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#F47068] font-semibold " : "hover:text-[#F47068] font-semibold text-[#2C3659]"}> Home</NavLink>
        </li>
        
        {
            user?.email ?
                <li><NavLink to="/dashboard" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#F47068] font-semibold " : "hover:text-[#F47068] font-semibold text-[#2C3659]"}> Dashboard </NavLink>
                </li>
                : null
        }
        <li><NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#F47068] font-semibold " : "hover:text-[#F47068] font-semibold text-[#2C3659]"}> About</NavLink>
        </li>





    </>

    return (
        <div>
            <div className="   navbar max-w-screen-xl mx-auto my-4 felx items-center justify-between ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-sm lg:hidden mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#858b9f] w-32 rounded-md">
                            {navLink}
                        </ul>
                    </div>
                    <Link to={'/'} className="normal-case text-xl flex items-center md:2]">
                        <img className="w-5 md:w-9" src={logo} alt="" />
                        <h2 className="text-[10px] md:text-[18px] ml-1 font-bold">
                            <span>SMOOTH </span>
                            <span className="text-[#F47068]">HUB</span>
                        </h2>
                    </Link>
                </div>
                <div className="navbar-center hidden  lg:flex items-start">
                    <ul className=" gap-10 menu-horizontal px-1">
                        {navLink}

                    </ul>
                </div>
                <div className='navbar-end flex justify-center items-center'>
                    {
                        user?.email ?
                            <div className="navbar-end  flex items-center ">
                                <div className="dropdown dropdown-end ">

                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                                        <div className="w-7 md:w-12 rounded-full md:mr-4">

                                            <img src={user.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"} alt={user.displayName} />
                                        </div>

                                    </label>
                                    <ul tabIndex={0} className=":  dropdown-content mt-3 z-[1] p-2 shadow bg-[#ed918594] rounded-b-full rounded-l-full py-2 px-4">
                                        <li>
                                            <h3 className=" font-semibold "> {user.displayName
                                            }</h3>

                                        </li>
                                        <li>
                                            <h3 className="font-semibold  ">{user.email
                                            }</h3>

                                        </li>
                                    </ul>

                                </div>
                                <label className="swap swap-rotate md:mr-4">

                                </label>


                                <Link onClick={signOutUser} to='/signin' className="text-[12px] md:text-[18px] px-1 md:px-4 py-1 rounded-md bg-[#F47068] text-[#fff] font-bold ">Sign Out</Link>

                            </div>

                            :
                            <div className="navbar-end  flex items-center ">
                                <Link to='/signin' className="text-[12px] md:text-[18px] px-1 md:px-4 py-1 rounded-md bg-[#F47068] text-[#fff] font-bold ">Sign In</Link>
                            </div>


                    }



                </div>


            </div>
        </div>
    );
};

export default Navbar;