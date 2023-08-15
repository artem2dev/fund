import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { getMediaUrl } from "../../../../helpers/getMediaUrl";

const ThankToDelete = ({ id, image, deleteThank }) => {
	return (
		<Box
			w={"260px"}
			h={"360px"}
			pos={"relative"}
			onClick={() => deleteThank(id)}
			ml={"4px"}
			mt={"10px"}
			cursor={"pointer"}
		>
			<Box
				position={"absolute"}
				w={"100%"}
				h={"100%"}
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
			<Image src={getMediaUrl(image)} />
			<Box
				position={"absolute"}
				left={0}
				bottom={0}
				w={"260px"}
				height={"360px"}
			></Box>
		</Box>
	);
};

export default ThankToDelete;
