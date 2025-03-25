import {useState} from "react";
// import TaskList from "./TaskList.tsx";
import Task from "./Task.tsx";

function TaskForm() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);
    const [filterVisible, setFilterVisible] = useState(false);
    const [chechboxValue, setChechboxValue] = useState<boolean[]>([]);

    const handleAddTask = () => {
        if (inputValue.trim() !== "") {
            setTasks((prevTasks) => [...prevTasks, inputValue]);
            setChechboxValue((prevChechboxValue) => [...prevChechboxValue,false]);
            if (!filterVisible) {
                setFilterVisible(true);
            }
            setInputValue("");
        }
    };

    return (
        <div>
            <input type="text" placeholder="Task Name" value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}/>
            <button type="button" className="btn btn-success" onClick={() => {
                console.log(inputValue)
                console.log(tasks)
                console.log(chechboxValue)
                setInputValue("")
                handleAddTask()
            }}>Add Task</button>
            {filterVisible && <Task tasks={tasks} checkboxValue={chechboxValue}/>}
            {/*<TaskList tasks={tasks} />*/}
        </div>
    )
}

export default TaskForm;