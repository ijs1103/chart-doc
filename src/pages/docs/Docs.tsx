import {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import ContentsLayout from '../../components/contentsLayouts/ContentsLayout';
import ViewOnlyCard from "../../components/viewOnlyCards/ViewOnlyCard";
const Docs = () => {
  const {docsName} = useParams();
  const [menuOn, setMenuOn] = useState(true);
  useEffect(
    () => {

    }, [menuOn, docsName]
  );
  return(
    <main id="docs-main">
      <aside className={classnames("docs-aside", {"mobile-aside-on": menuOn})}>
        <ul>
          <li className={classnames({"current": "Installation"===docsName})}><Link className="link" to="/docs/Installation">Installation</Link></li>
          <li className={classnames({"current": "Start"===docsName})}><Link className="link" to="/docs/Start">Start</Link></li>
          <li className={classnames({"current": "Options"===docsName})}><Link className="link" to="/docs/Options">Options</Link></li>
          <li className={classnames({"current": "Methods"===docsName})}><Link className="link" to="/docs/Methods">Methods</Link></li>
          <li className={classnames({"current": "Etc"===docsName})}><Link className="link" to="/docs/Etc">Etc...</Link></li>
        </ul>
      </aside>
      <ContentsLayout title={docsName}>
        <div onClick={()=>setMenuOn(!menuOn)} className={classnames("mobile-chart-menu",{"on":menuOn})}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ViewOnlyCard title="install via npm" code="npm install charts --save" />
      </ContentsLayout>
    </main>
  );
};
export default Docs;