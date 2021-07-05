import { 
  Container, 
  GridItem, 
  Grid,   
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Heading
} from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import RoomsModalComponent from '../Modals/Rooms/RoomsModalComponent';
import RoomsHook from "./RoomsHook";

const RoomsComponent = () => {
  const {isVisible, onOpenModal, onCancel} =  RoomsHook();
  return (
    <Container maxW="container.xl" m="0" ml="15" mr="15" mt="15" p="0">
      <Grid templateColumns="1" gap={6} templateRows="2">
        <GridItem mt="15">
          <Heading>List of Rooms</Heading>
          <Button style={{float:'right'}} colorScheme="blue" onClick={()=>onOpenModal()}>Create Rooms +</Button>
        </GridItem>
        <GridItem>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rooms Name</Th>
                <Th>Link Join</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Rooms 1</Td>
                <Td style={{color:'blue'}}><Link to='/rooms/1'>Rooms 1</Link></Td>
              </Tr>
              <Tr>
                <Td>Rooms 2</Td>
                <Td style={{color:'blue'}}><Link to='/rooms/2'>Rooms 2</Link></Td>
              </Tr>
              <Tr>
                <Td>Rooms 3</Td>
                <Td style={{color:'blue'}}><Link to='/rooms/3'>Rooms 3</Link></Td>
              </Tr>
            </Tbody>
          </Table>
        </GridItem>
      </Grid>
      <RoomsModalComponent isVisible={isVisible} onCancel={onCancel} />
    </Container>
  )
}

export default RoomsComponent
