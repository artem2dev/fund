import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ReportCard from "./report-card";

const Reports = ({ reports }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Flex flexDir={"column"} align={"center"} width={"100%"} minH={"100vh"}>
			<Flex
				bgColor={"#f2f2f2"}
				h={"330px"}
				w={"100%"}
				justify={"center"}
				align={"end"}
				pb={"75px"}
				mb={"75px"}
			>
				<Heading fontSize={"50px"} color={"#10131f"} fontFamily={"Oswald"}>
					Отчеты
				</Heading>
			</Flex>
			<Flex w={"1133px"} pb={"75px"}>
				<Flex justify={"start"} flexWrap={"wrap"}>
					{reports.map(({ title, content, medias, createdAt }, i) => (
						<Box
							key={i}
							mt={i > 2 ? "20px" : ""}
							ml={i % 3 !== 0 ? "20px" : ""}
						>
							<ReportCard
								content={content}
								title={title}
								medias={medias}
								createdAt={createdAt}
							/>
						</Box>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Reports;
