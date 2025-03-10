import tasks from "../../Data/data.js"

function DeadLines() {
    return <div>
        {tasks.map((task) => {
            return (<div
                className="text-black flex justify-between items-center text-black max-w-sm p-4 m-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 align-middle">
                <span>{task.title}</span>
                <span>Created {task.created}</span>
                <span>Closure date {task.closureDate}</span>


            </div>)
        })

        }

    </div>
}

export default DeadLines