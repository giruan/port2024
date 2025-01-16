import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";



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
        ppt: "https://docs.google.com/presentation/d/1tb8bCudAzs6i7BBIRKQ0Y41FfKRKFe02/edit?usp=sharing&ouid=114563875968308176786&rtpof=true&sd=true",
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
    {
        text:["H & M 쇼핑몰"," 사이트"],
        title: "make site compliant with react.js",
        code: "https://github.com/giruan/shoppingmall",
        view: " https://giruan.github.io/shoppingmall/",
        info: [
            "solo work",
            "production period : 12 days",
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
      "버튼을 누를 시 해당 선택에 맞는 이미지가 나타난다.",
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
      "사용자의 위치를 기반으로 날씨를 알 수 있는 사이트",
      "온도는 섭씨와 화씨가 출력되고 해당 도시의 구름 상태를 나타낸다 ",
      "현재 위치를 조회하여 현재 도시의 날씨 정보를 알수있다",
      "버튼의 도시를 누르면 해당 도시의 날씨를 조회 가능",
      "정보가 불러오는 중간에는 로딩 화면을 삽입해 자연스러운 로딩을 구현했다 ",
      
    ],
    img: port03,
    view: " https://giruan.github.io/weatherPage/",
    name: "포트폴리오",
  },
  {
    num: "04",
    title:
    "H & M 쇼핑몰 사이트",
    desc: [
      "H & M의 다자인을 참고한 쇼핑몰 사이트",
      "상품의 기본적인 정보와 신상품, 추천상품을 알 수 있다 ",
      "로그인을 해야지만 디테일을 확인 할 수 있다",
      "디테일 페이지에서 상품의 사이즈와 정보를 볼 수 있다",
      "로그인 시 상단의 로그인 버튼이 로그아웃으로 변경 되도록 했다 ",
      
    ],
    img: port04,
    view: " https://giruan.github.io/shoppingmall/",
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