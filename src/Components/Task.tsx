import {useState} from "react";
import TaskList from "./TaskList.tsx";

interface Props {
    tasks: string[];
    checkboxValue: boolean[];
}

function Task({tasks, checkboxValue}: Props) {

    const [filterSelected, setFilterSelected] = useState("All");

    const [selected, setSelected] = useState("All");

    const handleFilterChange = (filter: string) => {
        setFilterSelected(filter);
        console.log(filterSelected)
    }

    // const handleTaskListChange = (tasks: string[]) => {
    //     console.log(tasks);
    //     return <TaskList tasks={tasks} />
    // }

    return (
        <div>
            <div className="btn-group" role="group" aria-label="Filter buttons">
                <button type="button"
                        className={selected === "All" ? "btn btn-outline-success active" : "btn btn-outline-success"}
                        onClick={() => {
                            handleFilterChange("All");
                            setSelected("All")
                        }}>All
                </button>
                <button type="button"
                        className={selected === "Active" ? "btn btn-outline-success active" : "btn btn-outline-success"}
                        onClick={() => {
                            handleFilterChange("Active");
                            setSelected("Active")
                        }}>Active
                </button>
                <button type="button"
                        className={selected === "Completed" ? "btn btn-outline-success active" : "btn btn-outline-success"}
                        onClick={() => {
                            handleFilterChange("Completed");
                            setSelected("Completed")
                        }}>Completed
                </button>
                {/*<button type="button" className="btn btn-outline-success" onClick={() => {*/}
                {/*    handleFilterChange("Active");*/}

                {/*}}>Active*/}
                {/*</button>*/}
                {/*<button type="button" className="btn btn-outline-success" onClick={() => {*/}
                {/*    handleFilterChange("Completed");*/}
                {/*}}>Completed*/}
                {/*</button>*/}

            </div>
            <div>
                <TaskList tasks={tasks} filter={filterSelected} checkboxValue={checkboxValue}/>
            </div>
        </div>
    )
}

export default Task;