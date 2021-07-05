import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button
} from "@chakra-ui/react";
import RoomsModalHook from './RoomsModalHook';

const RoomsModalComponent = ({isVisible, onCancel}) => {
  const {isOpen, onChangeInput, onSubmit } = RoomsModalHook(isVisible,onCancel);

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Input Name</ModalHeader>
        <ModalBody mb="15">
          <FormControl id="user-name" isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="User Name" type="text" name="userName" onChange={onChangeInput} />
          </FormControl>
          <FormControl id="rooms-name" isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="Rooms Name" type="text" name="roomsName" onChange={onChangeInput} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" type="password" name="password" onChange={onChangeInput} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onSubmit} variant="ghost">Submit</Button>
          <Button onClick={onCancel} ml="5">Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RoomsModalComponent
