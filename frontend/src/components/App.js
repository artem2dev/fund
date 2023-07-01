import { Box, ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { theme } from "../themes/chakraWhiteTheme";
import Footer from "./footer";
import Navbar from "./header";
import MainPage from "./main";
import Novosty from "./novosty";
import NovostPage from "./novosty/novost-page";
import OFonde from "./o-fonde";

const mockedNews = [
	{
		id: 1,
		header:
			"Эльман Пашаев навестил наших Z-штурмовиков, находящихся в одном из госпиталей",
		text: "Други, а кто еще из известных (и не очень) адвокатов приезжает с гумпомощью к бойцам в зону СВО?",
		imageIds: [
			"https://wp-s.ru/wallpapers/10/9/463314880930454/krasivyj-zakat-lesnoe-ozero-gory.jpg",
			"https://avatars.mds.yandex.net/i?id=41e1b311d1c7043203a77c5f924a1296803f66a4-8176762-images-thumbs&ref=rim&n=33&w=267&h=150",
			"https://avatars.mds.yandex.net/i?id=16569a36be4e3576e21b02e9bd7c564e40345dc2-8744212-images-thumbs&ref=rim&n=33&w=240&h=150",
		],
	},
	{
		id: 2,
		header:
			"Други, а кто еще из известных (и не очень) адвокатов приезжает с гумпомощью к бойцам в зону СВО?",
		text: "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design. ",
		imageIds: [
			"https://funik.ru/wp-content/uploads/2018/10/a552154533505340b7d7.jpg",
			"https://wp-s.ru/wallpapers/10/9/463314880930454/krasivyj-zakat-lesnoe-ozero-gory.jpg",
			"https://w-dog.ru/wallpapers/5/6/345534497514980/makro-klubnika-yagody.jpg",
			"https://get.pxhere.com/photo/forest-waterfall-wilderness-stream-body-of-water-rainforest-ravine-wasserfall-water-feature-watercourse-5554.jpg",
			"https://kartinkin.net/uploads/posts/2022-03/1647988946_3-kartinkin-net-p-panoramnie-kartinki-3.jpg",
		],
	},
	{
		id: 3,
		header:
			"Эльман Пашаев навестил наших Z-штурмовиков, находящихся в одном из госпиталейЭльман Пашаев навестил наших Z-штурмовиков, находящихся в одном из госпиталейЭльман Пашаев навестил наших Z-штурмовиков, находящихся в одном из госпиталей",
		text: "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
		imageIds: [
			"https://w-dog.ru/wallpapers/5/6/345534497514980/makro-klubnika-yagody.jpg",
			"https://avatars.mds.yandex.net/i?id=41e1b311d1c7043203a77c5f924a1296803f66a4-8176762-images-thumbs&ref=rim&n=33&w=267&h=150",
			"https://avatars.mds.yandex.net/i?id=16569a36be4e3576e21b02e9bd7c564e40345dc2-8744212-images-thumbs&ref=rim&n=33&w=240&h=150",
		],
	},
	{
		id: 4,
		header: "Living room Sofa",
		text: `This sofa is perfect for modern tropical spaces, baroque 
		inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.`,
		imageIds: [
			"https://get.pxhere.com/photo/forest-waterfall-wilderness-stream-body-of-water-rainforest-ravine-wasserfall-water-feature-watercourse-5554.jpg",
			"https://avatars.mds.yandex.net/i?id=41e1b311d1c7043203a77c5f924a1296803f66a4-8176762-images-thumbs&ref=rim&n=33&w=267&h=150",
			"https://avatars.mds.yandex.net/i?id=16569a36be4e3576e21b02e9bd7c564e40345dc2-8744212-images-thumbs&ref=rim&n=33&w=240&h=150",
		],
	},
	{
		id: 5,
		header: "Living room Sofa",
		text: "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
		imageIds: [
			"https://kartinkin.net/uploads/posts/2022-03/1647988946_3-kartinkin-net-p-panoramnie-kartinki-3.jpg",
			"https://avatars.mds.yandex.net/i?id=41e1b311d1c7043203a77c5f924a1296803f66a4-8176762-images-thumbs&ref=rim&n=33&w=267&h=150",
			"https://avatars.mds.yandex.net/i?id=16569a36be4e3576e21b02e9bd7c564e40345dc2-8744212-images-thumbs&ref=rim&n=33&w=240&h=150",
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
							<Route
								path="kak-pomoch"
								element={<div>khdgfkjdhfgvsdjfghvdfjk</div>}
							/>
							<Route
								path="blagodarnosti"
								element={<div>khdgfkjdhfgvsdjfghvdfjk</div>}
							/>
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
