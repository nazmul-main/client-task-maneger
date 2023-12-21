import { useState } from "react";
import { FaArrowAltCircleLeft, FaClipboardList, FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { user } = useAuth();



    return (
        <div className="flex">
            <div className={` bg-[#f6dddd95] min-h-screen z-10 fixed  p-3 ${open ? "md:w-72" : "w-16"} duration-300 relative `}>
                <FaArrowAltCircleLeft
                    className={`text-gray-800  text-3xl absolute -right-3 top-7 cursor-pointer border border[#FF735C] rounded-full bg-[#FF735C] ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}

                />
                <div className="inline-flex my-12">
                    <FaClipboardList
                        className={`bg-[#FF735C] text-[#303030]] text-3xl   cursor-pointer block float md:mr-2 ${open && 'rotate-[360deg] duration-500'}`} />
                    <h1 className={`text-[#303030] font-medium text-xl duration-200 ${!open && "scale-0 "}`}>Task Manegment</h1>

                </div>
                <ul className="pt-2">
                    <li className="{`text-gray-400 text-sm py-4 mt-2 cursor-pointer hover:bg-[#f39e8b]  p-2 hover:bg-light-white rounded-md  `}">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[##FF735C] font-semibold  items-center bg-[#efb7ae] border-r-4 border-white"
                                        : "hover:text-[#120a09]  font-semibold text-[#2C3659]"
                            }
                        >
                            <span className={`text-[20px] block float-left  md:mr-2 mt-[1px] ${!open && "py-4 mt-2"}`}>
                                <FaHome />
                            </span>
                            <span className={`text-[20px] font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                                <h1>Home</h1>
                            </span>
                        </NavLink>

                    </li>
                    <li className="{`text-gray-400 text-sm py-4 mt-2 cursor-pointer   p-2 hover:bg-light-white rounded-md  `}">
                        <NavLink
                            to="/dashboard/create_task"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF735C] font-semibold  items-center bg-[#efb7ae]"
                                        : "hover:text-[#120a09] font-semibold text-[#2C3659]"
                            }
                        >
                            <span className={`text-[20px] block float-left  md:mr-2 mt-[1px] ${!open && "py-4 mt-2 duration-100"}`}>
                                <IoMdAddCircle />
                            </span>
                            <span className={`text-[20px] font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                                <h1>Create Taks</h1>
                            </span>
                        </NavLink>

                    </li>
                    <li className="{`text-gray-400 text-sm py-4 mt-2 cursor-pointer   p-2 hover:bg-light-white rounded-md  `}">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#303030] font-semibold  items-center"
                                        : "hover:text-[#120a09] font-semibold text-[#2C3659]"
                            }
                        >
                            <span className={`text-[20px] block float-left  md:mr-2 mt-[1px] ${!open && "py-4 mt-2"}`}>
                                <BiSolidSkipPreviousCircle />
                            </span>
                            <span className={`text-[20px] font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                                <h1>Previous Task</h1>
                            </span>
                        </NavLink>

                    </li>



                </ul>
            </div>

            <div className="flex-1">


                <nav className="bg-white border-gray-200 shadow-red-400 shadow-sm  md:px-16">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." />
                        </div>
                        <div className="flex md:order-2 justify-between">
                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 0 hover:bg-gray-100 da focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            <div className="flex items-center md:gap-5 gap-10">
                                <div className="w-7 md:w-12 rounded-full md:mr-4 flex items-center font-bold text-[#FF735C]">

                                    <h2>{user?.displayName}</h2>
                                </div>
                                <div className="w-7 md:w-12 rounded-full md:mr-4 ">

                                    <img className="rounded-full" src={user.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"} alt={user.displayName} />
                                </div>
                            </div>


                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                            <div className="relative mt-3 md:hidden">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." />
                            </div>

                        </div>
                    </div>
                </nav>

                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Dashboard;