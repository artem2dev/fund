import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import aboutUsBg from "../../../assets/aboutUsBg.jpg";

const About = ({ pdfs, participants }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Flex flexDir={"column"} align={"center"}>
			<Flex
				align={"center"}
				w={"100%"}
				h={"600px"}
				bgPos={"center"}
				bgRepeat={"no-repeat"}
				bgImage={aboutUsBg}
			>
				<Flex w={"100%"} justify={"center"}>
					<Heading
						fontSize={"50px"}
						color={"white"}
						fontFamily={"Oswald"}
						textAlign={"center"}
						w={"650px"}
					>
						Благотворительный фонд Эльмана Пашаева
					</Heading>
				</Flex>
			</Flex>
			<Flex w={"1133px"} pb={"75px"}>
				{/* <Flex>dd</Flex> */}
			</Flex>
		</Flex>
	);
};

export default About;
