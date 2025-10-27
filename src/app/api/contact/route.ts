import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  newsletter: z.boolean().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, newsletter } = contactSchema.parse(body)

    // TODO: Integrate with your email service provider or CRM
    // Example integrations:
    // - Resend: Send email to your support team
    // - SendGrid: Forward message to support@spheredsp.com
    // - Supabase: Store in database for tracking
    // - Notion: Create entry in support database
    // - Linear: Create support ticket

    console.log('New contact form submission:', {
      name,
      email,
      message: message.substring(0, 50) + '...',
      newsletter,
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // TODO: Replace this mock implementation
    // Example with Resend:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@spheredsp.com',
    //   to: 'hello@spheredsp.com',
    //   replyTo: email,
    //   subject: `Contact Form: ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>From:</strong> ${name} (${email})</p>
    //     <p><strong>Newsletter:</strong> ${newsletter ? 'Yes' : 'No'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `
    // })

    // If they opted in to newsletter, also subscribe them
    if (newsletter) {
      // TODO: Subscribe to newsletter
      console.log('Also subscribing to newsletter:', email)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully. We will get back to you soon!',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    )
  }
}

