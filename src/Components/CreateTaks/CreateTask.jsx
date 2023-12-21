import addtask from "../../assets/images/add-task.jpg"

const CreateTask = () => {
    return (
        <div className="md:flex justify-ce items-center md:mx-10  gap-5 mt-12 ">
            <section className="bg-white md:w-3/5 ">
                <div className="py-8 px-12 mx-auto max-w-2xl lg:py-16 ">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 text-center border-b-4 border-[#FF735C] w-1/3 mx-auto ">Add a new Task</h2>
                    <form action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Taks Title</label>
                                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Add title" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Priority</label>
                                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option selected="">Select priority</option>
                                    <option value="TV">Low</option>
                                    <option value="GA">Moderate</option>
                                    <option value="PH">High</option>
                                </select>
                            </div>



                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Dadeline</label>
                                <input type="date" name="item-date" id="item-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                <textarea id="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#FF735C] rounded-lg   ">
                            Add
                        </button>
                    </form>
                </div>
            </section>
            <div className="md:w-2/5 ">
                <img className="" src={addtask} alt="" />
            </div>
        </div>
    );
};

export default CreateTask;