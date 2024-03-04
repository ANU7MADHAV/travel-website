import { Html, Heading, Text } from "@react-email/components";
const EmailTemplate = ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">{name} Client contacted you</Heading>
      <Text>Client submitted the form</Text>
      <Text>Name: {name}</Text>
      <Text>Phone number : {phone}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
export default EmailTemplate;
