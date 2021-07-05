import {useState, useEffect} from 'react';

const initialValue = {
  roomsName:{
    value:''
  },
  password:{
    value:''
  }
}


const RoomsModalHook = (isVisible, onCancel) => {
  const [isOpen, setIsOpen] = useState(false);
  const [valueInput, setValueInput] = useState(initialValue)

  useEffect(()=>{
    setIsOpen(isVisible)
  },[isVisible])

  const onChangeInput = (event) => {
    const copyInitialValue = {...initialValue};
    const nameHtml = event.target.name;
    const valueHtml = event.target.value;

    copyInitialValue[nameHtml].value = valueHtml;
    setValueInput(copyInitialValue)
  }

  const onSubmit = () => {
    console.log(valueInput)
    window.localStorage.setItem("rooms",valueInput);
    onCancel();
  }
  
  return {
    isOpen,
    onChangeInput,
    valueInput,
    onSubmit,
  }
}

export default RoomsModalHook
