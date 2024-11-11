import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";



export const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "edu",
    url: "#edu",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "site",
    url: "#site",
  },
  {
    title: "portfollo",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

export const introText = {
  title: "Software Developer",
  desc: [
    "Fall in love with the problem,",
    "not the solution.",
    "해결책이 아니라 문제와 사랑에 빠져라.",
  ],
};

export const eduText = [
  {
    title: "JAVA 1, 2 (2023.06 ~ 2023.07)",
    desc: " JAVA 기초 이론과 심화실습",
  },
  {
    title: "프론트엔드 1 ~ 6 (2023.07 ~ 2024.01)",
    desc: "HTML, CSS, Javascript, React를 활용한 프론트엔드 기초 및 웹페이지 구현",
  },
  {
    title: "Node.js와 React.js를 활용한 풀스택 양성과정 (2023.12 ~ 2024.06)",
    desc: " HTML, CSS, Javascript, React, Node 등 웹개발 풀스택 개발자 양성 교육",
  },
];

export const siteText = [
    {
        text: ["사용자들의 리뷰를 기반으로", "맛집을 찾을 수 있는"," 맛집 추천 사이트"],
        title: "make site compliant with react.js",
        code: "https://github.com/giruan/reactFood",
        server: "https://github.com/giruan/teamFood",
        info: [
            "group work",
            "production period : 7 weeks",
            "use stack : HTML/CSS, JavaScript, React, BootStrap, Node, Express, Sequelize, MySQL",
        ],
    },
    {
        text:["가위바위보 게임 사이트"],
        title: "make site compliant with react.js",
        code: "https://github.com/giruan/RockPaperScissors",
        view: "https://giruan.github.io/RockPaperScissors/",
        info: [
            "solo work",
            "production period : 4 days",
            "use stack : HTML/CSS, JavaScript, React",
        ],
    },
    {
        text:["사용자 위치별"," 날씨 사이트"],
        title: "make site compliant with react.js",
        code: "https://github.com/giruan/weatherPage",
        view: " https://giruan.github.io/weatherPage/",
        info: [
            "solo work",
            "production period : 10 days",
            "use stack : HTML/CSS, JavaScript, React",
        ],
    },
  ];



export const portText = [
  {
    num: "01",
    title:
      "사용자들의 리뷰를 기반으로, 선호하는 맛집을 찾을 수 있는 맛집 추천 사이트",
      desc: [
        "사용자들의 리뷰를 기반으로 취합된 데이터를 활용하여,", 
        "사용자들이 선호하는 맛집을 쉽게 찾을 수 있도록 합니다.",
        "사용자의 위치를 기반으로 주변 식당의 위치를 파악하여,",
        "불필요한 동선과 메뉴 고민에 드는 시간을 줄일 수 있습니다.",
        "선호도가 높은 가게를 더욱 쉽게 찾아낼 수 있게 됩니다.",
        // "사이트의 전반적인 Front-End 구성 담당.",
        // "사용자들의 리뷰의 평균점과 개수, 내용 출력",
        // "사진 등록 및 사진 삭제 기능",
        // "검색 페이지 정보를 서버에서 불러와 출력",
        // "상세 페이지 사진 모달, 더보기 기능, 사용자별 리뷰 개수 및 리뷰 평균"
      ],
    img: port01,
    code: "https://github.com/giruan/reactFood",
    name: "포트폴리오",
  },
  {
    num: "02",
    title:
    "가위바위보 게임 사이트",
    desc: [
      "컴퓨터와 가위바위보를 할 수 있는 사이트",
      "버튼을 눌러 가위, 바위, 보 중 하나를 선택,",
      "버튼을 누를 시 해당 선택에 맞는 이미지가 나타납니다.",
      "승리 시 초록색 테두리가 생기고 패배 시 빨간색 테두리,",
      "비길 시에는 보라색 테두리가 생깁니다"
      
    ],
    img: port02,
    view: "https://giruan.github.io/RockPaperScissors/",
    name: "포트폴리오",
  },
  {
    num: "03",
    title:
    "사용자 위치별 날씨 사이트",
    desc: [
      "사용자의 위치를 가반으로 날씨를 알 수 있는 사이트",
      "온도는 섭씨와 화씨가 출력되고 해당 도시의 구름 상태를 나타낸다 ",
      "현재 위치를 조회하여 현재 도시의 날씨 정보를 알수있다",
      "버튼의 도시를 누르면 해당 도시의 날씨를 조회 가능",
      "정보가 불러오는 중간에는 로딩 화면을 삽입해 자연스러운 로딩을 구현 ",
      
    ],
    img: port03,
    view: " https://giruan.github.io/weatherPage/",
    name: "포트폴리오",
  },
];

export const contactText = [
    {
      title: "EMAIL : cbk7075@gmail.com",
    },
    {
      link:"https://github.com/giruan",
      title: "GITHUB : https://github.com/giruan",
    },
  ];


  export const footerText = [
    {
      title: "NUMBER : 01041462114",
    },
    {
      title: "EMAIL : cbk7075@gmail.com",
    },
    {
      title: "KAKAO : cjh971231",
    },
    {
      link: "https://github.com/giruan",
      title: "GITHUB : https://github.com/giruan",
    },
  ];