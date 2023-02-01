import style from './style.module.css';
export function IdCard(props) {
  return (
    <div className={style.card}>
      <img src={props.picture} alt="Foto da identidade" />
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height / 100}m</p>
      <p>Birth: {props.birth.toDateString()}</p>
    </div>
  );
}
