import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1967b0", // 메인 컬러
        secondary: "#a8a8a8", // 서브 컬러
        tertiary: "#848484", // 추가 서브 컬러
        white: "#ffffff", // 흰색
        dark: "#222222", // 매우 어두운 색, 주로 텍스트나 배경에 사용
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // 필요에 따라 theme의 다른 부분을 확장할 수 있습니다.
    },
  },
  plugins: [],
};
export default config;

