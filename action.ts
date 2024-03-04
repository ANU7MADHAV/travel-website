"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/email/EmailTemplate";
interface State {
  error: string | null;
  success: boolean;
}
export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const phone = formData.get("phone") as string;
  try {
    const resend = new Resend(process.env.API_KEY);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anumadhavan888@gmail.com",
      subject: "Form Submission",
      react: EmailTemplate({ name, email, message, phone }),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
