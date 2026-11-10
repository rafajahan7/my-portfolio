
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import {
  FaLaptopCode,
  FaHandsHelping,
  FaAward,
  FaBullhorn,
} from "react-icons/fa";

const experiences = [
  {
    role: "Web Development Projects",
    company: "Academic & Personal Projects",
    period: "Ongoing",
    type: "Project Experience",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    responsibilities: [
      "Developed Super Hostel Management System, a role-based platform for students, service staff, and hostel administrators.",
      "Worked on BookNook, a full-stack book management application using Next.js, Express.js, and MongoDB.",
      "Contributed to BazarDor, gaining practical experience in web application development.",
      "Applied frontend development, database integration, and problem-solving skills through hands-on projects.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    role: "Research & Academic Exploration",
    company: "Research and University Initiatives",
    period: "Ongoing",
    type: "Research Experience",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    responsibilities: [
      "Explored Explainable AI for EEG-based emotion recognition using machine learning models and SHAP.",
      "Worked with machine learning approaches including XGBoost, Random Forest, and neural network models.",
      "Received abstract acceptance for a research initiative titled 'Data-Driven IoT Framework for Smart Textile Manufacturing in Industry 5.0'.",
      "Developing research interests in Artificial Intelligence, Machine Learning, IoT, and data-driven applications.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "IoT",
    ],
  },
  {
    role: "Digital Marketing & Creative Projects",
    company: "Emaan Handmades",
    period: "Ongoing",
    type: "Entrepreneurial & Marketing Experience",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    responsibilities: [
      "Developing digital marketing strategies and managing social media presence.",
      "Exploring social media marketing, Meta Ads, Google Ads, SEO, and lead generation.",
      "Managing Emaan Handmades, a creative handmade business, including product development and online promotion.",
      "Creating digital content and exploring audience engagement and brand growth strategies.",
    ],
    technologies: [
      "Digital Marketing",
      "Meta Ads",
      "Google Ads",
      "SEO",
      "Social Media Marketing",
      "Content Creation",
    ],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Technical Mindset",
    desc: "Building practical applications while continuously improving my programming and software development skills.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Research-Oriented",
    desc: "Interested in exploring emerging technologies, machine learning, artificial intelligence, and research opportunities.",
  },
  {
    icon: FaHandsHelping,
    title: "Creative & Adaptable",
    desc: "Combining technical knowledge, creativity, and entrepreneurial experience to approach problems from different perspectives.",
  },
  {
    icon: FaBullhorn,
    title: "Multidisciplinary Skills",
    desc: "Bringing together computer science, digital marketing, communication, and creative problem-solving.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-blue-600 text-sm" />
          <span>My Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Practical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Experience
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          My journey across software development, research, digital
          marketing, and entrepreneurship, where I continue to
          develop practical skills and explore new opportunities.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}
                >
                  {exp.type}
                </span>

                <h3 className="text-xl font-bold text-gray-900">
                  {exp.role}
                </h3>

                <p className="text-sm font-semibold text-blue-600 mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  <HiOutlineCalendar className="text-blue-600" />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-gray-700"
                >
                  <HiOutlineCheckCircle className="text-blue-600 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-gray-400 mr-1">
                Skills:
              </span>

              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* What I Bring */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-blue-200/80 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            What I Bring to the Table
          </h3>

          <p className="text-sm text-gray-500">
            A combination of technical knowledge, research interests,
            creativity, and a willingness to keep learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valueProps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-50/40 border border-blue-100/60"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="text-lg" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
