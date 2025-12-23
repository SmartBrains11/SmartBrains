'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Brain } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const programs = [
  { name: 'Midbrain Activation', href: '/programs/midbrain-activation' },
  { name: 'Photographic Memory', href: '/programs/photographic-memory' },
  { name: 'Enhancement', href: '/programs/enhancement' },
  { name: 'Quantum Speed Reading', href: '/programs/quantum-speed-reading' },
  { name: 'DMIT Test', href: '/programs/dmit' },
  { name: 'Midbrain for Adults', href: '/programs/midbrain-adults' },
  { name: 'Abacus Math', href: '/programs/abacus-math' },
  { name: 'Vedic Math', href: '/programs/vedic-math' },
  { name: 'Speed Reading', href: '/programs/speed-reading' },
  { name: 'Drawing & Skills', href: '/programs/drawing-skills' },
  { name: 'Handwriting', href: '/programs/handwriting' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/smartbrains-india.jpg"
              alt="Smart Brains Logo"
              width={60}
              height={60}
              className="h-14 w-auto object-contain"
            />
            <span className="font-bold text-xl text-gray-900">Smart Brains</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                    {programs.map((program) => (
                      <Link
                        key={program.href}
                        href={program.href}
                        className="block rounded-lg p-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-medium">{program.name}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/franchise" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Franchise
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/training" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Training
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/testimonials" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Testimonials
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="px-2 py-1 hover:bg-gray-100 rounded">Home</Link>
              <Link href="/about" className="px-2 py-1 hover:bg-gray-100 rounded">About Us</Link>
              <Link href="/programs" className="px-2 py-1 hover:bg-gray-100 rounded">Programs</Link>
              <Link href="/franchise" className="px-2 py-1 hover:bg-gray-100 rounded">Franchise</Link>
              {/* <Link href="/training" className="px-2 py-1 hover:bg-gray-100 rounded">Training</Link> */}
              <Link href="/testimonials" className="px-2 py-1 hover:bg-gray-100 rounded">Testimonials</Link>
              <Link href="/blog" className="px-2 py-1 hover:bg-gray-100 rounded">Blog</Link>
              <Link href="/contact" className="px-2 py-1 hover:bg-gray-100 rounded">Contact</Link>
              <Button asChild className="mt-4">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header >
  );
}