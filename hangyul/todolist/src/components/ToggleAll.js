import './toggle-all.scss';

export function ToggleAll(props) {
  const { handleToggleAllCheck } = props.handlers;
  return (
    <div className='toggle-all' onChange={handleToggleAllCheck}>
      <input type='checkbox' id='toggleAll' className='toggle-all-input' />
      <label htmlFor='toggleAll'></label>
    </div>
  );
}
