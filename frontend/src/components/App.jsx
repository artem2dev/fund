import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getNews } from "../api/news";
import { theme } from "../themes/chakraWhiteTheme";
import Login from "./Admin/Login";
import Panel from "./Admin/Panel";
import Container from "./Container";
import MainPage from "./Fund/Main-page";
// import About from "./Fund/About";
// import Help from "./Fund/Help";
// import News from "./Fund/News";
// import NewPage from "./Fund/News/novost-page";
// import Thanks from "./Fund/Thanks";
import PrivateWrapper from "./PrivateRoute";

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

	useEffect(() => {
		const onSuccess = (result) => {
			setNews(result.data);
		};

		getNews().then(onSuccess).catch();
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
							{/* <Route path="novosty" element={<News news={news} />} /> */}
							{/* <Route path="novosty/*" element={<NewPage />} /> */}
							{/* <Route path="o-fonde" element={<About />} /> */}
							{/* <Route path="kak-pomoch" element={<Help />} /> */}
							{/* <Route path="blagodarnosti" element={<Thanks />} /> */}
							<Route path="/" element={<MainPage news={news} />} />
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
