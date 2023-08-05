import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as pdf } from "../../../assets/pdf.svg";

const PdfItem = ({ pdf: pdfItem, i }) => {
	return (
		<Flex
			flexDir={"column"}
			w={"205px"}
			h={"260px"}
			borderRadius={"3px"}
			bgColor={"#f8f8f8"}
			p={"30px"}
			ml={i ? "20px" : ""}
			justify={"space-between"}
		>
			<Box>
				<Icon w={"38px"} h={"38px"} mb={"20px"} as={pdf} />
				<Text fontSize={"16px"} color={"#1f243a"}>
					{pdfItem.title}
				</Text>
			</Box>
			<Box>
				<Text fontSize={"14px"} color={"#666666"} mb={"4px"}>
					pdf, {pdfItem.size} Кб
				</Text>
				<Text
					fontSize={"14px"}
					textDecoration={"underline"}
					_hover={{ textDecoration: "none" }}
					color={"#bf3132"}
					cursor={"pointer"}
				>
					Скачать
				</Text>
			</Box>
		</Flex>
	);
};

export default PdfItem;
