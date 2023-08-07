import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import Payment from "../payment/payment";

export const PaymentModal = ({ isOpen, onClose }) => {
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
					w={"663px"}
					h={"672px"}
				>
					<ModalHeader
						fontFamily={"Oswald"}
						textAlign={"center"}
						fontSize={"30px"}
						mt={"50px"}
						w={"663px"}
						h={"672px"}
						textTransform={"uppercase"}
					>
						Помочь
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody px={"50px"} w={"663px"} h={"672px"}>
						<Payment
							padding={""}
							width={"100%"}
							height={"100%"}
							isTitle={false}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
