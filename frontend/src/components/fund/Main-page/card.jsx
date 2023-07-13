import { Box, Card, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function BlogPostWithImage({ newElem }) {
	const navigate = useNavigate();

	return (
		<Card
			maxH={120}
			w={"100%"}
			direction={"row"}
			overflow="hidden"
			// variant="outline"
			my={2}
			onClick={() => {
				navigate(`/novosty/${newElem?.id}`);
			}}
			cursor={"pointer"}
		>
			<Box
				maxW={"180px"}
				h={120}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				{newElem?.imageIds[0] ? (
					<Image
						className="news-image"
						objectFit="cover"
						maxW={"180px"}
						maxH={"120px"}
						borderLeftRadius={5}
						src={newElem.imageIds[0]}
						alt=""
					/>
				) : (
					<Image
						className="news-image"
						objectFit="cover"
						maxW={"180px"}
						maxH={"120px"}
						borderLeftRadius={5}
						src={`${process.env.REACT_APP_SERVER}/media/logo-no-text.png`}
						padding={"10px"}
						alt=""
					/>
				)}
			</Box>

			<Box>
				<Box p="2" display={"flex"} h={"100%"} alignItems={"center"}>
					<Heading
						size="md"
						maxH={24}
						maxW={286}
						overflow="hidden"
						color={"#4C70B4"}
					>
						{newElem?.header}
					</Heading>
				</Box>
			</Box>
		</Card>
	);
}
