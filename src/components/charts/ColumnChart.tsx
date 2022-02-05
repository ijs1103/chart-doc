import ApexChart from "react-apexcharts";
import {Iareachart} from './ChartInterface';

export default function ColumnChart({sparkline=false, width, height}: Iareachart) {
	return (<ApexChart
		type="bar"
		width={width}
		height={height}
		series={[
			{
				data: [44, 55, 41, 64, 22, 43, 21]
			},
			{
				data: [53, 32, 33, 52, 13, 44, 32]
			}
		]}
		options={{
			chart: {
				type: 'bar',
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false
				},
				sparkline: {
					enabled: sparkline
				},
				animations: {
					enabled: false
				}
			},
			title: {
				text: sparkline ? 'Column Chart' : undefined,
				align: 'center',
				style:{
					fontSize: "28"
				}
			},
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], 
					opacity: 0.5
				},
			},
			tooltip: {
				enabled: false
			},
		}}
	/>);
}