import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import mainBg from "../../../assets/mainBg.jpg";
import mainPashaev from "../../../assets/mainPashaev.jpg";
import mainQuotes from "../../../assets/mainQuotes.png";
import PreFooter from "../footer/pre-footer";
import { PaymentModal } from "../modals/paymentModal";
import NewCard from "../news/new-card";
import PaymentWithHistory from "../payment";
import ParticipantCard from "../popechitelskiySovet/participant-card";
import ProjectCard from "../projects/project-card";
import Thank from "../thanks/thank";

export default function MainPage({
	pdfs,
	news,
	thanks,
	projects,
	participants,
}) {
	const navigate = useNavigate();
	const {
		isOpen: isPaymentModalOpen,
		onOpen: onPaymentModalOpen,
		onClose: onPaymentModalClose,
	} = useDisclosure();

	return (
		<Box>
			<Flex
				align={"center"}
				w={"100%"}
				h={"911px"}
				bgPos={"center"}
				bgRepeat={"no-repeat"}
				bgImage={mainBg}
			>
				<Flex direction="column" marginLeft={"101px"}>
					<Heading
						fontFamily={"Oswald"}
						color={"#1f243a"}
						fontSize={"65px"}
						fontWeight={"600"}
						textTransform={"uppercase"}
					>
						<span
							style={{
								color: "#bf3132",
								fontFamily: "Oswald",
							}}
						>
							Благотворительный
						</span>
						<br />
						фонд «Пашаев Фонд»
					</Heading>
					<Button
						borderRadius={"3px"}
						mt={"53px"}
						w={"245px"}
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
						onClick={onPaymentModalOpen}
					>
						Хочу помогать
					</Button>
				</Flex>
			</Flex>
			<Flex justify={"center"} width={"100%"} pt={"66px"} pb={"75px"}>
				<Flex w={"1133px"}>
					<Flex direction={"column"}>
						<Flex>
							<Box
								marginLeft={"8px"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								css={`
									width: 100px;
									height: 45px;
									transform: skew(160deg);
									background: #bf3132;
									border-radius: 5px;
								`}
							>
								<Text
									fontWeight={500}
									color={"white"}
									fontSize={"30px"}
									fontFamily={"Oswald"}
									textTransform={"uppercase"}
									css={"transform: skew(20deg);"}
								>
									Цель
								</Text>
							</Box>
							<Text
								fontWeight={500}
								fontSize={"30px"}
								fontFamily={"Oswald"}
								textTransform={"uppercase"}
								ml={"5px"}
								color={"#1f243a"}
							>
								нашего фонда
							</Text>
						</Flex>
						<Text w={"560px"} mt={"30px"} color={"#1f243a"}>
							Подержка детских домов, талантливой молодежи, а в данный момент
							бойцов на передовой и их семей.
							<br />
							<br />
							Сейчас мы оказываем всестороннюю поддержку солдатам и их семьям:
						</Text>
						<ul
							style={{
								listStyle: "square",
								width: "445px",
								marginLeft: "18px",
								marginTop: "33px",
							}}
						>
							<li style={{ color: "#33438e" }}>
								<span style={{ color: "#1f243a" }}>
									доставляем в зону боевых действий продукты питания
								</span>
							</li>
							<li style={{ color: "#33438e" }}>
								<span style={{ color: "#1f243a" }}>лекарственные средства</span>
							</li>
							<li style={{ color: "#33438e" }}>
								<span style={{ color: "#1f243a" }}>транспортные средства</span>
							</li>
							<li style={{ color: "#33438e" }}>
								<span style={{ color: "#1f243a" }}>
									оказываем правовую и юридическую поддержку лицам - участникам
									боевых действий
								</span>
							</li>
						</ul>
						<Box
							w={"746px"}
							h={"274px"}
							bgColor={"#f8f8f8"}
							mt={"44px"}
							borderRadius={"3px"}
							bgRepeat={"no-repeat"}
							bgPos={"35px 31px"}
							bgImage={mainQuotes}
						>
							<Text w={"553px"} ml={"67px"} mt={"50px"} fontSize={"18px"}>
								Благотворительность для меня это важно и просто в наше сложное
								время. Ранее я принял участие своими силами и средствами
								помогать детям, талантливым молодым, а теперь и защитникам нашей
								Родины. Не имею морального права оставаться безучастным. Это
								наши дети, это наш народ. Наша сила в единстве!
							</Text>
						</Box>
					</Flex>
					<Image src={mainPashaev} ml={"29px"} />
				</Flex>
			</Flex>
			{projects.length > 0 && (
				<Flex
					justify={"center"}
					width={"100%"}
					pt={"66px"}
					pb={"75px"}
					bgColor={"#1f243a"}
				>
					<Flex w={"1133px"} flexDir={"column"}>
						<Flex mb={"35px"}>
							<Box
								marginLeft={"8px"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								css={`
									width: 145px;
									height: 45px;
									transform: skew(160deg);
									background: #bf3132;
									border-radius: 5px;
								`}
							>
								<Text
									fontWeight={500}
									color={"white"}
									fontSize={"30px"}
									fontFamily={"Oswald"}
									textTransform={"uppercase"}
									css={"transform: skew(20deg);"}
								>
									Проекты
								</Text>
							</Box>
							<Text
								fontWeight={500}
								fontSize={"30px"}
								fontFamily={"Oswald"}
								textTransform={"uppercase"}
								ml={"5px"}
								color={"#fff"}
							>
								фонда
							</Text>
						</Flex>
						<Flex justify={"start"} flexWrap={"wrap"}>
							{projects
								.slice(0, 3)
								.map(
									(
										{ title, content, image, currentAmount, targetAmount },
										i
									) => (
										<Box ml={i !== 0 && "26px"} key={i}>
											<ProjectCard
												title={title}
												content={content}
												image={image}
												targetAmount={targetAmount}
												currentAmount={currentAmount}
												onPaymentModalOpen={onPaymentModalOpen}
											/>
										</Box>
									)
								)}
						</Flex>
					</Flex>
				</Flex>
			)}
			{news.length > 0 && (
				<Flex
					justify={"center"}
					width={"100%"}
					pt={"66px"}
					pb={"75px"}
					bgColor={"#fff"}
				>
					<Flex w={"1133px"} flexDir={"column"}>
						<Flex flexDirection={"column"}>
							<Heading
								fontFamily={"Oswald"}
								color={"#1f243a"}
								fontSize={"30px"}
								fontWeight={700}
								textTransform={"uppercase"}
								mb={"39px"}
							>
								Новости
							</Heading>
							<Flex justify={"start"} flexWrap={"wrap"}>
								{news
									.slice(0, 3)
									.map(({ title, content, mainPicture, createdAt }, i) => (
										<Box ml={i !== 0 && "26px"} key={i}>
											<NewCard
												i={i}
												key={i}
												createdAt={createdAt}
												image={mainPicture}
												description={content}
												title={title}
											/>
										</Box>
									))}
							</Flex>
							<Flex justify={"center"} mt={"45px"}>
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
									onClick={() => navigate("/novosty")}
								>
									Еще новости
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			)}
			<Flex
				justify={"center"}
				width={"100%"}
				pt={"66px"}
				pb={"75px"}
				bgColor={"#f2f5f8"}
			>
				<Flex w={"1133px"}>
					<PaymentWithHistory isHeader={true} />
				</Flex>
			</Flex>
			{participants.length > 0 && (
				<Flex justify={"center"} width={"100%"} pt={"74px"} pb={"75px"}>
					<Flex w={"1133px"}>
						<Flex flexDir={"column"} w={"100%"}>
							<Heading
								fontFamily={"Oswald"}
								color={"#1f243a"}
								fontSize={"30px"}
								fontWeight={700}
								textTransform={"uppercase"}
								mb={"40px"}
							>
								Попечительский совет
							</Heading>
							<Flex w={"100%"} justify={"start"} flexWrap={"wrap"}>
								{participants.map((participant, i) => (
									<Box
										ml={i && i % 4 !== 0 ? "28px" : ""}
										mt={i > 3 ? "28px" : ""}
										key={i}
									>
										<ParticipantCard
											image={participant?.image}
											name={participant?.name}
											position={participant?.position}
											description={participant?.description}
										/>
									</Box>
								))}
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			)}
			{thanks.length > 0 && (
				<Flex
					justify={"center"}
					width={"100%"}
					pt={"74px"}
					pb={"75px"}
					bgImage={"linear-gradient(to top, #f2f5f8 0%, #ffffff 100%)"}
				>
					<Flex w={"1133px"}>
						<Flex flexDir={"column"} w={"100%"}>
							{/* <Flex mb={"35px"}>
				<Text
					fontWeight={500}
					fontSize={"30px"}
					fontFamily={"Oswald"}
					textTransform={"uppercase"}
					mr={"5px"}
					color={"#1f243a"}
				>
					Вы уже
				</Text>
				<Box
					marginLeft={"8px"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					css={`
						width: 145px;
						height: 45px;
						transform: skew(160deg);
						background: #bf3132;
						border-radius: 5px;
					`}
				>
					<Text
						fontWeight={500}
						color={"white"}
						fontSize={"30px"}
						fontFamily={"Oswald"}
						textTransform={"uppercase"}
						css={"transform: skew(20deg);"}
					>
						помогли
					</Text>
				</Box>
			</Flex> */}
							<Heading
								fontFamily={"Oswald"}
								color={"#1f243a"}
								fontSize={"30px"}
								fontWeight={700}
								textTransform={"uppercase"}
								mb={"40px"}
							>
								Благодарности
							</Heading>
							<Thank images={thanks.slice(0, 4)} />
						</Flex>
					</Flex>
				</Flex>
			)}
			<PreFooter pdfs={pdfs.slice(0, 2)} />

			<PaymentModal isOpen={isPaymentModalOpen} onClose={onPaymentModalClose} />
		</Box>
	);
}
