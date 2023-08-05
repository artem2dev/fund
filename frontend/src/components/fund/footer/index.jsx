import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";
import vk from "../../../assets/vk-footer.svg";
import tg from "../../../assets/telegram-footer.svg";

const Footer = () => {
	return (
		<Flex
			color={"white"}
			w={"100%"}
			bgColor={"#1f243a"}
			height={document.documentElement.clientWidth > 767 ? "300px" : "100%"}
			display={"flex"}
			justifyContent={"center"}
			pt={"75px"}
		>
			{document.documentElement.clientWidth > 767 ? (
				<Flex
					w={"100%"}
					flexDir={"column"}
					alignItems={"center"}
					justify={"space-between"}
				>
					<Flex w={"1135px"} display={"flex"} justifyContent={"space-between"}>
						<Box maxW={"550px"}>
							<Text mb={"40px"} fontSize={"16px"} w={"375px"}>
								141702, Московская область, г.о. Долгопрудный, ш. Лихачевское,
								д. 20 к. 1, кв. 80
							</Text>
							<Box h={"50px"} display={"flex"} mt={"30px"}>
								<Button
									w={"200px"}
									h={"45px"}
									fontWeight={400}
									bgColor={"transparent"}
									color={"#8897a8"}
									fontSize={"16px"}
									_hover={{
										textDecoration: "underline",
									}}
									borderRadius={"3px"}
									border={"1px solid #8897a8"}
									onClick={() => {}}
								>
									pachaev-fund@mail.ru
								</Button>
								<Link
									w={"48px"}
									h={"48px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									href="https://vk.com/id810628743"
									border={"1px solid #8897a8"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"20px"}
								>
									<Image w={"24px"} src={vk} color="#4C70B4" />
								</Link>
								<Link
									href="https://t.me/elmanpashaev"
									w={"48px"}
									h={"48px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									border={"1px solid #8897a8"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"20px"}
								>
									<Image w={"24px"} src={tg} color="#4C70B4" />
								</Link>
							</Box>
						</Box>
						<Box
							display={"flex"}
							flexDir={"column"}
							fontSize={"20px"}
							maxW={"500px"}
						>
							<Text mb={"4px"} color={"#8897a8"} fontSize={"14px"}>
								с пн - пт с 09:00 до 18:00
							</Text>
							<Heading fontSize={"30px"} mb={"30px"}>
								<a href="tel: +7 (915) 233-33-38">+7 (915) 233-33-38</a>
							</Heading>
							<Flex>
								<Button
									backgroundColor="#bf3132"
									borderRadius={"3px"}
									color={"white"}
									fontWeight={400}
									_hover={{
										bgColor: "#771e2e",
									}}
									_active={{
										bgColor: "#6d1424",
									}}
									width={"170px"}
									height={"45px"}
									marginRight={"16px"}
								>
									Хочу помочь
								</Button>
								<Button
									backgroundColor="#33438e"
									borderRadius={"3px"}
									color={"white"}
									fontWeight={400}
									_hover={{
										bgColor: "#263475",
									}}
									_active={{
										bgColor: "#1d2a67",
									}}
									width={"170px"}
									height={"45px"}
								>
									Нужна помощь
								</Button>
							</Flex>
						</Box>
					</Flex>
					<Flex w={"100%"} h={"50px"} bgColor={"#161a2c"} justify={"center"}>
						<Flex w={"1135px"} align={"center"}>
							<Text color={"#303754"} fontSize={"14px"}>
								© {new Date().getFullYear()} «Благотворительный фонд «Пашаев
								Фонд». Политика конфиденциальности
							</Text>
						</Flex>
					</Flex>
				</Flex>
			) : (
				<Box>
					<Box px={"25px"} pt={"40px"} pb={"20px"} height={"100%"}>
						<Heading mb={"30px"} fontSize={"35px"}>
							Контактная информация
						</Heading>
						<Heading fontSize={"20px"} mb={"5px"}>
							<a href="tel: +7 (915) 233-33-38">+7 (915) 233-33-38</a>
						</Heading>
						<Text mb={5} opacity={"0.6"} fontSize={"14px"}>
							(пн-птн: 09:00-18:00)
						</Text>
						<Heading mb={"10px"} fontSize={"16px"}>
							АДРЕС:
						</Heading>
						<Text fontSize={"16px"}>
							141702, Московская область, г.о. Долгопрудный, ш. Лихачевское, д.
							20 к. 1, кв. 80
						</Text>
						<Box h={"50px"} w={"100%"} display={"flex"} mt={"30px"}>
							<Button
								w={"170px"}
								h={"45px"}
								bgColor={"transparent"}
								color={"#8897a8"}
								fontSize={"14px"}
								textDecoration={"underline"}
								_hover={{
									textDecoration: "none",
								}}
								borderRadius={"3px"}
								border={"1px solid #bbc5d0"}
								onClick={() => {}}
							>
								pachaev-fund@mail.ru
							</Button>
							<Box
								w={"45px"}
								h={"45px"}
								bgColor={"white"}
								borderRadius={"50%"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								cursor={"pointer"}
							>
								<Link href="https://vk.com/id810628743">
									<Image src={tg} color="#4C70B4" />
								</Link>
							</Box>
							{/* <Box
								w={"45px"}
								h={"45px"}
								bgColor={"white"}
								borderRadius={"50%"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								cursor={"pointer"}
								ml={"10px"}
							>
								<Link href="https://instagram.com/pashaev.elman?igshid=NTc4MTIwNjQ2YQ==">
									<SlSocialInstagram size={28} color="#4C70B4" />
								</Link>
							</Box> */}
							<Box
								w={"45px"}
								h={"45px"}
								bgColor={"white"}
								borderRadius={"50%"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								cursor={"pointer"}
								ml={"10px"}
							>
								<Link href="https://t.me/elmanpashaev">
									<Image src={vk} color="#4C70B4" />
								</Link>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</Flex>
	);
};

export default Footer;
