import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { SlSocialVkontakte, SlSocialInstagram } from "react-icons/sl";
import { LiaTelegramPlane } from "react-icons/lia";
import logo from "../../assets/logo-no-bg.png";

const Footer = () => {
	return (
		<Box
			color={"white"}
			w={"100%"}
			bgColor={"#4C70B4"}
			height={document.documentElement.clientWidth > 767 ? "380px" : "100%"}
			display={"flex"}
			justifyContent={"center"}
		>
			{document.documentElement.clientWidth > 767 ? (
				<Box
					w={"1200px"}
					py={"30px"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					px={"20px"}
				>
					<Box maxW={"550px"}>
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
						<Box h={"50px"} display={"flex"} mt={"30px"}>
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
									<SlSocialVkontakte size={35} color="#4C70B4" />
								</Link>
							</Box>
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
								<Link href="https://instagram.com/pashaev.elman?igshid=NTc4MTIwNjQ2YQ==">
									<SlSocialInstagram size={28} color="#4C70B4" />
								</Link>
							</Box>
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
									<LiaTelegramPlane size={32} color="#4C70B4" />
								</Link>
							</Box>
						</Box>
					</Box>
					<Box
						display={"flex"}
						flexDir={"column"}
						fontSize={"20px"}
						maxW={"500px"}
					>
						<Link
							href="/o-fonde"
							opacity={"0.7"}
							_hover={{ opacity: "1" }}
							mb={"15px"}
						>
							О фонде
						</Link>
						<Link
							href="/novosty"
							opacity={"0.7"}
							_hover={{ opacity: "1" }}
							mb={"15px"}
						>
							Новости
						</Link>
						<Link
							href="/kak-pomoch"
							opacity={"0.7"}
							_hover={{ opacity: "1" }}
							mb={"15px"}
						>
							Как помочь
						</Link>
						<Link
							href="/blagodarnosti"
							opacity={"0.7"}
							_hover={{ opacity: "1" }}
							mb={"15px"}
							maxW={"300px"}
						>
							Наши меценаты и благодарности фонду
						</Link>
					</Box>
					<Box>
						<Image w={"150px"} src={logo}></Image>
					</Box>
				</Box>
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
									<SlSocialVkontakte size={35} color="#4C70B4" />
								</Link>
							</Box>
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
								<Link href="https://instagram.com/pashaev.elman?igshid=NTc4MTIwNjQ2YQ==">
									<SlSocialInstagram size={28} color="#4C70B4" />
								</Link>
							</Box>
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
									<LiaTelegramPlane size={32} color="#4C70B4" />
								</Link>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Footer;
