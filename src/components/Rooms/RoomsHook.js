import {useState} from 'react'

const RoomsHook = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const onOpenModal = () => setIsVisible(true);
  const onCancel = () => setIsVisible(false)
  
  return{
    isVisible,
    onOpenModal,
    onCancel
  }
}

export default RoomsHook
