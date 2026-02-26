import { Code, Smartphone, Palette, Zap, Accessibility } from "lucide-react";
import type React from "react";

const About: React.FC = () => {
  const passions = [
    {
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: "Responsive Guidance",
      description:
        "providing personalised learning experiences tailored to each student's needs,ensuring classroom relevance and effective delivery of lessons across various subjects and learning styles.",
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      title: "Lesson Implementation",
      description:
        "Translating curriculum goals and teaching strategies into engaging student-centric lessons that achieve clear educational outcomes.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Performance Optimization",
      description:
        "Improving study techniques and learning efficiency to boost academic performance and foster better student engagement.",
    },
    {
      icon: <Accessibility className="w-6 h-6 text-green-400" />,
      title: "Accessibility",
      description:
        "Creating inclusive learning environments that enable every student to navigate and succeed in their education with ease.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          {/* <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I’m a frontend enthusiast passionate about bringing
            designs to life. I thrive on turning ideas into elegant,
            pixel-perfect, and user-friendly web applications.
          </p> */}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left visual card */}
          <div>
            <div className="w-full h-96 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <Code className="w-24 h-24 mx-auto mb-4 text-blue-400 animate-pulse-slow" />
                <p className="text-slate-300">Tutor</p>
              </div>
            </div>
          </div>

          {/* Right text + passions */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
             I am a professional Bachelor of Education–trained tutor with experience delivering engaging, learner-centred instruction aligned to CBE and IGCSE standards.Alongside teaching, I work as a reliable Virtual Assistant, providing academic and administrative support such as lesson documentation, assessments, email and calendar management, research, and online coordination. I uniquely blend strong pedagogical expertise with digital and organizational skills to support learners, educators, and organizations in both physical and virtual learning environments.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-[1.03]"
                >
                  <div>{passion.icon}</div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-200">
                      {passion.title}
                    </h4>
                    <p className="text-xs text-slate-400">{passion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
