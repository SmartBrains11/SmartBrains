import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Usage Policy | Smart Brains India',
  description: 'Data Usage Policy for Smart Brains India - Learn how we use and handle your data.',
  robots: { index: true, follow: true }
};

export default function DataUsagePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            Data Usage Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Data Usage Policy explains how Smart Brains India collects, uses, stores, and protects data collected through our website, services, and programs. This policy should be read in conjunction with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Data We Collect</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Personal Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, contact information (email, phone, address)</li>
                    <li>Student information (age, grade, educational background)</li>
                    <li>Parent/guardian information for minors</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Program Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Enrollment information and program preferences</li>
                    <li>Assessment results (DMIT test results, progress reports)</li>
                    <li>Attendance records</li>
                    <li>Performance and progress data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3 Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Website usage patterns and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>We use collected data for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Delivery:</strong> To provide and manage our brain training programs and educational services</li>
                  <li><strong>Communication:</strong> To send program updates, notifications, and respond to inquiries</li>
                  <li><strong>Personalization:</strong> To tailor programs and recommendations based on individual needs and assessments</li>
                  <li><strong>Progress Tracking:</strong> To monitor student progress and provide feedback to parents and students</li>
                  <li><strong>Payment Processing:</strong> To process fees and manage billing</li>
                  <li><strong>Improvement:</strong> To enhance our services, website, and program effectiveness</li>
                  <li><strong>Legal Compliance:</strong> To meet legal obligations and protect our rights</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>We implement security measures to protect your data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encrypted data transmission and storage</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Secure payment processing</li>
                  <li>Limited access to authorized personnel only</li>
                </ul>
                <p className="mt-4">
                  Data is stored securely and retained only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal data. We may share data only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operations (under strict confidentiality agreements)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Children's Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take special care with children's data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li>We collect children's data only with parental consent</li>
                <li>Data is used solely for educational and program purposes</li>
                <li>We do not share children's data with third parties except as necessary for service delivery</li>
                <li>Parents can access, modify, or request deletion of their child's data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to certain data processing activities</li>
                <li>Request data portability</li>
                <li>Withdraw consent where applicable</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website uses cookies and similar technologies to enhance user experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Assessment results and progress data may be retained longer for educational and analytical purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your data is primarily stored and processed in India. If data is transferred internationally, we ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Data Usage Policy from time to time. We will notify you of significant changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Data Usage Policy or wish to exercise your rights, please contact us:
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

