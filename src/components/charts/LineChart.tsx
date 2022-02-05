import ApexChart from 'react-apexcharts';
import {Iareachart} from './ChartInterface';

export default function LineChart({sparkline=false, width, height}: Iareachart) {
	return (<ApexChart
		type="line"
		width={width}
		height={height}
		series={[
			{
				name: "Price",
				data: [0, 41, 35, 51, 49, 62, 69, 91, 128]
			},
		]}
		options={{
			chart: {
				type: 'line',
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
				text: sparkline ? 'Line Chart' : undefined,
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
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
			},
			tooltip: {
				enabled: false
			},
		}}
	/>);
}