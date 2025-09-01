import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Award,
  Code,
  FileText,
  Users,
  Brain,
  Sparkles,
  Rocket,
  Zap,
  Layers,
  Database,
  Cloud,
  Terminal,
  Palette,
  Target,
} from "lucide-react";
import { Color } from "three/src/Three.Core.js";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [navBackground, setNavBackground] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll handler for navigation background
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    // Observe all elements with scroll animation classes
    const elementsToObserve = document.querySelectorAll(
      ".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale",
    );
    elementsToObserve.forEach((el) => observerRef.current?.observe(el));

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thanks for your message! I'll get back to you soon.");
  };

  const navigationItems = [
    "About",
    "Projects",
    "Publications",
    "Experience",
    "Certifications",
    "Skills",
    "Connect",
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          navBackground
            ? "glass backdrop-blur-2xl border-b border-primary/20 shadow-glass"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-blue rounded-xl flex items-center justify-center shadow-blue">
                <span className="text-white font-bold text-lg">AS</span>
              </div>
              <div className="text-2xl font-bold gradient-text-blue">
                Aditya Singh
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 text-foreground/70 hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-lg font-medium relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 gradient-blue transition-all duration-300 group-hover:w-3/4 rounded-full"></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl glass hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="text-primary" />
                ) : (
                  <Menu size={24} className="text-primary" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="glass-dark rounded-2xl border border-white/10 p-6">
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("connect")}
                  className="w-full mt-4 gradient-blue text-white"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover bg-fixed"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-black/75"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        <div
          className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm text-muted-foreground animate-fade-in-up shadow-glass">
            <Sparkles size={16} className="text-primary animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text-blue animate-fade-in-up animation-delay-500">
            Hi !, I'm Aditya
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light animate-fade-in-up animation-delay-1000">
            Data Science & ML Engineer
          </p>

          <p className="text-lg text-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-1500">
            Bridging the gap between cutting-edge research and real-world
            technology solutions. I create innovative applications that push the
            boundaries of what's possible, with a passion for research, clean
            architecture, and meaningful impact through technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-2000">
            <Button
              size="lg"
              onClick={() => scrollToSection("publications")}
              className="group shadow-blue-lg hover:shadow-blue gradient-blue text-white transition-all duration-300 px-8"
            >
              <Rocket
                size={20}
                className="mr-2 group-hover:rotate-12 transition-transform duration-300"
              />
              View My Research
              <ChevronDown
                className="ml-2 group-hover:translate-y-1 transition-transform duration-300"
                size={16}
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("connect")}
              className="glass hover:glass-dark border-primary/30 hover:border-primary/60 text-primary hover:text-primary transition-all duration-300 hover:scale-105 px-8"
            >
              <Zap size={20} className="mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-8 animate-fade-in-up animation-delay-2000">
            {[
              {
                icon: Github,
                href: "https://github.com/Aditya54Singh",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/aditya-kumar-singh-b55735249/",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 shadow-glass hover:shadow-blue group"
                style={{ animationDelay: `${2200 + index * 100}ms` }}
              >
                <Icon
                  size={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-4 glass rounded-2xl shadow-glass">
            <ChevronDown size={24} className="text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="scroll-mt-28 py-32 relative scroll-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">
                About Me
              </h2>
              <div className="w-24 h-1 gradient-blue mx-auto scroll-fade-in animation-delay-500 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 scroll-slide-left">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  Hi! I'm Aditya,I'm a Data Science & AI enthusiast with a
                  strong foundation in machine learning, deep learning, and
                  computer vision. I enjoy transforming raw data into meaningful
                  insights and building intelligent systems that solve
                  real-world problems I've worked on projects ranging from image
                  processing with OpenCV, to deep learning models CNNs, ANN. a
                </p>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  My work spans multiple disciplines, from computer science to
                  Machine learning, with a focus on creating meaningful impact
                  through technology. I'm passionate about open science,
                  collaborative research, and building tools that empower
                  others.
                </p>

                <div className="grid md:grid-cols-2 gap-8 pt-8">
                  <Card className="glass border-primary/20 hover:border-primary/40 shadow-glass hover:shadow-blue transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <Brain
                          className="mr-3 p-1 bg-primary/10 rounded-lg"
                          size={28}
                        />
                        Research Areas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <div className="w-2 h-2 gradient-blue rounded-full mr-3"></div>
                          Machine Learning
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 gradient-blue rounded-full mr-3"></div>
                          OpenCV
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 gradient-blue rounded-full mr-3"></div>
                          Data Science
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 gradient-blue rounded-full mr-3"></div>
                          Software Engineering
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass border-primary/20 hover:border-primary/40 shadow-glass hover:shadow-blue transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <Award
                          className="mr-3 p-1 bg-primary/10 rounded-lg"
                          size={28}
                        />
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <div className="w-2 h-2 gradient-blue rounded-full mr-3"></div>
                          Bachelors of engineering in Computer Science,
                          Chandigarh University
                        </li>
                        <li className="flex items-center"></li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative scroll-slide-right">
                <div className="relative w-96 h-96 mx-auto">
                  <div className="absolute inset-0 gradient-blue rounded-full animate-pulse-slow opacity-20"></div>
                  <div className="absolute inset-4 gradient-blue rounded-full flex items-center justify-center text-white text-7xl font-bold shadow-blue-lg">
                    AS
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-bounce animation-delay-1000 shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="scroll-mt-28 py-32 relative scroll-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">
              Featured Projects
            </h2>
            <div className="w-24 h-1 gradient-blue mx-auto mb-6 scroll-fade-in animation-delay-500 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in animation-delay-1000">
              Practical applications of my research, turning ideas into
              impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Research Platform",
                description:
                  "A collaborative research platform for managing experiments, data, and publications with real-time collaboration.",
                icon: "🔬",
                gradient: "from-primary/20 to-accent/20",
                tags: ["React", "Node.js", "PostgreSQL"],
              },
              {
                title: "ML Code Assistant",
                description:
                  "An AI-powered code review assistant that provides intelligent suggestions and identifies potential issues.",
                icon: "🤖",
                gradient: "from-emerald-400/20 to-teal-400/20",
                tags: ["Python", "TensorFlow", "FastAPI"],
              },
              {
                title: "Data Visualization Suite",
                description:
                  "Interactive data visualization platform for exploring large datasets with real-time analytics capabilities.",
                icon: "📊",
                gradient: "from-teal-400/20 to-cyan-400/20",
                tags: ["Vue.js", "D3.js", "Apache Spark"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`group glass border-primary/20 hover:border-primary/40 shadow-glass hover:shadow-blue-lg transition-all duration-500 hover:scale-105 scroll-scale`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-full h-56 bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-glass`}
                  >
                    <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-2xl font-bold gradient-text-blue">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 glass rounded-full text-sm text-primary border border-primary/20 hover:border-primary/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      asChild
                      className="gradient-blue text-white shadow-blue w-full"
                    >
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section
        id="publications"
        className="scroll-mt-28 py-32 scroll-fade-in relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(800px 400px at 50% -10%, hsl(var(--primary) / 0.25), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">
              Research & Publications
            </h2>
            <div className="w-24 h-1 gradient-blue mx-auto mb-6 scroll-fade-in animation-delay-500 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in animation-delay-1000">
              My research contributions in machine learning, HCI, and software
              engineering.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                title:
                  "A Systematic Review of Machine Learning Algorithms for Detection of Polycystic Ovary Syndrome (PCOS)",
                authors: "Aditya Kumar Singh , Deepika Rani",
                venue:
                  "International Journal of Innovative Science and Research Technology",
                description:
                  "This paper presents a comprehensive analysis of machine learning techniques for automated code review, introducing a novel framework that improves review accuracy by 34%.",
                icon: FileText,
                paperLink:
                  "https://www.ijisrt.com/a-systematic-review-of-machine-learning-algorithms-for-detection-of-polycystic-ovary-syndrome-pcos",
                codeLink: "https://github.com",
              },
              {
                title:
                  "Thermal Image Classification under Adverse Conditions using Ensemble Learning",
                authors: "Aditya Kumar Singh, Akash Choudhary, Deepika Rani",
                venue:
                  "ACM Conference on Human Factors in Computing Systems (CHI), 2023",
                description:
                  "Enhancing the model abilities to deal with disruptions like fog interference, varying lighting conditions and thermal distortions. In noisy situations the ensemble model showcases accuracy and robustness compared to a Convolutional Neural Network(CNN) baseline model.",
                icon: Users,
                paperLink: "https://dl.acm.org",
                codeLink: "https://github.com",
              },
            ].map((pub, index) => (
              <Card
                key={index}
                className={`glass border-primary/20 hover:border-primary/40 shadow-glass hover:shadow-blue-lg transition-all duration-500 hover:scale-[1.02] scroll-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-left mb-3 text-2xl font-bold gradient-text-blue">
                        "{pub.title}"
                      </CardTitle>
                      <CardDescription className="text-left text-lg">
                        <strong className="text-primary">
                          {pub.authors.split(",")[0]}
                        </strong>
                        {pub.authors.substring(pub.authors.indexOf(","))}
                        <br />
                        <em className="text-muted-foreground">{pub.venue}</em>
                      </CardDescription>
                    </div>
                    <div className="p-3 glass rounded-2xl shadow-glass">
                      <pub.icon className="text-primary" size={24} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
                    {pub.description}
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="glass border-primary/30 hover:border-primary/60"
                    >
                      <a
                        href={pub.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText size={16} className="mr-2" />
                        Paper
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="scroll-mt-28 py-32 scroll-fade-in relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(700px 400px at -10% 20%, hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(600px 300px at 110% 80%, hsl(var(--accent) / 0.12), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">
              Experience
            </h2>
            <div className="w-24 h-1 gradient-blue mx-auto mb-6 scroll-fade-in animation-delay-500 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in animation-delay-1000">
              My professional experience in data science and analytics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: "Data Science Intern",
                  company: "Celebal Technologies",
                  period: "Summer 2025",
                  description:
                    "Worked on machine learning projects, data analysis, and model development. Gained hands-on experience with real-world datasets and production ML pipelines.",
                  icon: Brain,
                  skills: [
                    "Python",
                    "TensorFlow",
                    "Data Analysis",
                    "ML Models",
                  ],
                },
                {
                  title: "Data Analyst Intern",
                  company: "Summer Camp",
                  period: "Summer 2024",
                  description:
                    "Performed data analysis, created visualizations, and supported business intelligence initiatives. Developed reporting dashboards and data-driven insights.",
                  icon: Database,
                  skills: ["SQL", "Pandas", "Seaborn", "Data Visualization"],
                },
              ].map((experience, index) => (
                <Card
                  key={index}
                  className="glass border-primary/20 hover:border-primary/40 shadow-glass hover:shadow-blue-lg transition-all duration-500 hover:scale-[1.02] scroll-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold gradient-text-blue mb-2">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="text-lg mb-4">
                          <span className="text-primary font-semibold">
                            {experience.company}
                          </span>
                          <span className="text-muted-foreground ml-2">
                            • {experience.period}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="p-3 glass rounded-2xl shadow-glass">
                        <experience.icon className="text-primary" size={24} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 glass rounded-full text-sm text-primary border border-primary/20 hover:border-primary/50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="scroll-mt-28 py-32 scroll-fade-in relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-mesh opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">
              Certifications
            </h2>
            <div className="w-24 h-1 gradient-blue mx-auto mb-6 scroll-fade-in animation-delay-500 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in animation-delay-1000">
              Professional certifications and achievements that validate my
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "AWS Solutions Architect",
                subtitle: "Professional Level",
                issued: "March 2024",
                valid: "March 2027",
                icon: Award,
                gradient: "from-orange-400/20 to-red-400/20",
              },
              {
                title: "Google Cloud ML Engineer",
                subtitle: "Professional Certification",
                issued: "January 2024",
                valid: "January 2026",
                icon: Brain,
                gradient: "from-emerald-400/20 to-teal-400/20",
              },
              {
                title: "Certified Kubernetes Admin",
                subtitle: "CNCF Certification",
                issued: "November 2023",
                valid: "November 2026",
                icon: Code,
                gradient: "from-teal-400/20 to-cyan-400/20",
              },
              {
                title: "PMP Certification",
                subtitle: "Project Management Professional",
                issued: "September 2023",
                valid: "September 2026",
                icon: BookOpen,
                gradient: "from-purple-400/20 to-pink-400/20",
              },
              {
                title: "Certified Ethical Hacker",
                subtitle: "EC-Council CEH",
                issued: "July 2023",
                valid: "July 2026",
                icon: Award,
                gradient: "from-red-400/20 to-orange-400/20",
              },
              {
                title: "Microsoft Azure Developer",
                subtitle: "Associate Level",
                issued: "May 2023",
                valid: "May 2025",
                icon: Code,
                gradient: "from-blue-400/20 to-indigo-400/20",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className={`glass border-primary/20 hover:border-primary/40 shadow-glass hover:shadow-blue transition-all duration-500 hover:scale-105 scroll-scale`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center shadow-glass`}
                  >
                    <cert.icon className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {cert.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-1 mb-6 text-sm text-muted-foreground">
                    <p>Issued: {cert.issued}</p>
                    <p>Valid until: {cert.valid}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="glass border-primary/30 hover:border-primary/60 w-full"
                  >
                    <a
                      href="https://aws.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="scroll-mt-28 py-32 relative overflow-hidden scroll-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/10"></div>

        {/* Floating background elements */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute w-32 h-32 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ top: "10%", left: "15%" }}
          ></div>
          <div
            className="absolute w-24 h-24 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"
            style={{ top: "60%", right: "20%" }}
          ></div>
          <div
            className="absolute w-20 h-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"
            style={{ bottom: "20%", left: "25%" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 gradient-blue mx-auto mb-6 scroll-fade-in animation-delay-500 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in animation-delay-1000">
              My technical skills and areas of expertise in data science and
              software development.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Core Competencies - Flowing Design */}
            <div className="mb-16 scroll-fade-in">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="p-3 gradient-blue rounded-2xl shadow-blue">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text-blue">
                    Core Competencies
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mb-16">
                {["DSA", "ML", "DL", "Data Science", "Data Analysis"].map(
                  (skill, index) => (
                    <div
                      key={index}
                      className="group relative px-8 py-4 glass rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-blue cursor-default"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute inset-0 gradient-blue opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                      <span className="relative text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="absolute -top-1 -right-1 w-3 h-3 gradient-blue rounded-full animate-pulse opacity-50"></div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Technical Skills - Tag Cloud Style */}
            <div className="scroll-fade-in animation-delay-500">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="p-3 gradient-accent rounded-2xl shadow-blue">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text-blue">
                    Technical Skills
                  </h3>
                </div>
              </div>

              {/* Linear grid of technical skills with logos */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {[
                  {
                    name: "Python",
                    logo: "https://cdn.simpleicons.org/python/3776AB",
                  },
                  {
                    name: "TensorFlow",
                    logo: "https://cdn.simpleicons.org/tensorflow/FF6F00",
                  },
                  {
                    name: "C++",
                    logo: "https://cdn.simpleicons.org/cplusplus/00599C",
                  },
                  {
                    name: "PyTorch",
                    logo: "https://cdn.simpleicons.org/pytorch/EE4C2C",
                  },
                  {
                    name: "SQL (PostgreSQL)",
                    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
                  },
                  {
                    name: "Pandas",
                    logo: "https://cdn.simpleicons.org/pandas/150458",
                  },
                  {
                    name: "OpenCV",
                    logo: "https://cdn.simpleicons.org/opencv/5C3EE8",
                  },
                  {
                    name: "FastAPI",
                    logo: "https://cdn.simpleicons.org/fastapi/009688",
                  },
                  {
                    name: "Seaborn",
                    logo: "https://cdn.simpleicons.org/seaborn/4C72B0",
                  },
                  {
                    name: "GitHub",
                    logo: "https://cdn.simpleicons.org/github/ffffff",
                  },
                  {
                    name: "DBMS (MySQL)",
                    logo: "https://cdn.simpleicons.org/mysql/4479A1",
                  },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-4 glass rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 shrink-0 filter grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Categories - Minimalist */}
            <div className="mt-20 scroll-fade-in animation-delay-1000">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Data Science",
                    icon: "🔬",
                    description: "ML, DL, Data Analysis",
                    accent: "from-blue-500/20 to-cyan-500/20",
                  },
                  {
                    title: "Programming",
                    icon: "💻",
                    description: "Python, C++, Algorithms",
                    accent: "from-purple-500/20 to-pink-500/20",
                  },
                  {
                    title: "Tools & Frameworks",
                    icon: "🛠️",
                    description: "TensorFlow, PyTorch, APIs",
                    accent: "from-emerald-500/20 to-teal-500/20",
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="group text-center p-8 rounded-3xl glass hover:glass-dark border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${category.accent} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-glass`}
                    >
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 gradient-text-blue">
                      {category.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section
        id="connect"
        className="scroll-mt-28 py-32 scroll-fade-in relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(900px 450px at 50% 110%, hsl(var(--primary) / 0.25), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 scroll-fade-in">
                Let's Connect
              </h2>
              <div className="w-24 h-1 gradient-blue mx-auto mb-6 scroll-fade-in animation-delay-500 rounded-full"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in animation-delay-1000">
                Interested in collaboration, research opportunities, or just
                want to chat? I'd love to hear from you.
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="scroll-fade-in">
                <h3 className="text-3xl font-semibold mb-8 gradient-text-blue">
                  Let's start a conversation
                </h3>
                <p className="text-xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                  I'm always interested in hearing about new research
                  opportunities, collaborative projects, and innovative ideas.
                  Whether you're looking for a research partner, need technical
                  consultation, or want to discuss the latest in technology and
                  research, I'd love to connect.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Mail,
                      text: "alex@example.com",
                      href: "mailto:alex@example.com",
                      label: "Email",
                    },
                    {
                      icon: Github,
                      text: "github.com/aditya",
                      href: "https://github.com/Aditya54Singh",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      text: "linkedin.com/in/Aditya",
                      href: "https://www.linkedin.com/in/aditya-kumar-singh-b55735249/",
                      label: "LinkedIn",
                    },
                  ].map(({ icon: Icon, text, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center p-8 glass rounded-3xl hover:shadow-blue-lg transition-all duration-500 hover:scale-105 shadow-glass border border-primary/10 hover:border-primary/30"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-20 h-20 mb-6 glass rounded-2xl flex items-center justify-center shadow-glass group-hover:scale-110 group-hover:shadow-blue transition-all duration-300">
                        <Icon
                          className="text-primary group-hover:scale-110 transition-transform duration-300"
                          size={32}
                        />
                      </div>
                      <h4 className="text-xl font-bold mb-2 gradient-text-blue">
                        {label}
                      </h4>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass border-t border-primary/10 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center shadow-blue">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <div className="text-2xl font-bold gradient-text-blue">
                  Aditya
                </div>
              </div>
              <p className="text-muted-foreground">
                © 2024 Aditya Singh. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Aditya54Singh",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/aditya-kumar-singh-b55735249/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-2xl text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 shadow-glass hover:shadow-blue group"
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
