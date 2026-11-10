
import { Link } from "react-router-dom";
import projects from "../data/projects";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
  HiOutlineSparkles,
  HiArrowUp,
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">

      {/* Top Action Bar */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-xl shadow-xs hover:bg-gray-50 hover:text-blue-600 transition"
        >
          <HiArrowLeft /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <HiOutlineSparkles className="text-blue-600" />
            Professional Resume
          </span>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <HiPrinter /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/90 overflow-hidden print:shadow-none print:border-none print:rounded-none">

        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 print:hidden"></div>

        <div className="p-8 sm:p-12 print:p-0">

          {/* Header */}
          <header className="border-b border-gray-200 pb-6 mb-6">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Rafa Jahan
                </h1>

                <p className="text-lg font-bold text-blue-600 mt-1">
                  Computer Science & Engineering Undergraduate | Frontend Developer
                </p>

                <p className="text-sm text-gray-600 mt-1 max-w-xl leading-relaxed">
                  Computer Science and Engineering undergraduate passionate
                  about building responsive, user-focused web applications.
                  Experienced in academic and independent software projects,
                  with an interest in modern web technologies, problem-solving,
                  and continuous learning.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Open to Opportunities
                </span>

                <span className="text-xs text-gray-500">
                  Internship & Entry-Level Roles
                </span>
              </div>

            </div>

            {/* Contact Details */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100">

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="flex items-center gap-1.5 hover:text-blue-600 transition truncate"
              >
                <HiMail className="text-blue-600 text-base shrink-0" />
                <span className="truncate">Your Email</span>
              </a>

              <a
                href="tel:+8801XXXXXXXXX"
                className="flex items-center gap-1.5 hover:text-blue-600 transition"
              >
                <HiPhone className="text-blue-600 text-base shrink-0" />
                <span>Phone</span>
              </a>

              <div className="flex items-center gap-1.5">
                <HiLocationMarker className="text-blue-600 text-base shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <a
                href="https://github.com/rafajahan7"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition"
              >
                <FaGithub className="text-gray-900 text-base shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition"
              >
                <FaLinkedin className="text-blue-600 text-base shrink-0" />
                <span>LinkedIn</span>
              </a>

              <Link
                to="/"
                className="flex items-center gap-1.5 hover:text-blue-600 transition"
              >
                <FaGlobe className="text-indigo-600 text-base shrink-0" />
                <span>Portfolio</span>
              </Link>

            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-7">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Professional Summary
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Computer Science and Engineering undergraduate at American
              International University-Bangladesh (AIUB), with a strong
              academic background and a passion for software development.
              Experienced in developing responsive web applications using
              React, Next.js, JavaScript, Tailwind CSS, and modern web
              technologies. Familiar with backend development, REST APIs,
              database management, and authentication systems using
              Node.js, Express.js, and MongoDB. Demonstrates strong
              problem-solving abilities, adaptability, and a commitment
              to continuous learning through academic projects,
              independent development, and extracurricular involvement.
            </p>

          </section>

          {/* Technical Skills */}
          <section className="mb-7">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">

              <div className="p-3.5 bg-blue-50/40 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-900 block mb-1.5 text-xs uppercase tracking-wide">
                  Frontend Development:
                </span>

                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  HTML5, CSS3, JavaScript (ES6+), React.js, Next.js,
                  TypeScript, Tailwind CSS, Responsive Web Design,
                  React Router.
                </p>
              </div>

              <div className="p-3.5 bg-indigo-50/40 rounded-xl border border-indigo-100">
                <span className="font-bold text-indigo-900 block mb-1.5 text-xs uppercase tracking-wide">
                  Backend & Database:
                </span>

                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  Node.js, Express.js, MongoDB, REST APIs,
                  Authentication, Better Auth, Database Management.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1.5 text-xs uppercase tracking-wide">
                  Tools & Technologies:
                </span>

                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  Git, GitHub, VS Code, Vite, npm, Postman,
                  Vercel, Chrome DevTools.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1.5 text-xs uppercase tracking-wide">
                  Professional Competencies:
                </span>

                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  Problem Solving, Team Collaboration, Research,
                  Technical Documentation, Communication,
                  Adaptability, Project Management.
                </p>
              </div>

            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-7">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-4 flex items-center justify-between">

              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
                Featured Projects
              </span>

              <span className="text-xs font-normal text-gray-500 normal-case print:hidden">
                {projects.length} Projects
              </span>

            </h2>

            <div className="space-y-4">

              {projects.map((project, idx) => {

                const borderColors = [
                  "border-blue-600",
                  "border-indigo-600",
                  "border-teal-600",
                  "border-purple-600",
                ];

                const borderColor = borderColors[idx % borderColors.length];

                return (
                  <div
                    key={project.id}
                    className={`border-l-3 ${borderColor} pl-4 py-1 bg-gray-50/50 rounded-r-xl p-3 border-y border-r border-gray-100/80`}
                  >

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">

                      <div className="flex items-center gap-2 flex-wrap">

                        <h3 className="text-sm sm:text-base font-bold text-gray-900">
                          {project.title}
                        </h3>

                        {project.category && (
                          <span className="text-[11px] font-medium text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-full">
                            {project.category}
                          </span>
                        )}

                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 print:text-gray-600">

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline flex items-center gap-1 text-blue-600"
                          >
                            Live Demo <HiExternalLink />
                          </a>
                        )}

                        {project.github && (
                          <>
                            <span>•</span>

                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:underline flex items-center gap-1 text-gray-700"
                            >
                              GitHub Code <HiExternalLink />
                            </a>
                          </>
                        )}

                        <span className="print:hidden">•</span>

                        <Link
                          to={`/projects/${project.id}`}
                          className="hover:underline text-indigo-600 print:hidden"
                        >
                          Details &rarr;
                        </Link>

                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 my-1.5">

                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">
                      {project.description}
                    </p>

                    {/* Challenges */}
                    {project.challenges && project.challenges.length > 0 && (
                      <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5">

                        {project.challenges.map((challenge, cIdx) => (
                          <li key={cIdx} className="leading-relaxed">
                            {challenge}
                          </li>
                        ))}

                      </ul>
                    )}

                  </div>
                );
              })}

            </div>
          </section>

          {/* Development Experience */}
          <section className="mb-7">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Development Experience & Leadership
            </h2>

            <div className="space-y-4 text-sm">

              <div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

                  <h3 className="font-bold text-gray-900">
                    Independent Web Developer
                  </h3>

                  <span className="text-xs font-semibold text-blue-600">
                    Academic & Personal Projects
                  </span>

                </div>

                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1 mt-2">

                  <li>
                    Designed and developed responsive web applications
                    using React, Next.js, JavaScript, and Tailwind CSS.
                  </li>

                  <li>
                    Worked with backend technologies including Express.js,
                    MongoDB, authentication, and REST API integration.
                  </li>

                  <li>
                    Developed projects involving job portals, book
                    management, and hostel management systems.
                  </li>

                  <li>
                    Used Git and GitHub for source control and project
                    development workflows.
                  </li>

                </ul>
              </div>

              <div className="pt-3 border-t border-gray-100">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

                  <h3 className="font-bold text-gray-900">
                    Student Organization & Community Involvement
                  </h3>

                  <span className="text-xs font-semibold text-blue-600">
                    AIUB
                  </span>

                </div>

                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1 mt-2">

                  <li>
                    Involved in university extracurricular and
                    engineering community activities.
                  </li>

                  <li>
                    Participated in Engineering Community Club,
                    ESAB AIUB Unit, and FACE activities.
                  </li>

                  <li>
                    Participated in creative and artistic activities
                    through AIUB Arts Club.
                  </li>

                </ul>
              </div>

            </div>
          </section>

          {/* Education */}
          <section className="mb-7">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Academic Background
            </h2>

            <div className="space-y-3.5 text-sm">

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">

                <div>

                  <h3 className="font-bold text-gray-900 flex items-center gap-1.5">
                    <FaGraduationCap className="text-blue-600" />
                    B.Sc. in Computer Science & Engineering
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600">
                    American International University-Bangladesh (AIUB)
                    • Dhaka, Bangladesh
                  </p>

                </div>

                <div className="text-xs text-gray-500 sm:text-right shrink-0">

                  <span className="font-semibold text-blue-600 block">
                    CGPA: 3.81 / 4.00
                  </span>

                  <span>Expected Graduation: 2027</span>

                </div>

              </div>

              <p className="text-xs text-gray-600">

                <strong className="font-semibold text-gray-700">
                  Relevant Coursework:
                </strong>

                {" "}Data Structures & Algorithms, Object-Oriented
                Programming, Database Management Systems,
                Web Technologies, Artificial Intelligence,
                Software Engineering.

              </p>

            </div>
          </section>

          {/* Honors & Awards */}
          <section className="mb-7">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Honors & Awards
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">

                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <FaCertificate className="text-amber-500" />
                  Dean's Award
                </div>

                <p className="text-xs text-blue-600 font-medium mt-1">
                  American International University-Bangladesh
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  Recipient of the Dean's Award twice in recognition
                  of academic performance.
                </p>

              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">

                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <FaCertificate className="text-amber-500" />
                  2nd Place – Poster Competition
                </div>

                <p className="text-xs text-blue-600 font-medium mt-1">
                  AIUB
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  Recognized for creative and visual communication
                  through a university poster competition.
                </p>

              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">

                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <FaCertificate className="text-amber-500" />
                  Sher-e-Bangla Scholarship
                </div>

                <p className="text-xs text-blue-600 font-medium mt-1">
                  Academic Achievement
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  Received scholarship recognition and a medal
                  for academic performance.
                </p>

              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">

                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <FaCertificate className="text-amber-500" />
                  Quran Recitation Competition
                </div>

                <p className="text-xs text-blue-600 font-medium mt-1">
                  Citywide Competition
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  Achieved 3rd place in a citywide Quran recitation
                  competition in Saudi Arabia.
                </p>

              </div>

            </div>
          </section>

          {/* Research & Academic Interests */}
          <section className="mb-7">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Research & Academic Interests
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-gray-700">

              <p>
                <strong className="text-gray-900">
                  Research Interests:
                </strong>
                {" "}Artificial Intelligence, Machine Learning,
                Explainable AI, Data Science, and Internet of Things.
              </p>

              <p>
                <strong className="text-gray-900">
                  Academic Project:
                </strong>
                {" "}Data-Driven IoT Framework for Smart Textile
                Manufacturing in Industry 5.0 – accepted abstract.
              </p>

            </div>
          </section>

          {/* Soft Skills & Languages */}
          <section className="mb-6">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Soft Skills & Languages
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">

              <div>

                <span className="font-bold text-gray-900 block mb-1">
                  Professional Competencies:
                </span>

                <p className="leading-relaxed">
                  Analytical Thinking, Problem Solving, Creativity,
                  Team Collaboration, Adaptability, Communication,
                  Time Management.
                </p>

              </div>

              <div>

                <span className="font-bold text-gray-900 block mb-1">
                  Languages:
                </span>

                <p className="leading-relaxed">
                  <strong>Bengali:</strong> Native Proficiency
                  {" • "}
                  <strong>English:</strong> Professional Working Proficiency.
                </p>

              </div>

            </div>
          </section>

          {/* Resume Footer */}
          <footer className="pt-4 border-t border-gray-200 text-center text-xs text-gray-500">

            <p className="font-medium text-gray-600">
              Rafa Jahan • Computer Science & Engineering
            </p>

            <p className="text-[11px] text-gray-400 mt-0.5">
              Project repositories and additional academic details available upon request.
            </p>

          </footer>

        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="max-w-4xl mx-auto mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 print:hidden">

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>

          <span className="font-semibold text-gray-700">
            Open to Internship & Entry-Level Opportunities
          </span>
        </div>

        <div className="flex items-center gap-4">

          <Link
            to="/"
            className="hover:text-blue-600 font-medium transition flex items-center gap-1"
          >
            <HiArrowLeft /> Back to Home
          </Link>

          <span>•</span>

          <button
            onClick={handlePrint}
            className="hover:text-blue-600 font-medium transition flex items-center gap-1 cursor-pointer"
          >
            <HiPrinter /> Print Resume
          </button>

          <span>•</span>

          <button
            onClick={scrollToTop}
            className="hover:text-blue-600 font-medium transition flex items-center gap-1 cursor-pointer"
          >
            <HiArrowUp /> Back to Top
          </button>

        </div>

        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Rafa Jahan. Built with React.
        </p>

      </footer>
    </div>
  );
};

export default Resume;
