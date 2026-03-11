export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  experience: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Remote";
  workMode: "Remote" | "On-site" | "Hybrid";
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  category: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  location: string;
  industry: string;
  openJobs: number;
  description: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    companyLogo: "TC",
    location: "Bangalore",
    salary: "18-25 LPA",
    experience: "5-8 years",
    jobType: "Full-time",
    workMode: "Hybrid",
    postedDate: "2 days ago",
    description: "We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building user-facing features using React.js and modern web technologies.",
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance",
      "Collaborate with back-end developers and designers"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in JavaScript and TypeScript",
      "Experience with React.js and its ecosystem",
      "Familiarity with RESTful APIs and GraphQL",
      "Knowledge of modern authorization mechanisms"
    ],
    category: "Technology"
  },
  {
    id: "2",
    title: "Product Manager",
    company: "InnovateTech",
    companyLogo: "IT",
    location: "Mumbai",
    salary: "22-30 LPA",
    experience: "4-7 years",
    jobType: "Full-time",
    workMode: "On-site",
    postedDate: "1 day ago",
    description: "Join our product team to drive the strategy and execution of our flagship products. Lead cross-functional teams to deliver exceptional user experiences.",
    responsibilities: [
      "Define product vision and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering, design, and marketing",
      "Analyze market trends and competitive landscape",
      "Drive product launches and go-to-market strategies"
    ],
    requirements: [
      "4+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Experience with agile methodologies",
      "Technical background preferred"
    ],
    category: "Management"
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "DataMinds Analytics",
    companyLogo: "DM",
    location: "Hyderabad",
    salary: "15-22 LPA",
    experience: "3-5 years",
    jobType: "Full-time",
    workMode: "Remote",
    postedDate: "3 days ago",
    description: "We are seeking a talented Data Scientist to analyze complex datasets and build predictive models that drive business decisions.",
    responsibilities: [
      "Analyze large datasets to extract meaningful insights",
      "Build and deploy machine learning models",
      "Collaborate with stakeholders to understand business needs",
      "Create visualizations and reports",
      "Stay updated with latest ML/AI trends"
    ],
    requirements: [
      "3+ years of experience in data science",
      "Proficiency in Python, R, and SQL",
      "Experience with ML frameworks like TensorFlow or PyTorch",
      "Strong statistical analysis skills",
      "Masters or PhD in relevant field preferred"
    ],
    category: "Data Science"
  },
  {
    id: "4",
    title: "UX Designer",
    company: "DesignHub Creative",
    companyLogo: "DH",
    location: "Pune",
    salary: "12-18 LPA",
    experience: "2-4 years",
    jobType: "Full-time",
    workMode: "Hybrid",
    postedDate: "5 days ago",
    description: "Create intuitive and beautiful user experiences for web and mobile applications. Work closely with product and engineering teams.",
    responsibilities: [
      "Create user flows, wireframes, and prototypes",
      "Conduct user research and usability testing",
      "Design intuitive interfaces for web and mobile",
      "Collaborate with developers to implement designs",
      "Maintain and evolve design systems"
    ],
    requirements: [
      "2+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing design process",
      "Understanding of user-centered design principles",
      "Knowledge of HTML/CSS is a plus"
    ],
    category: "Design"
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudScale Systems",
    companyLogo: "CS",
    location: "Delhi NCR",
    salary: "16-24 LPA",
    experience: "4-6 years",
    jobType: "Full-time",
    workMode: "Remote",
    postedDate: "1 week ago",
    description: "Build and maintain scalable infrastructure. Implement CI/CD pipelines and ensure high availability of our cloud services.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure on AWS/GCP",
      "Monitor system performance and security",
      "Automate deployment and scaling processes",
      "Troubleshoot production issues"
    ],
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of AWS, GCP, or Azure",
      "Experience with Docker and Kubernetes",
      "Proficiency in scripting languages",
      "Understanding of networking and security"
    ],
    category: "Technology"
  },
  {
    id: "6",
    title: "Marketing Manager",
    company: "GrowthFirst Marketing",
    companyLogo: "GF",
    location: "Chennai",
    salary: "14-20 LPA",
    experience: "5-8 years",
    jobType: "Full-time",
    workMode: "On-site",
    postedDate: "4 days ago",
    description: "Lead marketing initiatives to drive brand awareness and customer acquisition. Develop and execute comprehensive marketing strategies.",
    responsibilities: [
      "Develop and execute marketing strategies",
      "Manage digital marketing campaigns",
      "Analyze campaign performance metrics",
      "Lead and mentor marketing team",
      "Collaborate with sales and product teams"
    ],
    requirements: [
      "5+ years of marketing experience",
      "Strong digital marketing skills",
      "Experience with marketing automation tools",
      "Excellent analytical abilities",
      "MBA in Marketing preferred"
    ],
    category: "Marketing"
  },
  {
    id: "7",
    title: "Backend Developer",
    company: "ServerLogic Inc",
    companyLogo: "SL",
    location: "Bangalore",
    salary: "14-20 LPA",
    experience: "3-5 years",
    jobType: "Full-time",
    workMode: "Hybrid",
    postedDate: "6 days ago",
    description: "Develop robust backend services and APIs. Work with modern technologies to build scalable and secure applications.",
    responsibilities: [
      "Design and implement RESTful APIs",
      "Build scalable microservices architecture",
      "Optimize database queries and performance",
      "Implement security best practices",
      "Write unit and integration tests"
    ],
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Node.js, Python, or Java",
      "Experience with databases (SQL and NoSQL)",
      "Knowledge of cloud services",
      "Understanding of system design principles"
    ],
    category: "Technology"
  },
  {
    id: "8",
    title: "HR Business Partner",
    company: "PeopleFirst HR",
    companyLogo: "PF",
    location: "Mumbai",
    salary: "12-16 LPA",
    experience: "4-6 years",
    jobType: "Full-time",
    workMode: "On-site",
    postedDate: "2 days ago",
    description: "Partner with business leaders to drive HR initiatives. Focus on talent management, employee engagement, and organizational development.",
    responsibilities: [
      "Partner with business leaders on HR strategy",
      "Drive talent acquisition and retention",
      "Implement employee engagement programs",
      "Handle employee relations issues",
      "Support performance management processes"
    ],
    requirements: [
      "4+ years of HR experience",
      "Strong knowledge of HR practices and labor laws",
      "Excellent interpersonal skills",
      "Experience with HRIS systems",
      "MBA in HR preferred"
    ],
    category: "Human Resources"
  },
  {
    id: "9",
    title: "Financial Analyst",
    company: "FinanceWise Consulting",
    companyLogo: "FW",
    location: "Gurgaon",
    salary: "10-15 LPA",
    experience: "2-4 years",
    jobType: "Full-time",
    workMode: "Hybrid",
    postedDate: "3 days ago",
    description: "Analyze financial data to support business decisions. Prepare reports, forecasts, and financial models for management review.",
    responsibilities: [
      "Prepare financial reports and analysis",
      "Build financial models and forecasts",
      "Analyze variances and trends",
      "Support budgeting and planning processes",
      "Present findings to stakeholders"
    ],
    requirements: [
      "2+ years of financial analysis experience",
      "Strong Excel and financial modeling skills",
      "Knowledge of accounting principles",
      "Excellent analytical abilities",
      "CA/CFA/MBA Finance preferred"
    ],
    category: "Finance"
  },
  {
    id: "10",
    title: "Mobile App Developer",
    company: "AppCraft Studios",
    companyLogo: "AC",
    location: "Noida",
    salary: "12-18 LPA",
    experience: "3-5 years",
    jobType: "Full-time",
    workMode: "Remote",
    postedDate: "1 day ago",
    description: "Build innovative mobile applications for iOS and Android platforms. Work with cross-functional teams to deliver exceptional mobile experiences.",
    responsibilities: [
      "Develop mobile apps using React Native or Flutter",
      "Implement responsive and performant UI",
      "Integrate with backend APIs",
      "Ensure app performance and quality",
      "Publish apps to app stores"
    ],
    requirements: [
      "3+ years of mobile development experience",
      "Proficiency in React Native or Flutter",
      "Experience with native iOS/Android development",
      "Knowledge of mobile design patterns",
      "Published apps in app stores"
    ],
    category: "Technology"
  },
  {
    id: "11",
    title: "Content Writer",
    company: "ContentCraft Media",
    companyLogo: "CC",
    location: "Kolkata",
    salary: "6-10 LPA",
    experience: "1-3 years",
    jobType: "Full-time",
    workMode: "Remote",
    postedDate: "5 days ago",
    description: "Create compelling content for websites, blogs, and social media. Craft engaging copy that resonates with target audiences.",
    responsibilities: [
      "Write SEO-optimized blog posts and articles",
      "Create engaging social media content",
      "Develop website copy and landing pages",
      "Edit and proofread content",
      "Research industry trends and topics"
    ],
    requirements: [
      "1+ years of content writing experience",
      "Excellent written English skills",
      "Knowledge of SEO best practices",
      "Portfolio of published work",
      "Degree in English/Journalism preferred"
    ],
    category: "Content"
  },
  {
    id: "12",
    title: "Sales Executive",
    company: "SalesForce India",
    companyLogo: "SF",
    location: "Ahmedabad",
    salary: "8-14 LPA",
    experience: "2-5 years",
    jobType: "Full-time",
    workMode: "On-site",
    postedDate: "1 week ago",
    description: "Drive sales growth by identifying and closing new business opportunities. Build strong relationships with clients and exceed targets.",
    responsibilities: [
      "Identify and pursue new sales opportunities",
      "Build and maintain client relationships",
      "Achieve monthly and quarterly targets",
      "Prepare sales proposals and presentations",
      "Track sales metrics and report progress"
    ],
    requirements: [
      "2+ years of sales experience",
      "Strong communication and negotiation skills",
      "Track record of meeting sales targets",
      "Knowledge of CRM tools",
      "MBA in Sales/Marketing preferred"
    ],
    category: "Sales"
  }
];

