import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
    title: 'Terms & Conditions | Smart Brains India',
    description: 'Simple and clear terms of service for parents enrolling in Smart Brains India programs.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Terms & Conditions</h1>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome to Smart Brains</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                By using our website or enrolling your child in our programs, you agree to the following simple terms.
                                Our goal is to provide a safe and positive learning environment for your family.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Nature of Our Services</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Smart Brains India offers <strong>educational and skill development programs</strong> (such as Midbrain Activation, DMIT, Speed Reading, etc.).
                            </p>
                            <p>
                                <strong>Important Note:</strong> Our programs are designed to enhance cognitive skills and confidence. They are
                                <strong> NOT</strong> medical treatments or psychological therapies. We do not diagnose or treat medical conditions.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Program Outcomes</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Every child is unique. While our programs are proven to effective for thousands of students,
                                <strong> results may vary</strong> from child to child based on their individual pace, practice, and consistency.
                            </p>
                            <p>
                                We promise to provide the best possible guidance and training, but we cannot ethically guarantee specific results (like "100% photographic memory") for every single student, as every child grows differently.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Demo Sessions & Enrollment</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Free demo sessions are subject to the availability of our trainers and time slots.</li>
                                <li>Enrollment fees and payment terms will be explained clearly to you by our counselors *before* you make any payment. There are no hidden charges.</li>
                                <li>Please ensure you provide accurate information about your child so we can place them in the correct level.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Intellectual Property</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                The content, images, and training materials on this website and in our courses belong to Smart Brains India.
                                Please do not copy or distribute them without our permission.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Limitation of Liability</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Smart Brains India is not liable for any misuse of the information provided on this website.
                                Parents are responsible for supervising their child's practice at home.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Updates to Terms</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                We may update these terms periodically to reflect changes in our services or regulations.
                                Continued use of our services implies acceptance of the updated terms.
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
