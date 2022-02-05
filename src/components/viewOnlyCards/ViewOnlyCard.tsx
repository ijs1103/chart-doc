import "./ViewOnlyCard.scss";
interface Iviewonlycard{
	title?: string;
	code: string;
}
const ViewOnlyCard:React.FC<Iviewonlycard> = ({title, code}) => {
	return (
		<div id="view-only-card">
			{title && <div className="title"><span>{title}</span></div>}
			<div className="code">
				<pre>
					<code>
						{code}
					</code>
				</pre>
			</div>
		</div>
	);
};
export default ViewOnlyCard;