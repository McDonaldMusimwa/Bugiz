import mcd from "../../assets/pics/profile.jpeg"
import jon from "../../assets/pics/photo.jpg"
function Teams(){
    const teams =[
        {name:"Nokugonga",
        pic:mcd},
        {name:"John",
        pic:jon}
    ]
    return <div>
        <span className="text-black font-medium">My Team</span>
        {teams.map((team)=>{
            return <div className="flex gap-4 items-center max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="object-cover w-1/8 2 rounded-t-full h-2 md:h-auto md:w-18 md:rounded-none md:rounded-s-lg" src={team.pic} alt={team.name} />
                <span className="text-black">{team.name}</span>
            </div>
        })}
    </div>
}

export  default  Teams;