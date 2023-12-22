import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete, MdWatchLater } from "react-icons/md";

const ToDoTaks = () => {
    return (
        <div className=" bg-[#f3d7d7] px-4 py-3 ">
            <div className="flex  justify-between items-center  ">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold">To Do</h2>
                    <p className="px-2 font-semibold  rounded-full bg-gray-100">3</p>
                </div>
                <div>
                    <IoMdAddCircle className="text-[22px] text-" />
                </div>
            </div>
            <div className="bg-[#ffffff] my-6 py-3 px-3 space-y-[20px] rounded-md">
                <h3 className="font-bold">Title</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum quo atque cupiditate rem esse consequatur culpa nemo harum officia?</p>
                <div className="flex item center  justify-between ">
                    <p className="text-semibold bg-[#433de9e3] px-2  rounded-md text-gray-200 font-semibold">Low</p>
                    <p className="flex items-center gap-1 font-semibold">
                        <MdWatchLater className="text-[18px]" />
                        Apr 12
                    </p>
                </div>
                <div>
                    <button className=" text-center" >
                        <FaEdit className="text-green-600 text-2xl  font-semibold mr-8" />
                    </button>
                    <button >
                        <MdDelete className="text-red-600 text-2xl  font-semibold" />
                    </button>
                </div>
            </div>
            <div className="bg-[#ffffff] my-6 py-3 px-3 space-y-3 rounded-md">
                <h3 className="font-bold">Title</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum quo atque cupiditate rem esse consequatur culpa nemo harum officia?</p>
                <div className="flex item center  justify-between ">
                    <p className="text-semibold bg-[#433de9e3] px-2  rounded-md text-gray-200 font-semibold">Low</p>
                    <p className="flex items-center gap-1 font-semibold">
                        <MdWatchLater className="text-[18px]" />
                        Apr 12
                    </p>
                </div>
                <div>
                    <button className=" text-center" >
                        <FaEdit className="text-green-600 text-2xl  font-semibold mr-8" />
                    </button>
                    <button >
                        <MdDelete className="text-red-600 text-2xl  font-semibold" />
                    </button>
                </div>
            </div>
            <div className="bg-[#ffffff] my-6 py-3 px-3 space-y-3 rounded-md">
                <h3 className="font-bold">Title</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum quo atque cupiditate rem esse consequatur culpa nemo harum officia?</p>
                <div className="flex item center  justify-between ">
                    <p className="text-semibold bg-[#433de9e3] px-2  rounded-md text-gray-200 font-semibold">Low</p>
                    <p className="flex items-center gap-1 font-semibold">
                        <MdWatchLater className="text-[18px]" />
                        Apr 12
                    </p>
                </div>
                <div>
                    <button className=" text-center" >
                        <FaEdit className="text-green-600 text-2xl  font-semibold mr-8" />
                    </button>
                    <button >
                        <MdDelete className="text-red-600 text-2xl  font-semibold" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToDoTaks;