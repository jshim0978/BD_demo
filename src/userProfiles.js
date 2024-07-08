const userProfiles = [
    {
        id: 1,
        name: "정승욱",
        password: "wjdtmddnr",
        title: "IT 전문가 지망생",
        image: "/images/user1.jpg",  // Placeholder for user profile image
        contact: {
            email: "seungwook.jung@email.com",
            phone: "+82 10 1234 5678",
            address: "Seoul"
        },
        socialMedia: {
            linkedIn: "https://www.linkedin.com/in/seungwook-jung",
            github: "https://github.com/seungwookjung"
        },
        summary: "리버럴 아츠 졸업생으로서 IT 산업에 통합하려는 강한 관심을 가지고 있습니다. 분석적 사고와 창의적 문제 해결 능력이 뛰어나며, 소프트웨어 개발 및 데이터 분석에 대해 배우고 이를 활용할 수 있는 초급 기회를 찾고 있습니다.",
        skills: ["비판적 사고", "문제 해결", "연구", "기초 프로그래밍"],
        experiences: [
            {
                role: "인턴",
                company: "예술과 문화 잡지",
                period: "2023년 6월 - 2023년 8월",
                details: "아시아 전역의 문화 동향에 대한 연구를 수행하고 기사 작성에 기여하여 다양한 관점을 이해하고 의사소통 능력을 향상시켰습니다."
            }
        ],
        education: [
            {
                degree: "리버럴 아츠 학사",
                school: "서울대학교",
                year: "2019 - 2023"
            }
        ],
        languages: ["한국어 (모국어)", "영어 (유창)"],
        projects: [
            {
                title: "문화 분석 도구",
                description: "지난 10년간의 문화 데이터 동향을 분석하고 시각화하기 위해 Python 기반 도구를 개발했습니다."
            }
        ],
        certifications: ["Google IT Support Professional Certificate"],
        benefits: [
            {
                name: "구직 활동 지원금",
                description: "새로운 경력 기회를 찾는 동안 생계비를 지원받을 수 있습니다.",
                url: "https://www.gov.kr/portal/service/serviceInfo/PRD000001108297"
            },
            {
                name: "직업 훈련 프로그램",
                description: "정부가 제공하는 재교육 및 재훈련 프로그램에 참여하여 새로운 기술을 습득할 수 있습니다.",
                url: "https://www.hrd.go.kr/hrdp/mb/pmbao/indexNew.jsp"
            },
            {
                name: "경력 전환 상담 서비스",
                description: "경력 전환 과정에서 전문가의 상담과 지도를 받을 수 있습니다.",
                url: "https://www.work.go.kr/consltJobCarpa/main.do"
            }
        ]
    },
    {
        id: 2,
        name: "안종현",
        password: "dkswhdgus",
        title: "새로운 기회를 모색하는 경험 많은 전문가",
        image: "/images/user2.jpg",
        contact: {
            email: "ahjung@financepro.com",
            phone: "+82 10 8765 4321",
            address: "Seoul"
        },
        socialMedia: {
            linkedIn: "https://www.linkedin.com/in/jonghyun-ahn",
            twitter: "https://twitter.com/jonghyun_ahn"
        },
        summary: "금융 분야에서 30년 이상의 경력을 가진 베테랑 전문가로서 현재 새로운 도전과 기회를 모색하고 있습니다. 경영 및 전략 기획에 대한 폭넓은 경험을 새로운 산업에 활용하고, 현대 비즈니스 환경에 적응하고 배우고자 합니다.",
        skills: ["전략 기획", "리더십", "재무 분석", "위험 관리", "변화 관리"],
        experiences: [
            {
                role: "최고 재무 책임자",
                company: "Global Finance Corp",
                period: "2000 - 현재",
                details: "주요 기업의 재무 전략 및 운영을 감독하며 1억 달러 이상의 예산을 관리하고 50명 이상의 팀을 이끌었습니다."
            },
            {
                role: "재무 분석가",
                company: "Market Investors Ltd.",
                period: "1985 - 2000",
                details: "기업 고객에게 상세한 시장 분석 및 투자 조언을 제공하여 고객 포트폴리오 성장과 만족도에 크게 기여했습니다."
            }
        ],
        education: [
            {
                degree: "MBA 재무 전공",
                school: "펜실베이니아 대학교 와튼 스쿨",
                year: "1983 - 1985"
            }
        ],
        languages: ["한국어 (모국어)", "영어 (유창)"],
        publications: [
            {
                title: "진화하는 금융 시장",
                publisher: "Journal of Finance",
                year: "2015"
            }
        ],
        projects: [
            {
                title: "효율성 개선 이니셔티브",
                description: "추가 자원 없이 생산량을 20% 증가시키는 프로젝트를 주도했습니다."
            }
        ],
        certifications: ["Certified Lean Six Sigma Green Belt"],
        // references: ["John Doe, Global Finance Corp의 CEO"],
        benefits: [
            {
                name: "구직 활동 지원금",
                description: "새로운 경력 기회를 찾는 동안 생계비를 지원받을 수 있습니다.",
                url: "https://www.gov.kr/portal/service/serviceInfo/PRD000001108297"
            },
            {
                name: "직업 훈련 프로그램",
                description: "정부가 제공하는 재교육 및 재훈련 프로그램에 참여하여 새로운 기술을 습득할 수 있습니다.",
                url: "https://www.hrd.go.kr/hrdp/mb/pmbao/indexNew.jsp"
            },
            {
                name: "경력 전환 상담 서비스",
                description: "경력 전환 과정에서 전문가의 상담과 지도를 받을 수 있습니다.",
                url: "https://www.work.go.kr/consltJobCarpa/main.do"
            }
        ]
    },
    {
        id: 3,
        name: "김희동",
        password: "rlagmlehd",
        title: "경력 전환을 고려하는 제조 감독자",
        image: "/images/user3.jpg",
        contact: {
            email: "heesup.kim@efficientmanuf.com",
            phone: "+82 10 3344 5566",
            address: "Seoul"
        },
        socialMedia: {
            linkedIn: "https://www.linkedin.com/in/heesupkim",
            github: "https://github.com/heesupkim",
        },
        summary: "생산 분야에서 10년의 경력을 가진 헌신적인 제조 감독자로서 현재 더 나은 워크-라이프 밸런스와 재정적 안정성을 제공하는 경력 기회를 평가하고 있습니다. 운영 관리 및 효율성 최적화 기술을 활용할 수 있는 역할에 관심이 있습니다.",
        skills: ["운영 관리", "팀 리더십", "효율성 최적화", "문제 해결"],
        experiences: [
            {
                role: "생산 감독자",
                company: "Efficient Manufacturing Inc",
                period: "2013 - 현재",
                details: "제조 공장에서 일일 운영을 관리하며 40명의 직원을 이끌어 생산 목표를 달성하고 안전 및 품질 기준을 유지했습니다."
            },
            {
                role: "품질 관리 분석가",
                company: "Quality Makers Ltd.",
                period: "2010 - 2013",
                details: "제품 품질을 모니터링하고 보고하여 3년 동안 생산 오류를 15% 줄이는 데 도움을 주었습니다."
            }
        ],
        education: [
            {
                degree: "산업 관리 학사",
                school: "State University",
                year: "2006 - 2010"
            }
        ],
        languages: ["한국어 (모국어)", "영어 (고급)"],
        projects: [
            {
                title: "효율성 개선 이니셔티브",
                description: "추가 자원 없이 생산량을 20% 증가시키는 프로젝트를 주도했습니다."
            }
        ],
        publications: [
            {
                title: "진화하는 금융 시장",
                publisher: "Journal of Finance",
                year: "2015"
            }
        ],
        certifications: ["Certified Lean Six Sigma Green Belt"],
        benefits: [
            {
                name: "구직 활동 지원금",
                description: "새로운 경력 기회를 찾는 동안 생계비를 지원받을 수 있습니다.",
                url: "https://www.gov.kr/portal/service/serviceInfo/PRD000001108297"
            },
            {
                name: "직업 훈련 프로그램",
                description: "정부가 제공하는 재교육 및 재훈련 프로그램에 참여하여 새로운 기술을 습득할 수 있습니다.",
                url: "https://www.hrd.go.kr/hrdp/mb/pmbao/indexNew.jsp"
            },
            {
                name: "경력 전환 상담 서비스",
                description: "경력 전환 과정에서 전문가의 상담과 지도를 받을 수 있습니다.",
                url: "https://www.work.go.kr/consltJobCarpa/main.do"
            }
        ]

    }
];

export default userProfiles;
