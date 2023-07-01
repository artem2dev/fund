// import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
// import {
// 	Box,
// 	Collapse,
// 	Flex,
// 	Icon,
// 	IconButton,
// 	Link,
// 	Stack,
// 	Text,
// 	useColorModeValue,
// 	useDisclosure,
// 	Image,
// } from "@chakra-ui/react";
// import Carousel from "./carousel";
// import bigLogo from "../../assets/321.svg";
// import { Image } from "@chakra-ui/react";

import { Box, Heading } from "@chakra-ui/react";
import BlogPostWithImage from "./card";

export default function MainPage({ news }) {
	return (
		<Box mb={20}>
			<Box display={"flex"} justifyContent={"flex-end"}>
				<Box
					maxW={500}
					p={2}
					bgColor={"#f6faff"}
					borderRadius={7}
					borderColor={"#ccc"}
					borderWidth={"1px"}
					mt={5}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
				>
					<Heading color={"#2c2960"}>Новости</Heading>
					{news?.map((newElem, i) => {
						return <BlogPostWithImage key={i} newElem={newElem} />;
					})}
				</Box>
			</Box>
		</Box>
	);
}
