import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormLabel,
	Heading,
	Image,
	Input,
	InputGroup,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import paymentsLogo from "../../../assets/paymentsLogo.png";
import qrLogo from "../../../assets/qrLogo.png";

const defaultLabels = {
	email: "Ваш e-mail",
	name: "Ваше имя",
};

const defaultErrorLabels = {
	nameMinLength: "Слишком короткое имя",
	emailCannotBeEmpty: "E-mail не может быть пустой",
};

const initialIsFieldError = {
	email: false,
	name: false,
};

const Payment = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [labels, setLabels] = useState(defaultLabels);
	// const [isLoading, setIsLoading] = useState(false);
	const [isFieldError, setIsFieldError] = useState(initialIsFieldError);

	const onEmailChange = (e) => {
		setIsFieldError({
			...isFieldError,
			email: false,
		});
		setLabels({ ...labels, email: defaultLabels.email });

		setEmail(e.target.value);
	};

	const onNameChange = (e) => {
		setIsFieldError({
			...isFieldError,
			name: false,
		});
		setLabels({ ...labels, name: defaultLabels.name });

		setName(e.target.value);
	};

	const fieldsVerification = (email, name) => {
		if (!email.length) {
			setLabels({
				...labels,
				email: defaultErrorLabels.emailCannotBeEmpty,
			});

			setIsFieldError({ ...isFieldError, email: true });

			return false;
		}

		if (name.length < 2) {
			setLabels({
				...labels,
				name: defaultErrorLabels.nameMinLength,
			});

			setIsFieldError({ ...isFieldError, name: true });

			return false;
		}

		return true;
	};

	// const onLogin = (e) => {
	// 	e.preventDefault();
	// 	fieldsVerification(email, name);

	// 	console.log();
	// };

	return (
		<Box
			w={"648px"}
			h={"630px"}
			bgColor={"#fff"}
			p={"40px"}
			borderRadius={"3px"}
		>
			<Flex flexDir={"column"}>
				<Heading
					fontSize={"20px"}
					color={"#1f243a"}
					fontWeight={"700"}
					mb={"50px"}
					fontFamily={"Wix Madefor Display"}
				>
					Сумма пожертвования
				</Heading>
				<Flex justifyContent={"space-between"}>
					<Button
						w={"130px"}
						h={"60px"}
						border={"1px solid #cdcdcd"}
						borderRadius={"3px"}
						bgColor={"white"}
						_active={{
							border: "1px solid #bf3132",
							bgColor: "#ffe4e4",
						}}
					>
						100 ₽
					</Button>
					<Button
						w={"130px"}
						h={"60px"}
						border={"1px solid #cdcdcd"}
						borderRadius={"3px"}
						bgColor={"white"}
						_active={{
							border: "1px solid #bf3132",
							bgColor: "#ffe4e4",
						}}
					>
						250 ₽
					</Button>
					<Button
						w={"130px"}
						h={"60px"}
						border={"1px solid #cdcdcd"}
						borderRadius={"3px"}
						bgColor={"white"}
						_active={{
							border: "1px solid #bf3132",
							bgColor: "#ffe4e4",
						}}
					>
						500 ₽
					</Button>
					<Button
						w={"148px"}
						h={"60px"}
						border={"1px solid #cdcdcd"}
						borderRadius={"3px"}
						bgColor={"#f8f8f8"}
						_active={{
							border: "1px solid #bf3132",
							bgColor: "#ffe4e4",
						}}
					>
						Другая сумма
					</Button>
				</Flex>
				<Flex mt={"25px"} justifyContent={"space-between"}>
					<Button
						w={"270px"}
						h={"60px"}
						border={"1px solid #cdcdcd"}
						borderRadius={"3px"}
						bgColor={"white"}
						_active={{
							border: "1px solid #bf3132",
							bgColor: "#ffe4e4",
						}}
						display={"flex"}
						flexDir={"column"}
					>
						<Image src={paymentsLogo} />
						<Text mt={"5px"} color={"#1f243a"} fontSize={"12px"}>
							Банковская карта
						</Text>
					</Button>
					<Button
						w={"287px"}
						h={"60px"}
						border={"1px solid #cdcdcd"}
						borderRadius={"3px"}
						bgColor={"white"}
						_active={{
							border: "1px solid #bf3132",
							bgColor: "#ffe4e4",
						}}
						display={"flex"}
						flexDir={"column"}
					>
						<Image src={qrLogo} />
						<Text mt={"5px"} color={"#1f243a"} fontSize={"12px"}>
							По QR-коду
						</Text>
					</Button>
				</Flex>
				<Flex mt={"25px"}>
					<Checkbox
						colorScheme="white"
						iconColor="#bf3132"
						w={"20x"}
						h={"20px"}
						borderRadius={"3px"}
						size={"md"}
						mr={"74px"}
					>
						Помогать ежемесечно
					</Checkbox>
					<Checkbox
						colorScheme="white"
						iconColor="#bf3132"
						w={"20x"}
						h={"20px"}
						borderRadius={"3px"}
						size={"md"}
					>
						Получать рассылку на E-mail
					</Checkbox>
				</Flex>
				<Box
					height={"2px"}
					width={"100%"}
					borderRadius={"1px"}
					bgColor={"#f2f5f8"}
					my={"40px"}
				/>
				<Flex justify={"space-between"}>
					<Stack gap={""}>
						<FormLabel
							fontSize={"14px"}
							htmlFor="name"
							mb={""}
							color={isFieldError.name ? "#bf3132" : "#1f243a"}
						>
							{labels.name}
						</FormLabel>
						<Input
							pr="4.5rem"
							id="name"
							value={name}
							onChange={onNameChange}
							isInvalid={isFieldError.name}
							bgColor={"#f8f8f8"}
							border={"1px solid #cdcdcd"}
							borderRadius={"3px"}
							h={"60px"}
							w={"270px"}
							_focus={{
								border: "1px solid #bf3132",
								bgColor: "#ffe4e4",
							}}
							_focusVisible={{}}
							placeholder={labels.name}
						/>
					</Stack>
					<Stack>
						<FormLabel
							fontSize={"14px"}
							htmlFor="email"
							mb={""}
							color={isFieldError.email ? "#bf3132" : "#1f243a"}
						>
							{labels.email}
						</FormLabel>
						<Input
							id="email"
							type="email"
							onChange={onEmailChange}
							value={email}
							isInvalid={isFieldError.email}
							bgColor={"#f8f8f8"}
							border={"1px solid #cdcdcd"}
							borderRadius={"3px"}
							h={"60px"}
							w={"288px"}
							_focus={{
								border: "1px solid #bf3132",
								bgColor: "#ffe4e4",
							}}
							_focusVisible={{}}
							placeholder={labels.email}
						/>
					</Stack>
				</Flex>
				<Button
					borderRadius={"3px"}
					mt={"10px"}
					w={"100%"}
					h={"60px"}
					bg={
						"linear-gradient(to right, #771e2e 0%, #bf3132 99%, #bf3132 100%)"
					}
					transition={"all 0.5s"}
					_hover={{
						bg: "linear-gradient(to right, #771e2e 0%, #771e2e 99%, #771e2e 100%)",
					}}
					_active={{
						bg: "linear-gradient(to right, #6d1424 0%, #6d1424 99%, #6d1424 100%)",
					}}
					color={"white"}
				>
					Помочь
				</Button>
				<Text
					color={"#666666"}
					fontSize={"14px"}
					textAlign={"center"}
					mt={"20px"}
				>
					Нажимая на кнопку, Вы даете согласие на обработку персональных данных
					и соглашаетесь с{" "}
					<span style={{ textDecoration: "underline", cursor: "pointer" }}>
						политикой конфиденциальности
					</span>
				</Text>
			</Flex>
		</Box>
	);
};

export default Payment;
