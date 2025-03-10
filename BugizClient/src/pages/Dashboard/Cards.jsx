import { MdOutlineTaskAlt } from "react-icons/md";
function Cards(){

    const cardsData = [
        {
            "Title":"Mobile App",
            "Status":"Inprogress",
        },
        {
            "Title":"Web App",
            "Status":"Done",

        },
        {
            "Title":"Mobile App",
            "Status":"Done",

        },{
            "Title":"Mobile App",
            "Status":"InReview",

        },
        {"Title":"Create wireframes","Status":"ToDo"}
    ]
   const data = ["Inprogress", "Done", "InReview", "ToDo"].map(status => ({
    Count: cardsData.filter(task => task.Status === status).length,  // Store actual count, not a function
    Title: status
    }));

console.log(data[0].Count.toString())
    return <div className="flex gap-4">
        {data.map((task,index)=>{
            return <div key={task.Title} className="text-gray-500 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" >
                <div className="flex align-middle">  <span> {task.Count.toString()}</span>  Tasks</div>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"  >{task.Title}</p>



            </div>
        })}
</div>
}

export default Cards;