'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  Search, Calendar, User, ArrowRight, Brain, BookOpen, Target, Users,
  Clock, Tag, X, Heart, Briefcase, Twitter, Facebook, Linkedin, Bot,
  Gamepad2, Calculator, Fish // Icons are available for use
} from 'lucide-react';

import { blogPosts, BlogPost } from '@/data/blogPosts';

const categories = [
  "All Categories", "Child Development", "Program Science", "Parenting Tips", "Motivation", "Career Guidance"
];

const categoryIcons: { [key: string]: React.ElementType } = {
  "All Categories": BookOpen,
  "Child Development": Brain,
  "Program Science": Calculator,
  "Parenting Tips": Users,
  "Motivation": Target,
  "Career Guidance": Briefcase
};

const POSTS_PER_PAGE = 6;

// --- REUSABLE COMPONENTS ---

const BlogPostCardSkeleton = () => (
  <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
    <div className="aspect-video bg-gray-200 animate-pulse"></div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-4">
        <div className="h-5 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-4 w-16 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
      <div className="h-6 w-5/6 bg-gray-300 rounded-md animate-pulse mb-2"></div>
      <div className="h-6 w-4/6 bg-gray-300 rounded-md animate-pulse mb-4"></div>
      <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse mb-1"></div>
      <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <div className="h-5 w-28 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-8 w-24 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  </div>
);

const BlogPostCard = ({ post, onReadMore }: { post: BlogPost; onReadMore: (post: BlogPost) => void; }) => (
  <Card className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
    <div className="aspect-video overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <CardContent className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">
          {post.category}
        </span>
        <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
        </div>
      </div>
      <h3 className="text-xl font-black text-gray-900 mb-3 flex-grow group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-2" />
          {post.author}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-700 font-semibold"
          onClick={() => onReadMore(post)}
        >
          Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

const BlogArticleSheet = ({ post, isOpen, onClose }: { post: BlogPost | null; isOpen: boolean; onClose: () => void; }) => {
  if (!post) return null;

  const postUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${post.id}` : '';
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full max-w-full sm:max-w-2xl lg:max-w-3xl p-0"
        aria-describedby={undefined}
      >
        <div className="h-full flex flex-col">
          <SheetHeader className="p-6 relative border-b">
             <SheetTitle className="sr-only">{post.title}</SheetTitle>
             <Button variant="ghost" size="icon" className="absolute top-3 right-4 rounded-full h-9 w-9 z-10" onClick={onClose}>
               <X className="h-5 w-5" />
               <span className="sr-only">Close</span>
             </Button>
          </SheetHeader>
          <div className="overflow-y-auto flex-grow px-6 md:px-12 py-8">
             <div className="text-center mb-8">
                 <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1.5 rounded-full mb-4">
                     {post.category}
                 </span>
                 <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                     {post.title}
                 </h2>
                 <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-base text-gray-500 mt-6 font-medium">
                     <div className="flex items-center"><User className="h-5 w-5 mr-2" /> {post.author}</div>
                     <div className="flex items-center"><Calendar className="h-5 w-5 mr-2" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                 </div>
             </div>
             <div className="aspect-video overflow-hidden rounded-2xl mb-10 shadow-lg">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
             </div>
             <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap font-sans">
               {post.content}
             </div>
             <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-6">
                 <div className="flex flex-wrap gap-3">
                   {post.tags.map((tag) => (
                       <span key={tag} className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                           <Tag className="h-4 w-4 mr-2" />
                           {tag}
                       </span>
                   ))}
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-sm font-semibold text-gray-600 mr-2">Share:</span>
                   <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" size="icon" className="rounded-full"><Twitter className="h-4 w-4" /></Button>
                   </a>
                   <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" size="icon" className="rounded-full"><Facebook className="h-4 w-4" /></Button>
                   </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" size="icon" className="rounded-full"><Linkedin className="h-4 w-4" /></Button>
                   </a>
                 </div>
             </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};


// --- MAIN PAGE COMPONENT ---
export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = post.title.toLowerCase().includes(searchLower) ||
                            post.excerpt.toLowerCase().includes(searchLower) ||
                            post.tags.some(tag => tag.toLowerCase().includes(searchLower));
      const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchTerm, selectedCategory]);

  const featuredPosts = useMemo(() => blogPosts.filter(post => post.featured), []);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const openPost = (post: BlogPost) => setSelectedPost(post);
  const closePost = () => setSelectedPost(null);

  return (
    <div className="bg-slate-50 text-gray-800">
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">Knowledge Hub</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover insights, tips, and scientific knowledge about brain training, child development, and learning enhancement.
            </p>
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="pl-12 pr-4 py-3 h-14 w-full rounded-full shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading
                ? Array.from({ length: 3 }).map((_, index) => <BlogPostCardSkeleton key={index} />)
                : featuredPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} onReadMore={openPost} />
                  ))}
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section id="latest-articles" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Latest Articles</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {categories.map((category) => {
                  const Icon = categoryIcons[category];
                  return (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => handleCategorySelect(category)}
                      className={`rounded-full transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-blue-600 hover:bg-blue-700 shadow"
                          : "bg-white hover:bg-blue-50 hover:border-blue-400"
                      }`}
                    >
                      {Icon && <Icon className="h-4 w-4 mr-2" />}
                      {category}
                    </Button>
                  );
                })}
              </div>
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {Array.from({ length: 6 }).map((_, index) => <BlogPostCardSkeleton key={index} />)}
              </div>
            ) : currentPosts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {currentPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} onReadMore={openPost} />
                  ))}
                </div>
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <Button variant="outline" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Previous</Button>
                    <span className="text-gray-600 font-medium">Page {currentPage} of {totalPages}</span>
                    <Button variant="outline" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-gray-700 mb-2">No Articles Found</h3>
                <p className="text-gray-500">Try adjusting your search or clearing the category filter.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <BlogArticleSheet post={selectedPost} isOpen={!!selectedPost} onClose={closePost} />
    </div>
  );
}