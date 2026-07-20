import React from "react";

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer
} from "recharts";

const data=[

{name:"Mon",vehicles:120},

{name:"Tue",vehicles:200},

{name:"Wed",vehicles:180},

{name:"Thu",vehicles:260},

{name:"Fri",vehicles:300},

{name:"Sat",vehicles:220},

{name:"Sun",vehicles:160}

];

function ChartSection(){

return(

<div className="chart">

<h2>Traffic Trend</h2>

<ResponsiveContainer width="100%" height={300}>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="vehicles"
stroke="#38BDF8"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}

export default ChartSection;