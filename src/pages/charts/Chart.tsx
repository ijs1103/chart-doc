import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import copy from '../../assets/copy-icon.svg';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import './Chart.scss';
import ContentsLayout from '../../components/contentsLayouts/ContentsLayout';
import AreaChart from '../../components/charts/AreaChart';
import BarChart from '../../components/charts/BarChart';
import CandleChart from '../../components/charts/CandleChart';
import ColumnChart from '../../components/charts/ColumnChart';
import DonutChart from '../../components/charts/DonutChart';
import LineChart from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieChart';
import RadarChart from '../../components/charts/RadarChart';
import ScatterChart from '../../components/charts/ScatterChart';
import ChartCode from '../../components/charts/ChartCode';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Chart = () => {
    const { chartName } = useParams();
    const [menuOn, setMenuOn] = useState(true);
    const [focus, setFocus] = useState({focus1: false, focus2: false, focus3: false, focus4: false, focus5: false});
    const [copied, setCopied] = useState(false);
    const {focus1, focus2, focus3, focus4, focus5} = focus;
    useEffect(
        ()=>{
            // 코드 copy 상태 초기화
            setCopied(false);
        }, [menuOn, focus, chartName]
    );
    const handleFocus = (focus: number) => {
        switch(focus){
            case 1:
                setFocus({focus1: true, focus2: false, focus3: false, focus4: false, focus5: false});
                break;
            case 2:
                setFocus({focus1: false, focus2: true, focus3: false, focus4: false, focus5: false});
                break;
            case 3:
                setFocus({focus1: false, focus2: false, focus3: true, focus4: false, focus5: false});
                break;
            case 4:
                setFocus({focus1: false, focus2: false, focus3: false, focus4: true, focus5: false});
                break;
            case 5:
                setFocus({focus1: false, focus2: false, focus3: false, focus4: false, focus5: true});
                break;
        }
    };
    const handleChartName = (chartName: string) => {
        let result = null;
        switch(chartName){
            case 'AreaChart':
                result = <AreaChart width="100%" height="100%"/>;
                break;
            case 'BarChart':
                result = <BarChart width="100%" height="100%"/>;
                break;
            case 'CandleChart':
                result = <CandleChart width="100%" height="100%"/>;
                break;
            case 'ColumnChart':
                result = <ColumnChart width="100%" height="100%"/>;
                break;
            case 'DonutChart':
                result = <DonutChart width="100%" height="100%"/>;
                break;
            case 'LineChart':
                result = <LineChart width="100%" height="100%"/>;
                break;
            case 'PieChart':
                result = <PieChart width="100%" height="100%"/>;
                break;
            case 'RadarChart':
                result = <RadarChart width="100%" height="100%"/>;
                break;
            case 'ScatterChart':
                result = <ScatterChart width="100%" height="100%"/>;
                break;
        }
        return result;
    };

    return(
        <main id="chart-main">
            <aside className={classnames("chart-aside", {"mobile-aside-on": menuOn})}>
                <ul className="items">
                    <li className="item">
                        <a className={classnames({"focused": focus1})} onClick={()=>handleFocus(1)} href="#data">Data <img src={focus1 ? minus : plus} alt="plus"/></a>
                        <div id="data" className="sub-items">
                            <Link to="/examples/linechart">Line Chart</Link>
                            <Link to="/examples/timeserieschart">Timeseries Chart</Link>
                            <Link to="/examples/splinechart">Spline Chart</Link>
                            <Link to="/examples/simplexylinechart">Simple XY Line Chart</Link>
                            <Link to="/examples/multiplexylinechart">Multiple XY Line Chart</Link>
                        </div>
                    </li>
                    <li className="item">
                        <a className={classnames({"focused": focus2})} onClick={()=>handleFocus(2)} href="#axis">Axis <img src={focus2 ? minus : plus} alt="plus"/></a>
                        <div id="axis" className="sub-items">
                            <Link to="/examples/linechart">Line Chart</Link>
                            <Link to="/examples/timeserieschart">Timeseries Chart</Link>
                            <Link to="/examples/splinechart">Spline Chart</Link>
                            <Link to="/examples/simplexylinechart">Simple XY Line Chart</Link>
                            <Link to="/examples/multiplexylinechart">Multiple XY Line Chart</Link>
                        </div>
                    </li>
                    <li className="item">
                        <a className={classnames({"focused": focus3})} onClick={()=>handleFocus(3)} href="#chart">Chart <img src={focus3 ? minus : plus} alt="plus"/></a>
                        <div id="chart" className="sub-items">
                            <Link to="/examples/LineChart">Line Chart</Link>
                            <Link to="/examples/BarChart">Bar Chart</Link>
                            <Link to="/examples/PieChart">Pie Chart</Link>
                            <Link to="/examples/AreaChart">Area Chart</Link>
                            <Link to="/examples/ColumnChart">Column Chart</Link>
                            <Link to="/examples/DonutChart">Donut Chart</Link>
                            <Link to="/examples/CandleChart">Candle Chart</Link>
                            <Link to="/examples/ScatterChart">Scatter Chart</Link>
                            <Link to="/examples/RadarChart">Radar Chart</Link>
                        </div>
                    </li>
                    <li className="item">
                        <a className={classnames({"focused": focus4})} onClick={()=>handleFocus(4)} href="#grid">Grid <img src={focus4 ? minus : plus} alt="plus"/></a>
                        <div id="grid" className="sub-items">
                            <Link to="/examples/linechart">Line Chart</Link>
                            <Link to="/examples/timeserieschart">Timeseries Chart</Link>
                            <Link to="/examples/splinechart">Spline Chart</Link>
                            <Link to="/examples/simplexylinechart">Simple XY Line Chart</Link>
                            <Link to="/examples/multiplexylinechart">Multiple XY Line Chart</Link>
                        </div>
                    </li>
                    <li className="item">
                        <a className={classnames({"focused": focus5})} onClick={()=>handleFocus(5)} href="#region">Region <img src={focus5 ? minus : plus} alt="plus"/></a>
                        <div id="region" className="sub-items">
                            <Link to="/examples/linechart">Line Chart</Link>
                            <Link to="/examples/timeserieschart">Timeseries Chart</Link>
                            <Link to="/examples/splinechart">Spline Chart</Link>
                            <Link to="/examples/simplexylinechart">Simple XY Line Chart</Link>
                            <Link to="/examples/multiplexylinechart">Multiple XY Line Chart</Link>
                        </div>
                    </li>
                </ul>
            </aside>
            <div>
                <ContentsLayout title={chartName}>
                    <div onClick={()=>setMenuOn(!menuOn)} className={classnames("mobile-chart-menu",{"on":menuOn})}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="chart-content">
                        <div className="chart">
                            {handleChartName(chartName || "")}
                        </div>
                        <div className="copyBoard">
                            <div className="copyBoard-inner">
                                <CopyToClipboard onCopy={()=>setCopied(true)}text={ChartCode}>
                                    {copied ? <div className="copied">✅ Copied</div> : <img className="copy-icon" src={copy} alt="copy-icon" />}
                                </CopyToClipboard>
                                <div className="code">
                                    <pre>
                                       {ChartCode}
				                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentsLayout>
            </div>
        </main>
    );
};
export default Chart;