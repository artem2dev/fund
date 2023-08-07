import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./fund/footer";
import Header from "./fund/header";

const Container = () => {
	return (
		<>
			<Header />
			<Box
				className="container"
				// w="100%"
				// minH="87.486vh"
				// maxW={"1200px"}
				// mt={"127px"}
				// px={5}
			>
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};

export default Container;
