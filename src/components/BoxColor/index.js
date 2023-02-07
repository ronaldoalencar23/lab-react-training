import style from './style.module.css';
export function BoxColor(props) {
  const inline = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` };
  return (
    <div className={style.card} style={inline}>
      <p>
        {props.r},{props.g},{props.b}
      </p>
    </div>
  );
}
