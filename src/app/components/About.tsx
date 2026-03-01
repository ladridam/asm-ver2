import { Award, Users, Music, BookOpen } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, value: '2,500+', label: 'Active Students' },
    { icon: Music, value: '50+', label: 'Expert Instructors' },
    { icon: Award, value: '38', label: 'Years of Excellence' },
    { icon: BookOpen, value: '30+', label: 'Course Programs' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#000000]">
              About <span className="text-[#B19A71]">Our Academy</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Since 20__, Aadon School of Music has been a beacon of musical excellence, 
              nurturing talent and fostering a deep appreciation for music across all genres 
              and styles.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our state-of-the-art facilities, combined with our world-class faculty, 
              provide students with an unparalleled learning environment. We offer 
              comprehensive programs from beginner to advanced levels.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're pursuing music as a career or enriching your life through 
              artistic expression, Harmony Music Academy provides the foundation for 
              lifelong musical achievement.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1698754584388-3d2c4edcce9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWFubyUyMGxlc3NvbiUyMHRlYWNoaW5nfGVufDF8fHx8MTc3MTkyMTM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Piano Lesson"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-[#202020] text-white rounded-lg"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-[#B19A71]" />
                <div className="text-3xl mb-2 text-[#B19A71]">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
