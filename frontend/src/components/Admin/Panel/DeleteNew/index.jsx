import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	Card,
	CardBody,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { getMediaUrl } from "../../../../helpers/getMediaUrl";
import "./index.css";

const BigCardToDelete = ({ id, header, text, image, deleteNew }) => {
	return (
		<Card
			className="big-card"
			w="370px"
			h="416px"
			m={1}
			bgColor={"#f6faff"}
			_hover={{
				transition: "all 300ms ease",
				bgColor: "#d7e3f4",
			}}
			onClick={() => deleteNew(id)}
		>
			<Box
				position={"absolute"}
				w={"100%"}
				h={"100%"}
				_hover={{
					display: "block",
					transition: "all 300ms ease",
					bgColor: "red",
					opacity: 0.75,
				}}
				borderRadius={"5px"}
				color={"black"}
			>
				<Box
					w={"100%"}
					h={"100%"}
					opacity={0}
					_hover={{
						transition: "all 300ms ease",
						opacity: 1,
					}}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					cursor={"pointer"}
					color={"black"}
				>
					<DeleteIcon fontSize={150} color={"white"} zIndex={10000} />
				</Box>
			</Box>
			<CardBody p={"15px"}>
				<Box display={"flex"} justifyContent={"center"}>
					<Image
						maxW={"100%"}
						maxH={"220px"}
						h={"100%"}
						objectFit={"cover"}
						src={getMediaUrl(image)}
						borderRadius="lg"
					/>
				</Box>
				<Stack mt="2" spacing="1">
					<Heading maxH="50px" textAlign={"justify"} color="blue.600" size="md">
						{header}
					</Heading>
					<Text maxH={"96px"} textAlign={"justify"}>
						{text}
					</Text>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default BigCardToDelete;
