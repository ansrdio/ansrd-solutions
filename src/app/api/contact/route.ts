import { NextResponse } from "next/server";

// TODO: Install and configure email provider (e.g. Resend)
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  email: string;
  companySize: string;
  framework: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Server-side validation
    const errors: string[] = [];
    if (!body.name || body.name.trim().length < 2) {
      errors.push("Name is required (min 2 characters).");
    }
    if (!body.email || !isValidEmail(body.email)) {
      errors.push("A valid work email is required.");
    }
    if (!body.companySize) {
      errors.push("Company size is required.");
    }
    if (!body.framework) {
      errors.push("Please select a target framework.");
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // TODO: Replace with actual email provider integration
    // Example with Resend:
    // const { error } = await resend.emails.send({
    //   from: 'ANSRD Contact <noreply@ansrdsolutions.com>',
    //   to: [process.env.CONTACT_EMAIL || 'hello@ansrdsolutions.com'],
    //   subject: `New enquiry from ${body.name} (${body.companySize})`,
    //   text: `Name: ${body.name}\nEmail: ${body.email}\nCompany Size: ${body.companySize}\nFramework: ${body.framework}\nMessage: ${body.message}`,
    // });
    // if (error) {
    //   return NextResponse.json({ success: false, errors: ['Failed to send. Please try again.'] }, { status: 500 });
    // }

    // Check if provider is configured
    if (!process.env.RESEND_API_KEY && !process.env.SMTP_HOST) {
      console.warn("[Contact API] No email provider configured. Logging submission:");
      console.log(JSON.stringify(body, null, 2));
      return NextResponse.json(
        {
          success: false,
          errors: [
            "Our contact system is being configured. Please email us directly at hello@ansrdsolutions.com",
          ],
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, errors: ["Invalid request. Please try again."] },
      { status: 400 }
    );
  }
}
