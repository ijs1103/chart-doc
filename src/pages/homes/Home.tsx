import { Link} from 'react-router-dom';
import '../../scss/style.scss';
import d3 from '../../assets/d3.svg';
import typescript from '../../assets/typescript.svg';

const Home: React.FC = () => {
    return (
    <>
      <main id="home-main">
          <div className="colored">
            <div className="title">
                <h1>Show your charts in Typescript</h1>
            </div>
          </div>
          <div className="uncolored">
             <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a faucibus nibh. Duis dapibus luctus libero sit amet ullamcorper. 
            </p>
            <div className="company-logo">
              <span>BASED ON</span>
              <div className="logos">
                <div>
                  <img src={typescript} width="40px" height="40px" alt="ts-logo" /><span>Typescript</span>
                </div>
                <div>
                  <img src={d3} width="40px" height="40px" alt="d3-logo" /><span>D3.js</span>
                </div>
              </div>
            </div>
          </div>
          <Link to="/examples"><button className="btn_demo" type="button">Demo</button></Link>
      </main>
    </>
  );
};
export default Home;
