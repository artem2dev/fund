import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const OFonde = () => {
	return (
		<Box height={"100%"}>
			<Heading py={5} color={"#2c2960"} textAlign={"center"}>
				Благотворительный фонд Эльмана Пашаева
			</Heading>
			<Box
				height={"70vh"}
				display={"flex"}
				flexDir={"column"}
				justifyContent={"space-between"}
			>
				<Text fontSize={20} textAlign={"justify"}>
					Целью нашего фонда является сбор средств для поддержки бойцов на
					передовой - участников СВО. Мы оказываем всестороннюю поддержку
					солдатам и их семьям: доставляем в зону боевых действий продукты
					питания, лекарственные средства, транспортные средства, а также
					оказываем правовую и юридическую поддержку лицам - участникам боевых
					действий.
				</Text>
				<Box>
					<Text fontSize={18} textAlign={"center"}>
						БЛАГОТВОРИТЕЛЬНЫЙ ФОНД ЭЛЬМАНА ПАШАЕВА
						<br />
						ИНН 1225000021950
						<br />
						УЧЕТНЫЙ № 5014010933 от 01 марта 2022 года
						<br />
						ИНН 5047261470
						<br />
						ЮР.АДРЕС: 141702, Московская область, г.о. Долгопрудный, ш.
						Лихачевское, д.20 к.1 кв. 80
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default OFonde;
