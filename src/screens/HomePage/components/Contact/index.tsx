// Imports
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";

// Styled COmponents
import { ContactS, FormS, InputS, TextAreaS, SubmitButton } from "./style";

// Functional Component
export const Contact = () => {
	// Variables
	const form = useRef() as any;
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
					reset();
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
						{...(register("user_name"), { required: true })}
						aria-invalid={errors.user_name ? "true" : "false"}
					/>
					{errors.user_name?.type === "required" && (
						<p role="alert">Name is required</p>
					)}
					<InputS
						type="email"
						placeholder="Email"
						aria-invalid={errors.user_email ? "true" : "false"}
						{...(register("user_email"), { required: true })}
					/>
					{errors.user_email?.type === "required" && (
						<p role="alert">Name is required</p>
					)}
					<TextAreaS
						placeholder="Message"
						{...(register("message"), { required: true })}
						aria-invalid={errors.message ? "true" : "false"}
					></TextAreaS>
					{errors.message?.type === "required" && (
						<p role="alert">Name is required</p>
					)}
					<SubmitButton type="submit" value="SEND MESSAGE" />
				</FormS>
			</ContactS>
		</Content>
	);
};
