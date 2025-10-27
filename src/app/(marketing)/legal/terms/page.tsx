import { Container } from '@/components/container'
import { Section } from '@/components/section'

export default function TermsPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <div className="prose prose-invert mx-auto max-w-4xl">
          <h1>Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using Sphere DSP's website and products ("Services"), you agree to be
            bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not
            use our Services.
          </p>

          <h2>Beta Program</h2>
          <p>
            Our beta program provides early access to pre-release software. Beta software may
            contain bugs, incomplete features, and is provided "as is" without warranties. By
            participating in the beta program, you agree to:
          </p>
          <ul>
            <li>Test the software and provide feedback</li>
            <li>Not rely on beta software for critical production work</li>
            <li>Keep confidential any non-public information about unreleased features</li>
            <li>Understand that beta access may be revoked at any time</li>
          </ul>

          <h2>License and Use</h2>
          <h3>Grant of License</h3>
          <p>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
            non-transferable license to use our software for your personal or commercial audio
            production purposes.
          </p>

          <h3>Restrictions</h3>
          <p>You may not:</p>
          <ul>
            <li>Reverse engineer, decompile, or disassemble our software</li>
            <li>Remove or modify any proprietary notices or labels</li>
            <li>Share or distribute your license to others</li>
            <li>Use the software for any illegal purposes</li>
            <li>Attempt to bypass licensing or activation mechanisms</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content, features, and functionality of our Services are owned by Sphere DSP and are
            protected by copyright, trademark, and other intellectual property laws. Your audio
            content remains yours—we claim no rights to your creative work.
          </p>

          <h2>User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our Services in any way that violates applicable laws or regulations</li>
            <li>Transmit any malicious code or interfere with our Services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Impersonate any person or entity</li>
          </ul>

          <h2>Payment and Refunds</h2>
          <p>
            Beta software is currently provided free of charge. Future pricing and refund policies
            will be announced before commercial release.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Our Services are provided "as is" and "as available" without warranties of any kind,
            either express or implied. We do not guarantee that our Services will be uninterrupted,
            secure, or error-free.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Sphere DSP shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, including loss of profits, data,
            or other intangible losses resulting from your use of our Services.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold Sphere DSP harmless from any claims, damages, or expenses
            arising from your use of our Services or violation of these Terms.
          </p>

          <h2>Updates to Software</h2>
          <p>
            We may provide updates, patches, and new versions of our software. Some updates may be
            required for continued use. You agree to receive automatic updates unless you disable
            this feature.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our Services at any time,
            with or without cause or notice, for any violation of these Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your
            Jurisdiction], without regard to its conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our Services after changes
            constitutes acceptance of the updated Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at{' '}
            <a href="mailto:legal@spheredsp.com">legal@spheredsp.com</a>.
          </p>
        </div>
      </Container>
    </Section>
  )
}

