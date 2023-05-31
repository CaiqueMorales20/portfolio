// Imports
import { useForm } from "react-hook-form";

// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";

// Styled COmponents
import { ContactS, FormS, InputS, TextAreaS, SubmitButton } from "./style";

// Functional Component
export const Contact = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => {
		console.log(data);
	};

	// Rendering
	return (
		<Content>
			<SectionTitle>Contact</SectionTitle>
			<ContactS>
				<FormS>
					<InputS placeholder="First Name" {...register("firstName")} />
					<InputS placeholder="Last Name" {...register("lastName")} />
					<TextAreaS placeholder="Message" {...register("message")}></TextAreaS>
				</FormS>
				<SubmitButton onClick={handleSubmit(onSubmit)}>Send</SubmitButton>
			</ContactS>
		</Content>
	);
};
