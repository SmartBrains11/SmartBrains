# Instructions to Fix Website Visual Issues

## ✅ COMPLETED: ProgramsShowcase Buttons
The buttons in the ProgramsShowcase component have been updated with vibrant colors and proper padding.

## 🎨 REMAINING: Update Hero Sections with Background Images

For the following 4 pages, you need to update their hero sections:
- app/about/page.tsx
- app/training/page.tsx
- app/testimonials/page.tsx
- app/franchise/page.tsx

### For ABOUT page (app/about/page.tsx):

Find this section (lines 76-89):
```tsx
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              About Smart Brains
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed ">
              At Smart Brains, we believe every child has unique potential...
            </p>
          </div>
        </div>
      </section>
```

Replace with:
```tsx
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-about.png"
            alt="Smart Brains About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
              About Smart Brains
            </h1>
            <p className="text-xl text-white/95 mb-8 animate-fade-in-delay leading-relaxed drop-shadow-md">
              At Smart Brains, we believe every child has unique potential...
            </p>
          </div>
        </div>
      </section>
```

### For TRAINING page (app/training/page.tsx):

Find line 178 and replace the hero section with:
```tsx
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-training.png"
            alt="Smart Brains Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Professional Training Programs
            </h1>
            <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
              Become a certified brain training instructor and join the growing field of 
              cognitive development. Our comprehensive training programs prepare you to 
              make a meaningful impact in children's lives while building a rewarding career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#training-programs">Explore Programs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Link href="/contact">Get Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
```

### For TESTIMONIALS page (app/testimonials/page.tsx):

Find line 189 and replace with:
```tsx
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-testimonials.png"
            alt="Smart Brains Success Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
              Success Stories & Testimonials
            </h1>
            <p className="text-xl text-white/95 mb-8 animate-fade-in-delay leading-relaxed drop-shadow-md">
              Hear from parents and students who have experienced remarkable transformations 
              through our brain training programs. Real stories, real results.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/80">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">500+</div>
                <div className="text-white/80">Parent Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>
```

### For FRANCHISE page (app/franchise/page.tsx):

Find line 147 and replace with:
```tsx
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-franchise.png"
            alt="Smart Brains Franchise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
              Join India's No.1 Brain Training Franchise Network
            </h1>
            <p className="text-xl text-white/95 mb-8 animate-fade-in-delay leading-relaxed drop-shadow-md">
              Partner with Smart Brains, India's leading brain development institute with 12+ years of expertise, 
              a 95% student success rate, and 1000+ lives transformed. Build a profitable business while making 
              a lasting impact on children's futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="#franchise-inquiry" className="flex items-center space-x-2">
                  <Handshake className="h-5 w-5" />
                  <span>Become a Partner</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Link href="tel:+917396447470" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call for Details</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
```

---

## Key Changes Made:
1. ✅ **ProgramsShowcase buttons** - Now have vibrant colors (blue, purple, green, orange)
2. ✅ **Proper padding** - Added responsive padding to containers
3. 🎨 **Hero backgrounds** - Background images with dark overlays (ready to apply)
4. 🎨 **White text** - Changed from gray to white for better contrast
5. 🎨 **Drop shadows** - Added drop-shadow for better text readability

All background images are already in the `/public` folder and ready to use!
