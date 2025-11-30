'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Fallback to your provided IDs if env vars are missing (handy for quick testing)
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_yv2p4rh';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_srxnagn';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'soJLwCs94fCTltPBi';
const TO_EMAIL = 'smartbrainsindia11@gmail.com';

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        program: '',
        childAge: '',
        query: ''
    });

    const [submitting, setSubmitting] = useState(false);

    // Initialize EmailJS on mount
    useEffect(() => {
        try {
            if (PUBLIC_KEY) {
                emailjs.init({ publicKey: PUBLIC_KEY });
            }
        } catch (e) {
            console.error('EmailJS init error:', e);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // basic guard (optional)
        if (!formData.name || !formData.mobile || !formData.city) {
            alert('Please fill Name, Mobile, and City.');
            return;
        }

        try {
            setSubmitting(true);

            // send the exact keys your template expects
            const res = await emailjs.send(
                SERVICE_ID,  // Your Service ID
                TEMPLATE_ID, // Your Template ID
                {
                    name: formData.name,
                    mobile: formData.mobile,
                    email: formData.email,
                    city: formData.city,
                    program: formData.program,
                    childAge: formData.childAge,
                    query: formData.query,
                    // Ensure your template uses reply_to for direct replies
                    reply_to: formData.email || TO_EMAIL,
                },
                PUBLIC_KEY // Your Public Key
            );

            // EmailJS returns { status: 200, text: 'OK' } on success
            if (res.status === 200) {
                alert('Thank you for your inquiry! We will contact you soon.');
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    city: '',
                    program: '',
                    childAge: '',
                    query: ''
                });
            } else {
                console.error('EmailJS non-200:', res);
                alert('Sorry, we could not send your message. Please try again.');
            }
        } catch (error: any) {
            console.error('EmailJS Error:', error);
            const message =
                (error?.text || error?.message || '').toString() ||
                'Unknown error from EmailJS';

            // Common misconfig hints
            const configHint = !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY
                ? '\nHint: Missing EmailJS config (service, template, or public key).'
                : '';

            alert(`Sorry, we could not send your message.\n${message}${configHint}`);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
                            Contact Smart Brains India – Brain Training Centres in Hyderabad & Vizianagaram
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed">
                            Ready to unlock your child's potential? Get in touch with us for a free consultation
                            and discover the perfect program for your child's cognitive development.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
                                <CardHeader>
                                    <CardTitle>Book a Free Demo Session</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you within 24 hours to schedule
                                        your free demo session.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => handleChange('name', e.target.value)}
                                                    required
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="mobile">Mobile Number *</Label>
                                                <Input
                                                    id="mobile"
                                                    type="tel"
                                                    value={formData.mobile}
                                                    onChange={(e) => handleChange('mobile', e.target.value)}
                                                    required
                                                    placeholder="+91 9876543210"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleChange('email', e.target.value)}
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="city">City *</Label>
                                                <Input
                                                    id="city"
                                                    type="text"
                                                    value={formData.city}
                                                    onChange={(e) => handleChange('city', e.target.value)}
                                                    required
                                                    placeholder="Your city"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="program">Program of Interest</Label>
                                                <Select
                                                    value={formData.program}
                                                    onValueChange={(value) => handleChange('program', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a program" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="dmit">DMIT</SelectItem>
                                                        <SelectItem value="midbrain-activation">Midbrain Activation</SelectItem>
                                                        <SelectItem value="photographic-memory">Photographic Memory</SelectItem>
                                                        <SelectItem value="enhancement">Enhancement</SelectItem>
                                                        <SelectItem value="quantum-speed-reading">Quantum Speed Reading</SelectItem>
                                                        <SelectItem value="quantum-package">Quantum Package</SelectItem>
                                                        <SelectItem value="abacus-math">Abacus Math</SelectItem>
                                                        <SelectItem value="vedic-math">Vedic Math</SelectItem>
                                                        <SelectItem value="speed-reading">Speed Reading</SelectItem>
                                                        <SelectItem value="handwriting">Handwriting</SelectItem>
                                                        <SelectItem value="midbrain-adults">Midbrain for Adults</SelectItem>
                                                        <SelectItem value="drawing-skills">Drawing & Skill Development</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <Label htmlFor="childAge">Child's Age</Label>
                                                <Select
                                                    value={formData.childAge}
                                                    onValueChange={(value) => handleChange('childAge', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select age group" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="3-5">3-5 years</SelectItem>
                                                        <SelectItem value="6-8">6-8 years</SelectItem>
                                                        <SelectItem value="9-12">9-12 years</SelectItem>
                                                        <SelectItem value="13-16">13-16 years</SelectItem>
                                                        <SelectItem value="17+">17+ years</SelectItem>
                                                        <SelectItem value="adult">Adult</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="query">Your Query/Message</Label>
                                            <Textarea
                                                id="query"
                                                value={formData.query}
                                                onChange={(e) => handleChange('query', e.target.value)}
                                                placeholder="Tell us about your child's learning goals or any specific questions you have..."
                                                rows={4}
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                                            {submitting ? 'Sending…' : 'Book Free Demo Session'}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                                <CardHeader>
                                    <CardTitle>Quick Contact</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <a href="tel:+917396447470" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                        <Phone className="h-5 w-5" />
                                        <div>
                                            <div className="font-medium">Call Us</div>
                                            <div className="text-sm text-gray-600">+91 7396447470</div>
                                        </div>
                                    </a>
                                    <a href="tel:+917386209090" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                        <Phone className="h-5 w-5" />
                                        <div>
                                            <div className="font-medium">Call Us</div>
                                            <div className="text-sm text-gray-600">+91 7386209090</div>
                                        </div>
                                    </a>
                                    <a href="https://wa.me/917396447470" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                        <MessageCircle className="h-5 w-5" />
                                        <div>
                                            <div className="font-medium">WhatsApp</div>
                                            <div className="text-sm text-gray-600">Chat with us instantly</div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=smartbrainsindia11@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <Mail className="h-5 w-5" />
                                        <div>
                                            <div className="font-medium">Email Us</div>
                                            <div className="text-sm text-gray-600">smartbrainsindia11@gmail.com</div>
                                        </div>
                                    </a>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Clock className="h-5 w-5 mr-2" />
                                        Office Hours
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span>Monday - Friday</span><span className="font-medium">9:00 AM - 5:00 PM</span></div>
                                        <div className="flex justify-between"><span>Saturday</span><span className="font-medium">9:00 AM - 7:00 PM</span></div>
                                        <div className="flex justify-between"><span>Sunday</span><span className="font-medium">10:00 AM - 9:00 PM</span></div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <MapPin className="h-5 w-5 mr-2" />
                                        Our Locations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">

                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Vizianagaram Center</h4>
                                        <p className="text-sm text-gray-600">
                                            Dakkini Street, Backside of Ramamandir, 3-1/4-12/2<br />
                                            Vizianagaram, Andhra Pradesh 535002<br />
                                            <a href="tel:+917396447470" className="text-blue-600 hover:underline">+91 73964 47470</a>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Hyderabad Center</h4>
                                        <p className="text-sm text-gray-600">
                                            kondapur, Prasanth Nagar Colony<br />
                                            Hyderabad, Telangana 500084<br />
                                            <a href="tel:+917386209090" className="text-blue-600 hover:underline">+91 73862 09090</a>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Maps Section */}
                    <div className="mt-12">
                        <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                            <CardHeader>
                                <CardTitle>Find Us on Map</CardTitle>
                                <CardDescription>Visit our centers for in-person consultations and demo sessions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Hyderabad Center Map */}
                                    <div>
                                        <h4 className="font-medium mb-3 text-gray-900">Hyderabad Center</h4>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Kondapur, Prasanth Nagar Colony, Hyderabad, Telangana 500084
                                        </p>
                                        <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                            <iframe
                                                src="https://www.google.com/maps?q=17.4621222,78.3655057&hl=en&z=15&output=embed"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Smart Brains India - Hyderabad Center"
                                            />
                                        </div>
                                        <a
                                            href="https://www.google.com/maps/dir/?api=1&destination=17.4621222,78.3655057"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                                        >
                                            <MapPin className="h-4 w-4 mr-1" />
                                            Get Directions
                                        </a>
                                    </div>

                                    {/* Vizianagaram Center Map */}
                                    <div>
                                        <h4 className="font-medium mb-3 text-gray-900">Vizianagaram Center</h4>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Dakkini Street, Backside of Ramamandir, 3-1/4-12/2, Vizianagaram, Andhra Pradesh 535002
                                        </p>
                                        <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                            <iframe
                                                src="https://www.google.com/maps?q=18.1197982,83.4060136&hl=en&z=15&output=embed"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Smart Brains India - Vizianagaram Center"
                                            />
                                        </div>
                                        <a
                                            href="https://www.google.com/maps/dir/?api=1&destination=18.1197982,83.4060136"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                                        >
                                            <MapPin className="h-4 w-4 mr-1" />
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>


        </div>
    );
}
