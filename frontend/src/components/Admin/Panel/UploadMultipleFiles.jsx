import { Box, Button, Flex, FormLabel, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { uploadImage } from "../../../api/media";
import "./style.css";

const FileUploadScreen = () => {
	const [multipleFiles, setMultipleFiles] = useState("");
	const [selectedFiles, setSelectedFiles] = useState([]);

	const multipleFileChange = (e) => {
		const images = [];

		for (let i = 0; i < e.target.files.length; i++) {
			images.push(URL.createObjectURL(e.target.files[i]));
		}

		setSelectedFiles(images);
		setMultipleFiles(e.target.files);
	};

	const UploadMultipleFiles = async () => {
		const formData = new FormData();
		for (let i = 0; i < multipleFiles.length; i++) {
			formData.append("files", multipleFiles[i]);
		}
		await uploadImage(formData);
	};

	const deleteFiles = () => {
		setMultipleFiles("");
		setSelectedFiles([]);
	};

	return (
		<Box className="row mt-3">
			<Box className="col-6">
				<Box className="row">
					<FormLabel as="legend" mt="20px">
						Остальные файлы:
					</FormLabel>
					<label className="input-file-multiple">
						<Input
							type="file"
							height={"50px"}
							padding="10px"
							name="image"
							onChange={(e) => multipleFileChange(e)}
							multiple
						/>
						<span>Нажмите, чтобы выбрать файл</span>
					</label>
				</Box>

				<Flex flexDir={"column"}>
					{selectedFiles.length !== 0 && (
						<Flex m={"10px"} mr={0} justifyContent={"flex-end"}>
							<Button
								p={"8px"}
								h={"32px"}
								bgColor={"red"}
								_hover={{
									bgColor: "black",
									color: "white",
								}}
								onClick={deleteFiles}
							>
								Очистить файлы ниже
							</Button>
						</Flex>
					)}
					{selectedFiles !== 0 &&
						selectedFiles.map((img, i) => {
							return (
								<Flex justifyContent={"center"} key={i}>
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
											src={img}
										/>
									</Flex>
								</Flex>
							);
						})}
				</Flex>
			</Box>
			<Button type="button" onClick={() => UploadMultipleFiles()}>
				Загрузить
			</Button>
		</Box>
	);
};

export default FileUploadScreen;
