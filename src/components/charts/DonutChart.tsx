import ApexChart from 'react-apexcharts';
import {Iareachart} from './ChartInterface';

export default function PieChart({sparkline=false, width, height}: Iareachart) {
	return (<ApexChart
		type="donut"
		width={width}
		height={height}
		series={[44, 55, 13, 43, 22]}
		options={{
			chart: {
				type: 'donut',
				sparkline: {
					enabled: sparkline
				},
				animations: {
					enabled: false
				}
			},
			theme: {
				monochrome: {
					enabled: true
				}
			},
			legend: {
				show: false
			},
			title: {
				text: sparkline ? 'Donut Chart' : undefined,
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