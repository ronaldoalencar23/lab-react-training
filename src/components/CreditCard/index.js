import imageMaster from '../../assets/images/mastercard (1).png';
import imageVisa from '../../assets/images/visa.png';
export function CreditCard(props) {
  const inline = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  let typeImage = '';
  if (props.type === 'Master Card') {
    typeImage = imageMaster;
  } else {
    typeImage = imageVisa;
  }
  return (
    <div style={inline}>
      <img src={typeImage} alt="Bandeira do cartão" />
      <h1>•••• •••• ••••{props.number.slice(-4)}</h1>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear}
        {'    '}
        <span>{props.bank}</span>
      </p>
      <p>{props.owner}</p>
    </div>
  );
}
