import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  ExternalLink,
  Calendar,
  Building,
  Users,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  profileData, 
  skillsData, 
  experienceData, 
  projectsData, 
  awardsData, 
  educationData 
} from '../mockData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-lime-400">MKR</div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-up">
              <div className="space-y-2">
                <p className="caption text-lime-400">SAP CONSULTANT</p>
                <h1 className="brand-display">{profileData.name}</h1>
                <p className="body-large text-gray-300">
                  {profileData.title}
                </p>
              </div>
              
              <p className="body-medium max-w-lg">
                {profileData.summary}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  onClick={() => scrollToSection('projects')}
                  variant="outline"
                  className="btn-secondary"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-lime-400" />
                  <span className="body-small">{profileData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-lime-400" />
                  <span className="body-small">{profileData.yearsOfExperience} Years Experience</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-lime-400/20">
                  <img 
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-lime-400 text-black p-4 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">About Me</h2>
            <p className="body-medium max-w-3xl mx-auto">
              Experienced SAP professional with a passion for creating efficient, 
              scalable solutions that drive business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="card">
                <CardHeader>
                  <CardTitle className="heading-3 flex items-center">
                    <User className="w-6 h-6 mr-3 text-lime-400" />
                    Professional Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-medium mb-4">
                    With over 10 years of experience in SAP development and implementation, 
                    I specialize in creating robust business applications that streamline 
                    enterprise operations.
                  </p>
                  <p className="body-medium">
                    My expertise spans across multiple SAP modules including FICO, SD, MM, 
                    and PP, with deep technical knowledge in ABAP, SAPUI5, and modern SAP 
                    technologies like CDS Views and ODATA services.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card">
                <CardHeader>
                  <CardTitle className="heading-3 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-lime-400" />
                    Leadership & Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-medium">
                    Currently leading technical teams and managing offshore-onsite coordination 
                    for multinational clients. I believe in fostering collaborative environments 
                    that promote innovation and continuous learning.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="card">
                <CardHeader>
                  <CardTitle className="heading-3">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {educationData.map((edu, index) => (
                    <div key={index} className="border-l-2 border-lime-400 pl-4">
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <p className="body-small text-gray-400">{edu.institution}</p>
                      <p className="body-small text-gray-500">{edu.duration}</p>
                      <p className="body-small text-lime-400">{edu.grade}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="card">
                <CardHeader>
                  <CardTitle className="heading-3">Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  {awardsData.map((award, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-lime-400" />
                        <h4 className="font-semibold text-white">{award.title}</h4>
                      </div>
                      <p className="body-small text-gray-400">{award.organization} • {award.date}</p>
                      <p className="body-small">{award.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Technical Expertise</h2>
            <p className="body-medium max-w-3xl mx-auto">
              Comprehensive skill set spanning SAP development, modern web technologies, 
              and enterprise solution architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card">
              <CardHeader>
                <CardTitle className="heading-3 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-lime-400" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.technical.map((skill, index) => (
                    <Badge key={index} className="skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardHeader>
                <CardTitle className="heading-3 flex items-center">
                  <Building className="w-6 h-6 mr-3 text-lime-400" />
                  SAP Modules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.modules.map((module, index) => (
                    <Badge key={index} className="skill-tag">
                      {module}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardHeader>
                <CardTitle className="heading-3 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-lime-400" />
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.leadership.map((skill, index) => (
                    <Badge key={index} className="skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Professional Experience</h2>
            <p className="body-medium max-w-3xl mx-auto">
              A track record of delivering high-impact SAP solutions across 
              diverse industries and organizational scales.
            </p>
          </div>
          
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <Card key={exp.id} className="card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="space-y-2">
                        <h3 className="heading-3 text-lime-400">{exp.company}</h3>
                        <h4 className="text-lg font-semibold text-white">{exp.position}</h4>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="body-small">{exp.duration}</span>
                        </div>
                        <p className="body-small text-gray-500">{exp.period}</p>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 space-y-4">
                      <p className="body-medium">{exp.description}</p>
                      
                      <div>
                        <h5 className="font-semibold text-white mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="body-small text-gray-300 flex items-start">
                              <span className="text-lime-400 mr-2 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-white mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} className="skill-tag text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Featured Projects</h2>
            <p className="body-medium max-w-3xl mx-auto">
              Showcase of key projects demonstrating technical expertise 
              and business impact across various SAP modules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} className="card group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="heading-3 group-hover:text-lime-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="body-small text-lime-400 mt-1">{project.category}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-lime-400 transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="body-medium">{project.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="body-small text-gray-300 flex items-start">
                          <span className="text-lime-400 mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} className="skill-tag text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <p className="body-small text-gray-400">Client: {project.client}</p>
                      <Badge className="bg-green-900 text-green-300 text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Let's Connect</h2>
            <p className="body-medium max-w-3xl mx-auto">
              Ready to discuss SAP solutions or explore collaboration opportunities? 
              I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="card">
                <CardContent className="p-8">
                  <h3 className="heading-3 mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-lime-400 text-black p-3 rounded-lg">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <a href={`mailto:${profileData.email}`} 
                           className="body-small text-lime-400 hover:underline">
                          {profileData.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-lime-400 text-black p-3 rounded-lg">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <a href={`tel:${profileData.phone}`} 
                           className="body-small text-lime-400 hover:underline">
                          {profileData.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-lime-400 text-black p-3 rounded-lg">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">LinkedIn</p>
                        <a href={`https://${profileData.linkedin}`} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="body-small text-lime-400 hover:underline">
                          View Profile
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-lime-400 text-black p-3 rounded-lg">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Location</p>
                        <p className="body-small text-gray-400">{profileData.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="card">
                <CardContent className="p-8">
                  <h3 className="heading-3 mb-6">Quick Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Email
                      </label>
                      <input 
                        type="email" 
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Message
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="body-small text-gray-400">
                © 2024 {profileData.name}. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href={`mailto:${profileData.email}`} 
                 className="text-gray-400 hover:text-lime-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href={`https://${profileData.linkedin}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-lime-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;