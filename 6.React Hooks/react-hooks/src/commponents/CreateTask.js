import { useState } from "react";

const CreateTask = ({
    taskCreateHandler
}) => {
    const [task, setTask] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        taskCreateHandler(task);
        setTask('');
    };

    const onChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                id="task-name"
                type="text"
                name="taskName"
                onChange={onChange}
                placeholder="Do the dishes"
            />
            <input type="submit" value="Add" />
        </form>
    );
};

export default CreateTask;