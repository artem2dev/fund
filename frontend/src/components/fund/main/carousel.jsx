import {
	Box,
	// Button,
	// Card,
	// CardBody,
	// CardFooter,
	// Heading,
	// Image,
	// Stack,
	// Text,
} from "@chakra-ui/react";
import ReactCardCarousel from "react-card-carousel";
import ProductAddToCart from "./card";

// const NewsCard = () => {
// 	return (
// 		<Card
// 			direction={{ base: "column", sm: "row" }}
// 			overflow="hidden"
// 			// variant="outline"
// 			height={"500px"}
// 		>
// 			<Image
// 				objectFit="cover"
// 				maxW={{ base: "100%", sm: "200px" }}
// 				src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
// 				alt="Caffe Latte"
// 			/>

// 			<Stack>
// 				<CardBody>
// 					<Heading size="md">The perfect latte</Heading>

// 					<Text py="2">
// 						Caffè latte is a coffee beverage of Italian origin made with
// 						espresso and steamed milk.
// 					</Text>
// 				</CardBody>

// 				<CardFooter>
// 					<Button variant="solid" colorScheme="blue">
// 						Buy Latte
// 					</Button>
// 				</CardFooter>
// 			</Stack>
// 		</Card>
// 	);
// };

export default function CaptionCarousel() {
	return (
		<Box
			style={{
				position: "relative",
				height: "80vh",
				width: "100%",
				display: "flex",
				flex: 1,
				justifyContent: "center",
				alignItems: "middle",
			}}
		>
			<ReactCardCarousel
				spread={"narrow"}
				autoplay={true}
				autoplay_speed={2500}
			>
				<ProductAddToCart />
				<ProductAddToCart />
				<ProductAddToCart />
				<ProductAddToCart />
				<ProductAddToCart />
				{/* <NewsCard /> */}
			</ReactCardCarousel>
		</Box>
	);
}
