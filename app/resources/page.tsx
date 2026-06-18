import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, GraduationCap, ChevronRight, Zap, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Parenting Resources & Guides | Smart Brains India',
  description: 'Explore our comprehensive hub of expert resources, guides, and articles on child cognitive development, memory improvement, and study skills.',
  keywords: ['child development resources', 'parenting guides', 'brain development articles', 'study skills resources', 'smart brains india blog'],
  alternates: { canonical: 'https://www.smartbrainsindia.in/resources' }
};

const resourceCategories = [
  {
    title: 'Focus & Cognitive Development',
    icon: <Target className="w-8 h-8 text-blue-500" />,
    description: 'Expert guides on building an unbreakable attention span and holistic brain power.',
    articles: [
      { title: 'How to Increase Focus and Attention in Children', href: '/increase-focus-and-attention-in-children', readTime: '13 min' },
      { title: 'How to Improve Concentration in Children', href: '/improve-concentration-in-children', readTime: '12 min' },
      { title: 'Best Brain Development Programs for Kids', href: '/brain-development-programs-for-kids', readTime: '10 min' },
      { title: 'Top 10 Brain Development Activities for Kids', href: '/brain-development-activities-for-kids', readTime: '11 min' },
      { title: 'The Ultimate Child Intelligence Development Guide', href: '/child-intelligence-development-guide', readTime: '15 min' }
    ]
  },
  {
    title: 'Memory & Academic Skills',
    icon: <Brain className="w-8 h-8 text-indigo-500" />,
    description: 'Strategies to permanently enhance recall, study efficiency, and exam performance.',
    articles: [
      { title: 'How to Improve Memory Power in Kids', href: '/memory-power-for-kids', readTime: '8 min' },
      { title: 'Effective Study Skills for School Students', href: '/study-skills-for-school-students', readTime: '14 min' },
      { title: 'Essential Learning Skills Every Student Needs', href: '/learning-skills-for-students', readTime: '11 min' }
    ]
  }
];

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center max-w-4xl">
          <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6 px-4 py-1 text-sm">Expert Knowledge Hub</Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
            Empower Your Child's <span className="text-blue-400">Mind</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-delay">
            Explore our comprehensive library of science-backed guides, actionable parenting strategies, and deep insights into cognitive development.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Articles List */}
            <div className="lg:col-span-2 space-y-16">
              {resourceCategories.map((category, idx) => (
                <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex items-center space-x-4 mb-6 pb-4 border-b">
                    <div className="bg-white p-3 rounded-xl shadow-sm border">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                      <p className="text-gray-500 mt-1">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.articles.map((article, i) => (
                      <Link key={i} href={article.href} className="group block">
                        <Card className="hover:shadow-md transition-all border-l-4 border-l-transparent hover:border-l-blue-500 bg-white">
                          <CardContent className="p-6 flex items-center justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                                {article.title}
                              </h3>
                              <div className="flex items-center text-sm text-gray-500 space-x-4">
                                <span className="flex items-center"><BookOpen className="w-4 h-4 mr-1" /> Guide</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors flex-shrink-0 ml-4">
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:mt-8">
              {/* Quick Links to Core Programs */}
              <Card className="shadow-lg border-t-4 border-t-indigo-600 bg-white sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <Zap className="w-5 h-5 text-indigo-500 mr-2" />
                    Transformative Programs
                  </h3>
                  <div className="space-y-3">
                    {[
                      { title: 'DMIT Assessment', path: '/programs/dmit' },
                      { title: 'Midbrain Activation', path: '/programs/midbrain-activation' },
                      { title: 'Photographic Memory', path: '/programs/photographic-memory' },
                      { title: 'Speed Reading', path: '/programs/speed-reading' },
                      { title: 'Abacus Mental Math', path: '/programs/abacus-math' },
                      { title: 'Online Learning Options', path: '/online-midbrain-activation-india' },
                    ].map((prog, i) => (
                      <Link key={i} href={prog.path} className="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 transition-colors group border border-transparent hover:border-indigo-100">
                        <span className="font-medium">{prog.title}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                      <Link href="/contact">Book Free Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// Inline Badge component for this file
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return <span className={`inline-block rounded-full font-semibold ${className}`}>{children}</span>;
}
