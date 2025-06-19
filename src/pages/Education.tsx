import React from 'react';
import { GraduationCap, Calendar, MapPin, Star, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: "St. Joseph's College of Engineering",
      location: 'Chennai, India',
      period: '2023 - Present',
      cgpa: '9.19/10.0',
      status: 'Currently Pursuing',
      achievements: [
        'Won multiple coding competitions and hackathons',
        'All Time Coding Club Champion (4X)',
        'All Time Quiz Champion (2X)',
        'Excellent academic performance with consistent high grades',
      ],
      activities: [
        'Demonstarted problem-solving and innovative thinking',
        'Hackathon Organizing Committee Member',
        'Computer Science Society - Active Member',
        'Technical Event Coordinator',
      ],
    },
    {
      degree: 'Higher Secondary School Certificate (CBSE)',
      school: 'DAV School',
      location: 'Chennai, India',
      period: '2021 - 2023',
      cgpa: '95/100',
      percentage: true,
      status: 'Completed with Distinction',
      achievements: [
        'Completed project: "Stock Market Management" using Python and MySQL',
        'Showcased exceptional analytical and programming skills',
        'Top performer in Mathematics and Computer Science',
        'Active participation in inter-school competitions',
      ],
      activities: [
        'National level Karate Champion 3X',
        'Mathematics Olympiad Participant',
        'Science Fair - Project Leader',
        'Mathematics Club - Active Member',
      ],
    },
    {
      degree: 'Secondary School Certificate (CBSE)',
      school: 'DAV School',
      location: 'Chennai, India',
      period: '2008 - 2021',
      cgpa: '97/100',
      percentage: true,
      status: 'Completed with Outstanding Performance',
      achievements: [
        'Demonstrated strong leadership and organizational skills',
        'Successfully managed various school and community events',
        'Consistent top performer throughout academic years',
        'Excellent all-round development and extracurricular participation',
      ],
      activities: [
        'Event Management Team - Leader',
        'Community Service - Volunteer Coordinator',
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </h1>
            <p className="text-xl text-gray-400">
              Academic excellence and continuous learning journey
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  <div className="flex-shrink-0 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl text-purple-400 mb-2">
                          {edu.school}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-400">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 lg:mt-0 lg:text-right">
                        <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                          <Star className="h-5 w-5 fill-current" />
                          <span className="font-semibold">
                            {edu.percentage ? 'Percentage' : 'CGPA'}: {edu.cgpa}
                          </span>
                        </div>
                        <div className="text-sm text-green-400 font-medium">
                          {edu.status}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-lg font-semibold text-purple-300 mb-3 flex items-center space-x-2">
                          <Award className="h-5 w-5" />
                          <span>Key Achievements</span>
                        </h5>
                        <div className="space-y-2">
                          {edu.achievements.map(
                            (achievement, achievementIndex) => (
                              <div
                                key={achievementIndex}
                                className="bg-purple-900/20 border border-purple-500/20 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-purple-900/30 transition-colors duration-200"
                              >
                                {achievement}
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-blue-300 mb-3">
                          Activities & Leadership
                        </h5>
                        <div className="space-y-2">
                          {edu.activities.map((activity, activityIndex) => (
                            <div
                              key={activityIndex}
                              className="bg-blue-900/20 border border-blue-500/20 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-blue-900/30 transition-colors duration-200"
                            >
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Academic Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My educational journey reflects a commitment to excellence,
                continuous learning, and practical application of knowledge.
                From maintaining outstanding academic performance to leading
                teams and organizing events, I believe in holistic development
                that combines technical expertise with leadership capabilities.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;
