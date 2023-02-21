import { useDispatch, useSelector } from 'react-redux';
import { selectContactFilter } from 'redux/filter/selectors';
import { setContactFilter } from 'redux/filter/slice';
import { Wrapper, Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactFilter);

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contact by name</Label>
      <Input
        name="filter"
        type="text"
        id="filter"
        value={filter}
        placeholder={' '}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
};
