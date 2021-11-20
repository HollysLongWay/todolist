import './footer.scss';

export function Footer(props) {
  const { handleFilterClick } = props.handlers;
  return (
    <div className='footer'>
      <span className='todo-count'>{`${props.todos.length} ${props.todos.length > 1 ? 'items': 'item'} left.`}</span>
      <ul className='filters' onClick={handleFilterClick}>
        {['All', 'Active', 'Completed'].map((filter, index) => (
          <li key={filter+index} data-id={filter}><button className={props.filter === filter ? 'filter selected': 'filter'}>{filter}</button></li>
        ))}
      </ul>
    </div>
  );
}
