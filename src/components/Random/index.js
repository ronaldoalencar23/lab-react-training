export function Random(props) {
  return (
    <div>
      <p>
        {' '}
        {Math.floor(Math.random() * (props.max - props.min + 1)) +
          props.min}{' '}
      </p>
    </div>
  );
}
