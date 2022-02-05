import ApexChart from 'react-apexcharts';
import {Iareachart} from './ChartInterface';

export default function RadarChart({sparkline=false, width, height}: Iareachart) {
	return (<ApexChart
		type="radar"
		width={width}
		height={height}
		series={[{
			data: [80, 50, 30, 40, 100, 20]
		}]}
		options={{
			chart: {
				type: 'radar',
				sparkline: {
					enabled: sparkline
				},
				animations: {
					enabled: false
				},
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false
				},
			},
			legend: {
				show: false
			},
			title: {
				text: sparkline ? 'Radar Chart' : undefined,
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