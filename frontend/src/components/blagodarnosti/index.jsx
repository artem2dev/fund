import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const blagodarnosti = [
	`${process.env.REACT_APP_SERVER}/media/nagrada1.jpg`,
	`${process.env.REACT_APP_SERVER}/media/nagrada2.jpg`,
	`${process.env.REACT_APP_SERVER}/media/nagrada3.jpg`,
];

const Blagodarnosti = () => {
	return (
		<Box>
			<Heading py={"20px"} color={"#4C70B4"} textAlign={"center"}>
				Наши меценаты и благодарности фонду
			</Heading>
			{document.documentElement.clientWidth > 700 ? (
				<Flex flexDirection={"column"}>
					{blagodarnosti.map((imageUrl, i) => (
						<Image
							m={"0 auto"}
							key={i}
							objectFit={"cover"}
							maxW={"600px"}
							src={imageUrl}
							borderRadius={7}
							css="border:10px solid #4C70b4"
							my={"15px"}
						/>
					))}
				</Flex>
			) : (
				<Flex flexDirection={"column"}>
					{blagodarnosti.map((imageUrl, i) => (
						<Image
							key={i}
							objectFit={"cover"}
							maxW={"600px"}
							src={imageUrl}
							borderRadius={7}
							css="border:10px solid #4C70b4"
							my={"15px"}
						/>
					))}
				</Flex>
			)}
		</Box>
	);
};

export default Blagodarnosti;
