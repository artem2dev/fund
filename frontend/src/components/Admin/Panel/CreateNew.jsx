import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Icon,
	Image,
	Input,
	Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { createNew } from "../../../api/news";
import UploadImages from "./UploadMultipleFiles";
import "./style.css";

export const CreateNew = () => {
	const [currentFile, setCurrentFile] = useState(null);

	const handleFileChange = (e) => {
		const file = e?.target?.files?.[0];

		setCurrentFile(file);
	};

	const fileRef = useRef(null);
	const formRef = useRef(null);

	const onSubmit = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.target);

		try {
			await createNew(fd);
		} catch (err) {
			console.error(err);
		}

		return false;
	};

	return (
		<Box
			maxW={"600px"}
			mt={"20px"}
			p={"30px"}
			border={"2px"}
			borderColor={"gray"}
			borderRadius={"10px"}
			mx={"10px"}
		>
			<Box />
			<Box paddingX={10} paddingY={2}>
				<Box>
					<Flex justifyContent={"center"}>
						<Heading marginBottom={"20px"} fontSize={"25px"}>
							Добавить новость
						</Heading>
					</Flex>
				</Box>
				<Flex flexDir="column" width={"100%"}>
					<form onSubmit={onSubmit} ref={formRef}>
						<FormLabel as="legend">Название:</FormLabel>
						<Input type={"text"} name="title" formTarget="text" />
						<FormLabel as="legend" mt="10px">
							Описание:
						</FormLabel>
						<Textarea name="content" />
						<FormLabel as="legend" mt="10px">
							Главная картинка (будет на обложке и первой в списке картинок внутри новости):
						</FormLabel>
						{currentFile && (
							<Flex justifyContent={"center"}>
								<Flex
									flexDir="column"
									align="center"
									mb="10px"
									pos={"relative"}
									width={"fit-content"}
								>
									<Image
										height="200px"
										borderRadius={5}
										style={{ objectFit: "scale-down" }}
										src={URL.createObjectURL(currentFile)}
									/>
									<Button
										w={"min-content"}
										minW={"min-content"}
										h={"min-content"}
										p={0}
										m={0}
										bgColor={"red"}
										_hover={{}}
										_active={{}}
										position={"absolute"}
										top={1}
										right={1}
										onClick={() => setCurrentFile(null)}
									>
										<Icon fontSize="26" as={MdDeleteForever} />
									</Button>
								</Flex>
							</Flex>
						)}
						<label className="input-file">
							<Input
								type="file"
								height={"50px"}
								padding="10px"
								name="image"
								onChange={handleFileChange}
								ref={fileRef}
							/>
							<span>Нажмите, чтобы выбрать файл</span>
						</label>
						<UploadImages />
						<Box
							paddingX={0}
							w={"100%"}
							display={"flex"}
							justifyContent={"center"}
							mt={"20px"}
						>
							<Button
								w={"100%"}
								py={"25px"}
								type="submit"
								bgColor={"green"}
								color={"white"}
								fontWeight={"600"}
								_hover={{
									bgColor: "black",
								}}
							>
								Опубликовать
							</Button>
						</Box>
					</form>
				</Flex>
			</Box>
		</Box>
	);
};
