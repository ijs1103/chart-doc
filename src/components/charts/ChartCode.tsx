const ChartCode = `<ApexChart
type="area"
width={width}
height={height}
series= {[
	{
		name: 'series1',
		data: [31, 40, 28, 51, 42, 109, 100]
	},
	{
		name: 'series2',
		data: [11, 32, 45, 32, 34, 52, 41]
	}
]}
options={{
	chart: {
		type: 'area',
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
	dataLabels: {
		enabled: false
	},
	title: {
		text: sparkline ? 'Area Chart' : undefined,
		align: 'center',
		style:{
			fontSize: "28"
		}
	},
	tooltip: {
		enabled: false
	},
}}
/>`;
export default ChartCode;