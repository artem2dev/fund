import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { deleteNew, getNews } from "../../../api/news";
import { CreateNew } from "./createNew";
import BigCardToDelete from "./deleteNew";
import SimpleSidebar from "./sidebar";

const pages = [0, 1, 2, 3];

const Panel = () => {
	const [currentPage, setCurrentPage] = useState(pages[0]);
	const [news, setNews] = useState([]);

	useEffect(() => {
		if (currentPage === 1) {
			const onSuccess = (result) => {
				setNews(result.data);
			};

			getNews().then(onSuccess).catch();
		}
	}, [currentPage]);

	const deleteNewFunc = (id) => {
		const onSuccess = () => {
			const onSuccess2 = (result) => {
				setNews(result.data);
			};

			getNews().then(onSuccess2).catch();
		};

		deleteNew(id).then(onSuccess).catch();
	};

	return (
		<Box position={"relative"} w={"100ww"} h={"100vh"}>
			<SimpleSidebar
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			>
				<Box
					h={"100%"}
					w={document.documentElement.clientWidth > 768 ? "60vw" : "100%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					flexDir={"column"}
					bgColor={"white"}
				>
					<Flex
						w="100%"
						maxW={"800px"}
						h={"100%"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						{currentPage === 0 && <CreateNew />}
					</Flex>
					<Flex
						w="100%"
						maxW={"800px"}
						h={"100%"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						{currentPage === 1 && (
							<Box
								display={"flex"}
								flexWrap={"wrap"}
								justifyContent={"flex-start"}
							>
								{news.length > 0 ? (
									news.map(({ id, title, content, mainPicture }) => (
										<Box key={id}>
											<BigCardToDelete
												id={id}
												header={title}
												text={content}
												image={mainPicture}
												deleteNew={deleteNewFunc}
											/>
										</Box>
									))
								) : (
									<Heading fontSize={"20px"}>Список новостей пуст.</Heading>
								)}
							</Box>
						)}
					</Flex>
				</Box>
			</SimpleSidebar>
		</Box>
	);
};

export default Panel;