export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp Solutions",
    logo: "TC",
    location: "Bangalore",
    industry: "Technology",
    openJobs: 25,
    description: "Leading technology company specializing in enterprise software solutions and digital transformation services."
  },
  {
    id: "2",
    name: "InnovateTech",
    logo: "IT",
    location: "Mumbai",
    industry: "Technology",
    openJobs: 18,
    description: "Innovative startup building next-generation products that transform how businesses operate."
  },
  {
    id: "3",
    name: "DataMinds Analytics",
    logo: "DM",
    location: "Hyderabad",
    industry: "Analytics",
    openJobs: 12,
    description: "Data-driven company helping businesses make smarter decisions through advanced analytics and AI."
  },
  {
    id: "4",
    name: "CloudScale Systems",
    logo: "CS",
    location: "Delhi NCR",
    industry: "Cloud Services",
    openJobs: 20,
    description: "Cloud infrastructure company providing scalable and secure solutions for enterprises worldwide."
  },
  {
    id: "5",
    name: "DesignHub Creative",
    logo: "DH",
    location: "Pune",
    industry: "Design",
    openJobs: 8,
    description: "Creative agency delivering exceptional design experiences for brands across industries."
  },
  {
    id: "6",
    name: "GrowthFirst Marketing",
    logo: "GF",
    location: "Chennai",
    industry: "Marketing",
    openJobs: 15,
    description: "Full-service marketing agency helping businesses grow through innovative marketing strategies."
  },
  {
    id: "7",
    name: "ServerLogic Inc",
    logo: "SL",
    location: "Bangalore",
    industry: "Technology",
    openJobs: 22,
    description: "Backend technology company building robust server solutions and APIs for modern applications."
  },
  {
    id: "8",
    name: "FinanceWise Consulting",
    logo: "FW",
    location: "Gurgaon",
    industry: "Finance",
    openJobs: 10,
    description: "Financial consulting firm providing strategic advisory services to businesses of all sizes."
  },
  {
    id: "9",
    name: "AppCraft Studios",
    logo: "AC",
    location: "Noida",
    industry: "Mobile Development",
    openJobs: 14,
    description: "Mobile app development studio creating innovative applications for iOS and Android platforms."
  },
  {
    id: "10",
    name: "PeopleFirst HR",
    logo: "PF",
    location: "Mumbai",
    industry: "Human Resources",
    openJobs: 6,
    description: "HR solutions company transforming how organizations manage and develop their talent."
  }
];

export const categories = [
  { name: "Technology", count: 1250, icon: "💻" },
  { name: "Marketing", count: 580, icon: "📢" },
  { name: "Design", count: 420, icon: "🎨" },
  { name: "Sales", count: 890, icon: "📈" },
  { name: "Finance", count: 670, icon: "💰" },
  { name: "Human Resources", count: 320, icon: "👥" },
  { name: "Data Science", count: 450, icon: "📊" },
  { name: "Content", count: 280, icon: "✍️" }
];

export const locations = [
  { name: "Bangalore", jobs: 3500 },
  { name: "Mumbai", jobs: 2800 },
  { name: "Delhi NCR", jobs: 2400 },
  { name: "Hyderabad", jobs: 1900 },
  { name: "Pune", jobs: 1600 },
  { name: "Chennai", jobs: 1400 },
  { name: "Kolkata", jobs: 800 },
  { name: "Ahmedabad", jobs: 650 }
];

export const stats = {
  totalJobs: 25000,
  totalCompanies: 5000,
  totalCandidates: 500000,
  jobsPostedToday: 1250
};
