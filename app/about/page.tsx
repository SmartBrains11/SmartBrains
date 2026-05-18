import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Target, Heart, BookOpen, Star, Quote, CheckCircle, Facebook, Instagram, Phone, Eye, Compass, HelpCircle } from 'lucide-react';
import { MissionCarousel } from '@/components/about/MissionCarousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'About Smart Brains India | Child Brain Development Institute for Kids',
  description: 'Discover the story behind Smart Brains India, a child brain development institute helping kids build strong memory, focus and confidence through practical, scientific and child-friendly brain training programs.',
  keywords: ['brain development institute', 'about Smart Brains India', 'brain training for children', 'Hyderabad', 'Vizianagaram'],
  openGraph: {
    title: 'About Smart Brains India | Child Brain Development Institute',
    description: 'Empowering children to unlock their true potential through scientific brain training.',
    url: 'https://www.smartbrainsindia.com/about',
    siteName: 'Smart Brains India',
    images: [{ url: 'https://www.smartbrainsindia.com/og-about.jpg', width: 1200, height: 630, alt: 'About Smart Brains India' }],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: { canonical: 'https://www.smartbrainsindia.com/about' },
  twitter: {
    card: 'summary_large_image',
    title: 'About Smart Brains India | Child Brain Development Institute',
    description: 'Empowering children to unlock their true potential through scientific brain training.',
    images: ['https://www.smartbrainsindia.com/og-about.jpg']
  },
  robots: { index: true, follow: true }
};

const trainers = [
  {
    name: 'Lakkoju Jayalakshmi',
    role: 'Founder & Senior Trainer',
    specialization: 'DMIT, Midbrain Activation',
    experience: '6+ years',
    image: '/images/Jaya-lakshmi.png',
    bio: 'Jayalakshmi brings a mother\'s intuition and years of hands‑on experience in helping children unlock their potential. Inspired by her own son\'s growth through brain training, she has dedicated her life to guiding parents and empowering children through personalized learning techniques.',
    certifications: [
      'Certified DMIT Analyst',
      'Midbrain Activation Specialist',
    ],
    humanTouch: 'Known for her patient and encouraging guidance with every child.'
  },
  {
    name: 'Lakkoju Priyanka',
    role: 'Co-Founder & Chief Trainer',
    specialization: 'Photographic Memory, Speed Reading',
    experience: '5+ years',
    image: '/images/lakkoju-priyanka.jpg',
    bio: 'Priyanka leads the training programs at Smart Brains with a passion for helping children achieve academic success and personal growth. She specializes in advanced learning methods like photographic memory and speed reading, making education engaging, fun, and impactful for every student.',
    certifications: [
      'Certified Brain Training Expert',
      'Speed Reading Specialist',
    ],
    humanTouch: 'Loved by students for her high-energy and engaging classes.'
  },
  {
    name: 'Sekhar',
    role: 'Management Head & Support Trainer',
    specialization: 'Institution Management',
    experience: '3+ years',
    image: '/images/Sekhar.jpg',
    bio: 'Sekhar oversees the management and operations of Smart Brains, ensuring smooth scheduling, quality control, and parent support. He also participates in training sessions, providing additional guidance to students when needed.',
    certifications: [
      'Program Management',
      'Support Facilitator',
    ],
    humanTouch: 'Always ready to help parents with scheduling and support.'
  },
];

const values = [
  { icon: Target, title: 'Proven Results', description: 'Scientifically designed programs that show measurable improvements in focus, memory, and learning ability.' },
  { icon: Heart, title: 'Personalized Attention', description: 'Every child receives individual guidance based on their unique learning style and needs.' },
  { icon: BookOpen, title: 'Updated Teaching Methods', description: 'Our programs evolve continuously based on the latest research and child development practices.' },
  { icon: Users, title: 'Strong Parent Partnership', description: 'We work closely with parents to support children both inside and outside the classroom.' },
];

