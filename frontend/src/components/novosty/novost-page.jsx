import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

const NovostPage = ({ getNewById }) => {
	const url = window.location.href;
	const [newElem, setNewElem] = useState({});

	useEffect(() => {
		const arr = url.split("/");

		setNewElem(getNewById(arr[arr.length - 1]));

		return () => {
			setNewElem({});
		};
	}, [getNewById, url]);

	const halfImages = Math.ceil(newElem?.imageIds?.length / 2) - 1;

	return (
		<Box mb={20} w={"100%"} h={"100%"}>
			<Heading
				textAlign={"center"}
				className="novost-header"
				fontSize={"40px"}
				color={"#4C70B4"}
				mt={2}
				mb={5}
			>
				{newElem?.header}
			</Heading>

			{document.documentElement.clientWidth > 1180 ? (
				<Flex direction={"row"} justifyContent={"center"}>
					<Flex flexDirection={"column"}>
						{newElem?.imageIds?.slice(0, halfImages + 1)?.map((image, i) => {
							return (
								<Image
									key={i}
									objectFit={"contain"}
									h={"min-content"}
									maxW={"550px"}
									src={image}
									m="2"
									borderRadius={5}
								/>
							);
						})}
					</Flex>
					<Flex flexDirection={"column"}>
						{newElem?.imageIds
							?.slice(halfImages + 1, newElem?.imageIds?.length)
							?.map((image, i) => {
								return (
									<Image
										key={i}
										objectFit={"contain"}
										h={"min-content"}
										maxW={"550px"}
										src={image}
										m="2"
										borderRadius={5}
									/>
								);
							})}
					</Flex>
				</Flex>
			) : (
				<Flex flexDirection={"column"}>
					{newElem?.imageIds?.map((image, i) => {
						return (
							<Image
								key={i}
								objectFit={"contain"}
								h={"min-content"}
								maxW={"550px"}
								src={image}
								m="2"
								borderRadius={5}
							/>
						);
					})}
				</Flex>
			)}
			<Text fontSize={17} whiteSpace={"pre-wrap"} textAlign={"left"}>
				{newElem?.text}
			</Text>
		</Box>
	);
};

export default NovostPage;
