import TaskHeader from "./Components/TaskHeader.tsx";
import TaskForm from "./Components/TaskForm.tsx";

function App() {
    return (
        <div className="flex justify-center items-center">
            <div className="text-center">
                <TaskHeader />
                <TaskForm />
            </div>
        </div>
    );
}

export default App;