const galleryImages = [
  {
    url: '/images/about2.webp',
    title: 'Interactive Learning',
    description: 'Hands-on learning experiences'
  },
  {
    url: '/images/midbrain-workshop.jpeg',
    title: 'Midbrain Workshop',
    description: 'Interactive and joyful classrooms'
  },
  {
    url: '/images/Memory-Focus.jpg',
    title: 'Memory Focus',
    description: 'Personal attention for every child'
  },
  {
    url: '/images/Abacus-Practice.png',
    title: 'Abacus Practice',
    description: 'Building mental math skills'
  },
  {
    url: '/images/One-on-One.png',
    title: 'Every child gets personal attention',
    description: 'Focused guidance for growth'
  },
  {
    url: '/images/Happy-Environment.png',
    title: 'Happy Environment',
    description: 'Creating confident learners'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6 animate-fade-in">
              Helping Children Think Faster, Focus Better &amp; Grow Confident
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 animate-fade-in-delay leading-relaxed">
              Trusted by 1,000+ families across Hyderabad and Vizianagaram — Smart Brains India uses scientifically proven brain training programs to help children aged 5–15 build sharper memory, stronger focus, and real confidence that lasts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 shadow-lg shadow-blue-200">
                <Link href="/contact" className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Book a Free Demo</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 rounded-md px-8">
                <Link href="/testimonials" className="flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>See Parent Testimonials</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Cards Section */}
      <section className="relative z-10 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-20 mb-10 sm:mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_rgba(8,112,184,0.08)] flex flex-col items-center text-center border border-blue-50/50">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-600 mb-2 sm:mb-4">
                <Users className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-gray-900 mb-0.5">1,000+</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[8px] sm:text-[10px]">Students</p>
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_rgba(8,112,184,0.08)] flex flex-col items-center text-center border border-blue-50/50">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center text-orange-600 mb-2 sm:mb-4">
                <Award className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-gray-900 mb-0.5">6+</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[8px] sm:text-[10px]">Years Exp.</p>
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_rgba(8,112,184,0.08)] flex flex-col items-center text-center border border-blue-50/50">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center text-green-600 mb-2 sm:mb-4">
                <Target className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-gray-900 mb-0.5">2 Cities</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[8px] sm:text-[10px]">+ Online</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-5 sm:mb-8">Our Mission &amp; Vision</h2>
              <div className="mb-4 sm:mb-8 p-5 sm:p-8 bg-blue-50/50 rounded-2xl sm:rounded-3xl border border-blue-100 shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="p-2 sm:p-3 bg-blue-600 rounded-xl sm:rounded-2xl text-white flex-shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-blue-900">Our Mission</h3>
                </div>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                  Our mission is to make brain development accessible, joyful, and effective for every child. We aim to help children grow academically, emotionally, and confidently through proven brain training methods.
                </p>
              </div>
              <div className="p-5 sm:p-8 bg-orange-50/50 rounded-2xl sm:rounded-3xl border border-orange-100 shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="p-2 sm:p-3 bg-orange-600 rounded-xl sm:rounded-2xl text-white flex-shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-orange-900">Our Vision</h3>
                </div>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                  Our vision is to become India&apos;s most trusted child brain development institute, empowering parents and guiding children toward a brighter, more confident future.
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <MissionCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8 sm:mb-12 text-center">Meet Our Founder</h2>
          <Card className="max-w-5xl mx-auto shadow-xl border-0 overflow-hidden">
            <CardContent className="p-4 sm:p-8 md:p-12">
              {/* Founder Image & Bio */}
              <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-10 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-8 rounded-xl sm:rounded-2xl mb-6 sm:mb-10 border border-blue-100">
                <div className="w-28 h-28 sm:w-56 sm:h-56 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 transform translate-y-4"></div>
                  <Image
                    src="/images/Jaya-lakshmi.png"
                    alt="Lakkoju Jayalakshmi"
                    width={224}
                    height={224}
                    className="object-cover rounded-full shadow-lg relative z-10 border-4 border-white w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-white p-1.5 sm:p-2 rounded-full shadow-md z-20">
                    <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600 fill-current" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl sm:text-3xl font-black text-gray-900 mb-1 sm:mb-2">Lakkoju Jayalakshmi</h3>
                  <p className="text-blue-600 font-medium text-base sm:text-lg mb-3 sm:mb-6">Founder &amp; Senior Trainer</p>
                  <blockquote className="relative max-w-xl">
                    <p className="text-base sm:text-xl text-gray-600 italic leading-relaxed font-serif">
                      &ldquo;Every child is gifted. They just need the right approach to unlock their potential.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-left items-start">
                {/* Left Column */}
                <div className="flex flex-col gap-4 sm:gap-8">
                  <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg text-blue-600"><BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                      Her Story
                    </h4>
                    <div className="text-gray-600 leading-relaxed text-sm sm:text-lg space-y-3 sm:space-y-4">
                      <p>Jayalakshmi&apos;s journey began not as an expert — but as a mother. When she witnessed firsthand how the right brain training approach transformed her own child&apos;s confidence and learning ability, she knew she had found her calling.</p>
                      <p>She pursued certification as a brain training expert, studied globally proven methodologies, and in 2019 founded Smart Brains India — bringing scientifically backed programs to children across the country.</p>
                    </div>
                  </div>
                  <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-orange-100 rounded-lg text-orange-500"><Award className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                      Expertise
                    </h4>
                    <ul className="space-y-2 sm:space-y-4">
                      {["Certified Brain Training Expert", "Specialist in Abacus & Mental Arithmetic", "Memory Techniques & Vedic Mathematics", "5+ years training children aged 5–15", "Founder & Head Curriculum Designer"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium text-sm sm:text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col gap-4 sm:gap-8">
                  <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-red-100 rounded-lg text-red-500"><Heart className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                      Her Philosophy
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">She believes intelligence is not fixed. With the right stimulation during a child&apos;s early years, focus, memory, confidence, and speed can all be developed — and she has built every Smart Brains program around that belief.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-blue-100 relative overflow-hidden">
                    <h4 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-white rounded-lg text-blue-600 shadow-sm border border-blue-100"><Target className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                      Her Impact
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">Since 2019, she has personally trained hundreds of children, built a certified trainer network across multiple cities, and made Smart Brains India a trusted name in holistic child development.</p>
                  </div>
                  <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Connect with Smart Brains</h4>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Join our growing community of parents and stay instantly updated.</p>
                    <div className="flex gap-3 sm:gap-4">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors shadow-sm"><Instagram className="w-5 h-5 sm:w-6 sm:h-6" /></a>
                      <a href="https://www.facebook.com/profile.php?id=61583366865848" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-sm"><Facebook className="w-5 h-5 sm:w-6 sm:h-6" /></a>
                      <a href="tel:+910000000000" className="p-2.5 sm:p-3 bg-green-50 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors shadow-sm"><Phone className="w-5 h-5 sm:w-6 sm:h-6" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Meet Our Expert Trainers */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">Meet Our Expert Trainers</h2>
            <p className="text-sm sm:text-xl text-gray-600 leading-relaxed">
              Our team consists of certified professionals who are passionate about child development.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10">
            {trainers.map((trainer, index) => (
              <div key={index} className="w-[85vw] sm:w-auto flex-none snap-center">
                <Card
                  className="hover:shadow-xl transition-all duration-300 border-gray-100 flex flex-col h-full transform hover:-translate-y-2"
                >
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        width={96}
                        height={96}
                        className="object-cover rounded-full w-full h-full hover:scale-110 transition-transform duration-300 border-2 border-blue-50"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-xl">{trainer.name}</CardTitle>
                    <CardDescription className="font-medium text-blue-600">{trainer.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    {/* Previous Design Structure: Specialization + Experience Badge */}
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">Specialization:</span>
                        <span className="text-gray-600 text-right max-w-[60%]">{trainer.specialization}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-gray-700">Experience:</span>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {trainer.experience}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                      {trainer.bio}
                    </p>

                    {/* Certifications with Icons */}
                    <div className="mb-6">
                      <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Certifications:
                      </h4>
                      <div className="space-y-2">
                        {trainer.certifications.map((cert, certIndex) => (
                          <div key={certIndex} className="flex items-start text-sm">
                            <Award className="h-3 w-3 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Human Touch Section */}
                    <div className="mt-auto pt-4 border-t border-gray-100 bg-gray-50 -mx-4 sm:-mx-6 -mb-4 sm:-mb-6 p-4 text-center">
                      <p className="text-xs sm:text-sm text-gray-600 italic">
                        &ldquo;{trainer.humanTouch}&rdquo;
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Teaching Philosophy */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8 sm:mb-12 text-center">Our Teaching Philosophy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-orange-100 p-2 sm:p-3 rounded-xl sm:rounded-full h-fit text-orange-600">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 sm:mb-2">Whole Brain Development</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      We focus on stimulating both the logical (Left) and creative (Right) hemispheres of the brain to unlock full cognitive potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-xl sm:rounded-full h-fit text-blue-600">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 sm:mb-2">Tradition Meets Science</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      A unique combination of ancient wisdom (like Vedic Math) and modern neuroscience (like Midbrain Activation) for holistic growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-xl sm:rounded-full h-fit text-green-600">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 sm:mb-2">Stress-Free Learning</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Our classes are designed to be fun, interactive, and pressure-free. We don&apos;t just teach; we ignite curiosity and joy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-xl sm:rounded-full h-fit text-purple-600">
                    <Star className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 sm:mb-2">Child-Centric Approach</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Building confidence is our priority. Every child progresses at their own pace in a supportive and encouraging environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery / Pictures Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">Our Learning Environment</h2>
            <p className="text-sm sm:text-xl text-gray-600 leading-relaxed">
              Take a glimpse into our vibrant classrooms and see how we create engaging, fun-filled learning experiences for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{image.title}</h3>
                    <p className="text-sm text-gray-100" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What Makes Us Different */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6 font-black">What Makes Us Different</h2>
            <p className="text-sm sm:text-xl text-gray-600 leading-relaxed">
              We go beyond traditional tutoring to holistic brain development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group flex flex-col items-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-full bg-blue-50 text-blue-600 mb-4 sm:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">
                <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                Got Questions?
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <p className="text-sm sm:text-xl text-gray-600">Everything you need to know about our programs and enrollment</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "What age group do you train?",
                  a: "We work with children aged 5 to 15 years. Our programs are designed to match each child's developmental stage — younger children (5–8) focus on foundational brain stimulation, while older children (9–15) work on advanced memory, speed, and academic performance techniques."
                },
                {
                  q: "How long is one program / batch?",
                  a: "Most programs run for 3 to 6 months, with one session per week lasting 1 to 1.5 hours. Some intensive workshops (like Midbrain Activation) are completed in a weekend. We'll recommend the right duration based on your child's age and goal."
                },
                {
                  q: "Do you offer online classes?",
                  a: "Yes! We offer both in-person classes at our centers in Hyderabad and Vizianagaram, and live online sessions for families who cannot attend physically. Online classes follow the same curriculum and trainer quality as in-person batches."
                },
                {
                  q: "How much do the programs cost?",
                  a: "Program fees vary based on the course and duration. We offer flexible payment options and occasional batch discounts. The best way to get accurate pricing is to book a free demo session — our team will explain all options with no pressure."
                },
                {
                  q: "When will I see results in my child?",
                  a: "Most parents notice visible improvement in focus, confidence, and memory within 4 to 8 weeks. Academic improvements like better grades and faster mental math typically show up within one school term. Every child progresses at their own pace, and we track progress monthly."
                },
                {
                  q: "How do I enroll my child?",
                  a: "Simply book a free demo session — no commitment, no fee. Your child attends one trial class, and our trainer will assess their learning style and recommend the best program. You can book by calling us, messaging on WhatsApp, or clicking the button on our website."
                },
                {
                  q: "What programs do you offer?",
                  a: "We currently offer Abacus & Mental Arithmetic, Midbrain Activation, Photographic Memory, Speed Reading, DMIT (Dermatoglyphics Multiple Intelligence Test), and Vedic Mathematics. Each program targets different brain skills and can be taken individually or combined based on your child's needs."
                },
                {
                  q: "Is there a batch size limit?",
                  a: "Yes — we intentionally keep batches small (maximum 10 students) so every child receives direct attention from the trainer. We do not run large classroom-style sessions. Quality over quantity is our firm policy."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl sm:rounded-2xl px-4 sm:px-6 bg-gray-50/50 hover:bg-white transition-colors">
                  <AccordionTrigger className="text-left text-sm sm:text-lg font-bold text-gray-900 py-4 sm:py-6 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-xs sm:text-lg leading-relaxed pb-4 sm:pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}