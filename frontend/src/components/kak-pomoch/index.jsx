import {
	Box,
	Flex,
	Heading,
	Image,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import React from "react";

const KakPomoch = () => {
	return (
		<Box>
			<Heading
				fontSize={document.documentElement.clientWidth > 767 ? "40px" : "28px"}
				w={"100%"}
				my={"20px"}
				textAlign={"center"}
				color={"#4C70B4"}
				mb={"30px"}
			>
				Сделать пожертвование можно любым из способов:
			</Heading>
			<Tabs isFitted variant="enclosed">
				<TabList>
					<Tab
						color={"white"}
						fontWeight={600}
						bg={"#4C70B4"}
						mr={"30px"}
						fontSize={
							document.documentElement.clientWidth > 767 ? "25px" : "20px"
						}
					>
						Система быстрых платежей
					</Tab>
					<Tab
						color={"white"}
						fontWeight={600}
						bg={"#4C70B4"}
						fontSize={
							document.documentElement.clientWidth > 767 ? "25px" : "20px"
						}
					>
						Банковский перевод
					</Tab>
				</TabList>
				<TabIndicator
					mt="-2px"
					height="3px"
					bg="#000"
					color={"gray"}
					borderRadius="1px"
				/>

				<TabPanels>
					<TabPanel>
						{document.documentElement.clientWidth > 767 ? (
							<Flex direction="column">
								<Flex justifyContent={"space-between"}>
									<Box minW={"65%"}>
										<Heading fontSize={"24px"} mt={"10px"} mb={"30px"}>
											Перевод средств через систему быстрых платежей
										</Heading>
										<Text mb={"30px"} fontSize={"20px"} maxW={"40%"}>
											Для перевода через СБП пользуйтесь официальным приложением
											вашего банка.
										</Text>
										<Text fontSize={"20px"} mb={"30px"}>
											Отсканируйте QR-код в мобильном приложении вашего банка:
										</Text>
										<Image
											m={"0 auto"}
											maxW={"280px"}
											css="border: 20px solid #fff"
											src={`${process.env.REACT_APP_SERVER}/media/qr.png`}
										></Image>
									</Box>
									<Box>
										<Text fontSize={"18px"} mt={"60px"}>
											Система быстрых платежей — это сервис Банка России,
											позволяющий физическим лицам совершать мгновенные
											переводы.
										</Text>
									</Box>
								</Flex>
							</Flex>
						) : (
							<Flex direction={"column"}>
								<Flex justifyContent={"space-between"}>
									<Box>
										<Heading fontSize={"22px"} mb={"30px"}>
											Перевод средств через систему быстрых платежей средств
										</Heading>
										<Text mb={"30px"} fontSize={"20px"}>
											Для перевода через СБП пользуйтесь официальным приложением
											вашего банка.
										</Text>
										<Text fontSize={"20px"} mb={"30px"}>
											Отсканируйте QR-код в мобильном приложении вашего банка:
										</Text>
										<Image
											m={"0 auto"}
											maxW={"280px"}
											css="border: 20px solid #fff"
											src={`${process.env.REACT_APP_SERVER}/media/qr.png`}
										></Image>
										<Text fontSize={"18px"} my={"30px"}>
											Система быстрых платежей — это сервис Банка России,
											позволяющий физическим лицам совершать мгновенные
											переводы.
										</Text>
									</Box>
								</Flex>
							</Flex>
						)}
					</TabPanel>
					<TabPanel>
						<Heading fontSize={"24px"} mb={"30px"}>
							Наши реквизиты в АО «Альфа-Банк»:
						</Heading>
						<Text
							fontSize={
								document.documentElement.clientWidth > 767 ? "20px" : "18px"
							}
							mb={"30px"}
						>
							- Наименование компании/ИП: БЛАГОТВОРИТЕЛЬНЫЙ ФОНД "ПАШАЕВ ФОНД"
							<br />
							- ИНН компании/ИП: 5047261470
							<br />
							- Расчётный счёт: 40703810501830000045
							<br />
							- Наименование банка: АО "АЛЬФА-БАНК"
							<br />
							- БИК банка: 044525593
							<br />
							- ИНН банка: 7728168971
							<br />
							- Корреспондентский счёт: 30101810200000000593 в ГУ БАНКА РОССИИ
							ПО ЦФО
							<br />
							- КПП банка по месту нахождения: 770801001
							<br />
							- Код ОКПО: 09610444
							<br />
							- Код ОКАТО: 45286565000
							<br />
							- Код ОКТМО: 45378000000
							<br />
							- Код ОКВЭД: 64.19
							<br />
							- Код ОГРН: 1027700067328
							<br />
						</Text>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default KakPomoch;
