
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaAward } from "react-icons/fa";

const educationHistory = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "Expected Graduation: September 2027",
    grade: "CGPA: 3.81 / 4.00",
    description:
      "Currently pursuing an undergraduate degree in Computer Science & Engineering, developing knowledge and practical skills in software development, artificial intelligence, machine learning, research, and modern web technologies.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Technologies",
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Computer Networks",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Milestone College",
    location: "Dhaka, Bangladesh",
    period: "Completed",
    grade: "GPA: 5.00 / 5.00",
    description:
      "Completed higher secondary education in the Science group with a perfect GPA, building a strong foundation in science, mathematics, and analytical problem-solving.",
    coursework: [
      "Physics",
      "Chemistry",
      "Higher Mathematics",
      "Information & Communication Technology",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Milestone College",
    location: "Dhaka, Bangladesh",
    period: "Completed",
    grade: "GPA: 5.00 / 5.00",
    description:
      "Completed secondary education in the Science group with a perfect GPA, demonstrating strong academic performance.",
    coursework: [
      "General Science",
      "Mathematics",
      "Physics",
      "Chemistry",
    ],
  },
];

const achievements = [
  {
    title: "Dean's Award",
    issuer: "American International University-Bangladesh",
    year: "Awarded Twice",
    desc: "Recognized twice for outstanding academic performance and excellence in university studies.",
  },
  {
    title: "Sher-e-Bangla Scholarship",
    issuer: "Academic Achievement Recognition",
    year: "Class 3",
    desc: "Received the Sher-e-Bangla Scholarship along with a medal presented by the Education Minister in recognition of academic achievement.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-blue-600 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Education
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          My educational journey, academic achievements, and continuous
          learning experiences in computer science and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Academic Qualifications */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-blue-600" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h4>

                    <p className="text-sm font-semibold text-blue-600 mt-1">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400" />
                        {edu.period}
                      </span>

                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {edu.description}
                </p>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1">
                    <HiOutlineBookOpen className="text-blue-600 text-sm" />
                    Key Subjects / Coursework
                  </h5>

                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-2.5 py-1.5 rounded-md bg-gray-50 text-gray-700 border border-gray-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Awards & Honors */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaAward className="text-amber-500" />
            <span>Awards & Honors</span>
          </h3>

          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:border-amber-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <HiOutlineBadgeCheck className="text-xl" />
                  </div>

                  <span className="text-xs font-bold text-amber-700 bg-amber-50/80 border border-amber-200 px-2 py-1 rounded">
                    {achievement.year}
                  </span>
                </div>

                <h4 className="font-bold text-gray-900 text-sm mt-3">
                  {achievement.title}
                </h4>

                <p className="text-xs font-semibold text-blue-600 mt-1">
                  {achievement.issuer}
                </p>

                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {achievement.desc}
                </p>
              </div>
            ))}

            {/* Continuous Learning Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md">
              <h4 className="font-bold text-base mb-2">
                Continuous Learner
              </h4>

              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                Continuously exploring new technologies, strengthening
                problem-solving abilities, participating in research,
                and building practical projects to grow as a computer
                science professional.
              </p>

              <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Learning • Building • Growing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
