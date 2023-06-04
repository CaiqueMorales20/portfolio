// Imports
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";

// Styled COmponents
import { ContactS, FormS, InputS, TextAreaS, SubmitButton } from "./style";

// Functional Component
export const Contact = () => {
	// Variables
	const form = useRef() as any;

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
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	// Rendering
	return (
		<Content>
			<SectionTitle>Contact</SectionTitle>
			<ContactS>
				<FormS ref={form} onSubmit={sendEmail}>
					<InputS type="text" placeholder="Name" name="user_name" />
					<InputS type="email" placeholder="Email" name="user_email" />
					<TextAreaS placeholder="Message" name="message"></TextAreaS>
				</FormS>
				<SubmitButton onClick={sendEmail}>Send</SubmitButton>
			</ContactS>
		</Content>
	);
};
