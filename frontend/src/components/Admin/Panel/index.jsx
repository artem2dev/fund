import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { deleteNew, getNews } from "../../../api/news";
import { deleteParticipant, getParticipants } from "../../../api/participants";
import { deletePdf, getPdfs } from "../../../api/pdfs";
import { deleteProject, getProjects } from "../../../api/projects";
import { deleteThank, getThanks } from "../../../api/thanks";
import { CreateNew } from "./createNew";
import { CreateParticipant } from "./createParticipant";
import { CreatePdf } from "./createPdf";
import { CreateProject } from "./createProject";
import { CreateReport } from "./createReport";
import { CreateThank } from "./createThank";
import NewCardToDelete from "./deleteNew";
import ParticipantToDelete from "./deleteParticipant";
import PdfToDelete from "./deletePdf";
import ProjectToDelete from "./deleteProject";
import ThankToDelete from "./deleteThank";
import SimpleSidebar from "./sidebar";

const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Panel = () => {
	const [currentPage, setCurrentPage] = useState(pages[0]);
	const [news, setNews] = useState([]);
	const [thanks, setThanks] = useState([]);
	const [participants, setParticipants] = useState([]);
	const [projects, setProjects] = useState([]);
	const [pdfs, setPdfs] = useState([]);

	useEffect(() => {
		if (currentPage === 1) {
			const onSuccess = (result) => {
				setNews(result.data);
			};

			getNews().then(onSuccess).catch();
		}

		if (currentPage === 3) {
			const onSuccess = (result) => {
				setThanks(result.data);
			};

			getThanks().then(onSuccess).catch();
		}

		if (currentPage === 5) {
			const onSuccess = (result) => {
				setParticipants(result.data);
			};

			getParticipants().then(onSuccess).catch();
		}

		if (currentPage === 7) {
			const onSuccess = (result) => {
				setProjects(result.data);
			};

			getProjects().then(onSuccess).catch();
		}

		if (currentPage === 9) {
			const onSuccess = (result) => {
				setPdfs(result.data);
			};

			getPdfs().then(onSuccess).catch();
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

	const deleteThankFunc = (id) => {
		const onSuccess = () => {
			const onSuccess2 = (result) => {
				setThanks(result.data);
			};

			getThanks().then(onSuccess2).catch();
		};

		deleteThank(id).then(onSuccess).catch();
	};

	const deleteParticipantFunc = (id) => {
		const onSuccess = () => {
			const onSuccess2 = (result) => {
				setParticipants(result.data);
			};

			getParticipants().then(onSuccess2).catch();
		};

		deleteParticipant(id).then(onSuccess).catch();
	};

	const deleteProjectFunc = (id) => {
		const onSuccess = () => {
			const onSuccess2 = (result) => {
				setProjects(result.data);
			};

			getProjects().then(onSuccess2).catch();
		};

		deleteProject(id).then(onSuccess).catch();
	};

	const deletePdfFunc = (id) => {
		const onSuccess = () => {
			const onSuccess2 = (result) => {
				setPdfs(result.data);
			};

			getPdfs().then(onSuccess2).catch();
		};

		deletePdf(id).then(onSuccess).catch();
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
									news.map(({ id, title, content, mainPicture, createdAt }) => (
										<Box key={id} mr={"10px"} mt={"10px"}>
											<NewCardToDelete
												id={id}
												title={title}
												content={content}
												image={mainPicture}
												createdAt={createdAt}
												deleteNew={deleteNewFunc}
											/>
										</Box>
									))
								) : (
									<Heading fontSize={"20px"}>Список новостей пуст.</Heading>
								)}
							</Box>
						)}
						{currentPage === 2 && <CreateThank />}
						{currentPage === 3 && (
							<Box
								display={"flex"}
								flexWrap={"wrap"}
								justifyContent={"flex-start"}
							>
								{thanks.length > 0 ? (
									thanks.map(({ id, image }) => (
										<Box key={id}>
											<ThankToDelete
												id={id}
												image={image}
												deleteThank={deleteThankFunc}
											/>
										</Box>
									))
								) : (
									<Heading fontSize={"20px"}>
										Список благодарностей пуст.
									</Heading>
								)}
							</Box>
						)}
						{currentPage === 4 && <CreateParticipant />}
						{currentPage === 5 && (
							<Box
								display={"flex"}
								flexWrap={"wrap"}
								justifyContent={"flex-start"}
							>
								{participants.length > 0 ? (
									participants.map(({ id, image, name, position }) => (
										<Box key={id}>
											<ParticipantToDelete
												id={id}
												image={image}
												name={name}
												position={position}
												deleteParticipant={deleteParticipantFunc}
											/>
										</Box>
									))
								) : (
									<Heading fontSize={"20px"}>Список участников пуст.</Heading>
								)}
							</Box>
						)}
						{currentPage === 6 && <CreateProject />}
						{currentPage === 7 && (
							<Box
								display={"flex"}
								flexWrap={"wrap"}
								justifyContent={"flex-start"}
							>
								{projects.length > 0 ? (
									projects.map(
										({
											id,
											title,
											content,
											image,
											targetAmount,
											currentAmount,
										}) => (
											<Box key={id} mr={"15px"} mt={"10px"}>
												<ProjectToDelete
													id={id}
													title={title}
													content={content}
													image={image}
													targetAmount={targetAmount}
													currentAmount={currentAmount}
													deleteProject={deleteProjectFunc}
												/>
											</Box>
										)
									)
								) : (
									<Heading fontSize={"20px"}>Список проектов пуст.</Heading>
								)}
							</Box>
						)}
						{currentPage === 8 && <CreatePdf />}
						{currentPage === 9 && (
							<Box
								display={"flex"}
								flexWrap={"wrap"}
								justifyContent={"flex-start"}
							>
								{pdfs.length > 0 ? (
									pdfs.map((pdf, i) => (
										<PdfToDelete
											key={i}
											id={pdf.id}
											pdf={pdf}
											deletePdf={deletePdfFunc}
										/>
									))
								) : (
									<Heading fontSize={"20px"}>Список PDF пуст.</Heading>
								)}
							</Box>
						)}
						{currentPage === 10 && <CreateReport />}
					</Flex>
				</Box>
			</SimpleSidebar>
		</Box>
	);
};

export default Panel;
