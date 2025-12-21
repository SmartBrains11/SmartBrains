import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Brain Training FAQs | Midbrain Activation, DMIT, Abacus & Memory Classes',
    description: 'Find answers to common questions about midbrain activation safety, DMIT accuracy, brain training benefits, ideal age groups and online vs offline classes at Smart Brains India. Clear, parent‑friendly explanations.',
    keywords: ['midbrain activation safe', 'does brain training improve marks', 'brain training FAQs', 'Smart Brains India FAQs'],
    openGraph: {
        title: 'Brain Training FAQs | Midbrain Activation, DMIT, Abacus & Memory Classes',
        description: 'Find answers to common questions about midbrain activation safety, DMIT accuracy, brain training benefits.',
        url: 'https://www.smartbrainsindia.com/faq',
        siteName: 'Smart Brains India',
        images: [{ url: 'https://www.smartbrainsindia.com/og-default.jpg', width: 1200, height: 630, alt: 'Smart Brains India FAQs' }],
        locale: 'en_IN',
        type: 'website'
    },
    alternates: { canonical: 'https://www.smartbrainsindia.com/faq' },
    twitter: {
        card: 'summary_large_image',
        title: 'Brain Training FAQs | Midbrain Activation, DMIT, Abacus & Memory Classes',
        description: 'Find answers to common questions about midbrain activation safety, DMIT accuracy, brain training benefits.',
        images: ['https://www.smartbrainsindia.com/og-default.jpg']
    },
    robots: { index: true, follow: true }
};

const faqs = [
    {
        question: 'Is Midbrain Activation safe for children?',
        answer: 'Yes, Midbrain Activation is 100% safe. It is a non-medical, scientific training program that uses sound waves, brain gym exercises, and relaxation techniques to stimulate the brain. There are no side effects, and it is a fun, engaging process for children.'
    },
    {
        question: 'Does brain training really improve marks in school?',
        answer: 'Yes, brain training directly enhances cognitive skills like concentration, memory, and processing speed. When these core skills improve, children can learn faster, retain information longer, and perform better in exams, leading to improved grades.'
    },
    {
        question: 'What is the ideal age for DMIT test?',
        answer: 'The DMIT (Dermatoglyphics Multiple Intelligence Test) can be done for anyone from toddlers to adults. However, for identifying inborn potential and learning styles to guide early education, it is highly recommended for children aged 3 years and above.'
    },
    {
        question: 'Do you offer online classes for Abacus and Vedic Math?',
        answer: 'Yes, we offer both online and offline classes for Abacus and Vedic Math. Our online sessions are live and interactive, ensuring that students get the same level of attention and guidance as in physical classrooms.'
    },
    {
        question: 'How long does it take to see results?',
        answer: 'Results vary from child to child and program to program. For Midbrain Activation, parents often see changes within the 2-day workshop. For skill-based programs like Abacus or Handwriting, consistent practice over a few months yields significant visible improvements.'
    },
    {
        question: 'Where are your centers located?',
        answer: 'We have two main centers: one in Hyderabad (Prasanth Nagar Colony, Kondapur) and one in Vizianagaram (Dakkini Street, Backside of Ramamandir). We also serve students from surrounding areas and online.'
    },
    {
        question: 'What if my child is shy or lacks confidence?',
        answer: 'Our programs are specifically designed to boost confidence. Through small wins, positive reinforcement, and "whole brain" stimulation, shy children often become more expressive and self-assured.'
    }
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center animate-fade-in">
                        Brain Training FAQs – Midbrain, DMIT, Memory, Abacus & More
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 text-center animate-fade-in-delay">
                        Common questions parents ask about our programs and brain development.
                    </p>

                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 animate-fade-in-up-delay">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-blue-600 text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
