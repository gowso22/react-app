import React  from 'react';

// 컨텍스트 생성(기본값 설정 안함)
const ThemeContext = React.createContext();
// ThemeContext의 name 값 설정
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;