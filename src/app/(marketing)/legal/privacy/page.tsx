import { Container } from '@/components/container'
import { Section } from '@/components/section'

export default function PrivacyPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <div className="prose prose-invert mx-auto max-w-4xl">
          <h1>Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2>Introduction</h2>
          <p>
            Sphere DSP ("we," "our," or "us") respects your privacy and is committed to protecting
            your personal data. This privacy policy explains how we collect, use, and safeguard your
            information when you visit our website or use our products.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>Name and email address (when signing up for our beta or newsletter)</li>
            <li>Messages and correspondence (when contacting us)</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>Usage data and analytics (pages visited, time spent, interactions)</li>
            <li>Device information (browser type, operating system, IP address)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our products and services</li>
            <li>Send you updates about beta releases and product announcements</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data. Your
            information is stored on secure servers and encrypted during transmission. However, no
            method of transmission over the internet is 100% secure.
          </p>

          <h2>Audio Processing and AI</h2>
          <p>
            All audio processing and AI inference happens locally on your device. We do not collect,
            transmit, or store your audio files or project data. Your creative work stays on your
            machine.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services for analytics, email delivery, and payment processing.
            These services have their own privacy policies, and we encourage you to review them.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Object to processing of your data</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of significant
            changes by posting a notice on our website or sending you an email.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy or how we handle your data, please
            contact us at{' '}
            <a href="mailto:privacy@spheredsp.com">privacy@spheredsp.com</a>.
          </p>
        </div>
      </Container>
    </Section>
  )
}

