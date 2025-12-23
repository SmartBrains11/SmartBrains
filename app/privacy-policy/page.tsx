import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Smart Brains India',
  description: 'Privacy Policy for Smart Brains India - Learn how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Smart Brains India ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, address, and other contact details when you register for our programs or contact us.</li>
                  <li><strong>Student Information:</strong> Age, educational background, and program preferences for enrollment purposes.</li>
                  <li><strong>Payment Information:</strong> Billing details and payment method information (processed securely through third-party payment processors).</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, and pages visited.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>We use the collected information for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing and managing our brain training programs and services</li>
                  <li>Processing enrollments and payments</li>
                  <li>Communicating with you about your account, programs, and updates</li>
                  <li>Improving our services and website functionality</li>
                  <li>Sending promotional materials (with your consent)</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may use cookies to enhance your browsing experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to protecting children's privacy. We collect information about children only with parental consent and use it solely for providing our educational services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> smartbrainsindia11@gmail.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 7396447470, +91 7386209090</p>
                <p className="text-gray-700"><strong>Address:</strong> Prasanth Nagar Colony, Kondapur, Hyderabad - 500084, Telangana</p>
              </div>
            </section>

            <div className="pt-8 border-t">
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



