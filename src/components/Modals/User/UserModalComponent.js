import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  Button
} from "@chakra-ui/react";
import UserModalHook from "./UserModalHook";

const UserModalComponent = (props) => {
  const {isOpen, onInput,inputName, onSubmit} = UserModalHook(props);

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Input Name</ModalHeader>
        <ModalBody>
          <Input placeholder="Input your name" onChange={onInput} value={inputName} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onSubmit} variant="ghost">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default UserModalComponent;