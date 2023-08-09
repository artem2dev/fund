import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { default as React } from "react";
import { ReactComponent as pdf } from "../../../../assets/pdf.svg";

const PdfToDelete = ({ id, pdf: pdfItem, deletePdf }) => {
	return (
		<Flex
			position={"relative"}
			flexDir={"column"}
			w={"205px"}
			h={"260px"}
			borderRadius={"3px"}
			bgColor={"#f8f8f8"}
			p={"30px"}
			ml={"20px"}
			mt={"10px"}
			justify={"space-between"}
			onClick={() => deletePdf(id)}
		>
			<Box
				position={"absolute"}
				w={"100%"}
				h={"100%"}
				top={0}
				left={0}
				zIndex={1}
				_hover={{
					display: "block",
					transition: "all 300ms ease",
					bgColor: "red",
					opacity: 0.75,
				}}
				borderRadius={"5px"}
				color={"black"}
			>
				<Box
					w={"100%"}
					h={"100%"}
					opacity={0}
					_hover={{
						transition: "all 300ms ease",
						opacity: 1,
					}}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					cursor={"pointer"}
					color={"black"}
				>
					<DeleteIcon fontSize={150} color={"white"} zIndex={10000} />
				</Box>
			</Box>
			<Box>
				<Icon w={"38px"} h={"38px"} mb={"20px"} as={pdf} />
				<Text
					fontSize={"16px"}
					color={"#1f243a"}
					css={`
						text-overflow: ellipsis;
						word-wrap: keep-all;
						overflow: hidden;
						max-height: 4.8em;
						line-height: 1.2em;
						display: -webkit-box;
						-webkit-line-clamp: 4;
						-webkit-box-orient: vertical;
					`}
				>
					{pdfItem.title}
				</Text>
			</Box>
			<Box>
				<Text fontSize={"14px"} color={"#666666"} mb={"4px"}>
					pdf, {pdfItem.size}
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

export default PdfToDelete;
