import ApexChart from 'react-apexcharts';
import {Iareachart} from './ChartInterface';

export default function BarChart({sparkline=false, width, height}: Iareachart) {
	return (<ApexChart
		type="bar"
		width={width}
		height={height}
		series={[
			{
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 6.4, 3.8, 2.5, 3.2]
			},
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
			plotOptions: {
				bar: {
					horizontal: true,
				}
			},
			title: {
				text: sparkline ? 'Bar Chart' : undefined,
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
			xaxis: {
				categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
					'United States', 'China', 'Germany'
				],
			}
		}}
	/>);
}