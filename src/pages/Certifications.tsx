import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Eye } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';

const Certifications = () => {
  const certifications = [
    {
      title: 'Azure AI FUndamentals',
      issuer: 'Microsoft',
      date: '2025',
      credentialId: '18C5C673073CF98B',
      status: 'Completed',
      description:
        'Foundational certification covering core concepts of Artificial Intelligence, Machine Learning, and Generative AI, with practical implementation using Microsoft Azure services.',
      skills: [
        'AI Fundamentals',
        'Generative AI',
        'Azure AI Services',
        'Machine Learning',
        'Cognitive Services',
        'Natural Language Processing',
      ],
      category: 'AI/ML',
      verifyLink: 'https://nptel.ac.in/courses',
      certificateImage: '/images/certificates/azure-ai-fundamentals.jpg',
    },
    {
      title: 'MongoDB Basics for Students',
      issuer: 'MongoDB',
      date: '2025',
      credentialId: 'ce7f0f411dd9',
      status: 'Completed',
      description:
        'Introductory course focused on understanding MongoDB fundamentals, including document-based data modeling, CRUD operations, indexing, and working with MongoDB Compass.',
      skills: [
        'MongoDB',
        'NoSQL Databases',
        'CRUD Operations',
        'Data Modeling',
        'MongoDB Compass',
      ],
      category: 'Database',
      verifyLink:
        'https://www.credly.com/badges/6acd9f2d-feea-4678-abea-ce7f0f411dd9/linked_in_profile',
      certificateImage: '/images/certificates/mongodb-basics.jpg',
    },
    {
      title: 'Introduction to Machine Learning',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      date: '2024',
      credentialId: 'NPTEL24CS81S333105632',
      status: 'Silver Medalist',
      description:
        'Comprehensive course covering fundamental concepts of machine learning, supervised and unsupervised learning algorithms, and practical applications.',
      skills: [
        'Machine Learning',
        'Data Analysis',
        'Python',
        'Statistical Learning',
      ],
      category: 'AI/ML',
      verifyLink: 'https://nptel.ac.in/courses',
      certificateImage: '/images/certificates/machine-learning-nptel.jpg',
    },
    {
      title: 'Python for Data Science',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      date: '2024',
      credentialId: 'NPTEL25CS60S143300690',
      status: 'Gold Medalist',
      description:
        'In-depth training on Python programming for data science applications, covering data manipulation, visualization, and analysis techniques.',
      skills: [
        'Python Programming',
        'Data Science',
        'NumPy',
        'Pandas',
        'Matplotlib',
      ],
      category: 'Programming',
      verifyLink: 'https://nptel.ac.in/courses',
      certificateImage: '/images/certificates/python-data-science-nptel.jpg',
    },
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Google (Coursera)',
      date: '2024',
      credentialId: 'GOOGLE-CYB-2024-003',
      status: 'Completed',
      description:
        'Foundational knowledge in cybersecurity principles, threat analysis, risk management, and security frameworks.',
      skills: [
        'Cybersecurity',
        'Risk Management',
        'Security Frameworks',
        'Threat Analysis',
      ],
      category: 'Security',
      verifyLink: 'https://coursera.org/verify',
      certificateImage: '/images/certificates/cybersecurity-google.jpg',
    },
    {
      title: 'Networking Fundamentals',
      issuer: 'Cisco',
      date: '2023',
      credentialId: 'CISCO-NET-2023-004',
      status: 'Completed',
      description:
        'Comprehensive understanding of networking concepts, protocols, and infrastructure design principles.',
      skills: [
        'Network Protocols',
        'TCP/IP',
        'Network Design',
        'Infrastructure',
      ],
      category: 'Networking',
      verifyLink:
        'https://www.credly.com/badges/2aaf4b83-f88e-4bd7-8ca7-bb126e4329d5/public_url',
      certificateImage: '/images/certificates/networking-cisco.jpg',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2023',
      credentialId: 'FCC-RWD-2023-005',
      status: 'Completed',
      description:
        'Mastery of responsive web design principles, HTML5, CSS3, and modern web development practices.',
      skills: [
        'HTML5',
        'CSS3',
        'Responsive Design',
        'Web Development',
        'JavaScript',
      ],
      category: 'Web Development',
      verifyLink: 'https://freecodecamp.org/certification',
      certificateImage: '/images/certificates/responsive-web-design-freecodecamp.jpg',
    },
    {
      title: 'Digital Marketing',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'UDEMY-DM-2023-006',
      status: 'Completed',
      description:
        'Comprehensive digital marketing strategies including SEO, social media marketing, content marketing, and analytics.',
      skills: [
        'SEO',
        'Social Media Marketing',
        'Content Marketing',
        'Analytics',
        'Digital Strategy',
      ],
      category: 'Marketing',
      verifyLink: 'https://udemy.com/certificate',
      certificateImage: '/images/certificates/digital-marketing-udemy.jpg',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'from-purple-600 to-pink-600',
      Programming: 'from-blue-600 to-cyan-600',
      Security: 'from-red-600 to-orange-600',
      Networking: 'from-green-600 to-emerald-600',
      'Web Development': 'from-indigo-600 to-purple-600',
      Marketing: 'from-yellow-600 to-orange-600',
      Database: 'from-teal-600 to-green-600',
    };
    return (
      colors[category as keyof typeof colors] || 'from-purple-600 to-blue-600'
    );
  };

  const handleViewCertificate = (certificateImage: string, title: string) => {
    // Create a modal or new window to display the certificate
    const newWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>${title} - Certificate</title>
            <style>
              body { 
                margin: 0; 
                padding: 20px; 
                background: #111827; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                min-height: 100vh;
                font-family: Arial, sans-serif;
              }
              img { 
                max-width: 100%; 
                max-height: 90vh; 
                border-radius: 8px; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
              }
              .container {
                text-align: center;
              }
              .title {
                color: #a855f7;
                margin-bottom: 20px;
                font-size: 24px;
                font-weight: bold;
              }
              .error {
                color: #ef4444;
                padding: 20px;
                background: #1f2937;
                border-radius: 8px;
                border: 1px solid #374151;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="title">${title}</div>
              <img src="${certificateImage}" alt="${title} Certificate" 
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
              <div class="error" style="display: none;">
                Certificate image not found. Please upload the certificate image to: ${certificateImage}
              </div>
            </div>
          </body>
        </html>
      `);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </h1>
            <p className="text-xl text-gray-400">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(
                        cert.category
                      )} rounded-lg flex items-center justify-center`}
                    >
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-purple-400 font-semibold">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-2 text-green-400">
                          <CheckCircle className="h-5 w-5" />
                          <span className="text-sm font-medium">
                            {cert.status}
                          </span>
                        </div>
                        <div
                          className={`bg-gradient-to-r ${getCategoryColor(
                            cert.category
                          )} bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-medium`}
                        >
                          {cert.category}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="text-xs">ID: {cert.credentialId}</div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-300 mb-2">
                        Key Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full text-xs border border-blue-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleViewCertificate(cert.certificateImage, cert.title)}
                        className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300 text-sm bg-green-900/20 px-3 py-2 rounded-lg border border-green-500/30 hover:bg-green-900/30"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Certificate</span>
                      </button>

                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Verify Online</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Learning Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                These certifications represent my commitment to staying current
                with industry trends and technologies. From machine learning and
                cybersecurity to web development and digital marketing, I
                believe in building a diverse skill set that enables me to
                tackle complex challenges from multiple perspectives.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certifications;