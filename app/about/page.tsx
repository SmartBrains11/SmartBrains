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
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 animate-fade-in">
              Helping Children Think Faster, Focus Better & Grow Confident
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed">
              Trusted by 1,000+ families across Hyderabad and Vizianagaram — Smart Brains India uses scientifically proven brain training programs to help children aged 5–15 build sharper memory, stronger focus, and real confidence that lasts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 shadow-lg shadow-blue-200">
                <Link href="/contact" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Book a Free Demo</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 rounded-md px-8"
              >
                <Link href="/testimonials" className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>See Parent Testimonials</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Cards Section */}
      <section className="relative z-10 -mt-12 px-6 lg:px-20 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-[0_15px_40px_rgba(8,112,184,0.08)] flex flex-col items-center text-center transform hover:-translate-y-1 transition-all duration-300 border border-blue-50/50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-1">1,000+</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Students Trained</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_15px_40px_rgba(8,112,184,0.08)] flex flex-col items-center text-center transform hover:-translate-y-1 transition-all duration-300 border border-blue-50/50">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-1">6+</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Years Experience</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_15px_40px_rgba(8,112,184,0.08)] flex flex-col items-center text-center transform hover:-translate-y-1 transition-all duration-300 border border-blue-50/50">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-1">2 Cities</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Online Classes</p>
              <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border-none px-2 py-0.5 text-[8px] font-black uppercase tracking-tighter">Everywhere</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Our Mission & Vision</h2>
              <div className="mb-8 p-8 bg-blue-50/50 rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-2xl text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-blue-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                  Our mission is to make brain development accessible, joyful, and effective for every child. We aim to help children grow academically, emotionally, and confidently through proven brain training methods.
                </p>
              </div>
              <div className="p-8 bg-orange-50/50 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-600 rounded-2xl text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-orange-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                  Our vision is to become India’s most trusted child brain development institute, empowering parents and guiding children toward a brighter, more confident future.
                </p>
              </div>
            </div>
            <div>
              <MissionCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">Meet Our Founder</h2>
          <Card className="max-w-5xl mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Founder Image & Bio - Moved to Top */}
              <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl mb-10 border border-blue-100">
                <div className="w-56 h-56 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 transform translate-y-4"></div>
                  <Image
                    src="/images/Jaya-lakshmi.png"
                    alt="Lakkoju Jayalakshmi"
                    width={224}
                    height={224}
                    className="object-cover rounded-full shadow-lg relative z-10 border-4 border-white"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md z-20">
                    <Quote className="h-6 w-6 text-blue-600 fill-current" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Lakkoju Jayalakshmi</h3>
                  <p className="text-blue-600 font-medium text-lg mb-6">Founder & Senior Trainer</p>
                  <blockquote className="relative max-w-xl">
                    <p className="text-xl text-gray-600 italic leading-relaxed font-serif">
                      “Every child is gifted. They just need the right approach to unlock their potential.”
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-start">

                {/* --- Left Column --- */}
                <div className="flex flex-col gap-8">
                  {/* Her Story */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      Her Story
                    </h4>
                    <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                      <p>
                        Jayalakshmi's journey began not as an expert — but as a mother. When she witnessed firsthand how the right brain training approach transformed her own child's confidence and learning ability, she knew she had found her calling.
                      </p>
                      <p>
                        She pursued certification as a brain training expert, studied globally proven methodologies, and in 2019 founded Smart Brains India — bringing scientifically backed programs to children across the country.
                      </p>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg text-orange-500">
                        <Award className="w-5 h-5" />
                      </div>
                      Expertise
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "Certified Brain Training Expert",
                        "Specialist in Abacus & Mental Arithmetic",
                        "Memory Techniques & Vedic Mathematics",
                        "5+ years training children aged 5–15",
                        "Founder & Head Curriculum Designer"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* --- Right Column --- */}
                <div className="flex flex-col gap-8">
                  {/* Her Philosophy */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg text-red-500">
                        <Heart className="w-5 h-5" />
                      </div>
                      Her Philosophy
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      She believes intelligence is not fixed. With the right stimulation during a child's early years, focus, memory, confidence, and speed can all be developed — and she has built every Smart Brains program around that belief.
                    </p>
                  </div>

                  {/* Her Impact */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 relative overflow-hidden group">
                    <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                      <Target className="w-40 h-40 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 relative z-10">
                      <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm border border-blue-100">
                        <Target className="w-5 h-5" />
                      </div>
                      Her Impact
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                      Since 2019, she has personally trained hundreds of children, built a certified trainer network across multiple cities, and made Smart Brains India a trusted name in holistic child development.
                    </p>
                  </div>

                  {/* Connecting Social Block */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Connect with Smart Brains</h4>
                    <p className="text-gray-600 mb-6">
                      Join our growing community of parents and stay instantly updated with our latest programs and success stories.
                    </p>
                    <div className="flex gap-4">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-300 shadow-sm">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61583366865848" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-sm">
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a href="tel:+910000000000" className="p-3 bg-green-50 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-sm">
                        <Phone className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Meet Our Expert Trainers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team consists of certified professionals who are passionate about child development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
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
                  <div className="mt-auto pt-4 border-t border-gray-100 bg-gray-50 -mx-6 -mb-6 p-4 text-center">
                    <p className="text-sm text-gray-600 italic">
                      “{trainer.humanTouch}”
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Teaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">Our Teaching Philosophy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-full h-fit text-orange-600">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Whole Brain Development</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We focus on stimulating both the logical (Left) and creative (Right) hemispheres of the brain to unlock full cognitive potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit text-blue-600">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Tradition Meets Science</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A unique combination of ancient wisdom (like Vedic Math) and modern neuroscience (like Midbrain Activation) for holistic growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit text-green-600">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Stress-Free Learning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our classes are designed to be fun, interactive, and pressure-free. We don't just teach; we ignite curiosity and joy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full h-fit text-purple-600">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Child-Centric Approach</h3>
                    <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Our Learning Environment</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Take a glimpse into our vibrant classrooms and see how we create engaging, fun-filled learning experiences for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-black">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We go beyond traditional tutoring to holistic brain development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                <HelpCircle className="w-4 h-4" />
                Got Questions?
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our programs and enrollment</p>
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
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-gray-50/50 hover:bg-white transition-colors">
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 py-6 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6">
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