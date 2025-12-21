'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Play, Users, Award, Heart, MapPin } from 'lucide-react';
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

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
        content: "My daughter's memory and concentration have improved dramatically. She now remembers her lessons effortlessly and her confidence has soared. The transformation has been incredible.",
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
        content: "He now solves complex calculations mentally and actually enjoys math class! His teachers are amazed by his calculation speed and improved focus.",
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
        content: "Their intuition, creativity, and problem-solving skills have improved significantly. They approach daily challenges with much more confidence now.",
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
        content: "The assessment provided valuable insights into my child's potential. The career guidance was incredibly tailored and helpful for planning his education roadmap.",
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
        content: "She now finishes her reading assignments in half the time with better comprehension. Her academic performance has visibly improved across all subjects.",
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
        content: "He now solves complex problems with ease and has developed a genuine love for math. His confidence in the subject has grown tremendously.",
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
        content: "Her teachers now compliment her neat writing, and her confidence in written work has increased. The improvement is visible in all her school notebooks.",
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
        content: "He reads entire chapters in minutes with understanding. This program has revolutionized his study habits and reduced his exam stress.",
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
        content: "His drawings are now detailed and creative, and his fine motor skills have improved significantly. He approaches art with so much enthusiasm now.",
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
        content: "I feel more confident and creative in my professional life. The program significantly improved my decision-making abilities and reduced my work stress.",
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
        content: "We understood our daughter's strengths and learning preferences. Based on the recommendations, we chose the right programs, and she's excelling now.",
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
        content: "Her focus, creativity, and problem-solving abilities have all improved. She's more confident in tackling new challenges at school.",
        rating: 5,
        image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: 'text',
        location: 'Vizianagaram',
        date: 'March 2024'
    }
];

