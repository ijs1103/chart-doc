import ApexChart from 'react-apexcharts';
import {Iareachart} from './ChartInterface';

export default function PieChart({sparkline=false, width, height}: Iareachart) {
	return (<ApexChart
		type="pie"
		width={width}
		height={height}
		series={[44, 55, 13, 43, 22]}
		options={{
			chart: {
				type: 'pie',
				sparkline: {
					enabled: sparkline
				},
				animations: {
					enabled: false
				}
			},
			legend: {
				show: false
			},
			title: {
				text: sparkline ? 'Pie Chart' : undefined,
				align: 'center',
				style:{
					fontSize: "28"
				}
			},
			tooltip: {
				enabled: false
			},
		}}
	/>);
}