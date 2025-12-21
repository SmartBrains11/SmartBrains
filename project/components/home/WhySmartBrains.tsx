import { CheckCircle, Users, Award, BookOpen, Target, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Certified Trainers',
    description: 'Our experienced trainers are certified in their respective fields with proven track records.'
  },
  {
    icon: Target,
    title: 'Proven Methods',
    description: 'Scientifically backed training methods that have shown consistent results across all age groups.'
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description: 'Each student receives individual attention with customized training plans based on their needs.'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured programs covering all aspects of cognitive development and brain training.'
  },
  {
    icon: Heart,
    title: 'Supportive Environment',
    description: 'Nurturing and encouraging atmosphere that helps students build confidence and achieve their goals.'
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description: 'Over 95% of our students improve their thinking skills and academic results.'
  }
];

export function WhySmartBrains() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Smart Brains?
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto">
            At Smart Brains, we help every child discover their unique talents. Our programs improve memory, focus, problem-solving, and confidence preparing them to succeed in school and life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mr-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}