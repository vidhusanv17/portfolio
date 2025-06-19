import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Vidhusan_Varatharasan_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-40 h-40 mx-auto mb-8 relative">
                  <img
                    src="/images/profile.jpg"
                    alt="Vidhusan Varatharasan"
                    className="w-full h-full rounded-full object-cover border-4 border-gradient-to-r from-purple-600 to-blue-600 shadow-2xl hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback initials if image doesn't load */}
                  <div 
                    className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center animate-pulse absolute inset-0"
                    style={{ display: 'none' }}
                  >
                    <span className="text-4xl font-bold text-white">VV</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 animate-ping"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Vidhusan Varatharasan
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Software Developer & Team Leader
              </p>

              <div className="flex items-center justify-center space-x-2 text-purple-400 mb-8">
                <MapPin className="h-5 w-5" />
                <span>Chennai, India</span>
              </div>

              <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
                Results-driven Software Developer with expertise in Artificial
                Intelligence, and team leadership. Proven track record in
                leading high-impact projects, winning national hackathons, coding
                challenges and maintaining a stellar 9.19 CGPA while excelling
                in competitive programming.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/education"
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                >
                  <span>Explore My Journey</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <button 
                  onClick={handleResumeDownload}
                  className="group border border-purple-500 hover:bg-purple-600/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  9.19
                </div>
                <div className="text-gray-400">CGPA</div>
              </Card>
              <Card className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
                <div className="text-gray-400">Professional Internships</div>
              </Card>

              <Card className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                <div className="text-gray-400">Major Projects</div>
              </Card>

              <Card className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  13+
                </div>
                <div className="text-gray-400">Certifications</div>
              </Card>

              <Card className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
                <div className="text-gray-400">Major Awards</div>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Software Developer and Team Leader with
                expertise in Artificial Intelligence and event management.
                Currently pursuing my Bachelor's in Computer Science at St.
                Joseph's College of Engineering, Chennai, where I maintain an
                exceptional CGPA of 9.19/10.0.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                My journey has been marked by consistent victories in coding
                competitions, hackathons, and technical challenges. As an All
                Time Coding Club Champion and National Level Hackathon winner, I
                bring both technical excellence and leadership skills to every
                project. I'm driven by complex problem-solving and leveraging
                technology for innovative solutions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="mailto:vidhusan.varatharasan@gmail.com"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span>vidhusan.varatharasan@gmail.com</span>
                </a>

                <a
                  href="tel:+919840663792"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 9840663792</span>
                </a>
              </div>

              <div className="flex justify-center space-x-6 mt-6">
                <a
                  href="https://github.com/vidhusanv17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/vidhusan-varatharasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Core Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  Complex Problem Solving
                </h3>
                <p className="text-gray-300">
                  Expert in solving real-time problems using DSA and critical
                  analysis, with consistent victories in coding competitions.
                </p>
              </Card>

              <Card className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  Website Management
                </h3>
                <p className="text-gray-300">
                  Managing college's feedback website, ensuring optimal user
                  engagement for an efficient feedback system.
                </p>
              </Card>

              <Card className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  Leadership
                </h3>
                <p className="text-gray-300">
                  Led teams to victory in hackathons while organizing college
                  events, ensuring strategic planning and impactful outcomes.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;