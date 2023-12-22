import Complete from "../Complete/Complete";
import OnGoingTask from "../OnGoingTask/OnGoingTask";
import ToDoTaks from "../ToDoTaks/ToDoTaks";


const DashboardHome = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-start gap-10 mt-5">
            <ToDoTaks></ToDoTaks>
            <OnGoingTask></OnGoingTask>
            <Complete></Complete>
        </div>
    );
};

export default DashboardHome;