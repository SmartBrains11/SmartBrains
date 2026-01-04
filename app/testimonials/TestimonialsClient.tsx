'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Play, Users, Award, Heart, MapPin } from 'lucide-react';
import Link from "next/link";
import { SuccessGalleryCarousel } from '@/components/testimonials/SuccessGalleryCarousel';
import { LiteYouTubeEmbed } from '@/components/shared/LiteYouTubeEmbed';

const testimonialCategories = [
    { id: 'all', name: 'All Testimonials', count: 12 },
    { id: 'dmit', name: 'DMIT', count: 3 },
    { id: 'midbrain', name: 'Midbrain Activation', count: 2 },
    { id: 'memory', name: 'Photographic Memory', count: 3 },
    { id: 'abacus', name: 'Abacus Math', count: 2 },
    { id: 'speed-reading', name: 'Speed Reading', count: 2 }
];

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Parent of 8-year-old Ananya',
        program: 'Photographic Memory',
        category: 'memory',
        content: 'My daughter\'s memory and concentration have improved dramatically after joining the Photographic Memory program. She now remembers her lessons effortlessly and her confidence has soared. The transformation has been incredible to witness.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Hyderabad',
        date: 'March 2024'
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        role: 'Parent of 10-year-old Arjun',
        program: 'Abacus Math',
        category: 'abacus',
        content: 'The Abacus Math program has transformed my son\'s relationship with mathematics. He now solves complex calculations mentally and actually enjoys math class! His teachers are amazed by his calculation speed.',
        rating: 5,
        image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Vizianagaram',
        date: 'February 2024'
    },
    {
        id: 3,
        name: 'Anitha Reddy',
        role: 'Parent of twins (6 years)',
        program: 'Midbrain Activation',
        category: 'midbrain',
        content: 'Both my children completed the Midbrain Activation program and the results are amazing. Their intuition, creativity, and problem-solving skills have improved significantly. They approach challenges with more confidence now.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Hyderabad',
        date: 'January 2024'
    },
    {
        id: 4,
        name: 'Dr. Venkat Rao',
        role: 'Pediatrician & Parent',
        program: 'DMIT',
        category: 'dmit',
        content: 'As a doctor and a parent, I was initially skeptical about DMIT. But the assessment provided valuable insights into my child\'s potential and learning style. The career guidance has been incredibly helpful for planning his education.',
        rating: 5,
        image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Hyderabad',
        date: 'December 2023'
    },
    {
        id: 5,
        name: 'Meera Patel',
        role: 'Parent of 12-year-old Kavya',
        program: 'Speed Reading',
        category: 'speed-reading',
        content: 'The Speed Reading program has been a game-changer for my daughter. She now finishes her reading assignments in half the time with better comprehension. Her academic performance has improved across all subjects.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Hyderabad',
        date: 'March 2024'
    },
    {
        id: 6,
        name: 'Lakshmi Devi',
        role: 'Parent of 11-year-old Ravi',
        program: 'Vedic Math',
        category: 'abacus',
        content: 'Vedic Math has transformed my child\'s approach to mathematics. He now solves complex problems with ease and has developed a genuine love for math. His confidence in the subject has grown tremendously.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Vizianagaram',
        date: 'February 2024'
    },
    {
        id: 7,
        name: 'Sunita Sharma',
        role: 'Parent of 7-year-old Isha',
        program: 'Handwriting',
        category: 'memory',
        content: 'My daughter\'s handwriting has improved dramatically through the program. Her teachers now compliment her neat writing, and her confidence in written work has grown tremendously. The improvement is visible in all her subjects.',
        rating: 5,
        image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Hyderabad',
        date: 'January 2024'
    },
    {
        id: 8,
        name: 'Arjun Singh',
        role: 'Parent of 14-year-old Rohan',
        program: 'Quantum Speed Reading',
        category: 'speed-reading',
        content: 'My son can now read entire chapters in minutes with perfect understanding. This program has revolutionized his study habits and academic performance. His exam preparation time has reduced significantly.',
        rating: 5,
        image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Hyderabad',
        date: 'March 2024'
    },
    {
        id: 9,
        name: 'Kavitha Reddy',
        role: 'Parent of 6-year-old Arun',
        program: 'Drawing & Skill Development',
        category: 'memory',
        content: 'My son\'s artistic abilities have flourished in this program. His drawings are now detailed and creative, and his fine motor skills have improved significantly. He approaches art with so much enthusiasm now.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Vizianagaram',
        date: 'February 2024'
    },
    {
        id: 10,
        name: 'Dr. Ramesh Gupta',
        role: 'Corporate Executive',
        program: 'Midbrain for Adults',
        category: 'midbrain',
        content: 'The Adult Midbrain program has significantly improved my decision-making abilities and reduced my work stress. I feel more confident and creative in my professional life. The techniques are practical and effective.',
        rating: 5,
        image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Hyderabad',
        date: 'January 2024'
    },
    {
        id: 11,
        name: 'Sita Devi',
        role: 'Parent of 9-year-old Priya',
        program: 'DMIT',
        category: 'dmit',
        content: 'The DMIT assessment helped us understand our daughter\'s strengths and learning preferences. Based on the recommendations, we chose the right programs for her, and she\'s excelling in her studies now.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Hyderabad',
        date: 'December 2023'
    },
    {
        id: 12,
        name: 'Ravi Kumar',
        role: 'Parent of 13-year-old Sneha',
        program: 'Enhancement',
        category: 'dmit',
        content: 'The Enhancement program has been incredible for my daughter\'s overall cognitive development. Her focus, creativity, and problem-solving abilities have all improved. She\'s more confident in tackling new challenges.',
        rating: 5,
        image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Vizianagaram',
        date: 'March 2024'
    }
];

