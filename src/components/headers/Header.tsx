import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import classnames from 'classnames';
import './Header.scss';

const Header: React.FC = () => {
  let location = useLocation();
  const {pathname} = location;
  // /examples => Examples로 파싱
  const currentMenu = (pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(1).slice(1)).split('/')[0];
  // mobile menu toggle
  const [menuOn, setMenuOn] = useState(false);
  useEffect(
    ()=>{
      
    }, [menuOn]
  );
  
  return(
    <>
      <header>
        <div className="nav-inner">
          <Link to="/"><div className="logo"><i className="fab fa-accusoft"></i></div></Link>
          <ul>
            <li><Link className={classnames("link",{"current": pathname.includes("/examples")})} to="/examples">Examples</Link></li>
            <li><Link className={classnames("link",{"current": pathname==="/docs/Installation"})} to="/docs/Installation">Docs</Link></li>
            <li><Link className={classnames("link",{"current": pathname==="/source"})} to="/source">Source</Link></li>
          </ul>
          <button className="btn_download" type="button">DOWNLOAD</button>
        </div>
      </header>
      {/* Mobile Header */}
      <div className="mobile-nav">
        <Link to="/">
          <div className="mobile-logo">
            <i className="fab fa-accusoft"></i>
          </div>
        </Link>
        <span className="current-menu">{currentMenu}</span>
        <div onClick={()=>setMenuOn(!menuOn)} className="mobile-menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <aside className={classnames("mobile-aside", {"on": menuOn})}>
        <ul>
          <li><Link to="/examples">Examples</Link></li>
          <li><Link to="/docs/Installation">Docs</Link></li>
          <li><Link to="/">Source</Link></li>
        </ul>
      </aside>
      <div onClick={()=>setMenuOn(!menuOn)} className={classnames({"mobile-aside-modal-bg": menuOn})}>
      </div>
    </>
  );
};
export default Header;