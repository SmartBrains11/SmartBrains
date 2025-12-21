import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
    title: 'Privacy Policy | Smart Brains India',
    description: 'Learn how Smart Brains India collects, uses, and protects your information in a trustworthy and parent-friendly way.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Privacy Matters to Us</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                At Smart Brains India, we deeply respect the trust you place in us when you share your family’s information.
                                We are committed to protecting your privacy and ensuring transparency in how we handle your data.
                                This policy explains our simple, parent-friendly approach to privacy.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Information We Collect</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                We only collect the information necessary to guide you and your child effectively. This typically includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Your Name (Parent/Guardian)</li>
                                <li>Your Contact Number</li>
                                <li>Your Email Address</li>
                                <li>Your Child’s Age Group</li>
                                <li>The Program You Are Interested In</li>
                            </ul>
                            <p>
                                We collect this information when you fill out a form on our website to book a consultation or ask a question.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>How We Use Your Information</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                The information you provide is used solely to help us serve you better. We use it to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Contact you to schedule your free consultation or demo session.</li>
                                <li>Understand which program is best suited for your child.</li>
                                <li>Send you relevant details about our courses and schedules.</li>
                            </ul>
                            <p className="font-medium text-gray-900 mt-4">
                                We do not sell, trade, or share your personal information with third-party advertisers.
                                Your data stays safe with us.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Cookies and Website Functionality</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Our website uses basic cookies to ensure it runs smoothly and to help us understand how visitors use our site
                                (e.g., which pages are popular). We do not use aggressive tracking cookies or intrusive surveillance techniques.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>A Note on Children’s Privacy</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Although our programs are for children, our website is designed for parents. We only collect information
                                directly from parents or guardians. If you believe we have inadvertently collected data from a child without
                                parental consent, please contact us immediately, and we will remove it.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Your Rights</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                You have full control over your data. If you wish to correct your information or request that we delete it
                                from our records, simply reach out to us. We will honor your request promptly.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                If you have any questions or concerns about your privacy, please feel free to email us at:
                            </p>
                            <a href="mailto:smartbrainsindia11@gmail.com" className="text-blue-600 font-medium hover:underline">
                                smartbrainsindia11@gmail.com
                            </a>
                        </CardContent>
                    </Card>

                    <div className="text-center text-gray-500 text-sm mt-8">
                        <p>Last Updated: December 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
