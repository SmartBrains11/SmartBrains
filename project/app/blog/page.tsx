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

// --- TYPES AND DATA ---
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
};

// --- FULL LIST OF 12 BLOG POSTS ---
const blogPosts: BlogPost[] = [
  {
    id: 12,
    title: "Nutrition for the Brain: Foods That Boost Focus",
    excerpt: "Discover the essential foods and nutrients that can significantly improve your child's concentration, memory, and overall brain health.",
    content: `Nutrition for the Brain: Foods That Boost Focus\n\nThe connection between diet and brain function is undeniable. Providing the right nutrients is like giving the brain premium fuel to operate at its best.\n\nKey Brain-Boosting Foods\n\nOmega-3 Fatty Acids:\nFound in fatty fish like salmon, these are critical for brain development and function. They help build brain cells and improve signaling.\n\nAntioxidants:\nBerries, leafy greens, and colorful vegetables are packed with antioxidants that protect the brain from cellular stress.\n\nThe food you eat directly impacts your memory, concentration, and mental clarity. By choosing brain-friendly foods, you can improve focus, reduce fatigue, and keep your mind sharp throughout the day.\n1. Fatty Fish

Salmon, sardines, and mackerel are rich in omega-3 fatty acids, which are essential for building brain cells and improving communication between neurons. Omega-3s have been linked to better memory and faster learning.

2. Blueberries

Packed with antioxidants, blueberries protect the brain from oxidative stress and may delay age-related memory decline. They also boost communication between brain cells, improving overall mental performance.

3. Nuts and Seeds

Almonds, walnuts, flaxseeds, and pumpkin seeds are loaded with vitamin E, healthy fats, and magnesium, all of which support brain health and reduce mental fatigue.

4. Dark Chocolate

In moderation, dark chocolate with at least 70% cocoa contains caffeine, antioxidants, and flavonoids that can improve mood, memory, and focus.

5. Leafy Greens

Spinach, kale, and broccoli are rich in vitamin K, lutein, folate, and beta carotene — nutrients linked to slower cognitive decline and better concentration.

6. Eggs

Eggs are a great source of choline, which your body uses to produce acetylcholine, a neurotransmitter important for memory and learning.

7. Whole Grains

Brown rice, oats, and quinoa provide steady energy to the brain through slow-releasing carbohydrates, keeping your focus stable throughout the day.

💡 Quick Tip:
Pair a balanced diet with hydration, regular exercise, and enough sleep for maximum brain performance.

Final Thought:
What you feed your brain today shapes how well it works tomorrow. By adding these focus-boosting foods to your daily meals, you’re investing in sharper thinking, better memory, and a more productive mind.`,
    author: "Lakkoju Priyanka",
    date: "2025-08-10",
    category: "Parenting Tips",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/5638645/pexels-photo-5638645.jpeg",
    tags: ["Nutrition", "Brain Health", "Focus"],
    featured: false
  },
  {
    id: 11,
    title: "Overcoming Math Anxiety: Practical Tips for Parents",
    excerpt: "Learn how to create a positive environment around mathematics and help your child build confidence and overcome their anxiety.",
    content: `Understanding Math Anxiety\n\nMath anxiety is a real emotional reaction to mathematics that can block learning and performance. It often stems from negative experiences or the belief that one is simply 'bad at math'.\n\nStrategies to Help\n\n1. Positive Framing:\nAvoid negative language about math. Frame challenges as 'puzzles' to be solved rather than 'tests' to be failed.\n\n2. Focus on Effort, Not Just Answers:\nPraise the process of trying different strategies and the persistence your child shows, regardless of the final answer.\n\n3. Connect Math to Real Life:\nShow how math is used every day, from cooking and shopping to sports and games. This makes it more relevant and less abstract.`,
    author: "Lakkoju Priyana",
    date: "2025-08-09",
    category: "Parenting Tips",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8992797/pexels-photo-8992797.jpeg",
    tags: ["Math Anxiety", "Parenting", "Confidence"],
    featured: false
  },
  {
    id: 10,
    title: "The Power of Play: How Games Boost Cognitive Skills",
    excerpt: "Play is not just for fun; it's one of the most effective ways for children to develop critical cognitive and problem-solving skills.",
    content: `Play as a Learning Tool\n\nFor children, play is serious work. It's how they learn to navigate the world, understand rules, and think strategically. Structured play and board games are particularly effective for cognitive development.\n\nSkills Developed Through Games\n\nStrategic Thinking:\nGames like chess or checkers teach children to think ahead and plan multiple steps in advance.\n\nWorking Memory:\nMany card games require players to remember which cards have been played, strengthening their working memory.\n\nProblem-Solving:\nCooperative games encourage teamwork and creative problem-solving to achieve a common goal.`,
    author: "Lakkoju Priyana",
    date: "2025-08-05",
    category: "Child Development",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/4491537/pexels-photo-4491537.jpeg",
    tags: ["Play", "Cognitive Skills", "Development"],
    featured: false
  },
  {
    id: 9,
    title: "AI Tutors: The Future of Personalized Learning",
    excerpt: "Explore how artificial intelligence is shaping the next generation of educational tools.",
    content: `The Rise of AI in Education\n\nEducation is no longer one-size-fits-all. With Artificial Intelligence stepping into the classroom, learning is becoming smarter, faster, and more personal than ever before.

AI tutors can assess a student’s strengths, weaknesses, and learning style in real time. They adapt lessons to match the student’s pace, ensuring no one is left behind and no one is held back. This means a child struggling with math can get step-by-step guidance, while another racing ahead in science can explore advanced topics instantly.

Unlike traditional teaching, AI tutors never get tired, never lose patience, and are available 24/7. They provide instant feedback, personalized practice, and even adjust their teaching methods for maximum understanding.

The future of education lies in blending human empathy with AI precision. Teachers will focus more on creativity, critical thinking, and mentorship, while AI tutors handle the repetitive and personalized drill work.

The result? A world where every learner gets the attention, resources, and guidance they truly deserve..`,
    author: "Lakkoju Priyanka",
    date: "2025-08-08",
    category: "Program Science",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    tags: ["AI in Education", "Personalized Learning", "EdTech"],
    featured: true
  },
  {
    id: 1,
    title: "10 Signs Your Child Has Exceptional Memory Potential",
    excerpt: "Discover the early indicators that suggest your child might benefit from advanced memory training programs.",
    content: `Introduction\n\nEvery child is unique, but some show signs of having a naturally sharp and powerful memory from an early age. Recognizing these signs can help parents nurture this gift and guide their child toward reaching their full potential.

1. Quick Recall of Details

Your child remembers names, faces, dates, or even small details from past conversations without prompting.

2. Retains Learning from a Single Exposure

They can recall facts, poems, or stories after hearing or seeing them only once or twice.

3. Exceptional Storytelling

When retelling events, they include accurate sequences, tiny details, and emotions exactly as they happened.

4. Strong Observation Skills

They notice changes in the environment, like a moved object, a different outfit, or a missing item.

5. Early Vocabulary Growth

They quickly learn and remember new words, using them correctly in conversations.

6. Musical or Rhythmic Memory

They remember tunes, lyrics, or rhythms after listening just once or twice.

7. Interest in Puzzles and Memory Games

They enjoy solving riddles, puzzles, and memory-based games — and often excel at them.

8. Long-Term Retention

They recall experiences or knowledge from months or even years ago with clarity.

9. Ability to Connect Past and Present Information

They link current learning with something they learned before, showing strong associative memory.

10. Quick Learning in Multiple Areas

Whether it’s academics, hobbies, or practical skills, they grasp new concepts faster than peers.

💡 Parenting Tip:
If you notice these signs, encourage your child with memory-boosting activities — like storytelling, reading aloud, brain games, and visualization exercises. Remember, memory is like a muscle: the more it’s exercised, the stronger it gets.`,
    author: "Lakkoju Priyanka",
    date: "2025-07-15",
    category: "Child Development",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    tags: ["Memory", "Child Development", "Assessment"],
    featured: true
  },
  {
    id: 2,
    title: "The Science Behind Midbrain Activation",
    excerpt: "Understanding the neurological basis of midbrain activation and its impact on cognitive development.",
    content: `Understanding the Midbrain\n\nThe Science Behind Midbrain Activation

The human brain is a fascinating organ — it controls everything we think, feel, and do. Among its many parts, the midbrain plays a special role in processing information, balancing our senses, and connecting the left and right hemispheres of the brain.

Midbrain Activation is a training method designed to stimulate this part of the brain, especially in children aged 5–16, when neural connections are still rapidly developing. The goal is to unlock hidden learning potential and enhance skills like focus, memory, creativity, and intuition.

What is the Midbrain?

The midbrain, also called the mesencephalon, sits between the forebrain and hindbrain. It acts like a communication bridge between the two hemispheres of the brain, helping them share and process information faster. It’s also involved in:

Visual and auditory processing

Motor coordination

Alertness and reaction time

How Midbrain Activation Works

Training techniques, such as specific brain exercises, memory drills, sensory stimulation, and guided activities, are used to engage the midbrain. This helps improve the balance between logical thinking (left brain) and creative thinking (right brain).

Some programs also include blindfolded activities that encourage the brain to rely on heightened senses, improving concentration and sensory awareness.

Benefits of Midbrain Activation

Sharper focus and concentration

Better memory recall

Faster information processing

Improved creativity and problem-solving

Enhanced intuition and confidence

The Science Connection

Modern neuroscience confirms that neuroplasticity — the brain’s ability to form new connections — is strongest in childhood. Midbrain Activation aims to take advantage of this “golden period” to strengthen neural pathways, making learning easier and faster.

Final Thought:
Midbrain Activation is not magic — it’s brain science in action. By engaging both hemispheres of the brain and enhancing sensory processing, children can develop skills that will benefit them for life.`,
    author: "Lakkoju Priyana",
    date: "2025-07-12",
    category: "Program Science",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/8617634/pexels-photo-8617634.jpeg",
    tags: ["Midbrain", "Neuroscience", "Brain Training"],
    featured: true
  },
  {
    id: 3,
    title: "How to Support Your Child's Learning Journey at Home",
    excerpt: "Practical tips for parents to reinforce brain training concepts and create a supportive learning environment.",
    content: `Creating the Right Environment\n\nCreating the right environment at home is crucial...`,
    author: "Lakkoju Priyana",
    date: "2025-07-10",
    category: "Parenting Tips",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg",
    tags: ["Parenting", "Home Learning", "Support"],
    featured: false
  },
  {
    id: 4,
    title: "Speed Reading vs. Quantum Speed Reading",
    excerpt: "A comprehensive comparison of traditional speed reading techniques and quantum speed reading methods.",
    content: `Traditional Speed Reading\n\nTraditional speed reading focuses on techniques...`,
    author: "Lakkoju Priyana",
    date: "2025-07-08",
    category: "Program Science",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg",
    tags: ["Speed Reading", "Quantum Reading", "Techniques"],
    featured: false
  },
  {
    id: 5,
    title: "Building Confidence in Children Through Brain Training",
    excerpt: "How structured brain training programs help children develop self-confidence and academic success.",
    content: `The Confidence-Learning Connection\n\nConfidence is a key factor...`,
    author: "Lakkoju Priyanka",
    date: "2025-07-05",
    category: "Motivation",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg",
    tags: ["Confidence", "Success", "Motivation"],
    featured: false
  },
  {
    id: 6,
    title: "The Role of DMIT in Career Guidance for Teenagers",
    excerpt: "How Dermatoglyphics Multiple Intelligence Test helps teenagers make informed career decisions.",
    content: `Career Decision Challenges\n\nThe Role of DMIT in Career Guidance for Teenagers

Choosing the right career path is one of the most important — and often most stressful — decisions for teenagers. In today’s fast-changing world, traditional career advice based only on grades or interests is no longer enough. This is where DMIT (Dermatoglyphics Multiple Intelligence Test) comes in as a powerful scientific tool for career guidance.

What is DMIT?

DMIT is a brain-mapping assessment based on the study of fingerprint patterns. Research in neuroscience and genetics has shown that the patterns on our fingertips are linked to the development of the brain’s neural pathways. By analyzing these patterns, DMIT reveals a person’s natural talents, learning style, and areas of strength.

How DMIT Helps Teenagers in Career Planning

Identifies Natural Strengths
DMIT helps discover whether a teenager is more inclined toward analytical thinking, creativity, leadership, problem-solving, or hands-on skills.

Reveals Learning Styles
Every student learns differently — some through visuals, some through listening, and some through practical activities. Knowing their dominant learning style helps in selecting the right field of study.

Matches Talents with Career Options
DMIT can suggest career paths that align with a teenager’s natural abilities — for example, a highly creative student may excel in design, media, or entrepreneurship, while a logical thinker may thrive in engineering or data science.

Reduces Career Confusion
Instead of blindly following trends or peer pressure, teenagers can make informed decisions backed by scientific analysis.

Supports Academic Planning
DMIT results can guide students in choosing suitable subject combinations in high school and beyond.

Why DMIT is Valuable for Parents and Students

Teenagers often face pressure from family, friends, and society when deciding their future. DMIT provides objective insights that cut through bias and guesswork, giving parents confidence that their child’s career choice is based on science, not speculation.

Final Thought:
DMIT is not about predicting the future — it’s about understanding the unique potential of every teenager. With this knowledge, students can step into their careers with clarity, confidence, and purpose.`,
    author: "Lakkoju Priyana",
    date: "2025-07-03",
    category: "Career Guidance",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8471688/pexels-photo-8471688.jpeg",
    tags: ["DMIT", "Career", "Teenagers"],
    featured: true
  },
  {
    id: 7,
    title: "Ancient Wisdom Meets Modern Learning: The Power of Abacus",
    excerpt: "Exploring how the ancient abacus technique enhances mathematical abilities in the digital age.",
    content: `The Timeless Abacus\n\nAncient Wisdom Meets Modern Learning: The Power of Abacus

Long before calculators and computers existed, the abacus was the ultimate tool for complex calculations. Originating over 2,000 years ago, this simple yet powerful counting frame has stood the test of time — and today, it’s making a comeback as a brain-boosting learning tool for children.

A Glimpse into History

The abacus was used by ancient civilizations like the Chinese, Greeks, and Egyptians for trade, commerce, and mathematics. Its design may be simple — rows of beads strung along rods — but the way it engages the brain is extraordinary.

Why the Abacus Still Matters Today

Sharpens Mental Math Skills
With practice, children can perform complex calculations quickly — even without looking at the abacus — by visualizing bead movements in their minds.

Boosts Concentration
The process of counting and calculating demands full attention, helping students strengthen focus and patience.

Improves Memory and Visualization
Abacus learners develop a mental image of the beads, which activates both sides of the brain, enhancing memory power and creativity.

Builds Confidence in Math
Success in mental calculations builds a positive attitude toward learning and reduces math anxiety.

Encourages Logical Thinking
Abacus practice improves problem-solving skills, logical reasoning, and number sense.

The Science Behind the Abacus Advantage

Modern neuroscience confirms that abacus training stimulates both the left brain (logic and analysis) and the right brain (imagination and visualization). This balanced brain activity results in faster thinking, better comprehension, and improved multitasking abilities.

Final Thought:
The abacus is more than an ancient calculating device — it’s a bridge between time-tested wisdom and modern educational needs. By reintroducing this timeless tool to children, we’re not just teaching them math — we’re training their brains for lifelong learning success.`,
    author: "Lakkoju Priyana",
    date: "2025-07-01",
    category: "Program Science",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/8471685/pexels-photo-8471685.jpeg",
    tags: ["Abacus", "Mathematics", "Ancient Wisdom"],
    featured: false
  },
  {
    id: 8,
    title: "Creating a Growth Mindset in Your Child",
    excerpt: "Strategies to help children develop resilience, curiosity, and a love for learning.",
    content: `Understanding Growth Mindset\n\nIn today’s fast-changing world, success is less about natural talent and more about the ability to adapt, learn, and keep going despite challenges. This is where the growth mindset comes in — the belief that abilities and intelligence can be developed with effort, learning, and perseverance.

What is a Growth Mindset?

A growth mindset is the opposite of a fixed mindset.

Fixed mindset: “I’m just not good at math.”

Growth mindset: “I can get better at math if I practice and learn.”

When children believe they can improve with effort, they are more likely to take on challenges, learn from mistakes, and keep trying until they succeed.

Why It’s Important for Children

Builds resilience against failure

Encourages curiosity and love for learning

Improves problem-solving skills

Helps children handle criticism positively

How to Nurture a Growth Mindset in Your Child

Praise Effort, Not Just Results
Instead of saying “You’re so smart,” say “I’m proud of how hard you worked.”

Teach the Power of “Yet”
When they say “I can’t do it,” encourage them to add “...yet.”

Normalize Mistakes as Learning Opportunities
Share stories of your own failures and what you learned from them.

Encourage Curiosity
Let them explore, ask questions, and experiment without fear of being wrong.

Model a Growth Mindset Yourself
Show your child that you are always learning and willing to improve.

The Long-Term Impact

Children with a growth mindset develop confidence, perseverance, and adaptability — skills that serve them not just in academics but in every area of life. They learn that intelligence isn’t fixed and that every challenge is an opportunity to grow.

Final Thought:
When you help your child build a growth mindset, you’re not just shaping a better student — you’re shaping a resilient, lifelong learner who believes in their ability to succeed.`,
    author: "Lakkoju Priyana",
    date: "2025-06-28",
    category: "Parenting Tips",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg",
    tags: ["Growth Mindset", "Parenting", "Development"],
    featured: false
  }
];

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
      <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow group-hover:text-blue-600 transition-colors">
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
                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">Knowledge Hub</h1>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Articles</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
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
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Articles Found</h3>
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