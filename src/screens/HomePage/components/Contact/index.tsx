// Imports
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";

// Styled COmponents
import { ContactS, FormS, InputS, TextAreaS, SubmitButton } from "./style";

// Functional Component
export const Contact = () => {
	// Variables
	const form = useRef() as any;
	const [user_name, setUser_name] = useState("");
	const [user_email, setUser_email] = useState("");
	const [message, setMessage] = useState("");

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
	);
};
