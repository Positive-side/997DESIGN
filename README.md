## 기술 스택

- React
- TypeScript
- Vite (Build Tool)
- styled-components ([Styled-Component](https://styled-components.com/))

</br>

## VSCode 확장 플러그인 설치
`✅ ESLint`
- 코드 스타일 및 품질 관리 플러그인

`✅ Prettier - Code formatter`
- 코드 포멧팅 설정 플러그인

`✅ vscode-styled-components`
- styled-components CSS 속성 자동 완성 플러그인

`✅ ES7 React/Redux/GraphQL/React-Native snippets`
- 단축키를 이용한 함수형 컴포넌트 생성 플러그인

`✅ Git Graph`
- 버전관리 및 커밋내역을 한눈에 확인할 수 있는 Git 플러그인

</br>

## ESLint & Prettier 설정
✅ vscode 설정의 setting.json 파일 내에 아래 옵션 추가

```js
{
    // save를 할 때 typescript 파일에 포맷 적용
    "[typescript]": {
        "editor.formatOnSave": true
    },
    
    // save를 할 때 typescriptreact 파일에 포맷 적용
    "[typescriptreact]": {
        "editor.formatOnSave": true
    },
    
    // save를 할 때 ESLint 동작 설정
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
}
```
</br>

## 설정파일 구성

`✅ .eslintrc.cjs`
- 코드 스타일과 품질을 관리하는 ESLint 설정 파일

`✅ tsconfig.json`
- TypeScript 프로젝트를 위한 컴파일러 옵션을 정의하는 파일

`✅ vite.config.ts`
-  Vite 빌드 도구의 설정 파일로, 빌드 옵션과 개발 서버 설정을 포함

`✅ .prettierrc`
- 코드 포맷팅 설정을 정의하여 코드의 일관된 스타일을 관리

`✅ .gitignore`
-  Git이 추적하지 않을 파일 및 디렉토리를 명시하여 버전 관리에서 제외시키는 설정 파일

`✅ .postcss.confing.js`
-  CSS를 변환하고 확장하기 위한 도구로 관련 설정을 추가하는 파일

</br>

## 프로젝트 시작

✅ 라이브러리 설치
```js
npm install
```

✅ 소스 컴파일 및 Vite 내장 서버 구동
```js
npm run dev
```

✅ 컴파일, 빌드
```js
npm run build
```

✅ 소스 에러 검증 | [ESLint](https://eslint.org/)
```js
npm run lint
```

✅ 코드 포멧팅 검증 | [Prettier](https://prettier.io/docs/en/)
```js
npm run format
```

</br>

## 코딩 컨벤션

✅ 모듈 사용
- import와 export 사용

✅ 명명 규칙
- 컴포넌트 이름, 생성자, 변수, 함수에는 카멜케이스 사용
- styled-components 생성 시, 컴포넌트 이름은 St로 시작

✅ 함수 사용
- 함수 표현식 대신 화살표 함수 사용

✅ 파일 절대경로 사용

```js
import MainPage from '@pages/main/MainPage';

{
    '@' : 'src/*',
    '@pages' : 'src/pages/*',
    '@components' : 'src/components/*',
}
```