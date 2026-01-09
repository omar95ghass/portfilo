import type { Project, Translations } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { en: 'Healthcare Data Integration & Automation', ar: 'تكامل وأتمتة بيانات الرعاية الصحية' },
    description: {
      en: 'A system for integrating medical records, automating workflows, and ensuring secure storage.',
      ar: 'نظام لتكامل السجلات الطبية، أتمتة سير العمل، وضمان التخزين الآمن.',
    },
    longDescription: {
      en: 'Developed a comprehensive system for healthcare centers to streamline data integration, automate workflows, and securely store patient information. The system significantly improved operational efficiency and data accessibility. Key achievements include designing robust APIs for seamless data exchange, developing automated scripts for data cleansing, and engineering a scalable, HIPAA-compliant database architecture.',
      ar: 'تم تطوير نظام شامل لمراكز الرعاية الصحية لتبسيط تكامل البيانات، وأتمتة سير العمل، وتخزين معلومات المرضى بشكل آمن. أدى النظام إلى تحسين الكفاءة التشغيلية وإمكانية الوصول إلى البيانات بشكل كبير. تشمل الإنجازات الرئيسية تصميم واجهات برمجة تطبيقات قوية للتبادل السلس للبيانات، وتطوير نصوص برمجية آلية لتنظيف البيانات، وهندسة بنية قاعدة بيانات قابلة للتطوير ومتوافقة مع HIPAA.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: {
      en: ['PHP', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'MySQL', 'AJAX'],
      ar: ['PHP', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'MySQL', 'AJAX'],
    },
    githubUrl: 'https://github.com/omar-alothman',
  },
  {
    id: 2,
    title: { en: 'Point of Sale System - POSX', ar: 'نظام POSX لإدارة نقاط البيع' },
    description: {
      en: 'A full POS with inventory, reporting and earnings tracker. Reduced transaction processing time by 70%.',
      ar: 'نظام نقاط بيع كامل مع إدارة المخزون والتقارير وتتبع الأرباح. تم تقليل وقت معالجة المعاملات بنسبة 70٪.',
    },
    longDescription: {
        en: 'Built a user-friendly and efficient Point of Sale (POS) system designed to manage sales transactions, inventory, and customer data for retail businesses. Developed both front-end and back-end components, implemented secure payment processing, and designed an intuitive interface that significantly reduced transaction time.',
        ar: 'بناء نظام نقاط بيع سهل الاستخدام وفعال مصمم لإدارة معاملات البيع والمخزون وبيانات العملاء للشركات التجارية. تم تطوير مكونات الواجهة الأمامية والخلفية، وتنفيذ تكامل آمن لمعالجة الدفع، وتصميم واجهة بديهية قللت بشكل كبير من وقت المعاملات.',
    },
    imageUrl: 'https://i.ibb.co/nMLjZzX9/posx.png',
    tags: {
      en: ['PHP', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'SQLite', 'AJAX'],
      ar: ['PHP', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'SQLite', 'AJAX'],
    },
    githubUrl: 'https://github.com/omar95ghass/pos',
  },
  {
    id: 3,
    title: { en: 'Queue Management System - CMS', ar: 'نظام إدارة الدور' },
    description: {
      en: 'Designed a solution for managing queues in service centers with real-time notifications and dashboards.',
      ar: 'تصميم حل لإدارة قوائم الدور في مراكز الخدمة مع إشعارات ولوحات تحكم في الوقت الفعلي ونداء صوتي وبصري متكامل.',
    },
    longDescription: {
        en: 'Engineered a sophisticated system to efficiently manage customer queues and facilitate calling mechanisms in high-traffic service centers. Key responsibilities included designing the core logic for queue management, developing a real-time notification system for calling customers, and creating an administrative dashboard for monitoring.',
        ar: 'هندسة نظام متطور لإدارة طوابير العملاء بكفاءة وتسهيل آليات النداء في مراكز الخدمة المزدحمة. تضمنت المسؤوليات الرئيسية تصميم المنطق الأساسي لإدارة الطابور، وتطوير نظام إشعارات في الوقت الفعلي لمناداة العملاء، وإنشاء لوحة تحكم إدارية للمراقبة.',
    },
    imageUrl: 'https://i.ibb.co/F4qknZN8/cms.png',
    tags: {
      en: ['PHP', 'React', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'MySQL', 'AJAX'],
      ar: ['PHP', 'React', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'MySQL', 'AJAX'],
    },
    githubUrl: 'https://github.com/omar95ghass/CMS',
  },
   {
    id: 4,
    title: { en: 'Medical Archiving Program', ar: 'برنامج الأرشفة الطبية' },
    description: {
      en: 'Digitized patient files and medical images with encryption and access control for clinics and hospitals.',
      ar: 'رقمنة ملفات المرضى والصور الطبية مع التشفير والتحكم في الوصول للعيادات والمستشفيات.',
    },
    longDescription: {
      en: 'Created a comprehensive medical archiving program for clinics and hospitals, digitizing patient records, medical images, and administrative documents for easy and secure storage. Designed a scalable database schema, developed an intuitive UI for document handling, and implemented robust security features for data encryption and access control.',
      ar: 'إنشاء برنامج أرشفة طبية شامل للعيادات والمستشفيات، لرقمنة سجلات المرضى والصور الطبية والمستندات الإدارية لتخزين سهل وآمن. تم تصميم مخطط قاعدة بيانات قابل للتطوير، وتطوير واجهة مستخدم بديهية لمعالجة المستندات، وتنفيذ ميزات أمان قوية لتشفير البيانات والتحكم في الوصول.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    tags: {
      en: ['PHP', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'MySQL', 'AJAX'],
      ar: ['PHP', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'MySQL', 'AJAX'],
    },
    githubUrl: 'https://github.com/omar-alothman',
  },
   {
    id: 5,
    title: { en: 'تطبيق استخدام أجهزة Barcode Scanners', ar: 'تطبيق استخدام أجهزة مسح الباركود' },
    description: {
      en: '',
      ar: 'تطبيق استخدام أجهزة مسح الباركود والتقاط الصور  بواسطتها',
    },
    longDescription: {
      en: 'Developed a program to connect and streamline services offered by various non-governmental organizations, facilitating collaboration and improving aid delivery. Designed a centralized platform for NGOs to list their services and identify beneficiaries, implemented features for resource sharing, and developed reporting tools to track impact.',
      ar: 'تطوير برنامج لربط وتبسيط الخدمات التي تقدمها مختلف المنظمات غير الحكومية، مما يسهل التعاون ويحسن تقديم المساعدات. تم تصميم منصة مركزية للمنظمات غير الحكومية لإدراج خدماتها وتحديد المستفيدين، وتنفيذ ميزات لمشاركة الموارد، وتطوير أدوات إعداد تقارير لتتبع التأثير.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: {
      en: ['PHP', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'MySQL', 'AJAX'],
      ar: ['PHP', 'HTML5', 'Bootstrap', 'JS', 'RESTful APIs', 'MySQL', 'AJAX'],
    },
    githubUrl: 'https://github.com/omar-alothman',
  },
];

