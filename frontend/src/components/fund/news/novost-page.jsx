import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getNewById } from "../../../api/news";
import { getMediaUrl } from "../../../helpers/getMediaUrl";
import "./index.css";

const NovostPage = () => {
	const url = window.location.href;
	const [newElem, setNewElem] = useState({});

	useEffect(() => {
		const arr = url.split("/");

		const onSuccess = (result) => {
			setNewElem(result.data);
		};

		getNewById(arr[arr.length - 1])
			.then(onSuccess)
			.catch();

		return () => {
			setNewElem({});
		};
	}, [url]);

	const halfImages = Math.ceil(1 + newElem?.medias?.length / 2) - 1;

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
				{newElem?.title}
			</Heading>
			{document.documentElement.clientWidth > 1180 ? (
				<Flex direction={"row"} justifyContent={"center"}>
					<Flex flexDirection={"column"}>
						{newElem.id &&
							[newElem?.mainPicture, ...newElem?.medias]
								?.slice(0, halfImages + 1)
								?.map((image, i) => {
									return (
										<Image
											key={i}
											objectFit={"contain"}
											h={"min-content"}
											maxW={"550px"}
											src={getMediaUrl(image)}
											m="2"
											borderRadius={5}
										/>
									);
								})}
					</Flex>
					<Flex flexDirection={"column"}>
						{newElem.id &&
							[newElem?.mainPicture, ...newElem?.medias]
								?.slice(halfImages + 1, newElem?.medias?.length + 1)
								?.map((image, i) => {
									return (
										<Image
											key={i}
											objectFit={"contain"}
											h={"min-content"}
											maxW={"550px"}
											src={getMediaUrl(image)}
											m="2"
											borderRadius={5}
										/>
									);
								})}
					</Flex>
				</Flex>
			) : (
				<Flex flexDirection={"column"}>
					{newElem.id &&
						[newElem?.mainPicture, ...newElem?.medias]?.map((image, i) => {
							return (
								<Image
									key={i}
									objectFit={"contain"}
									h={"min-content"}
									maxW={"550px"}
									src={getMediaUrl(image)}
									m="2"
									borderRadius={5}
								/>
							);
						})}
				</Flex>
			)}
			<Text fontSize={17} whiteSpace={"pre-wrap"} textAlign={"left"}>
				{newElem?.content}
			</Text>
		</Box>
	);
};

export default NovostPage;
