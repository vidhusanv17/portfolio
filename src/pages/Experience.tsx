import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Code,
  Award,
  Target,
  Ship,
  ShipIcon,
  ShipWheel,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Synergy Marine',
      location: 'Chennai, India',
      period: '06/2025 - 07/2025',
      type: 'Internship',
      description:
        'Acquired practical experience in applying AI and machine learning solutions to real-world challenges in the global shipping industry, contributing to intelligent systems and automation pipelines.',
      achievements: [
        'Worked on AI-driven solutions for optimizing fleet operations and predictive maintenance',
        'Collaborated with the data science team to develop and validate Large Language models',
        'Explored the application of AI for real-time vessel tracking, route optimization, and fuel efficiency',
        'Contributed to the design of dashboards for maritime data visualization and anomaly detection',
        'Participated in cross-team discussions on the integration of AI systems into existing marine infrastructure',
      ],
      technologies: [
        'Python',
        'Pandas',
        'scikit-learn',
        'TensorFlow / PyTorch',
        'Data Visualization',
        'AI for Logistics',
        'Maritime Analytics',
      ],
      icon: Ship,
    },
    {
      title: 'Intern',
      company: 'Revature',
      location: 'Chennai, India',
      period: '07/2024 - 08/2024',
      type: 'Internship',
      description:
        'Gained comprehensive hands-on experience in enterprise-level software development, working with modern web technologies and Java-based frameworks.',
      achievements: [
        'Gained hands-on experience in Java, J2EE, HTML, CSS, and JavaScript',
        'Designed and implemented a comprehensive Airline Reservation System',
        'Collaborated with cross-functional teams on enterprise applications',
        'Applied best practices in software development lifecycle',
      ],
      technologies: [
        'Java',
        'J2EE',
        'HTML',
        'CSS',
        'JavaScript',
        'Enterprise Development',
      ],
      icon: Briefcase,
    },
  ];

  const projects = [
    {
      title: 'Stock Market Management System',
      period: '2023',
      description:
        'Developed a comprehensive stock tracking and management system with intuitive GUI interface.',
      achievements: [
        'Built using Python and MySQL for robust data management',
        'Implemented Tkinter GUI for user-friendly interface',
        'Best project award in 12th grade',
        'Integrated real-time stock tracking capabilities',
        'Optimized database queries for improved performance',
      ],
      technologies: ['Python', 'MySQL', 'Tkinter', 'Database Design'],
      impact: '85% workload reduction',
      category: 'Desktop Application',
    },
    {
      title: 'VITAL RUSH-Ambulance Automation',
      period: '2025',
      description:
        'Developed a innoavtive and efficient ambulance automation system using CV.',
      achievements: [
        'Built using Python and MySQL for robust data management',
        'Won 1st place in National Level Hackathon',
        'Implemented using HTML and CSS for simplicity',
        'Achieved 95% accuracy in ambulance detection',
        'Integrated real-time communication facilities',
      ],
      technologies: ['Python', 'CV', 'MySQL', 'HTML', 'CSS'],
      impact: '40% transportation time reduction',
      category: 'Desktop Application',
    },
    {
      title: 'Skin Disease Predictor',
      period: '2024',
      description:
        'AI/ML system for healthcare innovation with high-accuracy disease prediction capabilities.',
      achievements: [
        'Achieved 97% accuracy in skin disease prediction',
        'Implemented advanced image processing techniques',
        'Applied machine learning classification algorithms',
        'Won 1st place in Intra College Hackathon (CSI Society)',
        'Demonstrated practical AI application in healthcare',
      ],
      technologies: [
        'Machine Learning',
        'Python',
        'Image Processing',
        'Classification',
      ],
      impact: '97% prediction accuracy',
      category: 'AI/ML Healthcare',
    },
    {
      title: 'Decentralized Energy Sharing Network',
      period: '2024',
      description:
        'Innovative platform combining AI and blockchain for optimized community energy distribution.',
      achievements: [
        'Leveraged blockchain technology for decentralized operations',
        'Integrated AI algorithms for energy optimization',
        'Designed community-focused energy sharing model',
        'Implemented smart contract functionality',
        'Created sustainable energy distribution solution',
      ],
      technologies: ['Blockchain', 'AI', 'Smart Contracts', 'Energy Systems'],
      impact: 'Community energy optimization',
      category: 'Blockchain & AI',
    },
    {
      title: 'Airline Reservation System',
      period: '2024',
      description:
        'Comprehensive flight booking and management application for streamlined operations.',
      achievements: [
        'Developed during Revature internship',
        'Streamlined flight booking and management processes',
        'Projected 20% revenue increase through efficiency gains',
        'Implemented user-friendly booking interface',
        'Integrated payment and reservation management',
      ],
      technologies: ['Java', 'J2EE', 'Database Management', 'Web Development'],
      impact: '20% projected revenue increase',
      category: 'Enterprise Application',
    },
  ];

  const responsibilities = [
    {
      title: 'Website Management',
      description:
        "Managing college's real-time feedback website, ensuring optimal user engagement for an efficient feedback system.",
      icon: Code,
      skills: [
        'Web Development',
        'User Experience',
        'System Administration',
        'Performance Optimization',
      ],
    },
    {
      title: 'Team Leadership',
      description:
        'Led teams to victory in hackathons while organizing college events, ensuring strategic planning and impactful outcomes.',
      icon: Users,
      skills: [
        'Team Management',
        'Strategic Planning',
        'Event Organization',
        'Project Coordination',
      ],
    },
    {
      title: 'Problem Solving',
      description:
        'Expert in solving real-time problems using Data Structures & Algorithms and critical analysis.',
      icon: Target,
      skills: ['DSA', 'Critical Analysis', 'Algorithm Design', 'Optimization'],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-400">
              Building innovative solutions through hands-on development and
              leadership
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                    <div className="flex-shrink-0 mb-4 lg:mb-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                        <exp.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl text-blue-400 mb-2">
                            {exp.company}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-400">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 lg:mt-0 lg:text-right">
                          <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-2">
                            {exp.type}
                          </div>
                          <div className="flex items-center space-x-2 text-green-400">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {exp.impact}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-blue-300 mb-2">
                          Key Achievements:
                        </h5>
                        <div className="space-y-2">
                          {exp.achievements.map(
                            (achievement, achievementIndex) => (
                              <div
                                key={achievementIndex}
                                className="bg-blue-900/20 border border-blue-500/20 px-3 py-2 rounded-lg text-sm text-gray-300"
                              >
                                • {achievement}
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-purple-300 mb-2">
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Responsibilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Key Responsibilities & Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {responsibilities.map((resp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <resp.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {resp.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {resp.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {resp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full text-xs border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Major Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Major Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-gray-400 text-sm">
                        {project.period}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center space-x-2 text-green-400">
                        <Award className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {project.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-blue-300 mb-2">
                      Key Achievements:
                    </h5>
                    <div className="space-y-1">
                      {project.achievements.map(
                        (achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="text-gray-300 text-xs"
                          >
                            • {achievement}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-purple-300 mb-2">
                      Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-gray-400">Professional Internship</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-gray-400">Major Projects</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">97%</div>
              <div className="text-gray-400">Best Project Accuracy</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
              <div className="text-gray-400">Max Efficiency Gain</div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Professional Growth & Impact
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My professional journey combines hands-on technical experience
                with leadership responsibilities. From developing enterprise
                applications during my Revature internship to creating
                innovative AI/ML solutions, I focus on delivering measurable
                impact through technology. Each project represents not just
                technical achievement, but real-world problem-solving that
                creates value for users and organizations.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;
