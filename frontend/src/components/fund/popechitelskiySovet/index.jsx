import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ParticipantCard from "./participant-card";

const Participants = ({ participants }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Flex flexDir={"column"} align={"center"} width={"100%"} minH={"100vh"}>
			<Flex
				bgColor={"#f2f2f2"}
				h={"330px"}
				w={"100%"}
				justify={"center"}
				align={"end"}
				pb={"75px"}
				mb={"75px"}
			>
				<Heading fontSize={"50px"} color={"#10131f"} fontFamily={"Oswald"}>
					Попечительский совет
				</Heading>
			</Flex>
			<Flex w={"1133px"} pb={"75px"}>
				<Flex justify={"start"} flexWrap={"wrap"}>
					{participants.map(({ name, position, image, description }, i) => (
						<Box
							key={i}
							mt={i > 3 ? "20px" : ""}
							ml={i % 3 !== 0 ? "20px" : ""}
						>
							<ParticipantCard
								name={name}
								position={position}
								image={image}
								description={description}
							/>
						</Box>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Participants;
