// Imports
import { createContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";
import { Modal } from "./Modal";

// Styled Components
import { ContactS, FormS, InputS, TextAreaS, SubmitButton } from "./style";

// Types
import { ContactContextProps } from "./types";

// Context
export const ContactContext = createContext<ContactContextProps | null>(null);

// Functional Component
export const Contact = () => {
	// Variables
	const form = useRef() as any;
	const [user_name, setUser_name] = useState("");
	const [user_email, setUser_email] = useState("");
	const [message, setMessage] = useState("");
	const [modalOpened, setModalOpened] = useState(false);

	// Functions
	const sendEmail = (e: any) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_zgdcyfm",
				"template_nqx9mr1",
				form.current,
				"hv75Z0c-mETbppE6e"
			)
			.then(
				(result) => {
					console.log(result.text);
					setUser_name("");
					setUser_email("");
					setMessage("");
					setModalOpened(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	// Rendering
	return (
		<ContactContext.Provider value={{ modalOpened, setModalOpened }}>
			<Content>
				{modalOpened && <Modal />}
				{/* Content */}
				<SectionTitle>Contact</SectionTitle>
				<ContactS>
					<FormS ref={form} onSubmit={sendEmail}>
						<InputS
							type="text"
							placeholder="Name"
							value={user_name}
							onChange={(e) => setUser_name(e.target.value)}
							name="user_name"
							required
						/>
						<InputS
							type="email"
							placeholder="Email"
							value={user_email}
							onChange={(e) => setUser_email(e.target.value)}
							name="user_email"
							required
						/>
						<TextAreaS
							placeholder="Message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						></TextAreaS>
						<SubmitButton type="submit" value="SEND MESSAGE" />
					</FormS>
				</ContactS>
			</Content>
		</ContactContext.Provider>
	);
};
