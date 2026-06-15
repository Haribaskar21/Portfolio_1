import React from "react";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16" id="about">
      <h1 className="text-white text-5xl md:text-6xl font-bold text-center mb-12">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="grid md:grid-cols-8 gap-6">

        {/* Education */}
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-600/20 to-orange-700/20"></div>

          <div className="relative flex flex-col md:flex-row p-6 gap-4">
            <img
              src={book}
              alt="education"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Education
              </h2>

              <p className="text-white/70 leading-relaxed">
                <span className="font-semibold text-orange-400">
                  Bachelor of Computer Applications (BCA)
                </span>
                <br />
                Vels Institute of Science, Technology & Advanced Studies,
                Chennai (2021 – 2024)
                <br />
                <br />
                Built a strong foundation in software development, databases,
                and web technologies. Worked on full-stack applications,
                RESTful APIs, authentication systems, and modern frontend
                development using React and the MERN Stack.
              </p>
            </div>
          </div>
        </div>

        {/* Problem Solving */}
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-600/20 to-orange-700/20"></div>

          <div className="relative flex flex-col md:flex-row p-6 gap-4">
            <img
              src={finance}
              alt="problem-solving"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Problem Solving
              </h2>

              <p className="text-white/70 leading-relaxed">
                Strong analytical and debugging skills with the ability to
                identify complex issues, optimize performance, and build
                scalable solutions. Passionate about writing clean,
                maintainable, and efficient code.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-600/20 to-orange-700/20"></div>

          <div className="relative flex flex-col md:flex-row p-6 gap-4">
            <img
              src={pc}
              alt="technical-skills"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Technical Skills
              </h2>

              <p className="text-white/70 leading-relaxed">
                <span className="font-semibold text-orange-400">
                  Frontend:
                </span>{" "}
                React.js, Next.js, JavaScript, TypeScript, Tailwind CSS
                <br />
                <br />
                <span className="font-semibold text-orange-400">
                  Backend:
                </span>{" "}
                Node.js, Express.js
                <br />
                <br />
                <span className="font-semibold text-orange-400">
                  Database:
                </span>{" "}
                MongoDB, MySQL
                <br />
                <br />
                <span className="font-semibold text-orange-400">
                  Tools:
                </span>{" "}
                Git, GitHub, JWT, REST APIs, Redis, Vercel, Netlify
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-600/20 to-orange-700/20"></div>

          <div className="relative flex flex-col md:flex-row p-6 gap-4">
            <img
              src={card}
              alt="experience"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Professional Experience
              </h2>

              <div className="space-y-4 text-white/70">

                <div>
                  <h3 className="text-orange-400 font-semibold">
                    Full Stack Developer Intern – TechSlideITS
                  </h3>
                  <p>
                    Developed responsive websites, landing pages, and business
                    applications using React.js, Tailwind CSS, Node.js, and
                    MongoDB. Worked on API integration, UI/UX improvements, and
                    performance optimization while following industry-standard
                    development practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-orange-400 font-semibold">
                    Full Stack Developer Intern – Altruisty
                  </h3>
                  <p>
                    Designed and developed responsive user interfaces,
                    implemented interactive challenge systems, integrated APIs,
                    and improved application performance to enhance user
                    engagement and overall experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-orange-400 font-semibold">
                    Web Developer Intern – CodSoft
                  </h3>
                  <p>
                    Built responsive websites including a portfolio website,
                    landing page, and calculator application while improving
                    UI/UX, mobile responsiveness, and frontend performance.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-lg">
          <h3 className="text-4xl font-bold text-orange-400">15+</h3>
          <p className="text-white/70 mt-2">Projects Completed</p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-lg">
          <h3 className="text-4xl font-bold text-orange-400">3+</h3>
          <p className="text-white/70 mt-2">Internships</p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-lg">
          <h3 className="text-4xl font-bold text-orange-400">10+</h3>
          <p className="text-white/70 mt-2">Technologies</p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-lg">
          <h3 className="text-4xl font-bold text-orange-400">100%</h3>
          <p className="text-white/70 mt-2">Responsive Design</p>
        </div>
      </div>
    </section>
  );
};

export default About;