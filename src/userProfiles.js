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
        ],
        jobOpenings: [
            {
                title: "스타트업 멘토",
                company: "서울창업허브",
                location: "서울, 대한민국",
                description: "초기 단계 스타트업들에게 마케팅 및 브랜딩 전략을 제공하는 멘토 역할입니다.",
                requirements: [
                    "20년 이상의 마케팅 경력",
                    "스타트업 생태계에 대한 이해",
                    "최신 디지털 마케팅 트렌드에 대한 지식"
                ],
                benefits: [
                    "유연한 근무 시간",
                    "멘토링 활동비 지원",
                    "창업 네트워크 접근"
                ]
            },
            {
                title: "마케팅 컨설턴트",
                company: "테크 스타트업 컨설팅 펌",
                location: "판교, 대한민국",
                description: "기술 기반 스타트업들의 마케팅 전략 수립 및 실행을 지원합니다.",
                requirements: [
                    "B2B 마케팅 경험",
                    "테크 산업에 대한 이해",
                    "데이터 기반 의사결정 능력"
                ],
                benefits: ["프로젝트 기반 근무", "성과 보너스", "원격 근무 가능"]
            },
            {
                title: "크리에이티브 디렉터",
                company: "디지털 마케팅 에이전시",
                location: "서울, 대한민국",
                description: "혁신적인 디지털 마케팅 캠페인의 크리에이티브 방향을 제시합니다.",
                requirements: [
                    "풍부한 브랜딩 경험",
                    "디지털 미디어에 대한 깊은 이해",
                    "협업 및 리더십 능력"
                ],
                benefits: [
                    "경쟁력 있는 연봉",
                    "창의적인 근무 환경",
                    "지속적인 교육 기회"
                ]
            },
            {
                title: "마케팅 컨설턴트",
                company: "Marketing Advisory Co.",
                location: "서울, 대한민국",
                description: "고객에게 맞춤형 마케팅 전략을 제공하고 실행 계획을 수립합니다.",
                requirements: [
                    "마케팅 분야에서 10년 이상의 경력",
                    "브랜드 관리 및 시장 분석 경험",
                    "강력한 의사 소통 능력"
                ],
                benefits: ["건강 보험", "연차 휴가", "재택 근무 옵션", "성과 보너스"]
            },
            {
                title: "프리랜서 마케터",
                company: "Freelance Projects",
                location: "재택 근무",
                description: "프로젝트 기반으로 기업의 마케팅 캠페인, 콘텐츠 제작, 소셜 미디어 관리 등을 담당합니다.",
                requirements: [
                    "마케팅 전략 수립 경험",
                    "디지털 마케팅 기술",
                    "자율적으로 일할 수 있는 능력"
                ],
                benefits: ["유연한 근무 시간", "프로젝트 기반 보수", "재택 근무 가능"]
            },
            {
                title: "마케팅 트레이너",
                company: "Marketing Training Center",
                location: "서울, 대한민국",
                description: "마케팅 관련 교육 프로그램을 개발하고, 신입 또는 현직 마케터들을 대상으로 교육합니다.",
                requirements: [
                    "마케팅 교육 설계 및 진행 경험",
                    "최신 마케팅 트렌드 지식",
                    "강력한 의사 소통 능력"
                ],
                benefits: ["건강 보험", "연차 휴가", "교육 지원", "재택 근무 옵션"]
            }
        ],
        educationPrograms:[
            {
                title: "웹 애플리케이션 고급 소프트웨어 개발",
                institution: "Tech Innovators Academy",
                location: "온라인",
                duration: "6개월",
                description: "경험 많은 개발자를 위해 설계된 고급 과정으로, React, Node.js 및 Docker와 같은 최신 프레임워크와 기술을 사용하여 웹 애플리케이션 개발에 대한 이해를 심화시킵니다.",
                prerequisites: "최소 3년의 프로그래밍 경험",
                deadline: "2024년 12월 31일"
            },

        ],
        benefitsData:[
            {
                title: "고령자 고용 지원 프로그램",
                description: "고령자의 고용을 장려하기 위해 다양한 지원 혜택을 제공합니다. 고용주에게는 임금 보조금을, 고령자에게는 재취업 훈련 프로그램을 제공합니다.",
                eligibility: "만 50세 이상의 구직자",
                applicationProcess: "온라인 신청서를 작성하고 제출하십시오.",
                deadline: "2024년 12월 31일"
            },
            {
                title: "은퇴자 재교육 프로그램",
                description: "은퇴자들이 최신 기술과 트렌드를 습득할 수 있도록 다양한 재교육 프로그램을 제공합니다.",
                eligibility: "만 50세 이상의 은퇴자",
                applicationProcess: "온라인 신청서를 작성하고 제출하십시오.",
                deadline: "2024년 12월 31일"
            },
            {
                title: "신중년 경력형 일자리 지원",
                description: "50세 이상 퇴직 전문인력의 재취업을 지원하는 프로그램으로, 스타트업 멘토링 활동에 대한 인건비를 지원합니다.",
                eligibility: "50세 이상의 경력 15년 이상 전문인력",
                support: "월 최대 200만원의 인건비 지원, 최대 2년간",
                applicationProcess: "워크넷 홈페이지를 통한 온라인 신청",
                deadline: "연중 상시"
            },
            {
                title: "중장년 전문인력 매칭 지원사업",
                description: "전문성을 갖춘 중장년층과 혁신 분야 스타트업을 연결하여 멘토링 및 자문 활동을 지원합니다.",
                eligibility: "만 50세 이상의 관련 분야 경력 20년 이상 전문가",
                support: "활동비 지원, 멘토링 플랫폼 제공",
                applicationProcess: "중소벤처기업부 홈페이지를 통한 신청",
                deadline: "2024년 12월 31일"
            }
        ],
        NODES: [
            {
                "id": "1",
                "data": { "label": "Marketing Manager" },
                "position": { "x": 50, "y": 50 },
                "type": "input",
                "style": { "background": "#FFCDD2" }
            },
            {
                "id": "2",
                "data": { "label": "Marketing Consultant" },
                "position": { "x": 250, "y": 50 },
                "style": { "background": "#F8BBD0" }
            },
            {
                "id": "3",
                "data": { "label": "Marketing Trainer" },
                "position": { "x": 450, "y": 50 },
                "style": { "background": "#E1BEE7" }
            },
            {
                "id": "4",
                "data": { "label": "Freelance Marketer" },
                "position": { "x": 250, "y": 200 },
                "style": { "background": "#D1C4E9" }
            },
            {
                "id": "5",
                "data": { "label": "Mentor" },
                "position": { "x": 450, "y": 200 },
                "style": { "background": "#C5CAE9" }
            }
        ],
        EDGES: [
            {
                "id": "e1-2",
                "source": "1",
                "target": "2",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#FF8A80" }
            },
            {
                "id": "e2-3",
                "source": "2",
                "target": "3",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#FF80AB" }
            },
            {
                "id": "e2-4",
                "source": "2",
                "target": "4",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#EA80FC" }
            },
            {
                "id": "e2-5",
                "source": "2",
                "target": "5",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#B388FF" }
            }
        ],
        CAREER_PATH_DETAILS: {
            "Marketing Manager": "마케팅 캠페인을 기획하고 실행하며 팀을 관리하는 역할입니다.",
            "Marketing Consultant": "기업에게 마케팅 전략에 대한 자문을 제공합니다.",
            "Marketing Trainer": "마케팅 교육 프로그램을 개발하고 진행합니다.",
            "Freelance Marketer": "프리랜서로서 다양한 마케팅 프로젝트를 수행합니다.",
            "Mentor": "후배 마케팅 전문가들을 지도하고 멘토링합니다."
        },
        RECOMMENDED_PATH: [
            "Marketing Manager",
            "Marketing Consultant",
            "Marketing Trainer",
            "Mentor"
        ],
    },
    {
        id: 2,
        name: "박지훈",
        password: "qkrwlgns",
        title: "은퇴 준비 중인 비즈니스 코치/멘토",
        image: "/images/user2.jpg",
        contact: {
            "email": "jihun.park@email.com",
            "phone": "+82 10 8765 4321"
        },
        socialMedia: {
            "linkedIn": "https://www.linkedin.com/in/jihun-park",
            "github": "https://github.com/jihunpark"
        },
        summary: "25년 이상의 마케팅 경력을 가진 전문가로서, 은퇴 후에도 마케팅 지식을 공유하고 기업의 성장을 지원하고자 합니다. 특히 마케팅 전략 수립과 브랜드 관리에 대한 깊은 이해를 가지고 있습니다.",
        skills: ["브랜드 전략", "시장 분석", "디지털 마케팅", "팀 리더십"],
        experiences: [
            {
                "role": "마케팅 디렉터",
                "company": "대한민국 마케팅 솔루션",
                "period": "2010년 4월 - 2023년 12월",
                "details": "다양한 마케팅 캠페인을 기획하고 실행하여 회사의 브랜드 가치를 높이는 데 기여하였습니다."
            },
            {
                "role": "마케팅 매니저",
                "company": "글로벌 브랜드",
                "period": "2000년 3월 - 2010년 3월",
                "details": "브랜드 전략 수립 및 시장 분석을 통해 매출 성장을 견인하였습니다."
            }
        ],
        education: [
            {
                "degree": "경영학 학사",
                "school": "고려대학교",
                "year": "1992 - 1996"
            }
        ],
        languages: ["한국어 (모국어)", "영어 (유창)"],
        projects: [
            {
                "title": "브랜드 리뉴얼 캠페인",
                "description": "브랜드 이미지 개선을 위한 전면적인 마케팅 캠페인을 주도하여, 소비자 인식을 긍정적으로 변화시켰습니다."
            }
        ],
        certifications: ["Certified Digital Marketing Professional (CDMP)"],
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
        ],
        jobOpenings: [
            {
                title: "스타트업 멘토",
                company: "서울창업허브",
                location: "서울, 대한민국",
                description: "초기 단계 스타트업들에게 마케팅 및 브랜딩 전략을 제공하는 멘토 역할입니다.",
                requirements: [
                    "20년 이상의 마케팅 경력",
                    "스타트업 생태계에 대한 이해",
                    "최신 디지털 마케팅 트렌드에 대한 지식"
                ],
                benefits: [
                    "유연한 근무 시간",
                    "멘토링 활동비 지원",
                    "창업 네트워크 접근"
                ]
            },
            {
                title: "마케팅 컨설턴트",
                company: "테크 스타트업 컨설팅 펌",
                location: "판교, 대한민국",
                description: "기술 기반 스타트업들의 마케팅 전략 수립 및 실행을 지원합니다.",
                requirements: [
                    "B2B 마케팅 경험",
                    "테크 산업에 대한 이해",
                    "데이터 기반 의사결정 능력"
                ],
                benefits: ["프로젝트 기반 근무", "성과 보너스", "원격 근무 가능"]
            },
            {
                title: "크리에이티브 디렉터",
                company: "디지털 마케팅 에이전시",
                location: "서울, 대한민국",
                description: "혁신적인 디지털 마케팅 캠페인의 크리에이티브 방향을 제시합니다.",
                requirements: [
                    "풍부한 브랜딩 경험",
                    "디지털 미디어에 대한 깊은 이해",
                    "협업 및 리더십 능력"
                ],
                benefits: [
                    "경쟁력 있는 연봉",
                    "창의적인 근무 환경",
                    "지속적인 교육 기회"
                ]
            },
            {
                title: "마케팅 컨설턴트",
                company: "Marketing Advisory Co.",
                location: "서울, 대한민국",
                description: "고객에게 맞춤형 마케팅 전략을 제공하고 실행 계획을 수립합니다.",
                requirements: [
                    "마케팅 분야에서 10년 이상의 경력",
                    "브랜드 관리 및 시장 분석 경험",
                    "강력한 의사 소통 능력"
                ],
                benefits: ["건강 보험", "연차 휴가", "재택 근무 옵션", "성과 보너스"]
            },
            {
                title: "프리랜서 마케터",
                company: "Freelance Projects",
                location: "재택 근무",
                description: "프로젝트 기반으로 기업의 마케팅 캠페인, 콘텐츠 제작, 소셜 미디어 관리 등을 담당합니다.",
                requirements: [
                    "마케팅 전략 수립 경험",
                    "디지털 마케팅 기술",
                    "자율적으로 일할 수 있는 능력"
                ],
                benefits: ["유연한 근무 시간", "프로젝트 기반 보수", "재택 근무 가능"]
            },
            {
                title: "마케팅 트레이너",
                company: "Marketing Training Center",
                location: "서울, 대한민국",
                description: "마케팅 관련 교육 프로그램을 개발하고, 신입 또는 현직 마케터들을 대상으로 교육합니다.",
                requirements: [
                    "마케팅 교육 설계 및 진행 경험",
                    "최신 마케팅 트렌드 지식",
                    "강력한 의사 소통 능력"
                ],
                benefits: ["건강 보험", "연차 휴가", "교육 지원", "재택 근무 옵션"]
            }
        ],
        educationPrograms:[
            {
                title: "웹 애플리케이션 고급 소프트웨어 개발",
                institution: "Tech Innovators Academy",
                location: "온라인",
                duration: "6개월",
                description: "경험 많은 개발자를 위해 설계된 고급 과정으로, React, Node.js 및 Docker와 같은 최신 프레임워크와 기술을 사용하여 웹 애플리케이션 개발에 대한 이해를 심화시킵니다.",
                prerequisites: "최소 3년의 프로그래밍 경험",
                deadline: "2024년 12월 31일"
            },

        ],
        benefitsData:[
            {
                title: "고령자 고용 지원 프로그램",
                description: "고령자의 고용을 장려하기 위해 다양한 지원 혜택을 제공합니다. 고용주에게는 임금 보조금을, 고령자에게는 재취업 훈련 프로그램을 제공합니다.",
                eligibility: "만 50세 이상의 구직자",
                applicationProcess: "온라인 신청서를 작성하고 제출하십시오.",
                deadline: "2024년 12월 31일"
            },
            {
                title: "은퇴자 재교육 프로그램",
                description: "은퇴자들이 최신 기술과 트렌드를 습득할 수 있도록 다양한 재교육 프로그램을 제공합니다.",
                eligibility: "만 50세 이상의 은퇴자",
                applicationProcess: "온라인 신청서를 작성하고 제출하십시오.",
                deadline: "2024년 12월 31일"
            },
            {
                title: "신중년 경력형 일자리 지원",
                description: "50세 이상 퇴직 전문인력의 재취업을 지원하는 프로그램으로, 스타트업 멘토링 활동에 대한 인건비를 지원합니다.",
                eligibility: "50세 이상의 경력 15년 이상 전문인력",
                support: "월 최대 200만원의 인건비 지원, 최대 2년간",
                applicationProcess: "워크넷 홈페이지를 통한 온라인 신청",
                deadline: "연중 상시"
            },
            {
                title: "중장년 전문인력 매칭 지원사업",
                description: "전문성을 갖춘 중장년층과 혁신 분야 스타트업을 연결하여 멘토링 및 자문 활동을 지원합니다.",
                eligibility: "만 50세 이상의 관련 분야 경력 20년 이상 전문가",
                support: "활동비 지원, 멘토링 플랫폼 제공",
                applicationProcess: "중소벤처기업부 홈페이지를 통한 신청",
                deadline: "2024년 12월 31일"
            }
        ],
        NODES: [
            {
                "id": "1",
                "data": { "label": "Marketing Manager" },
                "position": { "x": 50, "y": 50 },
                "type": "input",
                "style": { "background": "#FFCDD2" }
            },
            {
                "id": "2",
                "data": { "label": "Marketing Consultant" },
                "position": { "x": 250, "y": 50 },
                "style": { "background": "#F8BBD0" }
            },
            {
                "id": "3",
                "data": { "label": "Marketing Trainer" },
                "position": { "x": 450, "y": 50 },
                "style": { "background": "#E1BEE7" }
            },
            {
                "id": "4",
                "data": { "label": "Freelance Marketer" },
                "position": { "x": 250, "y": 200 },
                "style": { "background": "#D1C4E9" }
            },
            {
                "id": "5",
                "data": { "label": "Mentor" },
                "position": { "x": 450, "y": 200 },
                "style": { "background": "#C5CAE9" }
            }
        ],
        EDGES: [
            {
                "id": "e1-2",
                "source": "1",
                "target": "2",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#FF8A80" }
            },
            {
                "id": "e2-3",
                "source": "2",
                "target": "3",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#FF80AB" }
            },
            {
                "id": "e2-4",
                "source": "2",
                "target": "4",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#EA80FC" }
            },
            {
                "id": "e2-5",
                "source": "2",
                "target": "5",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#B388FF" }
            }
        ],
        CAREER_PATH_DETAILS: {
            "Marketing Manager": "마케팅 캠페인을 기획하고 실행하며 팀을 관리하는 역할입니다.",
            "Marketing Consultant": "기업에게 마케팅 전략에 대한 자문을 제공합니다.",
            "Marketing Trainer": "마케팅 교육 프로그램을 개발하고 진행합니다.",
            "Freelance Marketer": "프리랜서로서 다양한 마케팅 프로젝트를 수행합니다.",
            "Mentor": "후배 마케팅 전문가들을 지도하고 멘토링합니다."
        },
        RECOMMENDED_PATH: [
            "Marketing Manager",
            "Marketing Consultant",
            "Marketing Trainer",
            "Mentor"
        ],
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
                company: "Quality Makers Ltd. a.",
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
        ],
        jobOpenings: [
            {
                title: "스타트업 멘토",
                company: "서울창업허브",
                location: "서울, 대한민국",
                description: "초기 단계 스타트업들에게 마케팅 및 브랜딩 전략을 제공하는 멘토 역할입니다.",
                requirements: [
                    "20년 이상의 마케팅 경력",
                    "스타트업 생태계에 대한 이해",
                    "최신 디지털 마케팅 트렌드에 대한 지식"
                ],
                benefits: [
                    "유연한 근무 시간",
                    "멘토링 활동비 지원",
                    "창업 네트워크 접근"
                ]
            },
            {
                title: "마케팅 컨설턴트",
                company: "테크 스타트업 컨설팅 펌",
                location: "판교, 대한민국",
                description: "기술 기반 스타트업들의 마케팅 전략 수립 및 실행을 지원합니다.",
                requirements: [
                    "B2B 마케팅 경험",
                    "테크 산업에 대한 이해",
                    "데이터 기반 의사결정 능력"
                ],
                benefits: ["프로젝트 기반 근무", "성과 보너스", "원격 근무 가능"]
            },
            {
                title: "크리에이티브 디렉터",
                company: "디지털 마케팅 에이전시",
                location: "서울, 대한민국",
                description: "혁신적인 디지털 마케팅 캠페인의 크리에이티브 방향을 제시합니다.",
                requirements: [
                    "풍부한 브랜딩 경험",
                    "디지털 미디어에 대한 깊은 이해",
                    "협업 및 리더십 능력"
                ],
                benefits: [
                    "경쟁력 있는 연봉",
                    "창의적인 근무 환경",
                    "지속적인 교육 기회"
                ]
            },
            {
                title: "마케팅 컨설턴트",
                company: "Marketing Advisory Co.",
                location: "서울, 대한민국",
                description: "고객에게 맞춤형 마케팅 전략을 제공하고 실행 계획을 수립합니다.",
                requirements: [
                    "마케팅 분야에서 10년 이상의 경력",
                    "브랜드 관리 및 시장 분석 경험",
                    "강력한 의사 소통 능력"
                ],
                benefits: ["건강 보험", "연차 휴가", "재택 근무 옵션", "성과 보너스"]
            },
            {
                title: "프리랜서 마케터",
                company: "Freelance Projects",
                location: "재택 근무",
                description: "프로젝트 기반으로 기업의 마케팅 캠페인, 콘텐츠 제작, 소셜 미디어 관리 등을 담당합니다.",
                requirements: [
                    "마케팅 전략 수립 경험",
                    "디지털 마케팅 기술",
                    "자율적으로 일할 수 있는 능력"
                ],
                benefits: ["유연한 근무 시간", "프로젝트 기반 보수", "재택 근무 가능"]
            },
            {
                title: "마케팅 트레이너",
                company: "Marketing Training Center",
                location: "서울, 대한민국",
                description: "마케팅 관련 교육 프로그램을 개발하고, 신입 또는 현직 마케터들을 대상으로 교육합니다.",
                requirements: [
                    "마케팅 교육 설계 및 진행 경험",
                    "최신 마케팅 트렌드 지식",
                    "강력한 의사 소통 능력"
                ],
                benefits: ["건강 보험", "연차 휴가", "교육 지원", "재택 근무 옵션"]
            }
        ],
        educationPrograms:[
            {
                title: "웹 애플리케이션 고급 소프트웨어 개발",
                institution: "Tech Innovators Academy",
                location: "온라인",
                duration: "6개월",
                description: "경험 많은 개발자를 위해 설계된 고급 과정으로, React, Node.js 및 Docker와 같은 최신 프레임워크와 기술을 사용하여 웹 애플리케이션 개발에 대한 이해를 심화시킵니다.",
                prerequisites: "최소 3년의 프로그래밍 경험",
                deadline: "2024년 12월 31일"
            },

        ],
        benefitsData:[
            {
                title: "고령자 고용 지원 프로그램",
                description: "고령자의 고용을 장려하기 위해 다양한 지원 혜택을 제공합니다. 고용주에게는 임금 보조금을, 고령자에게는 재취업 훈련 프로그램을 제공합니다.",
                eligibility: "만 50세 이상의 구직자",
                applicationProcess: "온라인 신청서를 작성하고 제출하십시오.",
                deadline: "2024년 12월 31일"
            },
            {
                title: "은퇴자 재교육 프로그램",
                description: "은퇴자들이 최신 기술과 트렌드를 습득할 수 있도록 다양한 재교육 프로그램을 제공합니다.",
                eligibility: "만 50세 이상의 은퇴자",
                applicationProcess: "온라인 신청서를 작성하고 제출하십시오.",
                deadline: "2024년 12월 31일"
            },
            {
                title: "신중년 경력형 일자리 지원",
                description: "50세 이상 퇴직 전문인력의 재취업을 지원하는 프로그램으로, 스타트업 멘토링 활동에 대한 인건비를 지원합니다.",
                eligibility: "50세 이상의 경력 15년 이상 전문인력",
                support: "월 최대 200만원의 인건비 지원, 최대 2년간",
                applicationProcess: "워크넷 홈페이지를 통한 온라인 신청",
                deadline: "연중 상시"
            },
            {
                title: "중장년 전문인력 매칭 지원사업",
                description: "전문성을 갖춘 중장년층과 혁신 분야 스타트업을 연결하여 멘토링 및 자문 활동을 지원합니다.",
                eligibility: "만 50세 이상의 관련 분야 경력 20년 이상 전문가",
                support: "활동비 지원, 멘토링 플랫폼 제공",
                applicationProcess: "중소벤처기업부 홈페이지를 통한 신청",
                deadline: "2024년 12월 31일"
            }
        ],
        NODES: [
            {
                "id": "1",
                "data": { "label": "Marketing Manager" },
                "position": { "x": 50, "y": 50 },
                "type": "input",
                "style": { "background": "#FFCDD2" }
            },
            {
                "id": "2",
                "data": { "label": "Marketing Consultant" },
                "position": { "x": 250, "y": 50 },
                "style": { "background": "#F8BBD0" }
            },
            {
                "id": "3",
                "data": { "label": "Marketing Trainer" },
                "position": { "x": 450, "y": 50 },
                "style": { "background": "#E1BEE7" }
            },
            {
                "id": "4",
                "data": { "label": "Freelance Marketer" },
                "position": { "x": 250, "y": 200 },
                "style": { "background": "#D1C4E9" }
            },
            {
                "id": "5",
                "data": { "label": "Mentor" },
                "position": { "x": 450, "y": 200 },
                "style": { "background": "#C5CAE9" }
            }
        ],
        EDGES: [
            {
                "id": "e1-2",
                "source": "1",
                "target": "2",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#FF8A80" }
            },
            {
                "id": "e2-3",
                "source": "2",
                "target": "3",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#FF80AB" }
            },
            {
                "id": "e2-4",
                "source": "2",
                "target": "4",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#EA80FC" }
            },
            {
                "id": "e2-5",
                "source": "2",
                "target": "5",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#B388FF" }
            }
        ],
        CAREER_PATH_DETAILS: {
            "Marketing Manager": "마케팅 캠페인을 기획하고 실행하며 팀을 관리하는 역할입니다.",
            "Marketing Consultant": "기업에게 마케팅 전략에 대한 자문을 제공합니다.",
            "Marketing Trainer": "마케팅 교육 프로그램을 개발하고 진행합니다.",
            "Freelance Marketer": "프리랜서로서 다양한 마케팅 프로젝트를 수행합니다.",
            "Mentor": "후배 마케팅 전문가들을 지도하고 멘토링합니다."
        },
        RECOMMENDED_PATH: [
            "Marketing Manager",
            "Marketing Consultant",
            "Marketing Trainer",
            "Mentor"
        ],

    }
];

export default userProfiles;
