import {CiCirclePlus} from "react-icons/ci";
export const tasks = [
    {
      "id": 1,
      "title": "Fix Login Bug",
      "description": "Resolve issue where users cannot log in with valid credentials.",
      "status": "InProgress",
      "priority": "High",
      "created": "2024-02-28T10:30:00Z",
      "closureDate": null,
      "lastUpdated": "2024-03-02T14:00:00Z",
      "projectName": "Bugiz Web App",
      "creatorName": "Alice Johnson",
      "assigneeName": "Bob Smith",
      "historyTags": [
        {
          "id": 101,
          "action": "Task Created",
          "timestamp": "2024-02-28T10:30:00Z"
        },
        {
          "id": 102,
          "action": "Assigned to Bob",
          "timestamp": "2024-02-29T09:00:00Z"
        }
      ]
    },
    {
      "id": 2,
      "title": "Implement Dark Mode",
      "description": "Add a dark mode toggle to improve UI accessibility.",
      "status": "ToDo",
      "priority": "Medium",
      "created": "2024-02-25T08:45:00Z",
      "closureDate": null,
      "lastUpdated": null,
      "projectName": "Bugiz Web App",
      "creatorName": "David Lee",
      "assigneeName": "Emma Brown",
      "historyTags": [
        {
          "id": 201,
          "action": "Task Created",
          "timestamp": "2024-02-25T08:45:00Z"
        }
      ]
    },
    {
      "id": 3,
      "title": "Database Optimization",
      "description": "Optimize database queries for faster performance.",
      "status": "Done",
      "priority": "High",
      "created": "2024-02-18T11:15:00Z",
      "closureDate": "2024-02-27T17:00:00Z",
      "lastUpdated": "2024-02-27T17:00:00Z",
      "projectName": "Bugiz API",
      "creatorName": "Sarah Connor",
      "assigneeName": "John Doe",
      "historyTags": [
        {
          "id": 301,
          "action": "Task Created",
          "timestamp": "2024-02-18T11:15:00Z"
        },
        {
          "id": 302,
          "action": "Optimized queries",
          "timestamp": "2024-02-23T16:30:00Z"
        },
        {
          "id": 303,
          "action": "Task Completed",
          "timestamp": "2024-02-27T17:00:00Z"
        }
      ]
    }
  ]


function MyTasks() {

  return (<div>
    <span className="text-black font-medium">My Tasks</span>
    {tasks.map((task) => {

      return (
        <div
          className="flex justify-between items-center text-black max-w-sm p-4 m-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 align-middle">
          <CiCirclePlus/>


          <span className="text-left" >{task.title}</span>
          {task.priority === "High" ? (
            <button className="bg-red-500 rounded-lg text-white">High</button>) : task.priority === "Low" ? (
            <button className="bg-green-500 rounded-lg text-white">Low</button>) : (
            <button className="bg-yellow-400 rounded-lg text-white">Medium</button>)}
        </div>)
    })}
  </div>)
}

export default MyTasks;
