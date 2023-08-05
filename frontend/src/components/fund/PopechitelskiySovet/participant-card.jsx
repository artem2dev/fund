import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import blueBg from "../../../assets/blue.png";
import { getMediaUrl } from "../../../helpers/getMediaUrl";

const ParticipantCard = ({ name, image, position, i }) => {
	return (
		<Card
			w="262px"
			h="340px"
			borderRadius={"3px"}
			borderBottomRadius={"3px"}
			boxShadow={""}
			ml={i ? "28px" : ""}
			mt={i > 3 ? "28px" : ""}
			padding={"25px"}
			flexDir={"row"}
			display={"flex"}
			alignItems={"flex-end"}
			pos={"relative"}
			_before={{
				zIndex: 0,
				position: "absolute",
				left: 0,
				top: 0,
				width: "262px",
				height: "340px",
				content: `""`,
				backgroundImage: `url(${getMediaUrl(image)})`,
				backgroundRepeat: "no-repeat",
				bgSize: "cover",
				bgPos: "center",
				borderRadius: "3px",
			}}
		>
			<Image
				position={"absolute"}
				left={0}
				bottom={0}
				zIndex={1}
				w={"262px"}
				height={"340px"}
				src={blueBg}
			/>
			<CardBody
				p={0}
				zIndex={2}
				display={"flex"}
				flexDir={"column"}
				h={"min-content"}
				w={"100%"}
			>
				<Flex flexDir={"column"} h={"100%"} justifyContent={"space-between"}>
					<Flex flexDir={"column"}>
						<Heading
							fontFamily={"Oswald"}
							w={"100%"}
							color="#fff"
							fontSize={"16px"}
							fontWeight={"500"}
							textTransform={"uppercase"}
							cursor={"default"}
							css={`
								text-overflow: ellipsis;
								word-wrap: keep-all;
								overflow: hidden;
								max-height: 3em;
								line-height: 1.5em;
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
							`}
						>
							{name}
						</Heading>
					</Flex>
					<Flex flexDir={"column"}>
						<Text
							mt={"10px"}
							fontSize={"14px"}
							color="#fff"
							textAlign={"left"}
							cursor={"default"}
							css={`
								text-overflow: ellipsis;
								word-wrap: break-word;
								overflow: hidden;
								max-height: 3.6em;
								line-height: 1.2em;
								display: -webkit-box;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
							`}
						>
							{position}
						</Text>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default ParticipantCard;
