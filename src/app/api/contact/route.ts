import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // We securely handle the destination email address EXCLUSIVELY on the server here.
        // This perfectly shields 'rakesh.anandiyer@iyergrp.com' from all frontend client code.
        const TARGET_EMAIL = 'rakesh.anandiyer@iyergrp.com';

        // We utilize FormSubmit.co's server-side AJAX endpoint. 
        // This acts as a free, secure routing service without needing complex SMTP authentication.
        const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: `New Estimator Contact from ${name}`,
                _replyto: email, // Allows the receiver to directly reply to the user's email
                Name: name,
                Email: email,
                Phone: phone || 'Not provided',
                Message: message,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to securely dispatch the email through the routing service.');
        }

        return NextResponse.json(
            { success: true, message: 'Message successfully sent.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact API Route Error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred while sending your message. Please try again later.' },
            { status: 500 }
        );
    }
}
