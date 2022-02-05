import ApexChart from 'react-apexcharts';
import {Iareachart} from './ChartInterface';

export default function PieChart({sparkline=false, width, height}: Iareachart) {
	return (<ApexChart
		type="scatter"
		width={width}
		height={height}
		series={[{
			data: [
				[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], 
			],
			
		}]}
		options={{
			chart: {
				type: 'scatter',
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
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], 
					opacity: 0.5
				},
			},
			legend: {
				show: false
			},
			xaxis: {
				labels: {
					show: false
				}
			},
			title: {
				text: sparkline ? 'Scatter Chart' : undefined,
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