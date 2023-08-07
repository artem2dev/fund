import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getNews } from "../api/news";
import { theme } from "../themes/chakraWhiteTheme";
import Container from "./Container";
import Login from "./admin/login";
import Panel from "./admin/panel";
import MainPage from "./fund/mainPage";
// import About from "./Fund/About";
// import Help from "./Fund/Help";
// import News from "./Fund/News";
// import NewPage from "./Fund/News/novost-page";
// import Thanks from "./Fund/Thanks";
import { getParticipants } from "../api/participants";
import { getProjects } from "../api/projects";
import { getThanks } from "../api/thanks";
import PrivateWrapper from "./PrivateRoute";
import Help from "./fund/help";
import News from "./fund/news";
import Participants from "./fund/popechitelskiySovet";
import Projects from "./fund/projects";
import Thanks from "./fund/thanks";

// const mockedNews = [
// 	{
// 		id: 5,
// 		header: `"РАБОТАЕМ, БРАТ!"`,
// 		text: `В четверг, 6 июля, в одном из московских ресторанов состоится благотворительный вечер в поддержку бойцов СВО "Работаем, брат!" Цель мероприятия - сбор средств на закупку необходимого для наших ребят, воюющих на передовой.

// Организатор - БФ "Пашаев Фонд" и его руководитель - известный российский юрист Эльман Пашаев.
// Эльман Пашаев регулярно помогает бойцам в зоне СВО, непосредственно посещая передовую. Он открыто заявляет о своей гражданской позиции с целью объединить для помощи фронту как можно больше неравнодушных людей.
// На мероприятие приглашены спонсоры, благотворители и предприниматели - те, кто уже помогает бойцам и те, кто намерен определиться с оказанием помощи. Желающие помочь фронту будут проинформированы о потребностях тех или иных подразделений ВС РФ в плане их адресной поддержки.
// В благотворительном вечере примут участие артисты.
// На благотворительный вечер также приглашены военнослужащие. Само мероприятие пройдет в закрытом формате.`,
// 		imageIds: [`${process.env.REACT_APP_SERVER}/media/novost5.jpeg`],
// 	},
// 	{
// 		id: 4,
// 		header: "Феликс Романович Комаров. О помощи фронту.",
// 		text: `Я Россиянин. Россия - моя Родина. Здесь я родился и живу. Я объездил пол мира, но Россия - это мой дом! Здесь счастлива моя душа. Я очень переживаю за свою Родину, и очень стараюсь быть полезным ей.`,
// 		imageIds: [`${process.env.REACT_APP_SERVER}/media/novost4.jpeg`],
// 	},
// 	{
// 		id: 2,
// 		header: "Эльман Пашаев с нашими Z-штурмовиками",
// 		text: `Друзья, а кто еще из известных (и не очень) адвокатов приезжает с гумпомощью к бойцам в зону СВО?`,
// 		imageIds: [
// 			`${process.env.REACT_APP_SERVER}/media/novost1_1.jpg`,
// 			`${process.env.REACT_APP_SERVER}/media/novost1_2.jpg`,
// 			`${process.env.REACT_APP_SERVER}/media/novost1_3.jpg`,
// 			`${process.env.REACT_APP_SERVER}/media/novost1_4.jpg`,
// 			`${process.env.REACT_APP_SERVER}/media/novost1_5.jpg`,
// 			`${process.env.REACT_APP_SERVER}/media/novost1_6.jpg`,
// 			`${process.env.REACT_APP_SERVER}/media/novost1_7.jpg`,
// 		],
// 	},
// ];

function App() {
	const [news, setNews] = useState([]);
	const [thanks, setThanks] = useState([]);
	const [projects, setProjects] = useState([]);
	const [participants, setParticipants] = useState([]);

	useEffect(() => {
		const onNewsSuccess = (result) => {
			setNews(result.data);
		};

		getNews().then(onNewsSuccess).catch();

		const onThanksSuccess = (result) => {
			setThanks(result.data);
		};

		getThanks().then(onThanksSuccess).catch();

		const onProjectsSuccess = (result) => {
			setProjects(result.data);
		};

		getProjects().then(onProjectsSuccess).catch();

		const onParticipantsSuccess = (result) => {
			setParticipants(result.data);
		};

		getParticipants().then(onParticipantsSuccess).catch();
	}, []);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<ChakraProvider theme={theme}>
				<Router basename={"/"}>
					<Routes>
						<Route element={<Container />}>
							<Route path="novosty" element={<News news={news} />} />
							<Route
								path="sovet"
								element={<Participants participants={participants} />}
							/>
							<Route path="kak-pomoch" element={<Help />} />
							<Route
								path="proekty"
								element={<Projects projects={projects} />}
							/>
							<Route
								path="blagodarnosti"
								element={<Thanks thanks={thanks} />}
							/>
							<Route
								path="/"
								element={
									<MainPage
										news={news}
										thanks={thanks}
										projects={projects}
										participants={participants}
									/>
								}
							/>
						</Route>
						<Route element={<PrivateWrapper />}>
							<Route path="admin-panel" element={<Panel news={news} />} />
						</Route>
						<Route path="admin-panel/login" element={<Login />} />
					</Routes>
				</Router>
			</ChakraProvider>
		</div>
	);
}

export default App;
