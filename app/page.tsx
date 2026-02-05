import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const projects = [
  {
    title: "AirBnB Clone",
    image: "/img/hbnb-page.jpg",
    link: "https://github.com/Ethiopian-boy/AirBnB_clone/",
  },
  {
    title: "Alumni professional relation web application",
    image: "/img/alumnyy.png",
    link: "https://alumnyyinc.pythonanywhere.com/",
  },
  {
    title: "Bestwatch WebApp",
    image: "/img/bestwatch.png",
    link: "https://github.com/Ethiopian-boy/bestwatch/",
  },
  {
    title: "Penguin",
    image: "/img/penguin.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/penguin",
  },
  {
    title: "City skyline",
    image: "/img/day.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/city_skyline/",
  },
  {
    title: "Documentation Page",
    image: "/img/documentation.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/documentation_page/",
  },
  {
    title: "Piano",
    image: "/img/piano.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/piano/",
  },
  {
    title: "Magazine",
    image: "/img/first-page.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/magazine/",
  },
  {
    title: "Cafe Menu",
    image: "/img/cafe.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/cafe_webpage",
  },
  {
    title: "Survey Form",
    image: "/img/survey.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/Survey_Form",
  },
  {
    title: "Registration form",
    image: "/img/register.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/signup_page",
  },
  {
    title: "Calculator",
    image: "/img/js-calculator.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/calculator/",
  },
  {
    title: "Quiz page",
    image: "/img/quiz-1.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/quiz_webpage/",
  },
  {
    title: "Weather App",
    image: "/img/weather.png",
    link: "https://github.com/Ethiopian-boy/Internship-InternSavy/tree/main/Weather-App/",
  },
  {
    title: "Balance sheet",
    image: "/img/balance-sheet.png",
    link: "https://github.com/Ethiopian-boy/Responsive-web-design/tree/main/balance_sheet",
  },
]

const workExperience = [
  {
    company: "OASIS INFOBYTE",
    role: "Web Development and Designing Intern",
    period: "July 2023 - August 2023",
    responsibilities: ["Collaborating within a team to develop and maintain web applications."],
  },
  {
    company: "InternPe",
    role: "Web Developer",
    period: "05/2023 – 06/2023",
    responsibilities: [
      "Developed and maintained responsive web applications using HTML, CSS, and JavaScript.",
      "Created RESTful APIs and integrated them with the back-end using Node.js",
      "Collaborated with cross-functional teams to deliver high-quality projects within deadlines.",
    ],
  },
  {
    company: "InternSavy",
    role: "Junior Web Developer",
    period: "June 2023 - July 2023",
    responsibilities: [
      "Assisted in the development and maintenance of company websites.",
      "Performed website testing and troubleshooting to ensure optimal performance.",
      "Contributed to the implementation of responsive design and mobile optimization.",
      "Participated in code reviews and collaborated with senior developers on project tasks.",
    ],
  },
]

export default function Portfolio() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#70ace6] text-white z-50 flex justify-end px-4 md:px-12">
        <ul className="flex">
          <li>
            <Link href="#about" className="inline-block px-4 md:px-8 py-5 text-lg font-medium hover:bg-[#fd062f] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#work" className="inline-block px-4 md:px-8 py-5 text-lg font-medium hover:bg-[#fd062f] transition-colors">
              Work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="inline-block px-4 md:px-8 py-5 text-lg font-medium hover:bg-[#fd062f] transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* About Section */}
      <header id="about" className="min-h-screen bg-[#444] flex flex-col justify-center items-center px-6 pt-16">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">I am Mulubrhan</h1>
        <p className="text-xl text-gray-200 font-light italic animate-slide">A full-stack web developer</p>
        <div className="mt-6">
          <Image
            src="/img/abc.JPG"
            alt="Mulubrhan - Profile Picture"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-4 bg-[#44586e]">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">{'"These are some of my projects"'}</h2>
        <div className="h-1.5 bg-white w-1/2 rounded-full mx-auto mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              className="bg-gray-100 border-4 border-gray-100 rounded overflow-hidden group"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="py-6 px-4 text-lg font-bold text-gray-800">
                <span className="text-gray-200 text-xl group-hover:text-[#70ace6] transition-colors">{"<"}</span>
                {" "}{project.title}{" "}
                <span className="text-gray-200 text-xl group-hover:text-[#70ace6] transition-colors">{"/>"}</span>
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="https://github.com/Ethiopian-boy/"
          target="_blank"
          className="inline-block mt-16 px-6 py-3 bg-[#70ace6] text-white text-lg font-bold rounded hover:bg-[#e60e0e] transition-colors"
        >
          Show More
        </Link>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-12 px-6 bg-gradient-to-br from-[#76c9ff] to-[#f7ffde]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          
          {workExperience.map((job, index) => (
            <div key={index} className="mb-8 text-left">
              <h3 className="text-2xl font-semibold mt-5">{job.company}</h3>
              <p className="text-sm text-gray-500 mb-4">{job.role} | {job.period}</p>
              <ul className="space-y-2 mb-4">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="text-gray-700 pl-5 relative before:content-['•'] before:absolute before:left-0">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="h-1.5 bg-white w-1/2 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[80vh] bg-[#444] text-white flex flex-col justify-center items-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{"Let's work together..."}</h2>
        <p className="text-lg font-semibold mb-12">Need help with your project? Just ask!</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <Link
            href="https://www.linkedin.com/in/mulubrhan-birhanu-94a19923b"
            target="_blank"
            className="flex items-center gap-2 text-xl font-bold hover:-translate-y-1 transition-transform"
          >
            <Linkedin size={24} />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Ethiopian-boy"
            target="_blank"
            className="flex items-center gap-2 text-xl font-bold hover:-translate-y-1 transition-transform"
          >
            <Github size={24} />
            Github
          </Link>
          <Link
            href="mailto:legesse.mulubrhan@gmail.com"
            className="flex items-center gap-2 text-xl font-bold hover:-translate-y-1 transition-transform"
          >
            <Mail size={24} />
            Mail
          </Link>
          <Link
            href="tel:+919714950255"
            className="flex items-center gap-2 text-xl font-bold hover:-translate-y-1 transition-transform"
          >
            <Phone size={24} />
            Call Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-[#70ace6] py-6 px-6 bg-[#444] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg">© Copyright</p>
          <p className="text-lg">
            This site created by{" "}
            <Link
              href="https://www.linkedin.com/in/mulubrhan-birhanu-94a19923b"
              target="_blank"
              className="underline hover:text-[#70ace6]"
            >
              Mulubrhan
            </Link>
          </p>
        </div>
      </footer>
    </main>
  )
}
