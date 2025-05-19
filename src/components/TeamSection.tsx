import React from 'react';
import { Linkedin, Twitter, Mail, Bot } from 'lucide-react';

const TeamMember = ({ 
  name, 
  role, 
  image, 
  bio, 
  socialLinks 
}: { 
  name: string; 
  role: string; 
  image: string; 
  bio: string;
  socialLinks?: { type: string; url: string }[];
}) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-5 transform transition-transform duration-500 group-hover:scale-105">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
        
        {socialLinks && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {socialLinks.map((link, idx) => {
              let Icon = Mail;
              if (link.type === 'linkedin') Icon = Linkedin;
              if (link.type === 'twitter') Icon = Twitter;
              
              return (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-blue-500 mb-3">{role}</p>
      <p className="text-gray-400 text-sm">{bio}</p>
    </div>
  );
};

const AboutUsSection = () => {
  const teamMembers = [
    {
      name: "Stephan Graf",
      role: "Founder & CEO",
      image: "https://i.postimg.cc/3JbM39HQ/IMG-9019-Copy-removebg-preview.png",
      bio: "AI enthusiast with 15+ years of experience in software development and business automation. Passionate about creating intelligent solutions that drive business growth.",
      socialLinks: [
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "twitter", url: "https://twitter.com/" },
        { type: "email", url: "mailto:info@meine-bots.de" }
      ]
    },
    {
      name: "Dr. Maria Schmidt",
      role: "AI Research Director",
      image: "https://images.pexels.com/photos/5324940/pexels-photo-5324940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Ph.D. in Computer Science specializing in natural language processing and machine learning, ensuring our AI solutions leverage cutting-edge technology."
    },
    {
      name: "Joshua Chen",
      role: "Technical Lead",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "System architect with expertise in AI integration, workflow automation, and solution design. Focused on creating scalable and robust solutions."
    },
    {
      name: "RiO",
      role: "AI Assistant",
      image: "https://i.postimg.cc/Qxzz2tpX/replicate-prediction-ygd7jhjn5hrj60cnmjgvjfb8wc.png",
      bio: "Our advanced AI assistant equipped with natural language understanding and problem-solving capabilities to provide seamless support and solutions.",
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-sm font-medium">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet The Experts Behind Our AI Solutions
          </h2>
          <p className="text-gray-400 text-lg">
            A passionate team of AI specialists, developers, and industry experts dedicated to transforming your business with intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember 
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-8 rounded-2xl border border-blue-900/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-900/40 rounded-full flex items-center justify-center">
                <Bot className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Growing Team</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals passionate about AI and innovation. 
              If you're excited about creating next-generation AI solutions, we'd love to hear from you!
            </p>
            <a 
              href="mailto:careers@meine-bots.de" 
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;