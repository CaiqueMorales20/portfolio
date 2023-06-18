// Styled Components
import { useContext } from "react";
import { Button } from "../../../../../components/Button";
import { ModalContent, ModalS, Text } from "./style";
import { ContactContext } from "..";
import { ContactContextProps } from "../types";

// Functional Component
export const Modal = () => {
	// Variables
	const { setModalOpened } = useContext(ContactContext) as ContactContextProps;

	// Rendering
	return (
		<ModalS>
			<ModalContent>
				<Text>
					Recebi o seu email! Entrarei em contato o mais breve possivel.
				</Text>
				<Button text="Fechar" onClick={() => setModalOpened(false)} />
			</ModalContent>
		</ModalS>
	);
};
