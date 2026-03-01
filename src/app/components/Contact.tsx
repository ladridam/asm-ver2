import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', instrument: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91',
      link: 'tel:+91'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@aadonschoolofmusic.edu',
      link: 'mailto:info@aadonschoolofmusic.edu'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Address',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#000000]">
            Get In <span className="text-[#B19A71]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to begin your musical journey? Contact us for more information or to schedule a campus tour
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl mb-6 text-[#000000]">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="instrument">Instrument of Interest</Label>
                <Input
                  id="instrument"
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleChange}
                  placeholder="e.g., Piano, Guitar, Violin"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#B19A71] text-black hover:bg-[#9d8560] py-6"
              >
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-[#202020] text-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl mb-6 text-[#B19A71]">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-[#B19A71] rounded-lg">
                        <Icon size={24} className="text-black" />
                      </div>
                      <div>
                        <h4 className="text-[#B19A71] mb-1">{item.title}</h4>
                        {item.link !== '#' ? (
                          <a href={item.link} className="text-gray-300 hover:text-white transition-colors">
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-gray-300">{item.details}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-2 text-[#B19A71]" />
                  <p>Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
