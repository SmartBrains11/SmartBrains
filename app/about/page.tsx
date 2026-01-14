import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Target, Heart, BookOpen, Star, Quote, CheckCircle } from 'lucide-react';
import { MissionCarousel } from '@/components/about/MissionCarousel';

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
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    url: 'https://images.pexels.com/photos/5905704/pexels-photo-5905704.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Midbrain Workshop',
    description: 'Interactive and joyful classrooms'
  },
  {
    url: 'https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Memory Focus',
    description: 'Personal attention for every child'
  },
  {
    url: 'https://images.pexels.com/photos/4145047/pexels-photo-4145047.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Abacus Practice',
    description: 'Building mental math skills'
  },
  {
    url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'One-on-One',
    description: 'Focused guidance for growth'
  },
  {
    url: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              About Smart Brains India – Child Brain Development Institute
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed">
              Smart Brains India is a premier child brain development institute with over 6 years of experience in empowering children. We have successfully trained over 1000+ students in Hyderabad and Vizianagaram, helping them unlock their full potential through scientific brain training programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8">
                <Link href="/programs" className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Explore Our Programs</span>
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

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission & Vision</h2>
              <div className="mb-8 p-8 bg-blue-50 rounded-2xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to make brain development accessible, joyful, and effective for every child. We aim to help children grow academically, emotionally, and confidently through proven brain training methods.
                </p>
              </div>
              <div className="p-8 bg-orange-50 rounded-2xl border-l-4 border-orange-600 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Who We Are</h2>
          <Card className="max-w-5xl mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Founder Image & Bio - Moved to Top */}
              <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl mb-10 border border-blue-100">
                <div className="w-56 h-56 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 transform translate-y-4"></div>
                  <Image
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Lakkoju Jayalakshmi</h3>
                  <p className="text-blue-600 font-medium text-lg mb-6">Founder & Senior Trainer</p>
                  <blockquote className="relative max-w-xl">
                    <p className="text-xl text-gray-600 italic leading-relaxed font-serif">
                      “Every child is gifted. They just need the right approach to unlock their potential.”
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-loose space-y-6 text-center md:text-left">
                <p>
                  Smart Brains India was founded in 2019 by <strong>Lakkoju Jayalakshmi</strong>, a certified brain training expert and mother who personally witnessed the transformation brain training can bring in a child’s life.
                </p>
                <p>
                  Inspired by her own journey as a parent, she dedicated herself to bringing scientifically proven brain development programs to children across India. Today, Smart Brains India is supported by a passionate team of expert trainers committed to nurturing the next generation of confident learners.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Meet Our Expert Trainers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Trainers</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Teaching Philosophy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-full h-fit text-orange-600">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Whole Brain Development</h3>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tradition Meets Science</h3>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stress-Free Learning</h3>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Child-Centric Approach</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Learning Environment</h2>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 opacity-90">{image.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}