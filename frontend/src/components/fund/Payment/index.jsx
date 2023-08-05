import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Payment from "./payment";
import PaymentHistory from "./paymentHistory";

const mockedPayments = [
	{
		name: "Егор",
		email: "egor0@gmail.ru",
		date: "2023-08-03T17:46:39.050Z",
		amount: 100,
	},
	{
		name: "Дмитрий",
		email: "dgor1@mail.ru",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1,
	},
	{
		name: "Иван",
		email: "jfndn2@gmail.com",
		date: "2023-08-02T23:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndn3@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndn4@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndn5@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndn6@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndn7@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndn8@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndn9@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndnq@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndnw@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
	{
		name: "Иван",
		email: "jfndne@gmail.com",
		date: "2023-08-02T17:46:39.050Z",
		amount: 1000,
	},
];

const PaymentWithHistory = ({ isHeader }) => {
	return (
		<Flex flexDir={"column"} w={"100%"}>
			{isHeader && (
				<Box
					marginLeft={"8px"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					css={`
						width: 205px;
						height: 45px;
						transform: skew(160deg);
						background: #bf3132;
						border-radius: 5px;
					`}
					mb={"42px"}
				>
					<Text
						fontWeight={500}
						color={"white"}
						fontSize={"30px"}
						fontFamily={"Oswald"}
						textTransform={"uppercase"}
						css={"transform: skew(20deg);"}
					>
						Как помочь
					</Text>
				</Box>
			)}
			<Flex
				w={"100%"}
				justify={"space-between"}
				align={"center"}
				flexWrap={"wrap"}
			>
				<Payment />
				<PaymentHistory payments={mockedPayments} />
			</Flex>
		</Flex>
	);
};

export default PaymentWithHistory;