function AnimatedStat({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => latest.toFixed(decimals));

    useEffect(() => {
        if (inView) {
            animate(motionValue, value, { duration: 2, ease: "easeOut" });
        }
    }, [inView, value, motionValue]);

    return (
        <span ref={ref} className="inline-block min-w-[3ch] text-left">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
}

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
                            Real Stories. Real Results. Real Confidence in Children.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed">
                            See how Smart Brains learning programs have transformed the lives of children—giving them focus, clarity, and lifelong confidence.
                        </p>
                        <div className="flex justify-center space-x-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">
                                    <AnimatedStat value={1000} suffix="+" />
                                </div>
                                <div className="text-gray-600">Young Minds Transformed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600">
                                    <AnimatedStat value={95} suffix="%" />
                                </div>
                                <div className="text-gray-600">Parents Report Improvement</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600">
                                    <AnimatedStat value={500} suffix="+" />
                                </div>
                                <div className="text-gray-600">Stories of Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="py-8 bg-white border-b">
                <div className="container mx-auto px-4 lg:px-16">
                    <p className="text-center text-gray-500 mb-6 italic">Filter stories by the program your child is exploring:</p>
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
                            Watch Real Transformations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Watch real parents and students share how Smart Brains helped them gain clarity, confidence, and growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 'video-1',
                                title: 'Priya\'s Photographic Memory Journey',
                                name: 'Mrs. Sharma & Priya',
                                quote: 'My daughter can now memorize entire chapters effortlessly!',
                                thumbnail: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
                                youtubeId: 'dQw4w9WgXcQ'
                            },
                            {
                                id: 'video-2',
                                title: 'Arjun\'s Abacus Math Success',
                                name: 'Mr. Kumar & Arjun',
                                quote: 'He now solves complex calculations mentally in seconds!',
                                thumbnail: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=600',
                                youtubeId: 'dQw4w9WgXcQ'
                            },
                            {
                                id: 'video-3',
                                title: 'Twins\' Midbrain Activation Results',
                                name: 'Mrs. Reddy & Twins',
                                quote: 'Both children show amazing intuitive abilities now!',
                                thumbnail: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=600',
                                youtubeId: 'dQw4w9WgXcQ'
                            },
                            {
                                id: 'video-4',
                                title: 'Speed Reading Transformation',
                                name: 'Mrs. Patel & Kavya',
                                quote: 'She reads 5x faster with perfect comprehension!',
                                thumbnail: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600',
                                youtubeId: 'dQw4w9WgXcQ'
                            },
                            {
                                id: 'video-5',
                                title: 'DMIT Career Guidance Success',
                                name: 'Dr. Venkat Rao',
                                quote: 'DMIT helped us choose the perfect career path for our son!',
                                thumbnail: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=600',
                                youtubeId: 'dQw4w9WgXcQ'
                            },
                            {
                                id: 'video-6',
                                title: 'Handwriting Improvement Journey',
                                name: 'Mrs. Sharma & Isha',
                                quote: 'Her handwriting is now the best in her class!',
                                thumbnail: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
                                youtubeId: 'dQw4w9WgXcQ'
                            }
                        ].map((video, index) => {
                            const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
                            return (
                                <a
                                    key={video.id}
                                    href={youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative h-full flex flex-col overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100">
                                        <div className="relative h-56 overflow-hidden flex-shrink-0">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                                <div className="w-20 h-20 bg-white/0 group-hover:bg-white rounded-full flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-all duration-300">
                                                    <Play className="w-8 h-8 text-blue-600 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" />
                                                </div>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <Badge className="bg-blue-600 text-white shadow-md">Video</Badge>
                                            </div>
                                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                                    </svg>
                                                    YouTube
                                                </div>
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
                                </a>
                            );
                        })}
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
                            Small moments that reflect big transformations in our classrooms.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            {
                                id: 'gallery-1',
                                src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
                                alt: 'Students celebrating achievement',
                                title: 'Achievement Celebration'
                            },
                            {
                                id: 'gallery-2',
                                src: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
                                alt: 'Group learning session',
                                title: 'Group Learning'
                            },
                            {
                                id: 'gallery-3',
                                src: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
                                alt: 'One-on-one mentoring',
                                title: 'Personal Mentoring'
                            },
                            {
                                id: 'gallery-4',
                                src: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
                                alt: 'Workshop activity',
                                title: 'Workshop Activity'
                            },
                            {
                                id: 'gallery-5',
                                src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
                                alt: 'Student presentation',
                                title: 'Student Presentation'
                            },
                            {
                                id: 'gallery-6',
                                src: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
                                alt: 'Interactive session',
                                title: 'Interactive Session'
                            },
                            {
                                id: 'gallery-7',
                                src: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
                                alt: 'Award ceremony',
                                title: 'Award Ceremony'
                            },
                            {
                                id: 'gallery-8',
                                src: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
                                alt: 'Parent-student interaction',
                                title: 'Parent Interaction'
                            }
                        ].map((item, index) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
                        <p className="text-xl opacity-90 leading-relaxed">
                            These numbers represent real progress in children’s learning journeys.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            <Users className="h-12 w-12 mx-auto mb-4 opacity-80 hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold mb-2">
                                <AnimatedStat value={1000} suffix="+" />
                            </div>
                            <div className="opacity-90">Lives Impacted</div>
                        </div>
                        <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <Award className="h-12 w-12 mx-auto mb-4 opacity-80 hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold mb-2">
                                <AnimatedStat value={95} suffix="%" />
                            </div>
                            <div className="opacity-90">Visible Improvement</div>
                        </div>
                        <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            <Heart className="h-12 w-12 mx-auto mb-4 opacity-80 hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold mb-2">
                                <AnimatedStat value={500} suffix="+" />
                            </div>
                            <div className="opacity-90">Trusted By Families</div>
                        </div>
                        <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Star className="h-12 w-12 mx-auto mb-4 opacity-80 hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold mb-2">
                                <AnimatedStat value={4.9} suffix="/5" decimals={1} />
                            </div>
                            <div className="opacity-90">Consistent Quality</div>
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
                            Honest feedback from parents who have seen the change firsthand.
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
                        Every child’s journey is unique. Let us help you discover what works best for your child.
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        No pressure. Just honest guidance.
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
