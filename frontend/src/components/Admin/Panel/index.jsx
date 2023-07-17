import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { CreateNew } from "./CreateNew";

const Panel = () => {
	return (
		<Box
			w={"100%"}
			display={"flex"}
			justifyContent={"flex-start"}
			flexDir={"column"}
			p={"30px"}
		>
			<Heading p={"10px"} mb={"20px"}>
				Административная панель
			</Heading>
			<hr />
			<CreateNew />
		</Box>
	);
};

export default Panel;
