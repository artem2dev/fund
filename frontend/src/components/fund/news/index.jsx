import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BigCard from "./big-card";

const Novosty = ({ news }) => {
	return (
		<Box mb={20} display={"flex"} flexDir={"column"}>
			<Box ml={3} my={5} display={"flex"} alignItems={"center"}>
				<Box borderRadius={5} w={"40px"} h={"45px"} bgColor={"#4C70B4"} />
				<Heading ml={3} color={"#4C70B4"}>
					Новости
				</Heading>
			</Box>

			<Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
				{news.map(({ id, title, content, mainPicture }) => (
					<Box key={id}>
						<BigCard id={id} header={title} text={content} image={mainPicture} />
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Novosty;
