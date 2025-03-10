import Cards from "./Dashboard/Cards.jsx"
import MyTasks from "./Dashboard/MyTasks.jsx"
import PieChart from "./Dashboard/PieChart.jsx"
import Teams from "./Dashboard/Teams.jsx"
import DeadLines from "./Dashboard/UpcomingDeadLines.jsx";
import BarChart from "./Dashboard/BarChart.jsx";
const Dashboard = () => {



  return (
    <div className="left-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <Cards />
          <MyTasks />
        </div>
        <div>
          <PieChart />
          <Teams />
        </div>
        <div>
<DeadLines />
        </div>
        <div>
          <BarChart />
        </div>
      </div>

    </div>
  )
}

export default Dashboard