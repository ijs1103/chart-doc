import './ContentsLayout.scss';
interface IcontentslayoutProps{
    title: string | undefined,
    children: React.ReactNode,
}
const ContentsLayout:React.FC<IcontentslayoutProps> = ({title, children}) => {
    return(
        <div id="contents-container">
            <div>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
};
export default ContentsLayout;