import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";
import blueBg from "../../../../assets/blue.png";
import { getMediaUrl } from "../../../../helpers/getMediaUrl";
import { parseDate } from "../../../fund/news/new-card";

const NewCardToDelete = ({
	id,
	title,
	content,
	image,
	createdAt,
	deleteNew,
}) => {
	return (
		<Card
			w="360px"
			h="420px"
			bgColor={"#1f243a"}
			borderRadius={"3px"}
			borderBottomRadius={"3px"}
			boxShadow={""}
			padding={"25px"}
			flexDir={"row"}
			display={"flex"}
			alignItems={"flex-end"}
			pos={"relative"}
			onClick={() => deleteNew(id)}
			_before={{
				zIndex: 0,
				position: "absolute",
				left: 0,
				top: 0,
				opacity: 0.4,
				width: "360px",
				height: "420px",
				content: `""`,
				backgroundImage: `url(${getMediaUrl(image)})`,
				backgroundRepeat: "no-repeat",
				bgSize: "cover",
				bgPos: "center",
				borderRadius: "3px",
			}}
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
				zIndex={10}
				top={0}
				left={0}
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
			<Flex
				pos={"absolute"}
				left={25}
				top={25}
				bgColor={"#33438e"}
				borderRadius={"3px"}
				w={"72px"}
				h={"19px"}
				justify={"center"}
				align={"center"}
				fontSize={"12px"}
				color={"white"}
				cursor={"default"}
			>
				{parseDate(createdAt)}
			</Flex>
			<Image
				position={"absolute"}
				left={0}
				bottom={0}
				zIndex={1}
				w={"360px"}
				height={"380px"}
				src={blueBg}
			/>
			<CardBody
				p={0}
				zIndex={2}
				display={"flex"}
				flexDir={"column"}
				h={"142px"}
				w={"100%"}
			>
				<Flex flexDir={"column"} h={"100%"} justifyContent={"space-between"}>
					<Flex flexDir={"column"}>
						<Heading
							fontFamily={"Oswald"}
							w={"100%"}
							color="#fff"
							fontSize={"20px"}
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
							{title}
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
							{content}
						</Text>
						<Link
							textDecoration={"underline"}
							color={"#bf3132"}
							mt={"12px"}
							_hover={{
								textDecoration: "none",
							}}
						>
							Читать далее...
						</Link>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default NewCardToDelete;
