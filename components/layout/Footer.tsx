import Link from 'next/link';
import { Brain, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Smart Brains</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering minds through structured brain training programs for all ages.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61583366865848" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://wa.me/917386209090" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/smartbrains_india/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.youtube.com/@Smartbrainsindia-11" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link href="/programs" className="block text-gray-300 hover:text-white transition-colors">Programs</Link>
              <Link href="/franchise" className="block text-gray-300 hover:text-white transition-colors">Franchise</Link>
              <Link href="/training" className="block text-gray-300 hover:text-white transition-colors">Training</Link>
              <Link href="/testimonials" className="block text-gray-300 hover:text-white transition-colors">Testimonials</Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Programs</h3>
            <div className="space-y-2">
              <Link href="/programs/dmit" className="block text-gray-300 hover:text-white transition-colors">DMIT</Link>
              <Link href="/programs/midbrain-activation" className="block text-gray-300 hover:text-white transition-colors">Midbrain Activation</Link>
              <Link href="/programs/photographic-memory" className="block text-gray-300 hover:text-white transition-colors">Photographic Memory</Link>
              <Link href="/programs/abacus-math" className="block text-gray-300 hover:text-white transition-colors">Abacus Math</Link>
              <Link href="/programs/speed-reading" className="block text-gray-300 hover:text-white transition-colors">Speed Reading</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+91 7396447470</span>
                <span className="text-gray-300">, +91 7386209090</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">smartbrainsindia11@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Hyderabad, Telangana</p>
                  <p>Vizianagaram, Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Smart Brains. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</Link>
              <Link href="/data-usage" className="text-gray-400 hover:text-white text-sm transition-colors">Data Usage</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}