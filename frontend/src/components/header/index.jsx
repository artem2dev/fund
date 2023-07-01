import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
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
import logo from "../../assets/logo.png";

const url = window.location.href;

export default function WithSubnavigation({ children }) {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box
			w={"100vw"}
			position={"fixed"}
			zIndex={10}
			bgColor={"white"}
			display={"flex"}
			justifyContent={"center"}
			boxShadow={"-4px 7px 20px -16px #000000"}
		>
			<Box maxW={"1200px"}>
				<Flex
					minH={"60px"}
					width={"100%"}
					py={{ base: 2 }}
					px={{ base: 4 }}
					align={"center"}
					bgColor={"white"}
				>
					<Flex
						flex={{ base: 0.7 }}
						ml={{ base: -2 }}
						display={{ base: "flex", md: "none" }}
					>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<CloseIcon w={3} h={3} />
								) : (
									<HamburgerIcon w={5} h={5} />
								)
							}
							variant={"ghost"}
							aria-label={"Toggle Navigation"}
						/>
					</Flex>
					<Flex
						flex={{ base: 1 }}
						w={"100%"}
						justify={{ base: "space-between", md: "space-between" }}
					>
						<Link href="/">
							<Image position={"relative"} height={"100px"} src={logo}></Image>
						</Link>
						<Flex
							display={{ base: "none", md: "flex" }}
							alignItems={"center"}
							ml={10}
						>
							<DesktopNav />
						</Flex>
					</Flex>
				</Flex>
				<Collapse in={isOpen} animateOpacity>
					<MobileNav />
				</Collapse>
				<hr
					style={{
						width: "100vw",
						position: "relative",
						left: "calc(-50vw + 50%)",
					}}
				/>
				<Box>{children}</Box>
			</Box>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("#d7e6ff");

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Link
					key={navItem.label}
					px={2}
					py={1}
					rounded={"md"}
					_hover={{
						textDecoration: "none",
						bg: linkColor,
					}}
					href={navItem.href}
					fontWeight={500}
					bgColor={url.includes(navItem.href) ? linkColor : ""}
				>
					{navItem.label}
				</Link>
			))}
		</Stack>
	);
};

const MobileNav = () => {
	const linkColor = useColorModeValue("gray.100");

	return (
		<Stack p={4} display={{ md: "none" }} zIndex={10} bgColor={"white"}>
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
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
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
					borderColor={useColorModeValue("gray.200", "gray.700")}
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
	},
	{
		label: "Новости",
		href: "/novosty",
	},
	{
		label: "Как помочь ",
		href: "/kak-pomoch",
	},
	{
		label: "Наши меценаты и Благодарности Фонду ",
		href: "/blagodarnosti",
	},
];
