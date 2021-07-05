import { useSelector, useDispatch } from 'react-redux';
import { onSelectBox , selectScores } from '../../features/homeSlice';
import {selectUsers, onUpdateUsers, selectUser} from '../../features/userSlice';

const HomeHook = () => {
  const dispatch = useDispatch();
  const scores = useSelector(selectScores);
  const users = useSelector(selectUsers);
  const user = useSelector(selectUser)

  const onCheckedBox = (id,userId) => {
    dispatch(onSelectBox(id))
    dispatch(onUpdateUsers(userId))
  }

  return{
    scores,
    onCheckedBox,
    users,
    user
  }
}

export default HomeHook;