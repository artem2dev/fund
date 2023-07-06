import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import BlogPostWithImage from "./card";

export default function MainPage({ news }) {
	return (
		<Box mb={20}>
			<Box
				display={"flex"}
				flexDirection={
					document.documentElement.clientWidth > 767 ? "row" : "column"
				}
				justifyContent={document.documentElement.clientWidth > 767 ? "flex-end" : "center" }
			>
				<Box display={"flex"} justifyContent={"center"}>
					<Box
						maxW={500}
						p={2}
						bgColor={"#f6faff"}
						borderRadius={7}
						borderColor={"#ccc"}
						borderWidth={"1px"}
						mt={5}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
					>
						<Heading color={"#4C70B4"}>Новости</Heading>
						{news?.map((newElem, i) => {
							return <BlogPostWithImage key={i} newElem={newElem} />;
						})}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
