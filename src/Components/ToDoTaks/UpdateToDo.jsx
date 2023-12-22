/* eslint-disable react/prop-types */

import Swal from 'sweetalert2';

const UpdateToDo = ({ isOpen, closeModal, todo, refetch }) => {
    const { title, status, description, date, priority, userEmail, _id } = todo;
    console.log(title, status, description, date, priority, userEmail, _id);
    if (!isOpen) {
        return null;
    }
    const handleCancelClick = () => {
        closeModal();
    };


    const updateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const priority = form.priority.value;



        const rqpAsset = {
            title: title,
            description: description,
            date: date,
            priority: priority,

        };


        fetch(`https://server-task-manegemnt.vercel.app/task_update/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rqpAsset),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: " Profile Updadeted successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()

            });



    };




    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-70 flex items-center justify-center">
            <form onSubmit={updateProfile} >
                <div className="bg-white p-8 max-w-md mx-auto rounded shadow-lg">
                    {/* Add your update form or content here */}
                    <h2 className="text-2xl font-semibold mb-4">Update Your Task</h2>
                    <h2 className="text-2xl font-semibold mb-4"></h2>
                    <div className="md:flex gap-5 ">

                        <div className="mb-4 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Taks Title</label>
                            <input
                                defaultValue={title}
                                type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Add title" required="" />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-600 text-start py-1"> Status</label>
                            <input readOnly={status} type="text" id="assetName" name="status" className="mt-1 p-2 w-full border rounded-md" />
                        </div>

                    </div>
                    <div className="md:flex gap-5 ">

                        <div className="mb-4 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Priority</label>
                            <select
                                defaultValue={priority}
                                id="category" name="priority" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option selected="">Select priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Dadeline</label>
                            <input
                                defaultValue={date}
                                type="date" name="date" id="item-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                        </div>

                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <textarea
                            defaultValue={description}
                            id="description" name="description" rows="5" className=" mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here"></textarea>
                    </div>



                    <div>
                        <button

                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-5"
                        >
                            Update
                        </button>
                        <p
                            onClick={handleCancelClick}
                            className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline"
                        >
                            Cancel
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateToDo;