import { Link } from 'react-router-dom';
import './Examples.scss';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import PieChart from '../../components/charts/PieChart';
import AreaChart from '../../components/charts/AreaChart';
import ColumnChart from '../../components/charts/ColumnChart';
import DonutChart from '../../components/charts/DonutChart';
import CandleChart from '../../components/charts/CandleChart';
import ScatterChart from '../../components/charts/ScatterChart';
import RadarChart from '../../components/charts/RadarChart';
const Examples = () => {
    return(
        <main id="examples-main">
            <article>
                <section className="colored">
                    <h2>Chart Demo</h2>
                </section>
                <div className="charts">
                    <Link to="/examples/LineChart">
                        <div>
                            <div className="chartInner">
                                <LineChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/examples/BarChart">
                        <div>
                            <div className="chartInner">
                                <BarChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/examples/PieChart">
                        <div>
                            <div className="chartInner">
                                <PieChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/examples/AreaChart">
                        <div>
                            <div className="chartInner">
                                <AreaChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/examples/ColumnChart">
                        <div>
                            <div className="chartInner">
                                <ColumnChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/examples/DonutChart">
                        <div>
                            <div className="chartInner">
                                <DonutChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/examples/CandleChart">
                        <div>
                            <div className="chartInner">
                                <CandleChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/examples/ScatterChart">
                        <div>
                            <div className="chartInner">
                                <ScatterChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/examples/RadarChart">
                        <div>
                            <div className="chartInner">
                                <RadarChart sparkline={true} width="310" height="340"/>
                            </div>
                        </div>
                    </Link>
                </div>
            </article>
        </main>
    );
};
export default Examples;