'use client';

import { motion, Variants } from 'framer-motion';
import { CheckCircle, Users, Award, BookOpen, Target, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Certified Trainers',
    description: 'Our experienced trainers are certified in their respective fields with proven track records.',
    color: 'blue'
  },
  {
    icon: Target,
    title: 'Proven Methods',
    description: 'Programs used by 500+ institutes across India. Which have shown consistent results across all age groups.',
    color: 'orange'
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description: 'Each student receives individual attention with customized training plans based on their needs.',
    color: 'purple'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured programs covering all aspects of cognitive development and brain training.',
    color: 'green'
  },
  {
    icon: Heart,
    title: 'Supportive Environment',
    description: 'Nurturing and encouraging atmosphere that helps students build confidence and achieve their goals.',
    color: 'rose'
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description: 'Over 95% of our students improve their thinking skills and academic results.',
    color: 'indigo'
  }
];

const colorVariants = {
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
  orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600',
  purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600',
  green: 'bg-green-50 text-green-600 group-hover:bg-green-600',
  rose: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600',
  indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
};

export function WhySmartBrains() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            The Smart Brains Edge
          </span>
          <h2 className="mt-4 text-lg sm:text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">
            WHY CHOOSE SMART BRAINS?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don't just teach; we transform. Our holistic approach combines scientific research
            with nurturing care to unlock every child's full potential.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out group relative overflow-hidden"
              >
                {/* Subtle hover background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 -translate-y-16 translate-x-16 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${colorVariants[reason.color as keyof typeof colorVariants].split(' ')[1].replace('text-', 'bg-')}`} />

                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 transition-all duration-300 ${colorVariants[reason.color as keyof typeof colorVariants].split(' ')[0]} ${colorVariants[reason.color as keyof typeof colorVariants].split(' ')[1]}`}>
                  <Icon className="h-10 w-10 transition-transform duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-600 transition-colors">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}