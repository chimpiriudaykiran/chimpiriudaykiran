import { NextResponse } from "next/server";

// Ensure dynamic server-side rendering
export const dynamic = "force-dynamic";

interface RequestData {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        // Verify environment variables
        if (!process.env.BREVO_API_KEY || !process.env.SENDER_EMAIL || !process.env.ADMIN_EMAIL) {
            throw new Error("Missing required environment variables");
        }

        // Parse and type the request body
        const requestData = (await request.json()) as RequestData;
        const { name, email, phone, message } = requestData;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Missing required fields: name, email, or message" },
                { status: 400 }
            );
        }

        // Dynamic import of Brevo to avoid build issues
        const brevo = (await import("@getbrevo/brevo"));

        // Initialize Brevo client with proper typing
        const apiInstance = new brevo.TransactionalEmailsApi();
        // Use the correct authentication method for newer Brevo SDK versions
        apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

        // Prepare admin email
        const adminEmail = new brevo.SendSmtpEmail();
        adminEmail.sender = { email: process.env.SENDER_EMAIL };
        adminEmail.to = [{ email: process.env.ADMIN_EMAIL }];
        adminEmail.subject = "New Contact Request";
        adminEmail.textContent = `
      New Contact Request:
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Message: ${message}
    `.trim();

        // Prepare user email
        const userEmail = new brevo.SendSmtpEmail();
        userEmail.templateId = 1; // Replace with your actual Brevo template ID
        userEmail.to = [{ email, name }];
        userEmail.params = { fullname: name };

        // Send emails
        await Promise.all([
            apiInstance.sendTransacEmail(adminEmail),
            apiInstance.sendTransacEmail(userEmail),
        ]);

        return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            {
                message: "Error processing request",
                error: errorMessage,
            },
            { status: 500 }
        );
    }
}