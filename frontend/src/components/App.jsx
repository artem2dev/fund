import { Box, ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { theme } from "../themes/chakraWhiteTheme";
import Blagodarnosti from "./blagodarnosti";
import Footer from "./footer";
import Navbar from "./header";
import KakPomoch from "./kak-pomoch";
import MainPage from "./main";
import Novosty from "./novosty";
import NovostPage from "./novosty/novost-page";
import OFonde from "./o-fonde";

const mockedNews = [
	{
		id: 5,
		header: `"РАБОТАЕМ, БРАТ!"`,
		text: `В четверг, 6 июля, в одном из московских ресторанов состоится благотворительный вечер в поддержку бойцов СВО "Работаем, брат!" Цель мероприятия - сбор средств на закупку необходимого для наших ребят, воюющих на передовой.

Организатор - БФ "Пашаев Фонд" и его руководитель - известный российский юрист Эльман Пашаев.
Эльман Пашаев регулярно помогает бойцам в зоне СВО, непосредственно посещая передовую. Он открыто заявляет о своей гражданской позиции с целью объединить для помощи фронту как можно больше неравнодушных людей.
На мероприятие приглашены спонсоры, благотворители и предприниматели - те, кто уже помогает бойцам и те, кто намерен определиться с оказанием помощи. Желающие помочь фронту будут проинформированы о потребностях тех или иных подразделений ВС РФ в плане их адресной поддержки.  
В благотворительном вечере примут участие артисты.
На благотворительный вечер также приглашены военнослужащие. Само мероприятие пройдет в закрытом формате.`,
		imageIds: [`${process.env.REACT_APP_SERVER}/media/novost5.jpeg`],
	},
	{
		id: 4,
		header: "Феликс Романович Комаров. О помощи фронту.",
		text: `Я Россиянин. Россия - моя Родина. Здесь я родился и живу. Я объездил пол мира, но Россия - это мой дом! Здесь счастлива моя душа. Я очень переживаю за свою Родину, и очень стараюсь быть полезным ей.`,
		imageIds: [`${process.env.REACT_APP_SERVER}/media/novost4.jpeg`],
	},
	{
		id: 2,
		header: "Эльман Пашаев с нашими Z-штурмовиками",
		text: `Друзья, а кто еще из известных (и не очень) адвокатов приезжает с гумпомощью к бойцам в зону СВО?`,
		imageIds: [
			`${process.env.REACT_APP_SERVER}/media/novost1_1.jpg`,
			`${process.env.REACT_APP_SERVER}/media/novost1_2.jpg`,
			`${process.env.REACT_APP_SERVER}/media/novost1_3.jpg`,
			`${process.env.REACT_APP_SERVER}/media/novost1_4.jpg`,
			`${process.env.REACT_APP_SERVER}/media/novost1_5.jpg`,
			`${process.env.REACT_APP_SERVER}/media/novost1_6.jpg`,
			`${process.env.REACT_APP_SERVER}/media/novost1_7.jpg`,
		],
	},
];

const getNews = () => {
	return mockedNews;
};

const getNewById = (id) => {
	return mockedNews.find(({ id: newId }) => String(newId) === String(id));
};

function App() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<ChakraProvider theme={theme}>
				<Navbar />
				<Box
					className="shh"
					w="100%"
					minH="87.486vh"
					maxW={"1200px"}
					mt={"117px"}
					px={5}
				>
					<Router basename={"/"}>
						<Routes>
							<Route path="novosty" element={<Novosty news={getNews()} />} />
							<Route
								path="novosty/*"
								element={<NovostPage getNewById={getNewById} />}
							/>
							<Route path="o-fonde" element={<OFonde />} />
							<Route path="kak-pomoch" element={<KakPomoch />} />
							<Route path="blagodarnosti" element={<Blagodarnosti />} />
							<Route path="/" element={<MainPage news={getNews()} />} />
						</Routes>
					</Router>
				</Box>
				<Footer />
			</ChakraProvider>
		</div>
	);
}

export default App;
