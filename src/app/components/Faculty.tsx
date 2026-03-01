import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Faculty() {
  const faculty = [
    {
      name: 'Name Here',
      role: 'Piano & Music Theory',
      credentials: 'DMA, Juilliard School',
      description: 'Former concert pianist with 20+ years teaching experience'
    },
    {
      name: 'James Rodriguez',
      role: 'Guitar & Contemporary Music',
      credentials: 'BM, Berklee College of Music',
      description: 'Session musician and award-winning composer'
    },
    {
      name: 'Elena Volkov',
      role: 'Strings Department Head',
      credentials: 'MM, Curtis Institute',
      description: 'Principal violinist with 15 years orchestral experience'
    },
    {
      name: 'Marcus Thompson',
      role: 'Vocal Performance',
      credentials: 'MM, Manhattan School of Music',
      description: 'Opera singer and vocal coach for international artists'
    },
    {
      name: 'Lisa Chen',
      role: 'Music Production',
      credentials: 'BA, NYU Steinhardt',
      description: 'Grammy-nominated producer and audio engineer'
    },
    {
      name: 'Dr. Robert Klein',
      role: 'Music History & Composition',
      credentials: 'PhD, Yale University',
      description: 'Published composer and musicology researcher'
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#000000]">
            Our <span className="text-[#B19A71]">Faculty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from accomplished musicians and educators dedicated to your musical journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#B19A71] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardTitle className="text-[#000000]">{member.name}</CardTitle>
                <CardDescription className="text-[#B19A71]">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">{member.credentials}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
