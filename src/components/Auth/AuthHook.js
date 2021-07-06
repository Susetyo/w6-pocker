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

  const checkCredentialLogin = (userNameLocalStorage) => {
    if(valueInput['password'].value === userNameLocalStorage){
      history.push("/rooms");
    } 
    
    return 404
  }
  
  const onSubmit = (isLogin) => {
    const userNameLocalStorage = window.localStorage.getItem("credentials")
    try{
      if(isLogin){
        const check = checkCredentialLogin(userNameLocalStorage);
        if(check === 404) throw "Something went wrong";
      }else{
        
      }


    }catch(e){
      alert(e)
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
