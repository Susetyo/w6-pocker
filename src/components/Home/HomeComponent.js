import { Container, Box, Flex, Text, OrderedList,ListItem } from "@chakra-ui/react";
import HomeHook from "./HomeHook";
import UserModalComponent from '../Modals/User/UserModalComponent';

const HomeComponent = () => {
		const styles = {
			isChecked:{
				borderColor:'blue'
			}
		}
		const {scores, onCheckedBox, users, user} = HomeHook();
		console.log(users)
    return (
			<Container maxW="container.xl" m="0" ml="15" mr="15" mt="15" p="0">	
				<Flex>
					<Flex style={{flexWrap:"wrap"}} w="70%">
						{scores.map((score)=>{
							return (
								<Box 
									key={score.id} 
									minW="140px" 
									maxW="140px" 
									minH="190px" 
									borderWidth="1px" 
									borderRadius="lg" 
									m="15" 
									overflow="hidden"
									onClick={()=>onCheckedBox(score.id,user.id)}
									style={score.isChecked ? {...styles.isChecked, ...{cursor:'pointer'}} : {cursor:'pointer'}}
									>
									<Flex 
										justifyContent="center" 
										alignItems="center"
										h="100%"
										>
										<Text fontSize="4xl">{score.value}</Text>
									</Flex>
								</Box>
							) 
						})}
					</Flex>
					<Flex style={{flexWrap:"wrap"}} flexDirection="column" w="30%">
						<Text>List Person W6</Text>
						<OrderedList>
							{users.map((user)=>{
								return(<ListItem key={user.id}>{user.name} {user.isAlreadyVote ? "[Already Vote]" : ""}</ListItem>)
							})}							
						</OrderedList>
					</Flex>
				</Flex>
				{!user.name && (
					<UserModalComponent isOpen={true} />
				)}
			</Container>
    )
}

export default HomeComponent;