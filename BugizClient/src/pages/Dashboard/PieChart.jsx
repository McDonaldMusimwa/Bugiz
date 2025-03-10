import { Chart } from "react-google-charts";
function PieChart(){
     const data = [
        ["Task", "Hours per Day"],
        ["Done", 11],
        ["InProgress", 2],
        ["InReview", 2],
        ["ToDo", 2],

      ];

       const options = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
      };
    return (
        <Chart  chartType="PieChart"
                width="120%"
                height="400px"
                data={data}
                options={options}   />
    )


}

export default PieChart