export const TRANSLATIONS: Translations = {
  en: {
    header: {
      home: 'Home',
      about: 'About Me',
      resume: 'Resume',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Omar AlOthman',
      title: 'Full-Stack Developer',
      subtitle: 'Building scalable web applications and digital solutions for healthcare and NGO sectors.',
      button: 'View My Work',
    },
    home: {
      latest_projects: 'Latest Projects',
    },
    about: {
      title: 'About Me',
      p1: 'Full-stack developer with 5+ years of experience building scalable web applications and digital solutions for healthcare and NGO sectors. Skilled in PHP, React, Node.js, and MySQL.',
      p2: 'With a strong background in medical practice as a Dentistry graduate, I combine technical expertise with domain knowledge in digital health and humanitarian services to deliver impactful solutions.',
    },
    resume: {
        title: "My Resume",
        contact_info: "Contact Info",
        phone_label: "Phone",
        phone_value: "+961 71 208 122",
        email_label: "Email",
        email_value: "Omar.ghass95@gmail.com",
        location_label: "Location",
        location_value: "Beirut, Lebanon",
        skills: "Technical Skills",
        summary: "Summary",
        summary_text: "Full-stack developer with 5+ years of experience building scalable web applications and digital solutions for healthcare and NGO sectors. Skilled in PHP, React, Node.js, and MySQL. Strong background in medical practice (Dentistry graduate), combining technical expertise with domain knowledge in digital health and humanitarian services.",
        experience: "Professional Experience",
        experience_list: [
            {
                title: "Freelance Full-Stack Developer",
                company: "Various clients",
                date: "2014 – Present",
                points: [
                    "Delivered custom software solutions for healthcare and NGOs.",
                    "Integrated secure APIs and database-driven systems.",
                    "Maintained client satisfaction with 95% on-time delivery."
                ]
            },
            {
                title: "Developer & IT Consultant",
                company: "Daem Medical Clinic",
                date: "2023 – 2024",
                points: [
                    "Designed medical archiving and clinic management system.",
                    "Enhanced reporting accuracy by 30%."
                ]
            }
        ],
        education: "Education",
        education_list: [
            {
                degree: "Graduate of Dentistry",
                institution: "Medical Practice Background",
                date: "",
            }
        ],
        clients_title: "Previous Clients",
        clients_list: [
            "Daem Medical Clinic – By Dr.Besher Da'boul.",
            "Sadek Hasan Company – Tech solutions.",
            "One-stop center for citizen services in Syria.",
            "Many other clients for POS project."
        ],
        languages_title: "Languages",
        languages_list: [
            "Arabic: Mother tongue",
            "English: C2 - Speaking, reading, writing, listening"
        ]
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind or just want to say hi? Feel free to reach out!',
      form_name: 'Omar Alothman',
      form_email: 'Your Email',
      form_message: 'Your Message',
      form_button: 'Send Message',
      request_project: 'Request a Project',
    },
    projectDetail: {
        technologies: 'Technologies Used',
        back_to_projects: 'Back to Projects',
        visit_github: 'Visit on GitHub'
    },
    footer: {
      made_with: 'Made with React & Tailwind CSS',
    }
  },
  ar: {
    header: {
      home: 'الرئيسية',
      about: 'من أنا',
      resume: 'سيرتي الذاتية',
      contact: 'تواصل معي',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'عمر العثمان',
      title: 'مطور برامج متكامل',
      subtitle: 'بناء تطبيقات ويب وحلول رقمية قابلة للتطوير لمختلف المشاريع والقطاعات.',
      button: 'شاهد أعمالي',
    },
    home: {
      latest_projects: 'أحدث المشاريع',
    },
    about: {
      title: 'من أنا',
      p1: 'مطور برامج متكامل بخبرة تزيد عن 5 سنوات في بناء تطبيقات ويب وحلول رقمية قابلة للتطوير. ماهر في PHP, React, Node.js, و MySQL.',
      p2: 'بفضل خلفيتي القوية في الممارسة الطبية كخريج طب أسنان، أجمع بين الخبرة التقنية والمعرفة المتخصصة في مجال الصحة الرقمية والخدمات الإنسانية لتقديم حلول مؤثرة.',
    },
    resume: {
        title: "سيرتي الذاتية",
        contact_info: "معلومات الاتصال",
        phone_label: "الهاتف",
        email_label: "البريد الإلكتروني",
        email_value: "omar.ghass95@gmail.com",
        location_label: "الموقع",
        skills: "المهارات التقنية",
        summary: "الملخص",
        summary_text: "مطور برامج متكامل يتمتع بخبرة تزيد عن 5 سنوات في بناء تطبيقات الويب القابلة للتطوير والحلول الرقمية لقطاعي الرعاية الصحية والمنظمات غير الحكومية. ماهر في PHP و React و Node.js و MySQL. خلفية قوية في الممارسة الطبية (خريج طب أسنان)، تجمع بين الخبرة الفنية والمعرفة بالمجال في الصحة الرقمية والخدمات الإنسانية.",
        experience: "الخبرة المهنية",
        experience_list: [
            {
                title: "مطور برامج متكامل مستقل",
                company: "عملاء مختلفون",
                date: "2014 – الآن",
                points: [
                    "قمت بتصميم تطبيق CMS للنداء الصوتي - بصري المعتمد في مراكز خدمة المواطن و العديد من المنشآت الطبية",
                    "قمت بتصميم برنامج POSX لإدارة نقاط البيع في المتاجر الصغيرة والمتوسطة ونقاط البيع الجوالة",
                    "قمت بتصميم نظام Data Management Tool - DMT لإدارة المنشآت الطبية وربط الأقسام وتخزين بيانات المرضى.",
                    "استطعت تحقيق رضى عملاء يفوق 85% خصوصاً في ما يتعلق بالاستجابة للمشكلات التقنية والتحديثات المستمرة المليئة بالميزات الجديدة والحلول",
                    "كما قمت بتصميم العديد من التطبيقات الأخرى للربط بين التجهيزات التقنية Hardware والبرمجية Software مثل قوارئ الباركود وأجهزة البصمة وجوامع البيانات"
                ]
            }
        ],
        education: "التعليم",
        education_list: [
            {
                degree: "خريج طب أسنان",
                institution: "جامعة دمشق - متخرج",
                date: "2019",
            },
            {
                degree: "هندسة تقانة المعلومات ITE",
                institution: "الجامعة الافتراضية السورية SVU - مازلت أدرس",
                date: "",
            }
        ],
        clients_title: "عملاء سابقون وحاليون",
        clients_list: [
            "مجمع دعم الطبي – د. بشر دعبول.",
            "شركة صادق حسن لتجارة أجهزة POS.",
            "مراكز خدمة المواطن في سوريا.",
            "35 من العملاء لمشروع نقاط البيع POSX.",
            "17 من العملاء لتطبيق Barcode Reader.",
            "3 عملاء لمشروع DMT الخاص بإدارة المنشآت الطبية",
            "1 عميل لمشروع نواة إدارة البصمات الطبية FPMC"
        ],
        languages_title: "اللغات",
        languages_list: [
            "العربية: اللغة الأم",
            "الإنجليزية: C2 - متحدث بطلاقة"
        ]
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'هل لديك مشروع في ذهنك أو تريد فقط أن تقول مرحباً؟ لا تتردد في التواصل!',
      form_name: 'عمر العثمان',
      form_email: 'بريدك الإلكتروني',
      form_message: 'رسالتك',
      form_button: 'إرسال الرسالة',
      request_project: 'طلب تصميم مشروع',
    },
    projectDetail: {
        technologies: 'التقنيات المستخدمة',
        back_to_projects: 'العودة للمشاريع',
        visit_github: 'زيارة المشروع على GitHub'
    },
    footer: {
      made_with: 'صنع بواسطة React و Tailwind CSS',
    }
  },
};
