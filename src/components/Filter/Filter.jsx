import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterDataToState = event => {
    const filterInputValue = event.target.value;

    dispatch(setFilter(filterInputValue));
  };

  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" onChange={filterDataToState} />
    </label>
  );
};
