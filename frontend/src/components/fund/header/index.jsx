import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Collapse,
	Flex,
	Icon,
	IconButton,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import logo from "../../../assets/logo.png";
import { ReactComponent as tg } from "../../../assets/telegram.svg";
import { ReactComponent as vk } from "../../../assets/vk.svg";
import { NeedHelpModal } from "../modals/needHelpModal";
import { PaymentModal } from "../modals/paymentModal";

const url = window.location.href;

export default function WithSubnavigation({ children }) {
	const {
		isOpen: isPaymentModalOpen,
		onOpen: onPaymentModalOpen,
		onClose: onPaymentModalClose,
	} = useDisclosure();
	const {
		isOpen: isNeedHelpModalOpen,
		onOpen: onNeedHelpModalOpen,
		onClose: onNeedHelpModalClose,
	} = useDisclosure();

	const { isOpen, onToggle } = useDisclosure();
	const [headerBg, setHeaderBg] = useState("");

	window.onscroll = function () {
		if (window.scrollY > 30) {
			setHeaderBg("white");
		} else {
			setHeaderBg("");
		}
	};

	return (
		<Box
			position={"fixed"}
			left={"0px"}
			w={"100%"}
			zIndex={10}
			bgColor={headerBg}
			transitionDuration={"1s"}
		>
			<Flex h={"100px"} width={"100%"} align={"center"}>
				<Flex
					flex={{ base: 0.7 }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={"ghost"}
					/>
				</Flex>
				<Flex flex={1} w={"100%"} h={"100%"} justify={"space-between"}>
					<Flex w={"1000px"}>
						<Flex
							w={"100px"}
							h={"100px"}
							justifyContent={"center"}
							alignItems={"center"}
							borderRight={"1px"}
							borderColor={"#f2f2f2"}
							bgColor={"white"}
						>
							<Link href="/">
								<Image
									pointerEvents={"none"}
									userSelect={"none"}
									position={"relative"}
									height={"76px"}
									src={logo}
								/>
							</Link>
						</Flex>
						<Flex
							display={{ base: "none", md: "flex" }}
							alignItems={"center"}
							flex={"1"}
							maxW={"967px"}
							bgColor={"white"}
						>
							<DesktopNav />
						</Flex>
					</Flex>

					<Flex align={"center"}>
						<Link
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							href="https://vk.com/id810628743"
						>
							<Icon
								w={"20px"}
								h={"20px"}
								as={vk}
								fill={"#000000"}
								marginRight={"20px"}
								marginLeft={"20px"}
								cursor={"pointer"}
								_hover={{
									fill: "#bf3132",
								}}
							/>
						</Link>
						<Link
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							href="https://t.me/elmanpashaev"
						>
							<Icon
								w={"20px"}
								h={"20px"}
								as={tg}
								fill={"#000000"}
								marginRight={"22px"}
								cursor={"pointer"}
								_hover={{
									fill: "#bf3132",
								}}
							/>
						</Link>
						<Text
							color={"#1f243a"}
							_hover={{
								color: "#bf3132",
							}}
						>
							<a
								style={{
									fontWeight: "700",
									fontSize: "16px",
									marginRight: "16px",
								}}
								href="tel: +7 (915) 233-33-38"
							>
								+7 (915) 233-33-38
							</a>
						</Text>
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
							onClick={onPaymentModalOpen}
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
							marginRight={"23px"}
							onClick={onNeedHelpModalOpen}
						>
							Нужна помощь
						</Button>
					</Flex>
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
			<Box>{children}</Box>
			<PaymentModal isOpen={isPaymentModalOpen} onClose={onPaymentModalClose} />
			<NeedHelpModal
				isOpen={isNeedHelpModalOpen}
				onClose={onNeedHelpModalClose}
			/>
		</Box>
	);
}

const DesktopNav = () => {
	return (
		<Stack
			direction={"row"}
			w={"100%"}
			justifyContent={"space-between"}
			alignItems={"center"}
		>
			{NAV_ITEMS.map((navItem) => (
				<Link
					key={navItem.label}
					marginLeft={navItem.marginLeft}
					marginRight={navItem?.marginRight}
					rounded={"md"}
					_hover={{
						transition: "color .16s ease-in-out",
						color: "#bf3132",
					}}
					href={navItem.href}
					fontWeight={500}
					color={url.includes(navItem.href) ? "#bf3132" : "black"}
					lineHeight={"18px"}
					textAlign={"center"}
				>
					{navItem.label}
				</Link>
			))}
		</Stack>
	);
};

const MobileNav = () => {
	const linkColor = useColorModeValue("white");

	return (
		<Stack p={4} display={{ md: "none" }} zIndex={10} bgColor={"#6288d0"}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem
					rounded={"md"}
					_hover={{
						textDecoration: "none",
						bg: linkColor,
					}}
					key={navItem.label}
					{...navItem}
				/>
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text fontWeight={600} color={useColorModeValue("white")}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						bgColor={"black"}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("white")}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: "О фонде",
		href: "/o-fonde",
		marginLeft: "29px",
	},
	{
		label: "Новости",
		href: "/novosty",
		marginLeft: "5px",
	},
	{
		label: "Как помочь",
		href: "/kak-pomoch",
		marginLeft: "5px",
	},
	{
		label: "Благодарности",
		href: "/blagodarnosti",
		marginLeft: "5px",
	},
	{
		label: "Проекты",
		href: "/proekty",
		marginLeft: "5px",
	},
	{
		label: "Отчеты",
		href: "/otchety",
		marginLeft: "5px",
	},
	{
		label: "Попечительский совет",
		href: "/sovet",
		marginLeft: "5px",
		marginRight: "29px",
	},
];
