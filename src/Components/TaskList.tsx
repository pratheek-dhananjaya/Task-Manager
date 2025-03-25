import {ReactNode, useEffect, useState} from "react";

interface Props {
    tasks: string[];
    filter: string;
    checkboxValue: boolean[];
}

function TaskList({tasks, filter, checkboxValue}: Props): ReactNode {

    const [checked, setChecked] = useState(false);

    const [localCheckboxValues, setLocalCheckboxValues] = useState<boolean[]>([...checkboxValue]);

    useEffect(() => {
        setLocalCheckboxValues(checkboxValue);
    }, [checkboxValue]);

    const handleCheckboxChange = (index: number) => {
        setLocalCheckboxValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = !newValues[index];
            return newValues;
        });
    };

    if (filter === "All") {

        return (
            <div className="flex justify-center items-center">
                <ul className="list-group mx-auto w-50">
                    {tasks.map((task, index) => (
                        <li className="list-group-item text-center text-wrap text-break" key={index}>
                            {task}
                            <input className="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault"
                                   checked={localCheckboxValues[index]}
                                   onClick={() => {
                                       if (!checked) {
                                           setChecked(true)
                                       }
                                       handleCheckboxChange(index)
                                       console.log(localCheckboxValues)
                                   }}/>
                        </li>
                    ))}
                </ul>

            </div>
        );
    } else if (filter === "Active") {
        return (
            <div className="flex justify-center items-center">
                <ul className="list-group mx-auto w-50">
                    {localCheckboxValues.map((value) => (!value))
                    }
                    {tasks.map((task, index) => (
                        <li className="list-group-item text-center text-wrap text-break" key={index}>
                            {task}
                            <input className="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault"
                                   onClick={() => {
                                       if (!checked) {
                                           setChecked(true)
                                       }
                                   }}/>
                        </li>
                    ))}
                </ul>

            </div>
        );

    }

    return (
        <div/>
    )
}

export default TaskList;