import { Guitar, Piano, Mic, Music2, Headphones, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Curriculum() {
  const programs = [
    {
      icon: Piano,
      title: 'Piano & Keyboard',
      description: 'Classical and contemporary piano instruction',
      image: 'https://images.unsplash.com/photo-1698754584388-3d2c4edcce9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWFubyUyMGxlc3NvbiUyMHRlYWNoaW5nfGVufDF8fHx8MTc3MTkyMTM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      levels: 'Beginner to Advanced'
    },
    {
      icon: Guitar,
      title: 'Guitar',
      description: 'Acoustic, electric, and classical guitar courses',
      image: 'https://images.unsplash.com/photo-1758524944402-1903b38f848f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBpbnN0cnVjdG9yJTIwbGVzc29ufGVufDF8fHx8MTc3MTkyMTM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      levels: 'All Levels'
    },
    {
      icon: Music2,
      title: 'Strings',
      description: 'Violin, viola, cello, and double bass instruction',
      image: 'https://images.unsplash.com/photo-1646150210023-871b7b34e53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW9saW4lMjBzdHVkZW50JTIwcHJhY3RpY2V8ZW58MXx8fHwxNzcxOTIxMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      levels: 'Beginner to Professional'
    },
    {
      icon: Mic,
      title: 'Vocal Performance',
      description: 'Classical, jazz, and contemporary vocal training',
      image: 'https://images.unsplash.com/photo-1770669909080-74eef2e74204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRlbnRzJTIwZW5zZW1ibGV8ZW58MXx8fHwxNzcxOTIxMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      levels: 'All Levels'
    },
    {
      icon: Headphones,
      title: 'Music Production',
      description: 'Digital audio workstation and recording techniques',
      image: 'https://images.unsplash.com/photo-1617398745178-f40f24bbaa23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHRoZW9yeSUyMGJvb2tzfGVufDF8fHx8MTc3MTkyMTM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      levels: 'Intermediate to Advanced'
    },
    {
      icon: GraduationCap,
      title: 'Music Theory',
      description: 'Comprehensive theory and composition studies',
      image: 'https://images.unsplash.com/photo-1617398745178-f40f24bbaa23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHRoZW9yeSUyMGJvb2tzfGVufDF8fHx8MTc3MTkyMTM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      levels: 'All Levels'
    }
  ];

  const curriculumDetails = {
    foundation: [
      'Music Fundamentals & Notation',
      'Ear Training & Rhythm',
      'Basic Music Theory',
      'Introduction to Instrument',
      'Practice Techniques'
    ],
    intermediate: [
      'Advanced Technique Development',
      'Music History & Appreciation',
      'Ensemble Performance',
      'Improvisation Skills',
      'Repertoire Building'
    ],
    advanced: [
      'Professional Performance Skills',
      'Advanced Theory & Composition',
      'Recording & Production',
      'Career Development',
      'Master Classes & Workshops'
    ]
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#000000]">
            Our <span className="text-[#B19A71]">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive music education programs designed to develop technical mastery 
            and artistic expression
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#B19A71] rounded">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-[#000000]">{program.title}</CardTitle>
                  </div>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    <span className="text-[#B19A71]">Levels:</span> {program.levels}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Curriculum Structure */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl mb-8 text-center text-[#000000]">
            Curriculum <span className="text-[#B19A71]">Structure</span>
          </h3>
          <Tabs defaultValue="foundation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="foundation">Foundation</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="foundation">
              <div className="grid md:grid-cols-2 gap-4">
                {curriculumDetails.foundation.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-[#B19A71] rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="intermediate">
              <div className="grid md:grid-cols-2 gap-4">
                {curriculumDetails.intermediate.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-[#B19A71] rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="advanced">
              <div className="grid md:grid-cols-2 gap-4">
                {curriculumDetails.advanced.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-[#B19A71] rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
