const userProfiles = [
    {
        id: 1,
        name: "정승욱",
        title: "Aspiring IT Professional",
        image: "/images/user1.jpg",  // Placeholder for user profile image
        contact: {
            email: "seungwook.jung@email.com",
            phone: "+82 10 1234 5678"
        },
        socialMedia: {
            linkedIn: "https://www.linkedin.com/in/seungwook-jung",
            github: "https://github.com/seungwookjung"
        },
        summary: "Recent liberal arts graduate with a strong interest in integrating into the IT industry. Skilled in analytical thinking and creative problem solving, seeking entry-level opportunities where I can leverage my skills and learn about software development and data analytics.",
        skills: ["Critical Thinking", "Problem Solving", "Research", "Basic Programming"],
        experiences: [
            {
                role: "Intern",
                company: "Arts and Culture Magazine",
                period: "Jun 2023 - Aug 2023",
                details: "Conducted research and contributed to articles on cultural trends across Asia, gaining an understanding of diverse perspectives and enhancing communication skills."
            }
        ],
        education: [
            {
                degree: "B.A. in Liberal Arts",
                school: "Seoul National University",
                year: "2019 - 2023"
            }
        ],
        languages: ["Korean (Native)", "English (Fluent)"],  // Additional detail for language proficiency
        projects: [
            {
                title: "Cultural Analysis Tool",
                description: "Developed a Python-based tool to analyze and visualize cultural data trends over the past decade."
            }
        ],
        certifications: ["Google IT Support Professional Certificate"]
    },
    {
        id: 2,
        name: "안종현",
        title: "Experienced Professional Exploring New Opportunities",
        image: "/images/user2.jpg",
        contact: {
            email: "ahjung@financepro.com",
            phone: "+82 10 8765 4321"
        },
        socialMedia: {
            linkedIn: "https://www.linkedin.com/in/jonghyun-ahn",
            twitter: "https://twitter.com/jonghyun_ahn"
        },
        summary: "Seasoned professional with over 30 years in the financial sector, currently exploring new challenges and opportunities. Looking to leverage extensive experience in management and strategic planning in a new industry, open to learning and adapting to modern business environments.",
        skills: ["Strategic Planning", "Leadership", "Financial Analysis", "Risk Management", "Change Management"],
        experiences: [
            {
                role: "Chief Financial Officer",
                company: "Global Finance Corp",
                period: "2000 - Present",
                details: "Oversaw the financial strategy and operations of a major corporation, managing a budget of over $100 million and leading a team of 50+ employees."
            },
            {
                role: "Financial Analyst",
                company: "Market Investors Ltd.",
                period: "1985 - 2000",
                details: "Provided detailed market analysis and investment advice to corporate clients, contributing significantly to client portfolio growth and satisfaction."
            }
        ],
        education: [
            {
                degree: "MBA in Finance",
                school: "Wharton School, University of Pennsylvania",
                year: "1983 - 1985"
            }
        ],
        languages: ["Korean (Native)", "English (Fluent)"],
        publications: [
            {
                title: "Evolving Financial Markets",
                publisher: "Journal of Finance",
                year: "2015"
            }
        ],
        references: ["John Doe, CEO at Global Finance Corp"]
    },
    {
        id: 3,
        name: "김희동",
        title: "Manufacturing Supervisor Considering Career Transition",
        image: "/images/user3.jpg",
        contact: {
            email: "heesup.kim@efficientmanuf.com",
            phone: "+82 10 3344 5566"
        },
        socialMedia: {
            linkedIn: "https://www.linkedin.com/in/heesupkim",
            github: "https://github.com/heesupkim"
        },
        summary: "Dedicated manufacturing supervisor with 10 years of experience in the production sector, currently evaluating career opportunities that offer better work-life balance and financial stability. Interested in roles that can benefit from my operational management and efficiency optimization skills.",
        skills: ["Operational Management", "Team Leadership", "Efficiency Optimization", "Problem Solving"],
        experiences: [
            {
                role: "Production Supervisor",
                company: "Efficient Manufacturing Inc",
                period: "2013 - Present",
                details: "Managed daily operations in a manufacturing plant, leading a team of 40 workers to meet production targets while ensuring safety and quality standards."
            },
            {
                role: "Quality Control Analyst",
                company: "Quality Makers Ltd.",
                period: "2010 - 2013",
                details: "Monitored and reported on product quality, providing insights that helped reduce production errors by 15% over three years."
            }
        ],
        education: [
            {
                degree: "B.Sc. in Industrial Management",
                school: "State University",
                year: "2006 - 2010"
            }
        ],
        languages: ["Korean (Native)", "English (Advanced)"],
        projects: [
            {
                title: "Efficiency Improvement Initiative",
                description: "Led a project to streamline production processes, resulting in a 20% increase in output without additional resources."
            }
        ],
        certifications: ["Certified Lean Six Sigma Green Belt"]
    }
];

export default userProfiles;
