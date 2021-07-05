import {useState, useEffect} from 'react';
import { useHistory } from 'react-router';

const initialValue = {
  userName:{
    value:''
  },
  password:{
    value:''
  }
}

const AuthHook = () => {
  const history = useHistory();
  const [valueInput, setValueInput] = useState(initialValue)
  
  const onSubmit = (isLogin) => {
    const userNameLocalStorage = window.localStorage.getItem("credentials")
    if(isLogin && valueInput['password'].value === userNameLocalStorage){
      history.push("/rooms");
    }else{
      
    }
  }


  const onChangeInput = (event) => {
    const copyInitialValue = {...initialValue};
    const nameHtml = event.target.name;
    const valueHtml = event.target.value;

    copyInitialValue[nameHtml].value = valueHtml;
    setValueInput(copyInitialValue)
  }

  return {
    onChangeInput,
    valueInput,
    onSubmit
  }
}

export default AuthHook
