import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Smart Brains India',
  description: 'Terms and Conditions for Smart Brains India - Read our terms of service and usage policies.',
  robots: { index: true, follow: true }
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using Smart Brains India's website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Smart Brains India provides brain training and educational programs including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li>DMIT (Dermatoglyphics Multiple Intelligence Test)</li>
                <li>Midbrain Activation</li>
                <li>Photographic Memory Training</li>
                <li>Abacus Math</li>
                <li>Vedic Math</li>
                <li>Speed Reading</li>
                <li>Handwriting Improvement</li>
                <li>Other cognitive development programs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Enrollment and Registration</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>To enroll in our programs, you must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete registration information</li>
                  <li>Be of appropriate age for the selected program (or have parental consent for minors)</li>
                  <li>Complete the enrollment process and payment as required</li>
                  <li>Comply with all program requirements and guidelines</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fees and Payment</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>All program fees are:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>As specified at the time of enrollment</li>
                  <li>Payable in advance unless otherwise agreed</li>
                  <li>Non-refundable except as explicitly stated in our refund policy</li>
                  <li>Subject to change with prior notice</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Refund requests must be submitted in writing before the program commencement date. Refunds, if approved, will be processed according to our refund policy. No refunds will be provided after the program has started, except in exceptional circumstances at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Student Conduct</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Students and participants are expected to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li>Respect instructors, staff, and fellow students</li>
                <li>Attend classes regularly and punctually</li>
                <li>Complete assignments and practice as required</li>
                <li>Maintain appropriate behavior during sessions</li>
                <li>Follow all safety guidelines and instructions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content, materials, curriculum, and methodologies provided by Smart Brains India are protected by intellectual property laws. You may not reproduce, distribute, or use our materials for commercial purposes without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Smart Brains India shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. While we strive to provide quality education, we do not guarantee specific results or outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cancellation and Rescheduling</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to cancel or reschedule classes due to unforeseen circumstances. In such cases, we will provide reasonable notice and offer alternative arrangements or refunds as appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect and use your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about these Terms and Conditions, please contact us:
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



