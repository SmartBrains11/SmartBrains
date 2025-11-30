import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Target, Heart, BookOpen, Star } from 'lucide-react';
import { MissionCarousel } from '@/components/about/MissionCarousel';

export const metadata: Metadata = {
  title: 'About Smart Brains India | Child Brain Development Institute for Kids',
  description: 'Discover the story behind Smart Brains India, a child brain development institute helping kids build strong memory, focus and confidence through practical, scientific and child‑friendly brain training programs. Learn our mission, vision and teaching philosophy.',
  keywords: ['brain development institute', 'about Smart Brains India', 'brain training for children', 'Hyderabad', 'Vizianagaram'],
  openGraph: {
    title: 'About Smart Brains India | Child Brain Development Institute',
    description: 'Discover the story behind Smart Brains India, a child brain development institute helping kids build strong memory, focus and confidence.',
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
    description: 'Discover the story behind Smart Brains India, a child brain development institute helping kids build strong memory, focus and confidence.',
    images: ['https://www.smartbrainsindia.com/og-about.jpg']
  },
  robots: { index: true, follow: true }
};

const trainers = [
  {
    name: 'Lakkoju Jayalakshmi',
    role: 'Founder & Senior Trainer',
    specialization: 'DMIT, Midbrain Activation, Parenting Guidance',
    experience: '6+ years',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Co‑founder of Smart Brains, Jayalakshmi brings a mother\'s intuition and years of hands‑on experience in helping children unlock their potential. Inspired by her own son\'s growth through brain training, she has dedicated her life to guiding parents and empowering children through personalized learning techniques.',
    certifications: [
      'Certified DMIT Analyst',
      'Midbrain Activation Specialist',
      'Parenting & Child Development Facilitator',
    ],
  },
  {
    name: 'Lakkoju Priyanka',
    role: 'Co‑Founder & Chief Trainer',
    specialization: 'Brain Training, Photographic Memory, Quantum Speed Reading',
    experience: '5+ years',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Priyanka leads the training programs at Smart Brains with a passion for helping children achieve academic success and personal growth. She specializes in advanced learning methods like photographic memory and speed reading, making education engaging, fun, and impactful for every student.',
    certifications: [
      'Certified Brain Training Expert',
      'Photographic Memory & Speed Reading Specialist',
      'Child Motivation & Life Skills Coach',
    ],
  },
  {
    name: 'Sekhar',
    role: 'Management Head & Support Trainer',
    specialization: 'Institution Management, Basic Brain Training',
    experience: '3+ years',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Sekhar oversees the management and operations of Smart Brains, ensuring smooth scheduling, quality control, and parent support. He also participates in training sessions, providing additional guidance to students when needed.',
    certifications: [
      'Educational Program Management',
      'Support Brain Training Facilitator',
    ],
  },
];

const values = [
  { icon: Target, title: 'Excellence', description: 'We strive for excellence in everything we do, from program design to student outcomes.' },
  { icon: Heart, title: 'Care', description: 'Every child is unique and deserves individual attention and care in their learning journey.' },
  { icon: BookOpen, title: 'Innovation', description: 'We continuously innovate our teaching methods based on latest research in neuroscience.' },
  { icon: Users, title: 'Community', description: 'We believe in building a supportive community of learners, parents, and educators.' },
];

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Interactive Learning Sessions',
    description: 'Students engaged in hands-on brain training activities'
  },
  {
    url: 'https://images.pexels.com/photos/5905704/pexels-photo-5905704.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Midbrain Activation Workshop',
    description: 'Children participating in our popular midbrain activation program'
  },
  {
    url: 'https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Memory Training',
    description: 'Photographic memory techniques in action'
  },
  {
    url: 'https://images.pexels.com/photos/4145047/pexels-photo-4145047.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Abacus Math Classes',
    description: 'Students mastering mental calculation with abacus'
  },
  {
    url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'One-on-One Coaching',
    description: 'Personalized attention for every student'
  },
  {
    url: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Happy Learning Environment',
    description: 'Creating joyful learning experiences'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              About Smart Brains India – Child Brain Development Institute
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed">
              Smart Brains India is a premier child brain development institute with over 6 years of experience in empowering children. We have successfully trained over 1000+ students in Hyderabad and Vizianagaram, helping them unlock their full potential through scientific brain training programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/programs" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md">
                Explore Our Programs
              </Link>
              <Link href="/testimonials" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition shadow-sm">
                See Parent Testimonials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission & Vision</h2>
              <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To make quality brain training accessible to every child in India, enabling them to achieve academic excellence, emotional strength, and lifelong learning skills.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be India's most trusted brain training center, empowering every child to reach their full potential. We aim to support parents in guiding their kids towards a brighter, more confident future.
                </p>
              </div>
            </div>
            <div>
              <MissionCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are - Everything in Card */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who We Are</h2>
          <Card className="max-w-5xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
                Founded in 2019 by Lakkoju Jayalakshmi, a certified brain training expert, Smart Brains India was born from a mother's journey. Witnessing the transformative power of brain training on her own son, she dedicated her life to bringing these scientific methods to children across India. Today, we are a team of expert trainers committed to nurturing the next generation of geniuses.
              </p>

              {/* Founder Image & Bio */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-8 rounded-2xl">
                <div className="w-48 h-48 flex-shrink-0">
                  <img
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Lakkoju Jayalakshmi"
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Lakkoju Jayalakshmi</h3>
                  <p className="text-blue-600 font-medium mb-4">Founder & Senior Trainer</p>
                  <p className="text-gray-600 italic">
                    "Smart Brains was founded with a simple belief - every child is gifted, they just need the right approach to unlock their potential."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Meet Our Expert Trainers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our certified trainers bring years of experience and passion for cognitive development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 hover:scale-110 transition-transform duration-300"
                  />
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">{trainer.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Specialization:</span>
                      <span className="text-gray-600 text-right">{trainer.specialization}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Experience:</span>
                      <Badge variant="outline">{trainer.experience}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{trainer.bio}</p>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Certifications:</h4>
                    <div className="space-y-1">
                      {trainer.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="flex items-center text-sm">
                          <Award className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Teaching Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Teaching Philosophy</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6 bg-white p-8 rounded-2xl shadow-sm">
            <p>
              We believe that every child is born with immense potential, but traditional education often focuses only on rote learning. Our philosophy is rooted in <strong>Whole Brain Development</strong>. We combine ancient wisdom (like Vedic Math) with modern neuroscience (like Midbrain Activation and DMIT) to stimulate both the logical (Left) and creative (Right) hemispheres of the brain.
            </p>
            <p>
              Our classes are designed to be fun, interactive, and stress-free. We don't just teach; we ignite curiosity and confidence. Whether it's through the rhythmic movement of the Abacus or the visualization techniques of Photographic Memory, we ensure learning is a joyful experience.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Gallery / Pictures Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Learning Environment</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Take a glimpse into our vibrant classrooms and see how we create engaging, fun-filled learning experiences for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
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