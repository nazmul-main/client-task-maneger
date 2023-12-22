import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete, MdWatchLater } from "react-icons/md";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Complete = () => {

    const axiospublick = useAxiosPublic()
    const { user } = useAuth()
    const currenetUser = user?.email
    console.log(currenetUser);



    const { data: todoTask = [], isLoading , refetch} = useQuery({
        queryKey: ['todoTask'],
        queryFn: async () => {
            const res = await axiospublick(`/todo_task_filter?email=${currenetUser}`)
            console.log(res.data);
            return res.data
        }
    })

    console.log(todoTask)
    if (isLoading) {
        return <p>loading...</p>
    }

    const todoTasks = todoTask.filter(task => task.status === 'complete');
    console.log(todoTasks);


    /* Deletehabdle */
    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete  this cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiospublick.delete(`/all_task/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        })


    };









    return (
        <div className=" bg-[#def3d7] px-4 py-3 ">
            <div className="flex  justify-between items-center  ">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold">Complete</h2>
                    <p className="px-2 font-semibold  rounded-full bg-gray-100">{todoTasks?.length}</p>
                </div>
                <Link to='/dashboard/create_task'>
                    <IoMdAddCircle className="text-[22px] text-" />
                </Link>
            </div>
            <div >

                {
                    todoTasks?.map(todo => (
                        <div key={todo._id} className="bg-[#ffffff] my-6 py-3 px-3 space-y-[20px] rounded-md ">
                            <h3 className="font-bold">{todo?.title}</h3>
                            <p>{todo?.description}</p>
                            <div className="flex item center  justify-between ">
                                <p className="text-semibold bg-[#433de9e3] px-2  rounded-md text-gray-200 font-semibold">{todo?.priority}</p>
                                <p className="flex items-center gap-1 font-semibold">
                                    <MdWatchLater className="text-[18px]" />
                                    {todo?.date}
                                </p>
                            </div>
                            <div>
                                <button className=" text-center" >
                                    <FaEdit className="text-green-600 text-2xl  font-semibold mr-8" />
                                </button>
                                <button onClick={() => handleDelete(todo?._id)}>
                                    <MdDelete className="text-red-600 text-2xl  font-semibold" />
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Complete;