export default function TestimonialsClient() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredTestimonials = selectedCategory === 'all'
        ? testimonials
        : testimonials.filter(testimonial => testimonial.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
                            Parent Reviews & Student Success Stories – Smart Brains India
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed">
                            Hear from parents and students who have experienced remarkable transformations
                            through our brain training programs. Real stories, real results.
                        </p>
                        <div className="flex justify-center space-x-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">1000+</div>
                                <div className="text-gray-600">Happy Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600">95%</div>
                                <div className="text-gray-600">Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600">500+</div>
                                <div className="text-gray-600">Parent Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="py-8 bg-white border-b">
                <div className="container mx-auto px-4 lg:px-16">
                    <div className="flex flex-wrap justify-center gap-2">
                        {testimonialCategories.map((category) => (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category.id)}
                                className="mb-2"
                            >
                                {category.name}
                                <Badge variant="secondary" className="ml-2">
                                    {category.count}
                                </Badge>
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Video Testimonials
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Watch real parents and students share their transformation stories and see the impact of our programs firsthand.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 'video-1',
                                title: 'Priya\'s Photographic Memory Journey',
                                name: 'Mrs. Sharma & Priya',
                                quote: 'My daughter can now memorize entire chapters effortlessly!',
                                youtubeId: '0TzyOfuRrcQ'
                            },
                            {
                                id: 'video-2',
                                title: 'Arjun\'s Abacus Math Success',
                                name: 'Mr. Kumar & Arjun',
                                quote: 'He now solves complex calculations mentally in seconds!',
                                youtubeId: 'AqsrAV602Fk'
                            },
                            {
                                id: 'video-3',
                                title: 'Twins\' Midbrain Activation Results',
                                name: 'Mrs. Reddy & Twins',
                                quote: 'Both children show amazing intuitive abilities now!',
                                youtubeId: 'PfTrrlAi_uY'
                            },
                            {
                                id: 'video-4',
                                title: 'Speed Reading Transformation',
                                name: 'Mrs. Patel & Kavya',
                                quote: 'She reads 5x faster with perfect comprehension!',
                                youtubeId: '9cd7KWv_BRA'
                            },
                            {
                                id: 'video-5',
                                title: 'DMIT Career Guidance Success',
                                name: 'Dr. Venkat Rao',
                                quote: 'DMIT helped us choose the perfect career path for our son!',
                                youtubeId: 'JuOqZBG3rUI'
                            },
                            {
                                id: 'video-6',
                                title: 'Handwriting Improvement Journey',
                                name: 'Mrs. Sharma & Isha',
                                quote: 'Her handwriting is now the best in her class!',
                                youtubeId: '9qKursXWcF0'
                            }
                        ].map((video, index) => (
                            <div
                                key={video.id}
                                className="group block h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative h-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100">
                                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                                        <LiteYouTubeEmbed
                                            videoId={video.youtubeId}
                                            title={video.title}
                                            className="w-full h-full"
                                        />
                                        <div className="absolute top-4 right-4 z-10">
                                            <Badge className="bg-blue-600 text-white shadow-md">Video</Badge>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col p-6">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 italic line-clamp-2 flex-shrink-0">
                                            "{video.quote}"
                                        </p>
                                        <div className="flex items-center text-sm mt-auto">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md flex-shrink-0">
                                                <span className="text-white font-semibold text-sm">
                                                    {video.name.split(' ')[1]?.[0] || video.name[0]}
                                                </span>
                                            </div>
                                            <span className="font-semibold text-gray-700 truncate">{video.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Moments of Success
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Capturing the joy, achievements, and special moments from our training sessions and workshops.
                        </p>
                    </div>

                    <SuccessGalleryCarousel />
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
                        <p className="text-xl opacity-90 leading-relaxed">
                            These numbers represent real transformations in children's lives
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            <Users className="h-12 w-12 mx-auto mb-4 opacity-80 hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold mb-2">1000+</div>
                            <div className="opacity-90">Students Trained</div>
                        </div>
                        <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <Award className="h-12 w-12 mx-auto mb-4 opacity-80 hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold mb-2">95%</div>
                            <div className="opacity-90">Success Rate</div>
                        </div>
                        <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            <Heart className="h-12 w-12 mx-auto mb-4 opacity-80 hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold mb-2">500+</div>
                            <div className="opacity-90">Happy Families</div>
                        </div>
                        <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Star className="h-12 w-12 mx-auto mb-4 opacity-80 hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold mb-2">4.9/5</div>
                            <div className="opacity-90">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Text Reviews/Testimonials Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Parent Reviews & Testimonials
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Read what parents have to say about their children's transformation journey with Smart Brains.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTestimonials.map((testimonial) => (
                            <Card
                                key={testimonial.id}
                                className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up bg-white"
                                style={{ animationDelay: `${filteredTestimonials.indexOf(testimonial) * 100}ms` }}
                            >
                                <CardHeader>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover hover:scale-110 transition-transform duration-300 ring-2 ring-blue-100"
                                        />
                                        <div className="flex-1">
                                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                            <CardDescription>{testimonial.role}</CardDescription>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                                            {testimonial.program}
                                        </Badge>
                                        <div className="flex">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <Quote className="h-6 w-6 text-blue-600 mb-3" />
                                    <p className="text-gray-700 mb-4 italic leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
                                        <span className="flex items-center">
                                            <MapPin className="h-3 w-3 mr-1" />
                                            {testimonial.location}
                                        </span>
                                        <span>{testimonial.date}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Ready to Create Your Own Success Story?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of families who have already experienced the transformation.
                        Book a free demo session and see how our programs can benefit your child.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <Link href="/contact">Book Free Demo Session</Link>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <Link href="/programs">View All Programs</Link>
                        </Button>
                    </div>
                </div>
            </section>


        </div>
    );
}
