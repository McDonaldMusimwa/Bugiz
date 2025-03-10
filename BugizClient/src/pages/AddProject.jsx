import {useState} from 'react';
import { Calendar } from 'primereact/calendar';
import { CiCalendarDate } from "react-icons/ci";
function AddProject(){
    const [startDateCalender,setStartDateCalender]=useState(true)
    const [project,setProject]=useState({
        projectname:"",
        startdate:null,
        enddate:null,
        projectdescription:"",
        projectmembers:[]
    })


    function openStartDateCalender(){
        setStartDateCalender(false)
    }
    function InputHandler(){
        setProject((prevState)=>{

        })
    }
    return <div className="left-20 w-full">
        <h1 className="text-black text-bold">Add New Project</h1>
<form className="space-y-4 text-black">
    <div className="m-2 text-left flex gap-4 w-full">
        <label htmlFor="projectname" className="block text-sm font-medium space-4 w-1/2">Project Name:</label>
        <input
          type="text"
          id="projectname"
          className="block w-full h-10 rounded-md border border-gray-300 p-2"
          placeholder="Project Name"
          required
          onChange={(e) => InputHandler('projectname', e.target.value)} // Handles email input change
          value={project.projectname}
        />
      </div>
      <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex">
          <label htmlFor="buttondisplay" className="font-bold mb-2 flex">
              Start Date :
          </label>
          <Calendar id="buttondisplay" value={project.startdate} onChange={(e) => setProject("startdate",e.value)} showIcon />
      </div>
      </div>
</form>
        </div>
}

export default AddProject