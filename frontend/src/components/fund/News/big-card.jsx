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
import { useNavigate } from "react-router-dom";
import "./index.css";

const BigCard = ({ id, header, text, image = `${process.env.REACT_APP_SERVER}/media/logo-no-text.png` }) => {
	const navigate = useNavigate();

	return (
		<Card
			className="big-card"
			w="370px"
			h="416px"
			m={2}
			bgColor={"#f6faff"}
			css="-webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.26);
			-moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.26);
			box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.26);"
			_hover={{
				transform: "scale(1.02)",
				transition: "all 300ms ease",
				WebkitBoxShadow: "4px 4px 8px 4px rgba(34, 60, 80, 0.22)",
				MozBoxShadow: "4px 4px 8px 4px rgba(34, 60, 80, 0.22)",
				boxShadow: "4px 4px 8px 4px rgba(34, 60, 80, 0.22)",
			}}
			onClick={() => navigate(`${id}`)}
			cursor={"pointer"}
		>
			<CardBody>
				<Box display={"flex"} justifyContent={"center"}>
					<Image
						maxW={"100%"}
						maxH={"220px"}
						h={"100%"}
						objectFit={"cover"}
						src={image}
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

export default BigCard;
