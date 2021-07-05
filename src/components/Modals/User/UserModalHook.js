import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { onInputUser, onInputUsers } from '../../../features/userSlice';

const UserModalHook = (props) =>{
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const [inputName, setInputName] = useState('');
  useEffect(()=>{
    if(props.isOpen) setIsOpen(true)
  },[]);

  const onInput = (event) => setInputName(event.target.value);
  const onSubmit = () => {
    dispatch(onInputUser(inputName))
    dispatch(onInputUsers(inputName))
    setIsOpen(false);
  }

  return {
    isOpen,
    onInput,
    inputName,
    onSubmit
  }
}

export default UserModalHook