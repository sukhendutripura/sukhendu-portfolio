export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* TOP NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <h1 className="text-2xl font-bold">
            <span className="text-blue-500">&lt;/&gt;</span> Sukhendu
            <span className="text-blue-500"> Tripura</span>
          </h1>

          <div className="flex gap-8 text-lg">

            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About Me
            </a>

            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Get In Touch
            </a>

          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">

        {/* BLUE GLOW */}
        <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[180px] rounded-full"></div>

        <div className="relative z-10">

          <p className="text-3xl text-gray-300 mb-4">
            Hello,
          </p>

          <h1 className="text-7xl md:text-9xl font-extrabold mb-6">
            I’m <span className="text-blue-500">Sukhendu!</span>
          </h1>

          <p className="text-2xl text-gray-300 mb-8">
            M.Tech Data Engineering Student
          </p>

          <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-9">
            Passionate about Machine Learning, Data Engineering,
            Cloud Computing, NLP, and Cyber Security.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-lg shadow-[0_0_40px_rgba(37,99,235,0.7)]"
            >
              Explore My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl border border-blue-500 hover:bg-blue-500/10 transition text-lg"
            >
              Download Resume
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-8 py-32"
      >

        <h2 className="text-5xl font-bold mb-16 text-blue-400">
          About Me
        </h2>

        <div className="space-y-10 text-gray-300 text-xl leading-10">

          <p>
            I am an M.Tech Data Engineering student at NIELIT Agartala
            with interests in Machine Learning, Data Engineering,
            Cloud Computing, NLP, and Cyber Security.
          </p>

          {/* EDUCATION */}
          <div>

            <h3 className="text-3xl font-semibold text-white mb-6">
              Education
            </h3>

            <ul className="space-y-6">

              <li>
                <span className="text-blue-400 font-semibold">
                  High School:
                </span>{" "}
                St. Xavier&apos;s Higher Secondary School,
                Pathaliaghat, Bishramganj, Sepahijala,
                Tripura (2008-2018)
              </li>

              <li>
                <span className="text-blue-400 font-semibold">
                  Higher Secondary:
                </span>{" "}
                Don Bosco School, Nandannagar,
                Agartala, Tripura (2018-2020)
              </li>

              <li>
                <span className="text-blue-400 font-semibold">
                  B.Tech:
                </span>{" "}
                Computer Science and Engineering,
                National Institute of Technology Agartala,
                Jirania, Agartala, Tripura (2020-2024)
              </li>

              <li>
                <span className="text-blue-400 font-semibold">
                  M.Tech:
                </span>{" "}
                Data Engineering,
                National Institute of Electronics and
                Information Technology Agartala,
                Bodhjungnagar, RK Nagar,
                Agartala, Tripura (2024-2026)
              </li>

            </ul>

          </div>

          {/* SKILLS */}
          <div>

            <h3 className="text-3xl font-semibold text-white mb-6">
              Skills
            </h3>

            <div className="flex flex-wrap gap-4">

              {[
                "C",
                "C++",
                "Python",
                "Web Development",
                "SQL",
                "NoSQL",
                "Machine Learning",
                "Cloud Computing",
                "JavaScript",
                "React",
                "Next.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 border border-blue-500 rounded-xl text-lg hover:bg-blue-500/10 transition"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* LANGUAGES */}
          <div>

            <h3 className="text-3xl font-semibold text-white mb-6">
              Language Proficiency
            </h3>

            <div className="flex flex-wrap gap-4">

              {[
                "Kokborok (Native)",
                "English (Fluent)",
                "Bengali (Fluent)",
                "Hindi (Fluent)",
              ].map((lang) => (
                <span
                  key={lang}
                  className="px-5 py-3 border border-blue-500 rounded-xl text-lg"
                >
                  {lang}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-8 py-32"
      >

        <h2 className="text-5xl font-bold mb-16 text-blue-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-blue-500/30 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition">

            <h3 className="text-3xl font-bold mb-4">
              Malicious URL Detection
            </h3>

            <p className="text-gray-400 text-lg">
              Machine learning system to classify URLs
              into phishing, malware, defacement,
              and benign categories.
            </p>

          </div>

          <div className="border border-blue-500/30 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition">

            <h3 className="text-3xl font-bold mb-4">
              Z-Kart E-Commerce Website
            </h3>

            <p className="text-gray-400 text-lg">
              Full-stack e-commerce platform built
              using Next.js, React.js, and MongoDB.
            </p>

          </div>

        </div>

      </section>

      {/* RESUME */}
      <section
        id="resume"
        className="text-center py-32 px-8"
      >

        <h2 className="text-5xl font-bold text-blue-400 mb-10">
          Resume
        </h2>

        <p className="text-gray-400 text-xl mb-8">
          Click below to view my resume.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-[0_0_40px_rgba(37,99,235,0.7)] inline-block"
        >
          View Resume
        </a>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="text-center py-32 px-8"
      >

        <h2 className="text-5xl font-bold text-blue-400 mb-10">
          Get In Touch
        </h2>

        <p className="text-2xl text-gray-300">
          skttripura4747@gmail.com
        </p>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/20 py-10 text-center">

        <div className="flex justify-center gap-8 text-xl mb-6">

          <a
            href="https://instagram.com/sukhendutripura"
            target="_blank"
            className="hover:text-blue-400"
          >
            Instagram
          </a>

          <a
            href="https://linkedin.com/in/sukhendu-tripura-b70127356/"
            target="_blank"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/sukhendutripura"
            target="_blank"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

        </div>

        <p className="text-gray-500">
          © 2026 Sukhendu Tripura
        </p>

      </footer>

    </main>
  );
}