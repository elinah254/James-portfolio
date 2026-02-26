import React from "react";

type ExperienceItem = {
  id: string;
  title: string;
  description: string;
  subjects: string[];
  imageUrl: string;
  level: string;
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [

     {
      id: "2",
      title: "IGCSE English Facilitator",
      description:
        "Prepared learners for IGCSE examinations through differentiated instruction, text analysis, and ICT-integrated lessons that improved student performance and confidence.",
      subjects: ["English Literature", "ICT", "IGCSE Curriculum", "Exam Prep"],
      imageUrl: "/images/teaching2.jpg",
      level: "IGCSE",
    },

    {
      id: "1",
      title: "English & Literature Teacher – Junior Secondary (CBE)",
      description:
        "Delivered competency-based lessons using learner-centered approaches, guided students in project-based learning, and integrated formative assessment to enhance engagement and understanding.",
      subjects: ["English Literature", "Social Studies", "CBE", "Lesson Planning"],
      imageUrl: "/images/teaching1.jpg",
      level: "Junior Secondary",
    },
   
    {
      id: "3",
      title: "Computer packages and coding",
      description:
        "Facilitated lessons on computer packages and introductory coding for learners. Focused on hands-on practice, interactive presentations, online assignments, and collaborative digital projects to enhance students’ digital literacy and problem-solving skills.",
      subjects: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft Office",
        "Google Workspace",
        "Canva",
         "HTML, CSS",
         "React, Nextjs, Typescript",
      ],
      imageUrl: "/images/packages.jpg",
      level: "Digital literacy",
    },
    {
      id: "4",
      title: "8-4-4 Program – English Literature, Computer Studies & Life Skills",
      description:
        "Delivered 844 curriculum lessons integrating English Literature, Computer Science, and Life Skills. Focused on learner-centered activities, problem-solving, and skill-based formative assessment.",
      subjects: ["English Literature", "Computer Science", "Life Skills", "Kiswahili"],
      imageUrl: "/images/teaching4.jpg",
      level: "844 Program",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Teaching Experience
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A reflection of my classroom practice, curriculum delivery, and
            learner-centered teaching experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.imageUrl}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {exp.level}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {exp.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.subjects.map((subj, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 rounded text-xs"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;