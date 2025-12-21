import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
    title: 'Data Usage Policy | Smart Brains India',
    description: 'Understand how Smart Brains India responsibly uses your data to improve your experience and guide your child.',
};

export default function DataUsagePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Data Usage Policy</h1>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Transparency First</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                At Smart Brains India, we believe in being completely open about how we handle the information you share with us.
                                This policy outlines exactly how your data is used internally to provide the best possible experience for your family.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>How We Collect Data</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                We collect information through:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Contact Forms:</strong> When you request a call back or more details.</li>
                                <li><strong>Demo Bookings:</strong> When you schedule a free session for your child.</li>
                                <li><strong>Direct Communication:</strong> Via WhatsApp, email, or phone calls initiated by you.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>How We Use Your Data</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Your data is used exclusively for the following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Personalized Guidance:</strong> To recommend the specific program that fits your child’s age and needs.</li>
                                <li><strong>Communication:</strong> To send reminders for appointments, updates about classes, or answers to your questions.</li>
                                <li><strong>Service Improvement:</strong> To understand general trends (like which programs are most popular in your city) so we can improve our offerings.</li>
                            </ul>
                            <p className="font-medium text-gray-900 mt-4">
                                We strictly do NOT resell your data to advertisers or data brokers.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Automated Decisions & Third Parties</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                <strong>No Automated Decision Making:</strong> We do not use algorithms to make decisions about your eligibility for our programs. All guidance is provided by human counselors.
                            </p>
                            <p>
                                <strong>Trusted Tools:</strong> We may use standard, secure third-party tools (like Email services, WhatsApp Business, or basic website analytics) to manage our communication and website. These providers are bound by their own privacy standards and do not own your data.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Data Retention</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                We retain your basic contact information only for as long as it is necessary to maintain communication with you or as required by law.
                                If you decide not to proceed with our programs, you can ask us to remove your details at any time.
                            </p>
                            <p className="italic mt-4">
                                “We collect only what is necessary to help your child.”
                            </p>
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
