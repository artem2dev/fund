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

const url = window.location.href;

export default function WithSubnavigation({ children }) {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box
			w={"98vw"}
			position={"fixed"}
			zIndex={10}
			bgColor={"#6288d0"}
			display={"flex"}
			justifyContent={"center"}
			boxShadow={"2px 6px 20px -10px #000000"}
			margin={"10px 10px 0 10px"}
			borderRadius={"10px"}
		>
			<Box maxW={"1200px"}>
				<Flex
					minH={"60px"}
					width={"100%"}
					py={{ base: 2 }}
					px={{ base: 4 }}
					align={"center"}
					bgColor={"#6288d0"}
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
							<Image
								pointerEvents={"none"}
								userSelect={"none"}
								position={"relative"}
								height={"100px"}
								src={`${process.env.REACT_APP_SERVER}/media/logo.png`}
							></Image>
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
						width: "90vw",
						position: "relative",
						left: "calc(-45vw + 50%)",
						borderColor: "#6288d0",
					}}
				/>
				<Box>{children}</Box>
			</Box>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("white");

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Link
					key={navItem.label}
					px={2}
					py={1}
					rounded={"md"}
					_hover={{
						transition: "color .5s ease-in-out, box-shadow .5s ease-in-out",
						boxShadow: `${navItem.hover}`,
						color: "#6288d0",
					}}
					href={navItem.href}
					fontWeight={500}
					bgColor={url.includes(navItem.href) ? linkColor : ""}
					color={url.includes(navItem.href) ? "#6288d0" : "white"}
					__css={`box-shadow: inset 0 0 0 0 #fff;`}
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
		hover: "inset 81px 0 0 0 #fff",
	},
	{
		label: "Новости",
		href: "/novosty",
		hover: "inset 80px 0 0 0 #fff",
	},
	{
		label: "Как помочь ",
		href: "/kak-pomoch",
		hover: "inset 106px 0 0 0 #fff",
	},
	{
		label: "Наши меценаты и Благодарности Фонду ",
		href: "/blagodarnosti",
		hover: "inset 324px 0 0 0 #fff",
	},
];
