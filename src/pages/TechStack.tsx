import React from 'react';
import {
  Code,
  Database,
  Cloud,
  Globe,
  Smartphone,
  Wrench,
  Brain,
  Server,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';

const TechStack = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        {
          name: 'Python',
          level: 92,
          description: 'Primary language for AI/ML and backend development',
        },
        {
          name: 'Java',
          level: 88,
          description:
            'Object-oriented programming and enterprise applications',
        },
        {
          name: 'C',
          level: 80,
          description: 'System programming and competitive coding',
        },
        {
          name: 'SQL',
          level: 85,
          description: 'Database querying and management',
        },
        {
          name: 'HTML/CSS',
          level: 90,
          description: 'Web markup and styling fundamentals',
        },
        {
          name: 'JavaScript',
          level: 50,
          description: 'Web development and full-stack applications',
        },
      ],
    },
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        {
          name: 'Machine Learning',
          level: 88,
          description: 'Supervised and unsupervised learning algorithms',
        },
        {
          name: 'TensorFlow',
          level: 75,
          description: 'Deep learning framework for AI applications',
        },
        {
          name: 'Scikit-learn',
          level: 85,
          description: 'Machine learning library for Python',
        },
        {
          name: 'Pandas',
          level: 90,
          description: 'Data manipulation and analysis',
        },
        {
          name: 'NumPy',
          level: 88,
          description: 'Numerical computing with Python',
        },
        {
          name: 'Matplotlib',
          level: 82,
          description: 'Data visualization and plotting',
        },
      ],
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        {
          name: 'MySQL',
          level: 88,
          description: 'Relational database management system',
        },
        {
          name: 'MongoDB',
          level: 82,
          description: 'NoSQL document-oriented database',
        },
        {
          name: 'SQL Server',
          level: 80,
          description: 'Microsoft database management system',
        },
        {
          name: 'Database Design',
          level: 85,
          description: 'Schema design and optimization',
        },
        {
          name: 'Data Modeling',
          level: 83,
          description: 'Conceptual and logical data modeling',
        },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      technologies: [
        {
          name: 'Node.js',
          level: 82,
          description: 'JavaScript runtime for server-side development',
        },
        {
          name: 'J2EE',
          level: 80,
          description: 'Java platform for enterprise applications',
        },
        {
          name: 'React.js',
          level: 78,
          description: 'Frontend JavaScript library for UI development',
        },
        {
          name: 'RESTful APIs',
          level: 85,
          description: 'Web service architecture and design',
        },
        {
          name: 'Responsive Design',
          level: 88,
          description: 'Mobile-first web development approach',
        },
      ],
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        {
          name: 'Git',
          level: 90,
          description: 'Version control and collaborative development',
        },
        {
          name: 'VS Code',
          level: 95,
          description: 'Integrated development environment',
        },
        {
          name: 'Eclipse',
          level: 85,
          description: 'Java development environment',
        },
        {
          name: 'Jupyter Notebook',
          level: 88,
          description: 'Interactive development for data science',
        },
        {
          name: 'Command Line',
          level: 85,
          description: 'Terminal and shell scripting',
        },
      ],
    },
    {
      title: 'Specialized Skills',
      icon: Server,
      color: 'from-yellow-500 to-orange-500',
      technologies: [
        {
          name: 'Data Structures',
          level: 92,
          description: 'Advanced DS for competitive programming',
        },
        {
          name: 'Algorithms',
          level: 90,
          description: 'Algorithm design and optimization',
        },
        {
          name: 'System Design',
          level: 78,
          description: 'Large-scale system architecture',
        },
        {
          name: 'Problem Solving',
          level: 95,
          description: 'Critical thinking and analytical skills',
        },
        {
          name: 'Code Optimization',
          level: 85,
          description: 'Performance tuning and efficiency',
        },
        {
          name: 'Technical Writing',
          level: 80,
          description: 'Documentation and communication',
        },
      ],
    },
  ];

  const SkillBar = ({
    name,
    level,
    description,
  }: {
    name: string;
    level: number;
    description: string;
  }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-purple-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
        <div
          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <p className="text-gray-400 text-xs">{description}</p>
    </div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </h1>
            <p className="text-xl text-gray-400">
              Technologies and skills that power my development journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <SkillBar
                      key={techIndex}
                      name={tech.name}
                      level={tech.level}
                      description={tech.description}
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Project Highlights */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Programming Experience
            </h2>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
              <div className="text-gray-400">Programming Languages</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Frameworks & Libraries</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
              <div className="text-gray-400">Major Projects</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-gray-400">Years of Coding</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2000+</div>
              <div className="text-gray-400">Hours of Coding</div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Technical Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                My technical journey is driven by a passion for solving complex
                problems and creating innovative solutions. From competitive
                programming victories to AI/ML implementations, I believe in
                mastering fundamentals while staying current with emerging
                technologies. Each project is an opportunity to apply
                theoretical knowledge to real-world challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                  Currently Exploring: Advanced ML Algorithms
                </span>
                <span className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                  Learning: Cloud Technologies
                </span>
                <span className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                  Interested in: Blockchain Development
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TechStack;
