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
        name: "이동혁",
        password: "dlehdgur",
        title: "경력 개발을 고려하는 제조 엔지니어",
        image: "/images/user3.jpg",
        contact: {
            email: "dh.lee@efficientmanuf.com",
            phone: "+82 10 3344 5566",
            address: "Seoul"
        },
        socialMedia: {
            linkedIn: "https://www.linkedin.com/in/dhlee",
            github: "https://github.com/dhlee",
        },
        summary: "생산 분야에서 제조 효율화 엔지니어로써 생산량 증대 및 품질 안정성 확보를 주 업으로 하고 있습니다. 생산 현장에 AI 적용으로 운영 관리 및 효율성 최적화 기술을 활용할 수 있는 역할에 관심이 있습니다.",
        skills: ["운영 관리", "팀 리더십", "효율성 최적화", "문제 해결"],
        experiences: [
            {
                role: "Leading 엔지니어",
                company: "Efficient Manufacturing Inc",
                period: "2013 - 현재",
                details: "제조 공장에서 일일 운영을 관리하며 40명의 직원을 이끌어 생산 목표를 달성하고 안전 및 품질 기준을 유지"
            },
            {
                role: "품질 관리 분석가",
                company: "Quality Makers Ltd.",
                period: "2010 - 2013",
                details: "제품 품질을 모니터링하고 보고하여 3년 동안 생산 오류를 15% 감소"
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
                title: "Blowing unit 유량 최적화",
                description: "제조공정 Blowing unit 유량 최적화를 위한 평가 및 품질 안정성 확보"
            },

            {
                title: "이미지 기반 불량 탐지 AI 자동화",
                description: "설비 내부 광학검사기 설치 및 데이터 수집, AI 자동화"
            }
        ],
        publications: [
            {
                title: "Manufacturing system improvement with monitoring camera and AI system",
                publisher: "Journal of Finance",
                year: "2015"
            }
        ],
        certifications: ["Certified Lean Six Sigma Green Belt","정보처리기사","빅데이터분석기사"],

        benefits: [
            {
                name: "내일채움공제",
                description: "적립기간 5년 이상으로 혜택을 확인하세요!",
                url: "https://www.sbcplan.or.kr/main.do?introGbn=01"
            },
            {
                name: "실업급여",
                description: "현재 수령 가능한 실업급여를 확인하세요!",
                url: "https://www.work24.go.kr/cm/f/c/0100/selectUnifySearch.do?topQuerySearchArea=all&topQueryData=%EC%8B%A4%EC%97%85%EA%B8%89%EC%97%AC&sortField=rank&startCount=1&listCount=5"
            },
            {
                name: "육아휴직수당",
                description: "육아휴직시 수령 가능한 육아휴직수당을 확인하세요!",
                url: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/999000000008?administOrgCd=ALL"
            },
        ],
        jobOpenings: [
            {
                title: "인공지능(AI) 제품 개발자 채용",
                company: "	브랜드 인게이지먼트 네트워크 인크",
                location: "서울, 대한민국",
                description: "머신러닝엔지니어,R&amp;D·연구원,백엔드개발자,시스템엔지니어",
                requirements: [
                    "클라우드 시스템 이해 및 경험",
                    "Python+gRPC 경험",
                    "DB (Postgres, MySql, mongoDB) 경험"
                ],
                benefits: [
                    "유연한 근무 시간",
                    "도서/교육비 지원",
                    "명절 선물, 경조금 지원"
                ]
            },
            {
                title: "웹기획, 웹서비스기획 외 경력 채용",
                company: "아미쿠스렉스(주)",
                location: "판교, 대한민국",
                description: "서비스의 상위 기획 및 상세 기획(시장분석,User Story/Scenario, Wire frame 등)",
                requirements: [
                    "웹 서비스 기획 경력 3년 이상",
                    "서비스 런칭에서, 운영 그리고 개선까지 경험",
                    "리소스 분배, 일정관리 등의 기획부터 출시까지 전 과정을 리딩"
                ],
                benefits: ["사회보험 , 주5일 근무"]
            },
            {
                title: "[앱개발] iOS/Android 앱 개발자 신입/경력 채용",
                company: "주식회사 바이앤셀인터내셔널",
                location: "서울, 대한민국",
                description: "데이터베이스 및 온라인정보 제공업",
                requirements: [
                    "모바일 애플리케이션 개발 및 유지보수 경험",
                    "데이터 설계 및 프로그래밍 경험",
                ],
                benefits: [
                    "4대 보험을 제공",
                    "정기 건강 검진",
                    "교육 및 훈련 프로그램을 지원"
                ]
            },
            {
                title: "프로그램개발자(C#/MSSQL) ERP/MES 경력자우대",
                company: "(주)티지에스컨설팅",
                location: "부산광역시 해운대구",
                description: "응용 소프트웨어 개발 및 공급업",
                requirements: [
                    "ERP 및 MES 시스템구축 및 개발 경험",
                    "C#, MSSQL 활용 경험",
                    "정보처리기사"
                ],
                benefits: ["건강 보험", "연차 휴가", "재택 근무 옵션", "성과 보너스"]
            },
        ],
        educationPrograms:[
            {
                title: "2024년 광고콘텐츠제작/멀티미디어콘텐츠/영상편집,웹디자인,포토샵,일러스트/애니메이션 국비교육정보안내",
                institution: "광고출판편집콘텐츠교육가이드",
                location: "서울 마포구 노고산동 국비훈련생위탁모집센터 (이대,신촌,종로,강남)",
                duration: "6개월",
                description: "경2024년 광고콘텐츠제작/광고출판/편집/이북/만화,웹툰/인쇄물,포토샵,일러스트/애니메이션 국비교육정보안내",
                prerequisites: "없음",
                deadline: "2024년 12월 31일"
            },
            {
                title: "의료영상 AI API연동 프로젝트 기반 자바(java)풀스택 개발자 과정(강남/서초)",
                institution: "더조은컴퓨터아트학원",
                location: "서울특별시 강남구",
                duration: "6개월",
                description: "K-디지털 트레이닝, 의료영상 AI API연동 프로젝트 기반 자바(java)풀스택 개발자 과정",
                prerequisites: "없음",
                deadline: "2024년 10월 18일"
            },
            {
                title: "2024년 게임그래픽/디지털디자인/(마야(MAYA)/3D영상/모션그래픽/게임제작 국비교육정보안내",
                institution: "게임애니그래픽국비교육정보안내",
                location: "서울 중구",
                duration: "6개월",
                description: "게임콘텐츠제작, 디지털디자인, 영상그래픽, 광고콘텐츠제작",
                prerequisites: "없음",
                deadline: "2024년 9월 27일"
            },
        ],
        benefitsData:[
            {
                title: "내일채움공제",
                description: "적립기간 5년 이상으로 혜택을 확인하세요!",
                eligibility: "재직기간 6개월 이상 근로자",
                applicationProcess: "온라인 신청서를 작성하고 제출하십시오.",
                deadline: "-"
            },
            {
                title: "실업급여",
                description: "현재 수령 가능한 실업급여를 확인하세요!",
                eligibility: "실업, 구직자",
                support: "월 최대 304만원의 인건비 지원, 최대 3개월",
                applicationProcess: "온라인 신청서를 작성하고 제출하십시오.",
                deadline: "-"
            },
            {
                title: "육아휴직수당",
                description: "육아휴직시 수령 가능한 육아휴직수당을 확인하세요!",
                eligibility: "육아휴직을 시작한 이후 1개월부터 육아휴직이 끝난 날 이후 12개월 이내",
                support: "통상임금의 80%(상한액 월 150만원, 하한액 월70만원)",
                applicationProcess: "워크넷 홈페이지를 통한 온라인 신청",
                deadline: "연중 상시"
            },
        ],
        NODES: [
            {
                "id": "1",
                "data": { "label": "Junior AI Developer" },
                "position": { "x": 50, "y": 50 },
                "type": "input",
                "style": { "background": "#FFCDD2" }
            },
            {
                "id": "2",
                "data": { "label": "Senior AI Developer" },
                "position": { "x": 250, "y": 50 },
                "style": { "background": "#F8BBD0" }
            },
            {
                "id": "3",
                "data": { "label": "AI Team Lead" },
                "position": { "x": 450, "y": 50 },
                "style": { "background": "#E1BEE7" }
            },
            {
                "id": "4",
                "data": { "label": "AI Architect" },
                "position": { "x": 250, "y": 150 },
                "style": { "background": "#D1C4E9" }
            },
            {
                "id": "5",
                "data": { "label": "AI Research Scientist" },
                "position": { "x": 450, "y": 150 },
                "style": { "background": "#C5CAE9" }
            },
            {
                "id": "6",
                "data": { "label": "Machine Learning Engineer" },
                "position": { "x": 50, "y": 250 },
                "style": { "background": "#BBDEFB" }
            },
            {
                "id": "7",
                "data": { "label": "Data Scientist" },
                "position": { "x": 250, "y": 250 },
                "style": { "background": "#B3E5FC" }
            },
            {
                "id": "8",
                "data": { "label": "AI Consultant" },
                "position": { "x": 450, "y": 250 },
                "style": { "background": "#B2EBF2" }
            },
            {
                "id": "9",
                "data": { "label": "Product Manager" },
                "position": { "x": 250, "y": 350 },
                "style": { "background": "#B2DFDB" }
            },
            {
                "id": "10",
                "data": { "label": "AI Mentor" },
                "position": { "x": 450, "y": 350 },
                "style": { "background": "#C8E6C9" }
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
                "id": "e3-4",
                "source": "3",
                "target": "4",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#EA80FC" }
            },
            {
                "id": "e4-5",
                "source": "4",
                "target": "5",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#B388FF" }
            },
            {
                "id": "e2-6",
                "source": "2",
                "target": "6",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#8C9EFF" }
            },
            {
                "id": "e6-7",
                "source": "6",
                "target": "7",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#82B1FF" }
            },
            {
                "id": "e7-8",
                "source": "7",
                "target": "8",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#80D8FF" }
            },
            {
                "id": "e3-9",
                "source": "3",
                "target": "9",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#80CBC4" }
            },
            {
                "id": "e8-10",
                "source": "8",
                "target": "10",
                "animated": true,
                "type": "smoothstep",
                "style": { "stroke": "#A5D6A7" }
            }
        ],
        CAREER_PATH_DETAILS: {
            "Junior AI Developer": "AI 모델 개발 및 데이터 전처리 작업을 담당합니다.",
            "Senior AI Developer": "더 복잡한 AI 모델을 개발하고 팀의 주니어 개발자를 지도합니다.",
            "AI Team Lead": "AI 팀을 이끌고 프로젝트의 전반적인 진행을 관리합니다.",
            "AI Architect": "AI 시스템의 아키텍처를 설계하고 최적화합니다.",
            "AI Research Scientist": "최신 AI 기술 연구 및 논문 작성, 발표를 수행합니다.",
            "Machine Learning Engineer": "머신러닝 모델을 개발하고 배포하는 작업을 수행합니다.",
            "Data Scientist": "데이터 분석과 모델링을 통해 비즈니스 인사이트를 도출합니다.",
            "AI Consultant": "기업에게 AI 솔루션에 대한 자문을 제공합니다.",
            "Product Manager": "AI 제품의 개발 및 출시 전략을 기획하고 관리합니다.",
            "AI Mentor": "주니어 AI 개발자들에게 지식과 경험을 전수합니다."
        },
        RECOMMENDED_PATH: [
            "Junior AI Developer",
            "Senior AI Developer",
            "AI Team Lead",
            "AI Architect",
            "AI Research Scientist",
            "Machine Learning Engineer",
            "Data Scientist",
            "AI Consultant",
            "Product Manager",
            "AI Mentor"
        ]
    }
];

export default userProfiles;
