import React from 'react';
import {
  Trophy,
  Medal,
  Star,
  Calendar,
  Users,
  Crown,
  Target,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';

const Awards = () => {
  const majorAwards = [
    {
      title: 'Winner - 24-Hour National Level Hackathon',
      event: 'National Technology Innovation Challenge',
      date: '2024',
      category: 'Hackathon',
      description:
        'Outperformed 300+ teams in an intense 24-hour hackathon, successfully navigating multiple rounds of evaluation. Demonstrated exceptional problem-solving skills, innovation, and technical excellence under pressure.',
      impact: '300+ teams participated nationwide',
      prize: 'SPL Prize',
      skills: [
        'Team Leadership',
        'Innovation',
        'Problem Solving',
        'Full Stack Development',
      ],
      icon: Trophy,
      rank: '1st Place',
    },
    {
      title: 'Winner - Intra College Hackathon',
      event: 'CSI Society Hackathon-Future Forge 2.0',
      date: '2024',
      category: 'Hackathon',
      description:
        'Outperformed 100+ teams in 2 rounds .Led the Skin Disease Predictor project to 1st place, applying AI/ML for healthcare innovation. Developed a machine learning model with 97% accuracy',
      impact: '100+ teams participated',
      prize: 'Winner',
      skills: [
        'Team Leadership',
        'Innovation',
        'Problem Solving',
        'Full Stack Development',
      ],
      icon: Trophy,
      rank: '1st Place',
    },
    {
      title: 'All Time Coding Club Champion',
      event: "St. Joseph's College of Engineering",
      date: '2023-2024',
      category: 'Academic Competition',
      description:
        'Consistently won the departmental club coding competition each semester (4 times consecutively). Recognized as the top performer among peers within the Computer Science department.',
      impact: 'Departmental recognition',
      prize: 'Champion Title + Recognition Certificate',
      skills: [
        'Competitive Programming',
        'Data Structures',
        'Algorithms',
        'Problem Analysis',
      ],
      icon: Crown,
      rank: 'Champion (4x)',
    },
    {
      title: 'All Time Quiz Champion',
      event: "St. Joseph's College of Engineering",
      date: '2023-2024',
      category: 'Academic Excellence',
      description:
        'Showcased exceptional reasoning, analytical skills, and broad knowledge base by consistently excelling in intra-college quiz competitions every year (2 times).',
      impact: 'College-wide recognition',
      prize: 'Quiz Champion Title',
      skills: [
        'Analytical Thinking',
        'General Knowledge',
        'Quick Reasoning',
        'Technical Knowledge',
      ],
      icon: Crown,
      rank: 'Champion (2x)',
    },
  ];

  const otherAchievements = [
    {
      title: 'SAP Hackfest Participant',
      event: 'SAP Hackfest',
      date: '2024',
      description:
        'Successfully cleared the regional round among 250+ teams with an IoT-based food-grade monitoring solution using Visual Components; although not selected in the state round, the project was recognized for its innovation and real-time logistics tracking',
      rank: 'Participant',
      icon: Medal,
    },
    {
      title: 'Finalist - 24 Hour Hackathon',
      event: 'Regional Technology Challenge',
      date: '2024',
      description:
        'Successfully reached the final stage among 250+ participating teams, showcasing strategic thinking and advanced technical skills.',
      rank: 'Finalist',
      icon: Target,
    },
    {
      title: '2X IITM AI/ML Challenge Participant',
      event: 'IIT Madras AI/ML Challenge',
      date: '2023-2024',
      description:
        'Competed in real-world Machine Learning problems for advanced data analysis, predictive modeling, and AI-driven solutions to complex challenges.',
      rank: 'Participant',
      icon: Star,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Awards & Recognition
            </h1>
            <p className="text-xl text-gray-400">
              Celebrating excellence in technology, leadership, and innovation
            </p>
          </div>

          {/* Major Awards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Major Achievements
            </h2>
            <div className="space-y-8">
              {majorAwards.map((award, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                    <div className="flex-shrink-0 mb-4 lg:mb-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <award.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {award.title}
                          </h3>
                          <h4 className="text-xl text-purple-400 mb-2">
                            {award.event}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{award.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>{award.impact}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 lg:mt-0 lg:text-right">
                          <div className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold mb-2">
                            {award.rank}
                          </div>
                          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                            {award.category}
                          </div>
                          <div className="text-sm text-purple-400 font-medium mt-2">
                            {award.prize}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4">
                        {award.description}
                      </p>

                      <div>
                        <h5 className="text-sm font-semibold text-blue-300 mb-2">
                          Key Skills Demonstrated:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {award.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                            >
                              {skill}
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

          {/* Other Achievements */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Additional Recognitions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherAchievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <achievement.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-purple-400 font-semibold text-sm mb-2">
                        {achievement.event}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">
                          {achievement.date}
                        </span>
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs font-medium">
                          {achievement.rank}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
              <div className="text-gray-400">Major Championships</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                500+
              </div>
              <div className="text-gray-400">Teams Competed Against</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">9+</div>
              <div className="text-gray-400">Total Victories</div>
            </Card>

            <Card className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2</div>
              <div className="text-gray-400">All Time Championships</div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Competitive Spirit & Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed">
                These achievements reflect not just individual success, but a
                consistent pattern of excellence, innovation, and leadership.
                Each competition has been a learning opportunity that has shaped
                my problem-solving approach and technical expertise. I believe
                in healthy competition as a catalyst for continuous improvement
                and pushing the boundaries of what's possible.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Awards;
