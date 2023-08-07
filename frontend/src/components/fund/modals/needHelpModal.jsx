import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NeedHelp } from "./needHelp";

export const NeedHelpModal = ({ isOpen, onClose }) => {
	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				onEsc={onClose}
				isCentered
				size={""}
			>
				<ModalOverlay w={"100%"} h={"100%"} />
				<ModalContent
					padding={"0"}
					borderRadius={"3px"}
					w={"769px"}
					h={"672px"}
				>
					<ModalHeader
						fontFamily={"Oswald"}
						textAlign={"center"}
						fontSize={"30px"}
						mt={"50px"}
						w={"769px"}
						h={"672px"}
						textTransform={"uppercase"}
					>
						Заявка на получение помощи
					</ModalHeader>
					<Flex w={"100%"} justify={"center"} mb={"30px"}>
						<Text w={"545px"} textAlign={"center"}>
							Заявка на помощь - быстрый и легкий способ связаться с кураторами
							фонда. Заполните форму и Вам обязательно ответят
						</Text>
					</Flex>

					<ModalCloseButton />
					<ModalBody px={"55px"} pb={"55px"} w={"769px"} h={"672px"}>
						<NeedHelp />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
