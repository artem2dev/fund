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
				justifyContent={"space-between"}
			>
				<Box
					fontSize={25}
					fontWeight={600}
					mt={"30px"}
					mr={"30px"}
					textAlign={"left"}
					maxW={"650px"}
				>
					Целью нашего фонда является сбор средств для поддержки бойцов на
					передовой - участников СВО. <br />
					<br />
					Мы оказываем всестороннюю поддержку солдатам и их семьям:
					{
						<UnorderedList>
							<ListItem>
								доставляем в зону боевых действий продукты питания
							</ListItem>
							<ListItem>лекарственные средства</ListItem>
							<ListItem>транспортные средства</ListItem>
							<ListItem>
								оказываем правовую и юридическую поддержку лицам - участникам
								боевых действий
							</ListItem>
						</UnorderedList>
					}
				</Box>
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
