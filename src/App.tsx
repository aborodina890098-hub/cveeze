import { motion } from "motion/react";
import { 
  Sparkles, 
  Briefcase, 
  Users, 
  ShoppingBag, 
  Target, 
  Globe, 
  Network,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Languages,
  Rocket,
  StepForward,
  Lightbulb,
  Search,
  UserCheck,
  Headset,
  MessageSquare,
  Instagram,
  Facebook,
  Cpu
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = ({ lang, setLang, theme, setTheme, onLogoClick, onNavigate }: { lang: string, setLang: (l: string) => void, theme: string, setTheme: (t: string) => void, onLogoClick: () => void, onNavigate: (v: any) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = lang === 'ar' ? [
    { name: "نبذة عنا", href: "#about" },
    { name: "فريقنا", href: "#team" },
    { name: "تواصل معنا", href: "#contact" },
    { name: "خدماتنا الاحترافية", view: "professional-services" },
    { name: "الأسعار", view: "pricing" },
    { name: "القوالب", view: "cv-builder" },
  ] : [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Contact Us", href: "#contact" },
    { name: "Professional Services", view: "professional-services" },
    { name: "Pricing", view: "pricing" },
    { name: "Templates", view: "cv-builder" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? "glass-dark py-3 shadow-lg" : "glass py-3 shadow-sm") : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={onLogoClick} className="text-2xl font-bold text-gradient">CVEEEZ</button>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.href ? (
                <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${theme === 'dark' ? "text-slate-300 hover:text-brand-purple" : "text-slate-600 hover:text-brand-blue"}`}>
                  {link.name}
                </a>
              ) : (
                <button key={link.name} onClick={() => onNavigate(link.view)} className={`text-sm font-medium transition-colors ${theme === 'dark' ? "text-slate-300 hover:text-brand-purple" : "text-slate-600 hover:text-brand-blue"}`}>
                  {link.name}
                </button>
              )
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-full transition-colors ${theme === 'dark' ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className={`p-2 rounded-full transition-colors flex items-center gap-2 ${theme === 'dark' ? "bg-slate-800 text-slate-300 hover:bg-slate-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            <Languages size={20} />
            <span className="text-xs font-bold uppercase">{lang === 'ar' ? 'EN' : 'AR'}</span>
          </button>

          <button className={`lg:hidden p-2 ${theme === 'dark' ? "text-white" : "text-slate-900"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full glass border-t border-slate-100 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            link.href ? (
              <a key={link.name} href={link.href} className="text-lg font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ) : (
              <button key={link.name} onClick={() => { onNavigate(link.view); setIsMobileMenuOpen(false); }} className="text-lg font-medium text-slate-700 text-right">
                {link.name}
              </button>
            )
          ))}
          <hr className="border-slate-100" />
          <a href="#login" className="text-lg font-medium text-slate-700">تسجيل الدخول</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ lang, theme, t, onStart, onBrowseJobs }: { lang: string, theme: string, t: (ar: string, en: string) => string, onStart: () => void, onBrowseJobs: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold mb-6 animate-pulse">
            <Sparkles size={14} />
            {t("الذكاء الاصطناعي الجديد كلياً", "All-New Artificial Intelligence")}
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            {t("اصنع مستقبلك المهني", "Build Your Career Future")} <br />
            <span className="text-gradient">{t("بذكاء واحترافية", "With Intelligence & Professionalism")}</span>
          </h1>
          <p className={`text-lg mb-8 max-w-xl leading-relaxed ${theme === 'dark' ? "text-slate-400" : "text-slate-600"}`}>
            {t("منصة Cveeez تجمع بين قوة الذكاء الاصطناعي لبناء سيرتك الذاتية، وشبكة واسعة من الوظائف، ومجتمع مهني متكامل.", "Cveeez platform combines the power of AI to build your CV, a wide network of jobs, and an integrated professional community.")}
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onStart}
              className="group relative bg-brand-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              {t("اصنع سيرتك الآن", "Create Your CV Now")}
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
            <button 
              onClick={onBrowseJobs}
              className={`px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 border ${theme === 'dark' ? "text-slate-200 border-slate-800 hover:bg-slate-900" : "text-slate-700 border-slate-200 hover:bg-slate-50"}`}
            >
              {t("تصفح الوظائف", "Browse Jobs")}
              <ArrowLeft size={18} className={lang === 'en' ? "rotate-180" : ""} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`${theme === 'dark' ? "glass-dark" : "glass"} p-6 rounded-2xl shadow-xl`}
            >
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-4">
                <CheckCircle2 />
              </div>
              <h3 className="font-bold mb-1">ATS Friendly</h3>
              <p className={`text-xs ${theme === 'dark' ? "text-slate-500" : "text-slate-500"}`}>{t("متوافق مع أنظمة التوظيف", "Compatible with hiring systems")}</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`${theme === 'dark' ? "glass-dark" : "glass"} p-6 rounded-2xl shadow-xl mt-8`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm">AI Analysis</h3>
                <span className="text-brand-purple font-bold">98%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-brand-purple"
                />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`${theme === 'dark' ? "glass-dark" : "glass"} p-6 rounded-2xl shadow-xl`}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-brand-blue mb-4">
                <FileText />
              </div>
              <h3 className="font-bold mb-1">PDF Export</h3>
              <p className="text-xs text-slate-500">{t("تصدير احترافي فوري", "Instant Professional Export")}</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className={`${theme === 'dark' ? "glass-dark" : "glass"} p-6 rounded-2xl shadow-xl mt-8`}
            >
              <div className={`flex ${lang === 'ar' ? "-space-x-2 space-x-reverse" : "-space-x-2"} mb-4`}>
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" referrerPolicy="no-referrer" />
                ))}
              </div>
              <h3 className="font-bold text-sm">{t("+10,000 مستخدم", "+10,000 Users")}</h3>
              <p className="text-xs text-slate-500">{t("يثقون بنا حول العالم", "Trust us worldwide")}</p>
            </motion.div>
          </div>
          
          {/* Decorative Circle */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border rounded-full -z-10 opacity-50 ${theme === 'dark' ? "border-slate-800" : "border-slate-200"}`} />
        </motion.div>
      </div>
    </section>
  );
};

const Newsletter = ({ lang, theme, t }: { lang: string, theme: string, t: (ar: string, en: string) => string }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-brand-blue to-brand-purple rounded-3xl p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/20">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center relative">
              <Mail size={32} />
              <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{t("اشترك في نشرتنا البريدية", "Subscribe to our Newsletter")}</h2>
              <p className="text-white/80">{t("احصل على آخر العروض والنصائح المهنية مباشرة إلى بريدك الإلكتروني", "Get the latest offers and career tips directly to your email")}</p>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl border border-white/30 text-center"
              >
                <p className="font-bold">{t("سوف نبث لك كل التحديثات والعروض الخاصة بنا", "We will send you all our updates and offers")}</p>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("بريدك الإلكتروني", "Your Email")} 
                  className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 min-w-[300px]"
                />
                <button 
                  onClick={handleSubscribe}
                  className="px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-slate-100 transition-all"
                >
                  {t("اشترك", "Subscribe")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ lang, theme, t, onStartCV, onBrowseJobs, onProfessionalServices, onDiscoverMore }: { lang: string, theme: string, t: (ar: string, en: string) => string, onStartCV: () => void, onBrowseJobs: () => void, onProfessionalServices: () => void, onDiscoverMore: (type: string) => void }) => {
  const services = [
    {
      title: t("صانع السيرة الذاتية بالذكاء الاصطناعي", "AI CV Builder"),
      desc: t("أنشئ سيرة ذاتية احترافية في دقائق باستخدام تقنيات الذكاء الاصطناعي المتقدمة.", "Create a professional CV in minutes using advanced AI technologies."),
      icon: <Sparkles className="text-brand-purple" />,
      bg: theme === 'dark' ? "bg-purple-900/20" : "bg-purple-50",
      action: onStartCV,
      type: 'ai-cv'
    },
    {
      title: t("بوابة الوظائف", "Job Portal"),
      desc: t("تصفح آلاف الوظائف من كبرى الشركات وقدم عليها بضغطة زر.", "Browse thousands of jobs from top companies and apply with one click."),
      icon: <Briefcase className="text-brand-blue" />,
      bg: theme === 'dark' ? "bg-blue-900/20" : "bg-blue-50",
      action: onBrowseJobs,
      type: 'job-portal'
    },
    {
      title: t("خدمات احترافية", "Professional Services"),
      desc: t("خدمات مخصصة لتحسين سيرتك الذاتية وزيادة فرص قبولك في الوظائف.", "Custom services to improve your CV and increase your job acceptance chances."),
      icon: <UserCheck className="text-cyan-600" />,
      bg: theme === 'dark' ? "bg-cyan-900/20" : "bg-cyan-50",
      action: onProfessionalServices,
      type: 'prof-services'
    },
    {
      title: t("المتجر الإلكتروني", "E-Store"),
      desc: t("خدمات احترافية لمراجعة السيرة الذاتية، التدريب على المقابلات، والمزيد.", "Professional services for CV review, interview coaching, and more."),
      icon: <ShoppingBag className="text-orange-600" />,
      bg: theme === 'dark' ? "bg-orange-900/20" : "bg-orange-50",
      type: 'estore'
    },
  ];

  return (
    <section id="services" className={`py-24 transition-colors ${theme === 'dark' ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("كل ما تحتاجه لمسيرتك المهنية", "Everything You Need for Your Career")}</h2>
          <p className="text-slate-500">{t("حلول ذكية ومتكاملة مصممة خصيصاً لنجاحك المهني", "Smart and integrated solutions specifically designed for your professional success")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group p-8 rounded-3xl border transition-all duration-500 ${theme === 'dark' ? "bg-slate-800/50 border-slate-700 hover:border-brand-purple/40 hover:shadow-2xl hover:shadow-purple-900/20" : "bg-white border-slate-100 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-blue-100"}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm">{service.desc}</p>
              <div className="flex flex-col gap-3">
                {service.action && (
                  <button 
                    onClick={service.action}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${theme === 'dark' ? "bg-brand-purple text-white" : "bg-brand-blue text-white"}`}
                  >
                    {t("ابدأ الآن", "Start Now")}
                  </button>
                )}
                <button 
                  onClick={() => onDiscoverMore(service.type)}
                  className={`font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all text-sm ${theme === 'dark' ? "text-slate-300 hover:text-brand-purple" : "text-slate-600 hover:text-brand-blue"}`}
                >
                  <ArrowLeft size={16} className={lang === 'en' ? "rotate-180" : ""} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const About = ({ lang, theme, t }: { lang: string, theme: string, t: (ar: string, en: string) => string }) => {
  return (
    <section id="about" className={`py-24 transition-colors ${theme === 'dark' ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=800" 
            alt={t("شاب محترف يرتدي بدلة في مكتب عصري", "Professional young man in a suit in a modern office")} 
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px] lg:h-[600px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">{t("عن CVeeez", "About CVeeez")}</h2>
          <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? "text-slate-400" : "text-slate-600"}`}>
            {t("ولدت CVeeez من فكرة بسيطة: أن كل شخص يستحق فرصة لمتابعة مسيرته المهنية التي يحلم بها، بغض النظر عن خلفيته. رأينا عددًا لا يحصى من الأفراد الموهوبين يكافحون لإنشاء سير ذاتية مقنعة تعكس حقًا مهاراتهم وإمكانياتهم.", "CVeeez was born from a simple idea: that everyone deserves a chance to pursue the career they dream of, regardless of their background. We've seen countless talented individuals struggle to create compelling CVs that truly reflect their skills and potential.")}
          </p>
          
          <div className={`p-8 rounded-3xl border-r-4 shadow-sm mb-8 ${theme === 'dark' ? "bg-slate-900 border-brand-purple" : "bg-white border-brand-blue"}`}>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? "text-brand-purple" : "text-brand-blue"}`}>{t("مهمتنا هي سد هذه الفجوة.", "Our mission is to bridge this gap.")}</h3>
            <p className={theme === 'dark' ? "text-slate-400" : "text-slate-600"}>{t("نحن نستفيد من تقنية الذكاء الاصطناعي المتطورة ومعرفة الخبراء المهنية لتمكين الباحثين عن عمل.", "We leverage cutting-edge AI technology and professional expert knowledge to empower job seekers.")}</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 ${theme === 'dark' ? "text-brand-purple" : "text-brand-blue"}`}>+10k</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{t("مستخدم", "Users")}</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 ${theme === 'dark' ? "text-brand-purple" : "text-brand-blue"}`}>98%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{t("رضا العملاء", "Customer Satisfaction")}</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 ${theme === 'dark' ? "text-brand-purple" : "text-brand-blue"}`}>24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{t("دعم فني", "Support")}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = ({ lang, theme, t }: { lang: string, theme: string, t: (ar: string, en: string) => string }) => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: t("أحمد محمد", "Ahmed Mohamed"),
      role: t("مهندس برمجيات", "Software Engineer"),
      content: t("بفضل CVEEEZ، حصلت على وظيفة أحلامي في غضون أسبوعين. الذكاء الاصطناعي ساعدني في تحسين سيرتي الذاتية بشكل مذهل.", "Thanks to CVEEEZ, I got my dream job within two weeks. AI helped me improve my CV amazingly."),
      avatar: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: t("سارة خالد", "Sara Khaled"),
      role: t("مصممة جرافيك", "Graphic Designer"),
      content: t("القوالب المتوفرة عصرية جداً واحترافية. تجربة المستخدم في الموقع سلسة للغاية والدعم الفني متعاون جداً.", "The available templates are very modern and professional. The user experience on the site is very smooth and the technical support is very helpful."),
      avatar: "https://picsum.photos/seed/user2/100/100"
    },
    {
      name: t("محمود علي", "Mahmoud Ali"),
      role: t("مدير مشاريع", "Project Manager"),
      content: t("أفضل منصة عربية لبناء السيرة الذاتية. التحليل الذكي أعطاني نصائح لم أكن أتوقعها وحسنت من ملفي الشخصي كثيراً.", "The best Arabic platform for building a CV. The smart analysis gave me tips I didn't expect and improved my profile a lot."),
      avatar: "https://picsum.photos/seed/user3/100/100"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className={`py-24 transition-colors ${theme === 'dark' ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("ماذا يقول مستخدمونا؟", "What Our Users Say")}</h2>
          <p className="text-slate-500">{t("قصص نجاح حقيقية بدأت من هنا", "Real success stories started here")}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${current === i ? (theme === 'dark' ? "bg-brand-purple w-8" : "bg-brand-blue w-8") : "bg-slate-200 dark:bg-slate-800"}`}
              />
            ))}
          </div>

          <motion.div 
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className={`${theme === 'dark' ? "glass-dark" : "glass"} p-12 rounded-3xl text-center shadow-xl`}
          >
            <img 
              src={testimonials[current].avatar} 
              className={`w-20 h-20 rounded-full mx-auto mb-6 border-4 ${theme === 'dark' ? "border-brand-purple/20" : "border-brand-blue/10"}`} 
              referrerPolicy="no-referrer"
            />
            <p className={`text-2xl italic mb-8 leading-relaxed ${theme === 'dark' ? "text-slate-300" : "text-slate-700"}`}>
              "{testimonials[current].content}"
            </p>
            <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
            <p className={theme === 'dark' ? "text-brand-purple" : "text-brand-blue"}>{testimonials[current].role}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ lang, theme, t }: { lang: string, theme: string, t: (ar: string, en: string) => string }) => {
  return (
    <section id="contact" className={`py-24 transition-colors ${theme === 'dark' ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">{t("لنبدأ محادثة", "Let's Start a Conversation")}</h2>
            <p className="text-slate-500 mb-12">{t("نحن هنا لمساعدتك في أي استفسار أو سؤال.", "We are here to help you with any inquiry or question.")}</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${theme === 'dark' ? "bg-brand-purple/10 text-brand-purple" : "bg-brand-blue/10 text-brand-blue"}`}>
                  <Mail />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">{t("البريد الإلكتروني", "Email")}</div>
                  <div className="text-lg font-bold">cveeez@cveeez.online</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${theme === 'dark' ? "bg-brand-purple/10 text-brand-purple" : "bg-brand-blue/10 text-brand-blue"}`}>
                  <Phone />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">{t("رقم الهاتف", "Phone Number")}</div>
                  <div className="text-lg font-bold" dir="ltr">+20 106 523 6963</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href="https://wa.me/201065236963" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
                >
                  <MessageSquare />
                </a>
                <div>
                  <div className="text-sm text-slate-500 mb-1">{t("واتساب", "WhatsApp")}</div>
                  <div className="text-lg font-bold" dir="ltr">+20 106 523 6963</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href="https://www.facebook.com/cveeez.eg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
                >
                  <Facebook />
                </a>
                <div>
                  <div className="text-sm text-slate-500 mb-1">{t("فيسبوك", "Facebook")}</div>
                  <div className="text-lg font-bold">CVEEEZ</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href="https://www.instagram.com/cveeez0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-pink-500/10 text-pink-600 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
                >
                  <Instagram />
                </a>
                <div>
                  <div className="text-sm text-slate-500 mb-1">{t("انستجرام", "Instagram")}</div>
                  <div className="text-lg font-bold">@cveeez0</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600">
                  <MapPin />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">{t("الموقع", "Location")}</div>
                  <div className="text-lg font-bold">Cairo, Egypt</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${theme === 'dark' ? "glass-dark" : "glass"} p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden`}>
            {/* Decorative background element */}
            <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? "bg-brand-purple" : "bg-brand-blue"}`} />
            
            <form className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold flex items-center gap-2">
                    <Users size={14} className="text-slate-400" />
                    {t("الاسم الكامل", "Full Name")}
                  </label>
                  <input type="text" placeholder={t("مثال: أحمد محمد", "e.g. John Doe")} className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${theme === 'dark' ? "bg-slate-800 border-slate-700 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20" : "bg-white border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"}`} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold flex items-center gap-2">
                    <Mail size={14} className="text-slate-400" />
                    {t("البريد الإلكتروني", "Email")}
                  </label>
                  <input type="email" placeholder="example@mail.com" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${theme === 'dark' ? "bg-slate-800 border-slate-700 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20" : "bg-white border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"}`} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold flex items-center gap-2">
                    <Phone size={14} className="text-slate-400" />
                    {t("رقم الهاتف", "Phone Number")}
                  </label>
                  <input type="tel" dir="ltr" placeholder="+20 1XX XXX XXXX" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${theme === 'dark' ? "bg-slate-800 border-slate-700 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20" : "bg-white border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"}`} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold flex items-center gap-2">
                    <Target size={14} className="text-slate-400" />
                    {t("نوع الخدمة", "Service Type")}
                  </label>
                  <select className={`w-full px-4 py-3 rounded-xl border outline-none transition-all appearance-none ${theme === 'dark' ? "bg-slate-800 border-slate-700 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20" : "bg-white border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"}`}>
                    <option value="">{t("اختر الخدمة", "Select Service")}</option>
                    <option value="cv">{t("صناعة سيرة ذاتية", "CV Building")}</option>
                    <option value="jobs">{t("البحث عن وظيفة", "Job Search")}</option>
                    <option value="coaching">{t("تدريب مهني", "Career Coaching")}</option>
                    <option value="other">{t("أخرى", "Other")}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold flex items-center gap-2">
                  <MessageSquare size={14} className="text-slate-400" />
                  {t("الموضوع", "Subject")}
                </label>
                <input type="text" placeholder={t("كيف يمكننا مساعدتك؟", "How can we help you?")} className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${theme === 'dark' ? "bg-slate-800 border-slate-700 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20" : "bg-white border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"}`} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold flex items-center gap-2">
                  <FileText size={14} className="text-slate-400" />
                  {t("الرسالة", "Message")}
                </label>
                <textarea rows={4} placeholder={t("اكتب تفاصيل استفسارك هنا...", "Write your inquiry details here...")} className={`w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none ${theme === 'dark' ? "bg-slate-800 border-slate-700 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20" : "bg-white border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"}`}></textarea>
              </div>

              <button className={`w-full py-4 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group ${theme === 'dark' ? "bg-brand-purple hover:bg-purple-700 shadow-purple-900/20" : "bg-brand-blue hover:bg-blue-700 shadow-blue-200"}`}>
                {t("إرسال الرسالة", "Send Message")}
                <ArrowLeft size={18} className={`transition-transform group-hover:-translate-x-1 ${lang === 'en' ? "rotate-180 group-hover:translate-x-1" : ""}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowToStart = ({ lang, theme, t }: { lang: string, theme: string, t: (ar: string, en: string) => string }) => {
  const steps = [
    {
      title: t("اكتشف شغفك", "Discover Your Passion"),
      desc: t("نساعدك في تحديد المهارات التي تمتلكها والوظائف التي تناسب شخصيتك من خلال تحليل ذكي.", "We help you identify the skills you have and the jobs that suit your personality through smart analysis."),
      icon: <Lightbulb className="text-yellow-500" />,
      role: t("دورنا: تحليل شخصي عميق لمسارك المهني.", "Our Role: Deep personal analysis of your career path.")
    },
    {
      title: t("بناء الهوية المهنية", "Build Professional Identity"),
      desc: t("استخدم صانع السيرة الذاتية المدعوم بالذكاء الاصطناعي لإنشاء ملف تعريفي يبهر أصحاب العمل.", "Use the AI-powered CV builder to create a profile that impresses employers."),
      icon: <FileText className="text-brand-blue" />,
      role: t("دورنا: توفير قوالب ذكية وتقنيات ATS لضمان وصولك للمقابلة.", "Our Role: Providing smart templates and ATS techniques to ensure you reach the interview.")
    },
    {
      title: t("البحث والتقديم", "Search and Apply"),
      desc: t("تصفح الوظائف المنسقة خصيصاً لك وقدم بضغطة زر واحدة.", "Browse jobs curated specifically for you and apply with one click."),
      icon: <Search className="text-green-500" />,
      role: t("دورنا: ربطك مباشرة بكبرى الشركات وتسهيل عملية التقديم.", "Our Role: Connecting you directly with top companies and facilitating the application process.")
    },
    {
      title: t("التدريب والمقابلة", "Training and Interview"),
      desc: t("احصل على تدريب مخصص للمقابلات الشخصية من خلال محاكاة ذكية.", "Get personalized interview training through smart simulation."),
      icon: <UserCheck className="text-brand-purple" />,
      role: t("دورنا: تجهيزك نفسياً وفنياً لتجاوز أصعب المقابلات بنجاح.", "Our Role: Preparing you psychologically and technically to pass the toughest interviews successfully.")
    }
  ];

  return (
    <section id="how-to-start" className={`py-24 transition-colors ${theme === 'dark' ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("طريقك نحو الوظيفة المثالية", "Your Path to the Perfect Job")}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{t("رحلة تبدأ بخطوة، ونحن معك في كل مرحلة", "A journey starts with a step, and we are with you at every stage")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border transition-all ${theme === 'dark' ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100 shadow-sm"}`}
            >
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shadow-lg">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{step.desc}</p>
              <div className={`p-4 rounded-xl text-xs font-medium ${theme === 'dark' ? "bg-brand-purple/10 text-brand-purple" : "bg-brand-blue/5 text-brand-blue"}`}>
                {step.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { generateCVPreviews } from "./services/imageGenerator";

const CVBuilder = ({ lang, theme, t, onBack }: { lang: string, theme: string, t: (ar: string, en: string) => string, onBack: () => void }) => {
  const [step, setStep] = useState(1);
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [isLoadingImages, setIsLoadingImages] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoadingImages(true);
      try {
        const images = await generateCVPreviews();
        setGeneratedImages(images);
      } catch (error) {
        console.error("Failed to generate CV previews:", error);
      } finally {
        setIsLoadingImages(false);
      }
    };
    loadImages();
  }, []);

  const templates = [
    { 
      id: 1, 
      style: "Modern Professional",
      type: t("سيرة ذاتية احترافية حديثة", "Modern Professional CV"), 
      category: t("احترافي", "Professional"),
      desc: t("تصميم متوازن يجمع بين الأناقة والوضوح، مثالي لمعظم المهن.", "Balanced design combining elegance and clarity, ideal for most professions."), 
      img: "https://img.freepik.com/premium-photo/modern-cv-design-template-professional-cv-layout_1199132-119604.jpg?w=2000" 
    },
    { 
      id: 2, 
      style: "Minimalist",
      type: t("سيرة ذاتية بسيطة", "Minimalist CV"), 
      category: t("بسيط", "Minimalist"),
      desc: t("تركيز تام على المحتوى مع مساحات بيضاء مريحة للعين.", "Complete focus on content with comfortable white space."), 
      img: "https://img.freepik.com/premium-photo/modern-cv-design-template-professional-cv-layout_1199132-119342.jpg?w=1380" 
    },
    { 
      id: 3, 
      style: "ATS-Friendly",
      type: t("سيرة ذاتية متوافقة مع ATS", "ATS-Friendly CV"), 
      category: t("تقني", "Tech"),
      desc: t("تنسيق بسيط ومحسن لضمان تجاوز أنظمة الفرز الآلي.", "Simple and optimized format to ensure bypassing automated screening."), 
      img: "https://resumesector.com/wp-content/uploads/2025/04/ATS-Friendly-Resume-Template.jpg" 
    },
    { 
      id: 4, 
      style: "Creative Designer",
      type: t("سيرة ذاتية للمصممين المبدعين", "Creative Designer CV"), 
      category: t("إبداعي", "Creative"),
      desc: t("تنسيق فني يبرز مهاراتك الإبداعية ومحفظة أعمالك.", "Artistic format highlighting your creative skills and portfolio."), 
      img: "https://img.freepik.com/premium-psd/profesional-modern-cv-design-template_609989-950.jpg?w=740" 
    },
    { 
      id: 5, 
      style: "Tech Developer",
      type: t("سيرة ذاتية للمطورين التقنيين", "Tech Developer CV"), 
      category: t("تقني", "Tech"),
      desc: t("يبرز المهارات البرمجية والمشاريع التقنية بوضوح.", "Highlights programming skills and technical projects clearly."), 
      img: "https://th.bing.com/th/id/OIP.MPx2JnX-IKC-JfaYbZcBbAHaHa?w=800&h=800&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
    },
  ];


  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors font-medium group"
          >
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
              <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
            </div>
            {t("العودة للرئيسية", "Back to Home")}
          </button>
        </div>

        {step === 1 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                {t("اختر القالب الذي يعبر عنك", "Choose Your Perfect Template")}
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                {t("نحن نمتلك خبرة واسعة في تحليل متطلبات السوق وتصميم سير ذاتية تتجاوز أنظمة ATS وتلفت انتباه مديري التوظيف من النظرة الأولى.", "Our AI-powered templates are optimized for ATS and designed to catch the eye of top recruiters instantly.")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {templates.map((tmpl) => (
                <motion.div 
                  key={tmpl.id}
                  whileHover={{ y: -12 }}
                  className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative"
                  onClick={() => setStep(2)}
                >
                  <div className="aspect-[3/4.2] bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                    <img 
                      src={tmpl.img} 
                      alt={tmpl.type}
                      className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <div className="bg-white text-brand-blue w-full py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Sparkles size={18} />
                        {t("استخدم هذا القالب", "Use Template")}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest shadow-sm border border-white/20">
                        {tmpl.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="font-black text-xl leading-tight text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">{tmpl.type}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-medium">{tmpl.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{t("لنبدأ في بناء مستقبلك", "Let's Start Building Your Future")}</h2>
              <p className="text-slate-500">{t("املأ بياناتك بدقة لنقوم بإنشاء أفضل نسخة من سيرتك الذاتية.", "Fill in your details accurately so we can create the best version of your CV.")}</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-3xl shadow-2xl space-y-8 border border-slate-100 dark:border-slate-800">
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">{t("المعلومات الشخصية", "Personal Information")}</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("الاسم الكامل", "Full Name")}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none focus:border-brand-blue transition-all dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("المسمى الوظيفي", "Job Title")}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none focus:border-brand-blue transition-all dark:text-white" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("البريد الإلكتروني", "Email")}</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none focus:border-brand-blue transition-all dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("رقم الهاتف", "Phone Number")}</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none focus:border-brand-blue transition-all dark:text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">{t("الخبرة العملية", "Work Experience")}</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-500 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    + {t("إضافة خبرة جديدة", "Add New Experience")}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">{t("التعليم", "Education")}</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-500 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    + {t("إضافة مؤهل تعليمي", "Add Educational Qualification")}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">{t("المهارات", "Skills")}</h3>
                <textarea rows={3} placeholder={t("مثال: قيادة الفريق، حل المشكلات، React.js...", "e.g. Team Leadership, Problem Solving, React.js...")} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none focus:border-brand-blue transition-all dark:text-white resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none">
                {t("حفظ وإنشاء السيرة الذاتية", "Save and Generate CV")}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};



const Team = ({ lang, theme, t }: { lang: string, theme: string, t: (ar: string, en: string) => string }) => {
  const teamMembers = [
    {
      name: t("خليفة محمد خليفة", "Khalifa Mohamed Khalifa"),
      role: t("مدير تنفيذي", "CEO"),
      bio: t("د. خليفة هو المؤسس والرئيس التنفيذي لـ CVEEEZ، ويقود فريقًا يركز على تحويل خبرات الأشخاص إلى “قصة مهنية” قوية تُقرأ وتُفهم بسرعة داخل أنظمة التوظيف (ATS) ومع مسؤولي التوظيف. يهتم بتقديم حلول عملية تشمل: تحسين السيرة الذاتية، بناء بورتفوليو احترافي، تجهيز المقابلات، وإرشاد مهني متكامل.", "Dr. Khalifa is the founder and CEO of CVEEEZ, leading a team focused on transforming people's experiences into a powerful \"career story\" that is read and understood quickly within recruitment systems (ATS) and with recruiters. He is interested in providing practical solutions including: CV optimization, building a professional portfolio, interview preparation, and integrated career guidance.")
    },
    {
      name: t("محمد السيد", "Mohamed El-Sayed"),
      role: t("مدير الموارد البشرية", "HR Manager"),
      bio: t("خبير في استراتيجيات التوظيف وإدارة المواهب. يعمل على ربط الكفاءات بالفرص المناسبة وضمان أفضل تجربة للمرشحين.", "Expert in recruitment strategies and talent management. Works on connecting competencies with appropriate opportunities and ensuring the best candidate experience.")
    },
    {
      name: t("مصطفى دياب", "Mostafa Diab"),
      role: t("مدير التطوير", "Director of Development"),
      bio: t("يقود الفريق التقني لبناء حلول برمجية مبتكرة تعتمد على أحدث تقنيات الذكاء الاصطناعي لتسهيل عملية التوظيف.", "Leads the technical team to build innovative software solutions based on the latest AI technologies to facilitate the recruitment process.")
    },
    {
      name: t("محمود السموني", "Mahmoud El-Samouni"),
      role: t("كبير المصممين", "Lead Designer"),
      bio: t("مبدع في تصميم الهوية البصرية وتجربة المستخدم. يحرص على أن تكون جميع مخرجات CVEEEZ ذات طابع عصري واحترافي.", "Creative in visual identity and user experience design. Ensures that all CVEEEZ outputs have a modern and professional character.")
    },
    {
      name: t("نهى عبد الرحمن", "Noha Abdel Rahman"),
      role: t("قائدة فريق الإشراف", "Moderator Team Leader"),
      bio: t("تشرف على جودة الخدمات المقدمة وتضمن رضا العملاء من خلال متابعة دقيقة لجميع العمليات.", "Oversees the quality of services provided and ensures customer satisfaction through close monitoring of all operations.")
    },
    {
      name: t("محمد السيد يوسف", "Mohamed El-Sayed Youssef"),
      role: t("مصمم خبير", "Expert Designer"),
      bio: t("متخصص في تحويل البيانات المعقدة إلى تصاميم سيرة ذاتية بصرية جذابة وسهلة القراءة.", "Specializes in transforming complex data into visually appealing and easy-to-read CV designs.")
    },
    {
      name: t("ريم ناصر", "Reem Nasser"),
      role: t("خبيرة علاقات عامة", "PR Expert"),
      bio: t("تعمل على بناء جسور التواصل بين CVEEEZ والشركاء الاستراتيجيين لتعزيز حضور المنصة في سوق العمل.", "Works on building communication bridges between CVEEEZ and strategic partners to enhance the platform's presence in the labor market.")
    },
    {
      name: t("سارة ناصر", "Sara Nasser"),
      role: t("مصممة خبيرة", "Expert Designer"),
      bio: t("تمتلك لمسة فنية فريدة في تصميم القوالب التي تبرز شخصية المتقدم للوظيفة بشكل احترافي.", "Possesses a unique artistic touch in designing templates that highlight the job applicant's personality professionally.")
    },
    {
      name: t("عمر عجمي", "Omar Ajami"),
      role: t("مصمم سيرة ذاتية محترف", "Professional CV Designer"),
      bio: t("خبير في صياغة المحتوى المهني وتنسيقه بما يتوافق مع معايير التوظيف العالمية.", "Expert in crafting and formatting professional content in accordance with global recruitment standards.")
    },
    {
      name: t("أميرة إبراهيم", "Amira Ibrahim"),
      role: t("مصممة سيرة ذاتية محترفة", "Professional CV Designer"),
      bio: t("تساعد الباحثين عن عمل في إظهار أفضل ما لديهم من خلال تصاميم مبتكرة ومحتوى قوي.", "Helps job seekers show their best through innovative designs and strong content.")
    },
    {
      name: t("نورا جاد", "Nora Gad"),
      role: t("خدمة العملاء", "Customer Service"),
      bio: t("صوت CVEEEZ الودود الذي يجيب على جميع استفسارات المستخدمين ويقدم الدعم اللازم لهم.", "CVEEEZ's friendly voice that answers all user inquiries and provides the necessary support.")
    },
    {
      name: t("علي ناصر", "Ali Nasser"),
      role: t("خبير تصميم الحلول الرقمية", "Digital Solutions Design Expert"),
      bio: t("علي متخصص في تصميم وتطوير الحلول الرقمية المبتكرة. يجمع بين المعرفة التقنية العميقة والفهم الدقيق لاحتياجات السوق.", "Ali specializes in designing and developing innovative digital solutions. He combines deep technical knowledge and accurate understanding of market needs.")
    },
    {
      name: t("السمان محمود", "El-Samman Mahmoud"),
      role: t("متخصص تطوير حسابات LinkedIn", "LinkedIn Account Development Specialist"),
      bio: t("السمان متخصص في تطوير وتحسين ملفات LinkedIn احترافية. يساعد المحترفين على بناء حضور قوي على LinkedIn.", "El-Samman specializes in developing and improving professional LinkedIn profiles. He helps professionals build a strong presence on LinkedIn.")
    },
    {
      name: t("رضوي أمين", "Radwa Amin"),
      role: t("مصممة سيرة ذاتية محترفة", "Professional CV Designer"),
      bio: t("رضوي متخصصة في تصميم السير الذاتية الاحترافية والجذابة. تجمع بين الإبداع والمعرفة العميقة بمتطلبات سوق العمل.", "Radwa specializes in designing professional and attractive CVs. She combines creativity and deep knowledge of labor market requirements.")
    },
    {
      name: t("رؤي جمال", "Roaa Gamal"),
      role: t("متخصصة تصميم واجهات المستخدم والتجربة (UI/UX)", "UI/UX Design Specialist"),
      bio: t("رؤي متخصصة في تصميم واجهات مستخدم احترافية وتجربة مستخدم متميزة. تجمع بين الإبداع والفهم العميق لاحتياجات المستخدم.", "Roaa specializes in designing professional user interfaces and a distinct user experience. She combines creativity and deep understanding of user needs.")
    }
  ];

  return (
    <section id="team" className={`py-24 transition-colors ${theme === 'dark' ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("فريق العمل", "Our Team")}</h2>
          <p className="text-slate-500">{t("نخبة من الخبراء والمبدعين يعملون من أجلك", "A group of experts and creators working for you")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${theme === 'dark' ? "glass-dark" : "glass"} p-8 rounded-3xl shadow-lg group hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold ${theme === 'dark' ? "bg-brand-purple/20 text-brand-purple" : "bg-brand-blue/10 text-brand-blue"}`}>
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className={`text-sm font-medium ${theme === 'dark' ? "text-brand-purple" : "text-brand-blue"}`}>{member.role}</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Jobs = ({ lang, theme, t, onBack, onSelectJob }: { lang: string, theme: string, t: (ar: string, en: string) => string, onBack: () => void, onSelectJob: (job: any) => void }) => {
  const jobs = [
    { id: 1, title: t("مصمم واجهات مستخدم (UI/UX)", "UI/UX Designer"), company: t("شركة كريتيف ديزاين", "Creative Design Co."), location: t("القاهرة، مصر", "Cairo, Egypt"), type: t("دوام كامل", "Full Time"), salary: t("15,000 - 20,000 ج.م", "15,000 - 20,000 EGP"), desc: t("نبحث عن مصمم مبدع لتحسين تجربة المستخدم لمنتجاتنا الرقمية.", "Looking for a creative designer to improve the user experience of our digital products.") },
    { id: 2, title: t("مهندس برمجيات (Full Stack)", "Full Stack Software Engineer"), company: t("حلول التقنية المتقدمة", "Advanced Tech Solutions"), location: t("الرياض، السعودية", "Riyadh, Saudi Arabia"), type: t("دوام كامل", "Full Time"), salary: t("12,000 - 18,000 ر.س", "12,000 - 18,000 SAR"), desc: t("مطلوب مهندس برمجيات متمكن في React و Node.js لبناء تطبيقات قابلة للتوسع.", "Software engineer proficient in React and Node.js required to build scalable applications.") },
    { id: 3, title: t("طبيب عام", "General Practitioner"), company: t("مستشفى النيل التخصصي", "Nile Specialized Hospital"), location: t("الإسكندرية، مصر", "Alexandria, Egypt"), type: t("دوام كامل", "Full Time"), salary: t("رواتب تنافسية", "Competitive Salary"), desc: t("مطلوب طبيب عام بخبرة لا تقل عن سنتين للعمل في قسم الطوارئ.", "General practitioner with at least 2 years of experience required for the ER department.") },
    { id: 4, title: t("مهندس مدني", "Civil Engineer"), company: t("المقاولون العرب", "Arab Contractors"), location: t("دبي، الإمارات", "Dubai, UAE"), type: t("دوام كامل", "Full Time"), salary: t("10,000 - 15,000 د.إ", "10,000 - 15,000 AED"), desc: t("مطلوب مهندس مدني لإدارة مواقع البناء وضمان جودة التنفيذ.", "Civil engineer required to manage construction sites and ensure execution quality.") },
    { id: 5, title: t("مصمم جرافيك", "Graphic Designer"), company: t("وكالة إعلان ميديا", "Media Ad Agency"), location: t("عمان، الأردن", "Amman, Jordan"), type: t("دوام جزئي", "Part Time"), salary: t("600 - 900 د.أ", "600 - 900 JOD"), desc: t("نبحث عن مصمم جرافيك لإنشاء محتوى بصري جذاب لمنصات التواصل الاجتماعي.", "Looking for a graphic designer to create engaging visual content for social media platforms.") },
    { id: 6, title: t("طبيب أسنان", "Dentist"), company: t("عيادات الابتسامة", "Smile Clinics"), location: t("جدة، السعودية", "Jeddah, Saudi Arabia"), type: t("دوام كامل", "Full Time"), salary: t("15,000 - 25,000 ر.س", "15,000 - 25,000 SAR"), desc: t("مطلوب طبيب أسنان متخصص في تجميل الأسنان والتركيبات.", "Dentist specialized in cosmetic dentistry and prosthodontics required.") },
    { id: 7, title: t("مهندس ميكانيكا", "Mechanical Engineer"), company: t("المصنع الوطني للصناعات", "National Industries Factory"), location: t("الكويت، الكويت", "Kuwait City, Kuwait"), type: t("دوام كامل", "Full Time"), salary: t("800 - 1,200 د.ك", "800 - 1,200 KWD"), desc: t("مطلوب مهندس ميكانيكا لصيانة خطوط الإنتاج وتحسين كفاءة الآلات.", "Mechanical engineer required for production line maintenance and machine efficiency improvement.") },
    { id: 8, title: t("مصمم داخلي", "Interior Designer"), company: t("ديكور هوم", "Decor Home"), location: t("الدوحة، قطر", "Doha, Qatar"), type: t("دوام كامل", "Full Time"), salary: t("8,000 - 12,000 ر.ق", "8,000 - 12,000 QAR"), desc: t("نبحث عن مصمم داخلي لتحويل المساحات إلى بيئات جميلة ووظيفية.", "Looking for an interior designer to transform spaces into beautiful and functional environments.") },
    { id: 9, title: t("مهندس كهرباء", "Electrical Engineer"), company: t("طاقة المستقبل", "Future Energy"), location: t("المنامة، البحرين", "Manama, Bahrain"), type: t("دوام كامل", "Full Time"), salary: t("700 - 1,100 د.ب", "700 - 1,100 BHD"), desc: t("مطلوب مهندس كهرباء لتصميم وإدارة أنظمة الطاقة المتجددة.", "Electrical engineer required to design and manage renewable energy systems.") },
    { id: 10, title: t("محاسب مالي", "Financial Accountant"), company: t("مجموعة الفطيم", "Al-Futtaim Group"), location: t("الدوحة، قطر", "Doha, Qatar"), type: t("دوام كامل", "Full Time"), salary: t("9,000 - 13,000 ر.ق", "9,000 - 13,000 QAR"), desc: t("مطلوب محاسب مالي بخبرة في التقارير المالية والتدقيق.", "Financial accountant with experience in financial reporting and auditing required.") },
    { id: 11, title: t("مدير تسويق رقمي", "Digital Marketing Manager"), company: t("سوق دوت كوم", "Souq.com"), location: t("الرياض، السعودية", "Riyadh, Saudi Arabia"), type: t("دوام كامل", "Full Time"), salary: t("14,000 - 20,000 ر.س", "14,000 - 20,000 SAR"), desc: t("نبحث عن خبير تسويق لإدارة الحملات الإعلانية وتحليل البيانات.", "Looking for a marketing expert to manage ad campaigns and analyze data.") },
    { id: 12, title: t("مطور تطبيقات جوال", "Mobile App Developer"), company: t("تطبيقاتي للبرمجيات", "Tatiqati Software"), location: t("مسقط، عمان", "Muscat, Oman"), type: t("دوام كامل", "Full Time"), salary: t("900 - 1,400 ر.ع", "900 - 1,400 OMR"), desc: t("مطلوب مطور Flutter لبناء تطبيقات جوال متميزة لنظامي iOS و Android.", "Flutter developer required to build premium mobile apps for iOS and Android.") },
    { id: 13, title: t("محلل بيانات", "Data Analyst"), company: t("بيانات تك", "Bayanat Tech"), location: t("المنامة، البحرين", "Manama, Bahrain"), type: t("دوام كامل", "Full Time"), salary: t("800 - 1,200 د.ب", "800 - 1,200 BHD"), desc: t("نبحث عن محلل بيانات لاستخراج الرؤى وتحسين اتخاذ القرار.", "Looking for a data analyst to extract insights and improve decision making.") },
    { id: 14, title: t("أخصائي موارد بشرية", "HR Specialist"), company: t("شركة النور", "Al Noor Co."), location: t("الخرطوم، السودان", "Khartoum, Sudan"), type: t("دوام كامل", "Full Time"), salary: t("رواتب مجزية", "Attractive Salary"), desc: t("مطلوب أخصائي موارد بشرية لإدارة شؤون الموظفين والتوظيف.", "HR specialist required to manage personnel affairs and recruitment.") },
    { id: 15, title: t("مدرس لغة إنجليزية", "English Teacher"), company: t("مدرسة الأوائل", "Al Awail School"), location: t("إربد، الأردن", "Irbid, Jordan"), type: t("دوام كامل", "Full Time"), salary: t("500 - 800 د.أ", "500 - 800 JOD"), desc: t("نبحث عن مدرس لغة إنجليزية متميز لتدريس المراحل الثانوية.", "Looking for an outstanding English teacher to teach secondary stages.") },
    { id: 16, title: t("صيدلي", "Pharmacist"), company: t("صيدليات العزبي", "El Ezaby Pharmacy"), location: t("الجيزة، مصر", "Giza, Egypt"), type: t("دوام كامل", "Full Time"), salary: t("8,000 - 12,000 ج.م", "8,000 - 12,000 EGP"), desc: t("مطلوب صيدلي للعمل في فرعنا الجديد بالجيزة.", "Pharmacist required to work in our new Giza branch.") },
    { id: 17, title: t("مدير مشروع", "Project Manager"), company: t("إعمار العقارية", "Emaar Properties"), location: t("دبي، الإمارات", "Dubai, UAE"), type: t("دوام كامل", "Full Time"), salary: t("18,000 - 25,000 د.إ", "18,000 - 25,000 AED"), desc: t("مطلوب مدير مشروع بخبرة في إدارة المشاريع العقارية الكبرى.", "Project manager with experience in managing major real estate projects required.") },
    { id: 18, title: t("كاتب محتوى", "Content Writer"), company: t("منصة محتوى", "Mohtawa Platform"), location: t("عن بعد", "Remote"), type: t("عمل حر", "Freelance"), salary: t("حسب الإنتاج", "Per Output"), desc: t("نبحث عن كتاب محتوى مبدعين في مختلف المجالات.", "Looking for creative content writers in various fields.") },
    { id: 19, title: t("أخصائي تغذية", "Nutritionist"), company: t("مركز الرشاقة", "Fitness Center"), location: t("بيروت، لبنان", "Beirut, Lebanon"), type: t("دوام جزئي", "Part Time"), salary: t("رواتب تنافسية", "Competitive Salary"), desc: t("مطلوب أخصائي تغذية لتقديم استشارات غذائية وتصميم برامج حمية.", "Nutritionist required to provide nutritional consultations and design diet programs.") },
    { id: 20, title: t("مصور فوتوغرافي", "Photographer"), company: t("استوديو الأضواء", "Lights Studio"), location: t("الكويت، الكويت", "Kuwait City, Kuwait"), type: t("دوام كامل", "Full Time"), salary: t("700 - 1,000 د.ك", "700 - 1,000 KWD"), desc: t("نبحث عن مصور فوتوغرافي محترف لتصوير المناسبات والمنتجات.", "Looking for a professional photographer for events and products.") }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors font-medium mb-12 group"
        >
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
          </div>
          {t("العودة للرئيسية", "Back to Home")}
        </button>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("بوابة الوظائف", "Job Portal")}</h2>
          <p className="text-slate-500">{t("اكتشف أحدث الفرص الوظيفية التي تناسب مهاراتك", "Discover the latest job opportunities that suit your skills")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${theme === 'dark' ? "glass-dark" : "glass"} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group`}
              onClick={() => onSelectJob(job)}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? "bg-brand-purple/10 text-brand-purple" : "bg-brand-blue/10 text-brand-blue"}`}>
                  <Briefcase size={24} />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">
                  {job.type}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{job.title}</h3>
              <p className="text-slate-500 mb-4 font-medium">{job.company}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                <span className="flex items-center gap-1"><Target size={14} /> {job.salary}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const JobDetails = ({ lang, theme, t, job, onBack }: { lang: string, theme: string, t: (ar: string, en: string) => string, job: any, onBack: () => void }) => {
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApply = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors font-medium mb-12 group"
        >
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
          </div>
          {t("العودة للوظائف", "Back to Jobs")}
        </button>

        <div className={`${theme === 'dark' ? "glass-dark" : "glass"} p-8 lg:p-12 rounded-[2.5rem] shadow-2xl`}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">{job.title}</h2>
              <p className="text-xl text-brand-blue font-bold mb-4">{job.company}</p>
              <div className="flex flex-wrap gap-6 text-slate-500">
                <span className="flex items-center gap-2"><MapPin size={18} /> {job.location}</span>
                <span className="flex items-center gap-2"><Briefcase size={18} /> {job.type}</span>
                <span className="flex items-center gap-2"><Target size={18} /> {job.salary}</span>
              </div>
            </div>
            {!isApplying && !isSubmitted && (
              <button 
                onClick={() => setIsApplying(true)}
                className="px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                {t("قدم الآن للعمل", "Apply Now")}
              </button>
            )}
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("تم إرسال طلبك بنجاح", "Application Submitted Successfully")}</h3>
              <p className="text-slate-500 text-lg">{t("سوف نراجع بياناتك ونتواصل معك قريباً.", "We will review your data and contact you soon.")}</p>
            </motion.div>
          ) : isApplying ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800"
            >
              <h3 className="text-2xl font-bold mb-8">{t("نموذج التقديم", "Application Form")}</h3>
              <form onSubmit={handleApply} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("الاسم الكامل", "Full Name")}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:border-brand-blue transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("البريد الإلكتروني", "Email")}</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:border-brand-blue transition-all" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("رقم الهاتف", "Phone Number")}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:border-brand-blue transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("رابط السيرة الذاتية (أو LinkedIn)", "CV Link (or LinkedIn)")}</label>
                    <input required type="url" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:border-brand-blue transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("لماذا أنت مناسب لهذه الوظيفة؟", "Why are you suitable for this job?")}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:border-brand-blue transition-all resize-none"></textarea>
                </div>
                <div className="flex gap-4">
                  <button 
                    type="submit"
                    className="flex-1 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    {t("إرسال الطلب", "Submit Application")}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsApplying(false)}
                    className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  >
                    {t("إلغاء", "Cancel")}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-6 border-b pb-2 border-slate-100 dark:border-slate-800">{t("تفاصيل الوظيفة", "Job Details")}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                {t("نحن نبحث عن شخص طموح ومبدع للانضمام إلى فريقنا. ستكون مسؤولاً عن تطوير حلول مبتكرة والمساهمة في نمو الشركة وتطوير منتجاتنا الرقمية.", "We are looking for an ambitious and creative person to join our team. You will be responsible for developing innovative solutions and contributing to the company's growth and the development of our digital products.")}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 border-b pb-2 border-slate-100 dark:border-slate-800">{t("المتطلبات", "Requirements")}</h3>
              <ul className="space-y-4 text-slate-500 list-disc list-inside text-lg">
                <li>{t("خبرة لا تقل عن 3 سنوات في مجال مشابه", "At least 3 years of experience in a similar field")}</li>
                <li>{t("مهارات تواصل ممتازة وقدرة على العمل الجماعي", "Excellent communication skills and ability to work in a team")}</li>
                <li>{t("إتقان الأدوات والتقنيات الحديثة المطلوبة", "Proficiency in required modern tools and techniques")}</li>
                <li>{t("القدرة على حل المشكلات والتفكير الإبداعي", "Ability to solve problems and creative thinking")}</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 border-b pb-2 border-slate-100 dark:border-slate-800">{t("طرق التقديم للعمل", "Application Methods")}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold mb-2">{t("عبر الموقع", "Via Website")}</h4>
                  <p className="text-sm text-slate-500">{t("اضغط على زر قدم الآن واملأ النموذج الإلكتروني.", "Click the Apply Now button and fill out the online form.")}</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold mb-2">{t("عبر البريد الإلكتروني", "Via Email")}</h4>
                  <p className="text-sm text-slate-500">{t("أرسل سيرتك الذاتية إلى jobs@cveeez.online مع ذكر المسمى الوظيفي.", "Send your CV to jobs@cveeez.online mentioning the job title.")}</p>
                </div>
              </div>
            </section>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProfessionalServices = ({ lang, theme, t, onBack }: { lang: string, theme: string, t: (ar: string, en: string) => string, onBack: () => void }) => {
  const skills = [
    { title: t("تحليل الوظائف المتقدم", "Advanced Job Analysis"), icon: <Target className="text-brand-blue" />, desc: t("نفهم ما يبحث عنه أصحاب العمل بالضبط في كل دور وظيفي.", "We understand exactly what employers are looking for in every job role.") },
    { title: t("تحسين الـ ATS", "ATS Optimization"), icon: <Cpu className="text-brand-purple" />, desc: t("نضمن تجاوز سيرتك الذاتية لأنظمة الفرز الآلي بنسبة نجاح عالية.", "We ensure your CV passes automated screening systems with a high success rate.") },
    { title: t("بناء العلامة الشخصية", "Personal Branding"), icon: <UserCheck className="text-cyan-600" />, desc: t("نحول خبراتك إلى قصة مهنية جذابة تلفت الانتباه.", "We turn your experiences into a compelling professional story that catches the eye.") },
    { title: t("استراتيجيات البحث عن عمل", "Job Search Strategies"), icon: <Search className="text-orange-600" />, desc: t("نوجهك لأفضل الطرق والمنصات للحصول على مقابلات حقيقية.", "We guide you to the best methods and platforms to get real interviews.") }
  ];

  const cvTypes = [
    { name: t("سيرة ذاتية أكاديمية (CV)", "Academic CV"), desc: t("للأطباء والباحثين والأكاديميين.", "For doctors, researchers, and academics.") },
    { name: t("سيرة ذاتية مهنية (Resume)", "Professional Resume"), desc: t("للموظفين والمديرين في القطاع الخاص.", "For employees and managers in the private sector.") },
    { name: t("سيرة ذاتية إبداعية", "Creative CV"), desc: t("للمصممين والفنانين والمبدعين.", "For designers, artists, and creators.") },
    { name: t("سيرة ذاتية تقنية", "Technical CV"), desc: t("للمبرمجين والمهندسين والخبراء التقنيين.", "For programmers, engineers, and technical experts.") }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors font-medium mb-12 group"
        >
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
          </div>
          {t("العودة للرئيسية", "Back to Home")}
        </button>

        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">{t("خدماتنا الاحترافية", "Our Professional Services")}</h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed">
            {t("نحن لا نصمم مجرد أوراق، نحن نبني جسوراً بينك وبين وظيفة أحلامك من خلال خبرة عميقة في سوق العمل وتقنيات التوظيف الحديثة.", "We don't just design papers; we build bridges between you and your dream job through deep expertise in the labor market and modern recruitment technologies.")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${theme === 'dark' ? "glass-dark" : "glass"} p-8 rounded-[2rem] shadow-xl`}
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <p className="text-slate-500 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-3xl font-bold mb-8">{t("أنواع السير الذاتية التي نتقنها", "CV Types We Master")}</h3>
            <div className="space-y-6">
              {cvTypes.map((type, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-brand-blue transition-colors">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{type.name}</h4>
                    <p className="text-sm text-slate-500">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className={`p-10 rounded-[3rem] ${theme === 'dark' ? "bg-brand-purple/10 border-brand-purple/20" : "bg-brand-blue/5 border-brand-blue/10"} border-2`}>
              <h3 className="text-3xl font-bold mb-6">{t("قوة CVEEEZ في التوظيف", "CVEEEZ Recruitment Power")}</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-lg">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  {t("معدل قبول يتجاوز 85% في المقابلات الأولى.", "Acceptance rate exceeding 85% in first interviews.")}
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <div className="w-2 h-2 rounded-full bg-brand-purple" />
                  {t("توصيات مباشرة من خبراء موارد بشرية دوليين.", "Direct recommendations from international HR experts.")}
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  {t("دعم كامل حتى توقيع عقد العمل.", "Full support until the employment contract is signed.")}
                </li>
              </ul>
              <button className="mt-10 w-full py-4 bg-brand-blue text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition-all">
                {t("ابدأ رحلتك المهنية الآن", "Start Your Career Journey Now")}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Pricing = ({ lang, theme, t, onBack }: { lang: string, theme: string, t: (ar: string, en: string) => string, onBack: () => void }) => {
  const plans = [
    {
      name: t("الخطة الأساسية", "Basic Plan"),
      price: t("مجاناً", "Free"),
      features: [
        t("قالب واحد احترافي", "1 Professional Template"),
        t("تحميل بصيغة PDF", "PDF Download"),
        t("محرر سيرة ذاتية بسيط", "Simple CV Editor"),
        t("دعم عبر البريد", "Email Support")
      ],
      button: t("ابدأ الآن", "Start Now"),
      popular: false
    },
    {
      name: t("الخطة الاحترافية", "Pro Plan"),
      price: t("19$ / شهرياً", "$19 / Month"),
      features: [
        t("جميع القوالب (20+)", "All Templates (20+)"),
        t("تحليل الذكاء الاصطناعي", "AI Analysis"),
        t("تخصيص كامل للألوان", "Full Color Customization"),
        t("دعم فني 24/7", "24/7 Support"),
        t("بدون علامة مائية", "No Watermark")
      ],
      button: t("اشترك الآن", "Subscribe Now"),
      popular: true
    },
    {
      name: t("خطة الشركات", "Enterprise Plan"),
      price: t("تواصل معنا", "Contact Us"),
      features: [
        t("حلول مخصصة للفرق", "Custom Team Solutions"),
        t("بوابة توظيف خاصة", "Private Job Portal"),
        t("تدريب مهني مباشر", "Live Career Coaching"),
        t("إدارة حسابات متعددة", "Multi-account Management")
      ],
      button: t("تواصل مع المبيعات", "Contact Sales"),
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors font-medium mb-12 group"
        >
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
          </div>
          {t("العودة للرئيسية", "Back to Home")}
        </button>

        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">{t("خطط الأسعار", "Pricing Plans")}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl">
            {t("اختر الخطة التي تناسب احتياجاتك المهنية وابدأ في بناء مستقبلك اليوم.", "Choose the plan that fits your professional needs and start building your future today.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] shadow-xl border transition-all hover:scale-105 ${plan.popular ? (theme === 'dark' ? "bg-slate-900 border-brand-purple ring-2 ring-brand-purple/20" : "bg-white border-brand-blue ring-4 ring-brand-blue/5") : (theme === 'dark' ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100")}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {t("الأكثر شيوعاً", "Most Popular")}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-8 text-brand-blue">{plan.price}</div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-500">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? "bg-brand-blue text-white shadow-lg shadow-blue-200 hover:bg-blue-700" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"}`}>
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AICVBuilderDetails = ({ lang, theme, t, onBack }: { lang: string, theme: string, t: (ar: string, en: string) => string, onBack: () => void }) => {
  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-12 group">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
          </div>
          {t("العودة للرئيسية", "Back to Home")}
        </button>

        <div className={`${theme === 'dark' ? "glass-dark" : "glass"} p-10 rounded-[3rem] shadow-2xl`}>
          <h2 className="text-4xl font-bold mb-8 text-gradient">{t("صانع السيرة الذاتية بالذكاء الاصطناعي", "AI CV Builder")}</h2>
          
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-4">{t("كيف يعمل صانع السيرة الذاتية؟", "How does the AI CV Builder work?")}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-6">
                {t("نستخدم خوارزميات متقدمة لتحليل مهاراتك وخبراتك وصياغتها بطريقة احترافية تجذب مسؤولي التوظيف. يقوم النظام باختيار الكلمات المفتاحية الأنسب لمجالك لضمان ظهورك في المقدمة.", "We use advanced algorithms to analyze your skills and experiences and formulate them in a professional way that attracts recruiters. The system selects the most appropriate keywords for your field to ensure you appear at the top.")}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                  <h4 className="font-bold mb-2">{t("تحليل ذكي للمهارات", "Smart Skills Analysis")}</h4>
                  <p className="text-sm text-slate-500">{t("استخراج المهارات الخفية من وصفك الوظيفي.", "Extracting hidden skills from your job description.")}</p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-purple/5 border border-brand-purple/10">
                  <h4 className="font-bold mb-2">{t("صياغة احترافية", "Professional Formulation")}</h4>
                  <p className="text-sm text-slate-500">{t("تحويل المهام العادية إلى إنجازات ملموسة.", "Transforming ordinary tasks into tangible achievements.")}</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">{t("قوة فريقنا في الذكاء الاصطناعي", "Our Team's Strength in AI")}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-6">
                {t("فريقنا يضم خبراء في هندسة البرمجيات وموارد بشرية دوليين عملوا معاً لتدريب نماذج الذكاء الاصطناعي الخاصة بنا. نحن لا نعتمد على قوالب جاهزة، بل نبني نظاماً يفهم سياق كل مهنة.", "Our team includes software engineering experts and international HR professionals who worked together to train our AI models. We don't rely on ready-made templates, but build a system that understands the context of each profession.")}
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-slate-900 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Cpu className="text-brand-purple" />
                {t("تخطي اختبار الـ ATS بنجاح", "Successfully Passing the ATS Test")}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t("أنظمة الـ ATS هي البوابة الأولى لوظيفتك. نحن نضمن لك تخطيها من خلال:", "ATS systems are the first gateway to your job. We guarantee you pass them through:")}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>{t("تنسيق متوافق تماماً مع جميع أنظمة الفرز.", "Formatting fully compatible with all screening systems.")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>{t("توزيع ذكي للكلمات المفتاحية (Keywords).", "Smart distribution of keywords.")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>{t("هيكلة بيانات يسهل على الآلة قراءتها وفهمها.", "Data structuring that is easy for machines to read and understand.")}</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobPortalDetails = ({ lang, theme, t, onBack }: { lang: string, theme: string, t: (ar: string, en: string) => string, onBack: () => void }) => {
  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-12 group">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
          </div>
          {t("العودة للرئيسية", "Back to Home")}
        </button>

        <div className={`${theme === 'dark' ? "glass-dark" : "glass"} p-10 rounded-[3rem] shadow-2xl`}>
          <h2 className="text-4xl font-bold mb-8 text-gradient">{t("بوابة الوظائف الذكية", "Smart Job Portal")}</h2>
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-4">{t("كيف نربطك بالوظيفة المثالية؟", "How do we connect you to the perfect job?")}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-6">
                {t("بوابتنا ليست مجرد لوحة إعلانات، بل هي محرك بحث ذكي يربطك بالوظائف التي تناسب ملفك الشخصي بدقة. فريقنا من خبراء التوظيف يحلل آلاف الوظائف يومياً لضمان وصولك لأفضل الفرص.", "Our portal is not just a billboard, but a smart search engine that connects you to jobs that precisely fit your profile. Our team of recruitment experts analyzes thousands of jobs daily to ensure you reach the best opportunities.")}
              </p>
              <div className="p-8 rounded-3xl bg-brand-blue/5 border border-brand-blue/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="text-brand-blue" />
                  {t("قوة فريق التوظيف لدينا", "Our Recruitment Team Strength")}
                </h4>
                <p className="text-slate-500">
                  {t("يمتلك فريقنا شبكة علاقات واسعة مع كبرى الشركات في الشرق الأوسط. نحن لا ننتظر الوظائف لتأتي إلينا، بل نبحث عنها ونوفرها لك مع نصائح خاصة للتقديم.", "Our team has a wide network of relationships with major companies in the Middle East. We don't wait for jobs to come to us; we search for them and provide them to you with special application tips.")}
                </p>
              </div>
            </section>
            <section className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h4 className="text-xl font-bold mb-4">{t("مطابقة ذكية", "Smart Matching")}</h4>
                <p className="text-slate-500">{t("نقوم بمطابقة مهاراتك مع متطلبات الوظيفة ونعطيك نسبة مئوية لمدى ملاءمتك.", "We match your skills with job requirements and give you a percentage of your suitability.")}</p>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h4 className="text-xl font-bold mb-4">{t("تقديم سريع", "Quick Apply")}</h4>
                <p className="text-slate-500">{t("قدم على الوظائف بضغطة زر واحدة باستخدام سيرتك الذاتية الجاهزة على منصتنا.", "Apply for jobs with one click using your ready-made CV on our platform.")}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfServicesDetails = ({ lang, theme, t, onBack }: { lang: string, theme: string, t: (ar: string, en: string) => string, onBack: () => void }) => {
  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-12 group">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
          </div>
          {t("العودة للرئيسية", "Back to Home")}
        </button>

        <div className={`${theme === 'dark' ? "glass-dark" : "glass"} p-10 rounded-[3rem] shadow-2xl`}>
          <h2 className="text-4xl font-bold mb-8 text-gradient">{t("خدماتنا الاحترافية المخصصة", "Our Custom Professional Services")}</h2>
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-4">{t("قوة التوظيف والخبرة", "Recruitment Power and Expertise")}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-6">
                {t("نحن لا نكتفي بكتابة السيرة الذاتية، بل نضع خبرتنا في التوظيف بين يديك. فريقنا يضم مديري توظيف سابقين يعرفون تماماً ما يبحث عنه أصحاب العمل وكيفية إبراز مهاراتك لتكون الخيار الأول.", "We don't just write CVs; we put our recruitment expertise in your hands. Our team includes former recruitment managers who know exactly what employers are looking for and how to highlight your skills to be the first choice.")}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800">
                  <h4 className="font-bold mb-2">{t("أنواع السير الذاتية", "Types of CVs")}</h4>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li>• {t("سيرة ذاتية أكاديمية", "Academic CV")}</li>
                    <li>• {t("سيرة ذاتية تنفيذية", "Executive CV")}</li>
                    <li>• {t("سيرة ذاتية إبداعية", "Creative CV")}</li>
                    <li>• {t("سيرة ذاتية تقنية", "Technical CV")}</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800">
                  <h4 className="font-bold mb-2">{t("مهاراتنا القوية", "Our Strong Skills")}</h4>
                  <p className="text-sm text-slate-500">
                    {t("تحسين ملفات LinkedIn، التدريب على المقابلات، وصياغة خطابات التغطية (Cover Letters) التي لا تُقاوم.", "LinkedIn profile optimization, interview coaching, and crafting irresistible Cover Letters.")}
                  </p>
                </div>
              </div>
            </section>
            <div className="p-8 rounded-3xl bg-brand-blue text-white">
              <h4 className="text-xl font-bold mb-4">{t("كيف نضمن قبولك؟", "How do we guarantee your acceptance?")}</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <span>{t("مراجعة بشرية دقيقة لكل تفصيلة في ملفك.", "Precise human review of every detail in your file.")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <span>{t("تخصيص السيرة الذاتية لكل وظيفة تتقدم لها.", "Customizing the CV for each job you apply for.")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <span>{t("دعم مستمر حتى تحصل على الوظيفة.", "Continuous support until you get the job.")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EStoreDetails = ({ lang, theme, t, onBack }: { lang: string, theme: string, t: (ar: string, en: string) => string, onBack: () => void }) => {
  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-12 group">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ChevronLeft className={lang === 'ar' ? "rotate-180" : ""} size={20} />
          </div>
          {t("العودة للرئيسية", "Back to Home")}
        </button>

        <div className={`${theme === 'dark' ? "glass-dark" : "glass"} p-10 rounded-[3rem] shadow-2xl`}>
          <h2 className="text-4xl font-bold mb-8 text-gradient">{t("المتجر الإلكتروني المهني", "Professional E-Store")}</h2>
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-4">{t("أدواتك للنجاح المهني", "Your Tools for Career Success")}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-6">
                {t("في متجرنا، نوفر لك قوالب حصرية، دورات تدريبية قصيرة، وكتب إلكترونية تركز على مهارات التوظيف والنمو المهني. كل منتج مصمم من قبل فريقنا ليعطيك ميزة تنافسية حقيقية.", "In our store, we provide you with exclusive templates, short training courses, and e-books focusing on recruitment skills and professional growth. Each product is designed by our team to give you a real competitive advantage.")}
              </p>
              <div className="bg-brand-purple/5 p-8 rounded-3xl border border-brand-purple/10 mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="text-brand-purple" />
                  {t("لماذا منتجاتنا فريدة؟", "Why are our products unique?")}
                </h4>
                <p className="text-slate-500">
                  {t("نحن لا نبيع مجرد ملفات، بل نبيع خبرة سنوات في سوق العمل. قوالبنا مختبرة ضد أنظمة ATS، ودوراتنا تركز على التطبيق العملي الفوري.", "We don't just sell files; we sell years of experience in the labor market. Our templates are tested against ATS systems, and our courses focus on immediate practical application.")}
                </p>
              </div>
            </section>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                <ShoppingBag className="mx-auto mb-4 text-brand-blue" size={32} />
                <h4 className="font-bold">{t("قوالب مميزة", "Premium Templates")}</h4>
              </div>
              <div className="text-center p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                <Lightbulb className="mx-auto mb-4 text-brand-purple" size={32} />
                <h4 className="font-bold">{t("دورات مكثفة", "Intensive Courses")}</h4>
              </div>
              <div className="text-center p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                <FileText className="mx-auto mb-4 text-cyan-600" size={32} />
                <h4 className="font-bold">{t("أدلة مهنية", "Career Guides")}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingContact = ({ lang, theme, t }: { lang: string, theme: string, t: (ar: string, en: string) => string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed bottom-8 ${lang === 'ar' ? 'left-8' : 'right-8'} z-50 flex flex-col items-center gap-4`}>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="flex flex-col gap-3 mb-2"
        >
          {/* WhatsApp Link */}
          <a 
            href="https://wa.me/201065236963" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            title="WhatsApp"
          >
            <MessageSquare size={24} />
          </a>
          
          {/* Email Link */}
          <a 
            href="mailto:cveeez@cveeez.online" 
            className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            title="Email"
          >
            <Mail size={24} />
          </a>

          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/cveeez0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>

          {/* Facebook Link */}
          <a 
            href="https://www.facebook.com/cveeez.eg" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            title="Facebook"
          >
            <Facebook size={24} />
          </a>
        </motion.div>
      )}

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ 
          y: [0, -10, 0],
          scale: isOpen ? 1 : [1, 1.1, 1]
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors ${theme === 'dark' ? "bg-brand-purple text-white" : "bg-brand-blue text-white"}`}
      >
        {isOpen ? <X size={28} /> : <Headset size={28} />}
      </motion.button>
    </div>
  );
};

const Footer = ({ lang, theme, t, setView }: { lang: string, theme: string, t: (ar: string, en: string) => string, setView: (v: any) => void }) => {
  return (
    <footer className={`transition-colors pt-20 pb-10 ${theme === 'dark' ? "bg-slate-950 text-white" : "bg-slate-900 text-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-6">CVEEEZ</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t("نحن نحقق أهدافك من خلال تمكينك بأفضل أدوات الذكاء الاصطناعي لبناء مسيرة مهنية استثنائية.", "We achieve your goals by empowering you with the best AI tools to build an exceptional career.")}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/cveeez0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/cveeez.eg" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer"
              >
                <Facebook size={18} />
              </a>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer">
                <Globe size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t("روابط سريعة", "Quick Links")}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => setView('landing')} className="hover:text-white transition-colors">{t("الرئيسية", "Home")}</button></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t("نبذة عنا", "About Us")}</a></li>
              <li><button onClick={() => setView('professional-services')} className="hover:text-white transition-colors">{t("خدماتنا", "Services")}</button></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t("تواصل معنا", "Contact Us")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t("خدماتنا", "Our Services")}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => setView('cv-builder')} className="hover:text-white transition-colors">{t("صانع السيرة الذاتية", "CV Builder")}</button></li>
              <li><button onClick={() => setView('jobs')} className="hover:text-white transition-colors">{t("بوابة الوظائف", "Job Portal")}</button></li>
              <li><button onClick={() => setView('pricing')} className="hover:text-white transition-colors">{t("الأسعار", "Pricing")}</button></li>
              <li><button onClick={() => setView('cv-builder')} className="hover:text-white transition-colors">{t("القوالب", "Templates")}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t("تواصل معنا", "Contact Us")}</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3"><Mail size={16} /> cveeez@cveeez.online</li>
              <li className="flex items-center gap-3" dir="ltr"><Phone size={16} /> +20 106 523 6963</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> Cairo, Egypt</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>{t("© 2026 CVEEEZ. جميع الحقوق محفوظة.", "© 2026 CVEEEZ. All rights reserved.")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t("سياسة الخصوصية", "Privacy Policy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("الشروط والأحكام", "Terms & Conditions")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState('ar');
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState<'landing' | 'cv-builder' | 'jobs' | 'job-details' | 'professional-services' | 'pricing' | 'ai-cv-details' | 'job-portal-details' | 'prof-services-details' | 'estore-details'>('landing');
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const setViewAndScroll = (newView: 'landing' | 'cv-builder' | 'jobs' | 'job-details' | 'professional-services' | 'pricing' | 'ai-cv-details' | 'job-portal-details' | 'prof-services-details' | 'estore-details') => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    const savedTheme = localStorage.getItem('theme') || 'light';
    setLang(savedLang);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Simple translation helper
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  if (view === 'ai-cv-details') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <AICVBuilderDetails lang={lang} theme={theme} t={t} onBack={() => setViewAndScroll('landing')} />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  if (view === 'job-portal-details') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <JobPortalDetails lang={lang} theme={theme} t={t} onBack={() => setViewAndScroll('landing')} />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  if (view === 'prof-services-details') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <ProfServicesDetails lang={lang} theme={theme} t={t} onBack={() => setViewAndScroll('landing')} />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  if (view === 'estore-details') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <EStoreDetails lang={lang} theme={theme} t={t} onBack={() => setViewAndScroll('landing')} />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  if (view === 'jobs') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <Jobs 
          lang={lang} 
          theme={theme} 
          t={t} 
          onBack={() => setViewAndScroll('landing')} 
          onSelectJob={(job) => {
            setSelectedJob(job);
            setViewAndScroll('job-details');
          }} 
        />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  if (view === 'job-details') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <JobDetails 
          lang={lang} 
          theme={theme} 
          t={t} 
          job={selectedJob} 
          onBack={() => setViewAndScroll('jobs')} 
        />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  if (view === 'cv-builder') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <CVBuilder lang={lang} theme={theme} t={t} onBack={() => setViewAndScroll('landing')} />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  if (view === 'professional-services') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <ProfessionalServices lang={lang} theme={theme} t={t} onBack={() => setViewAndScroll('landing')} />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  if (view === 'pricing') {
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
        <Pricing lang={lang} theme={theme} t={t} onBack={() => setViewAndScroll('landing')} />
        <FloatingContact lang={lang} theme={theme} t={t} />
        <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`} dir={lang === 'ar' ? "rtl" : "ltr"}>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} onLogoClick={() => setViewAndScroll('landing')} onNavigate={setViewAndScroll} />
      <FloatingContact lang={lang} theme={theme} t={t} />
      <main>
        <Hero lang={lang} theme={theme} t={t} onStart={() => setViewAndScroll('cv-builder')} onBrowseJobs={() => setViewAndScroll('jobs')} />
        <Newsletter lang={lang} theme={theme} t={t} />
        <Services 
          lang={lang} 
          theme={theme} 
          t={t} 
          onStartCV={() => setViewAndScroll('cv-builder')} 
          onBrowseJobs={() => setViewAndScroll('jobs')} 
          onProfessionalServices={() => setViewAndScroll('professional-services')} 
          onDiscoverMore={(type) => {
            if (type === 'ai-cv') setViewAndScroll('ai-cv-details');
            if (type === 'job-portal') setViewAndScroll('job-portal-details');
            if (type === 'prof-services') setViewAndScroll('prof-services-details');
            if (type === 'estore') setViewAndScroll('estore-details');
          }}
        />
        <HowToStart lang={lang} theme={theme} t={t} />
        <About lang={lang} theme={theme} t={t} />
        <Team lang={lang} theme={theme} t={t} />
        <Testimonials lang={lang} theme={theme} t={t} />
        <Contact lang={lang} theme={theme} t={t} />
      </main>
      <Footer lang={lang} theme={theme} t={t} setView={setViewAndScroll} />
    </div>
  );
}
