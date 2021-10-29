# 김영민 201840113
## [ 10월 27일 ]
### react-router-dom 
    - 메뉴를 클릭했을때 이동하는 기능을 구현하는데 사용
    - 설치
    ```
    npm install react-router-dom
    ```

### Router
    - 라우터는 접속한곳의 요소를 순서대로 path props가 있는지 물어보고 있으면 출력한다
    ```
    // { <Route path='/home'>
    // <h1>Home</h1>           =>  localhost:3000/#/home
    // </Route>
    ...
    ```

### /home/instroduction 접속시 home이 동시출력되는 문제 해결
    - path props를 모두가 갖고있기때문에 모두같이 출력되는 문제
    - Route 컴포넌트에 exact props 추가
    - exact props는 Rout 컴포넌트가 path props와 정확하게 일치하는 url에만 
    반응하게 만듬

### navigation 만들기
    - Navigation.js 생성
    - Home과 About이라는 2개의 버튼을 만들고 화면이 보이게 만듬
    ```
    <a href='/'>Home</a>
    <a href='/about'>About</a>
    ```

---


## [ 10월 13일 ]
## 전체적인 스타일적용
- 이미지 불러오기
    ```
    // App.js
    movie => (
            <Movie
            key = {movie.id}
            id = {movie.id}
            year = {movie.year}
            title = {movie.title}
            poster = {movie.medium_cover_image} 
            summary = {movie.summary}
            genres = {movie.genres}
            />

    // movie.js
         <img src={poster} alt={title} title={title}/>
    ```


- html 코드에서 class를 clssName 변경한다(html class와 자바스크립트 class가 겹치면 React 에서 혼란이온다)

    ```
    <h5 className="movie__year">{year}</h5>
    ```

---

## [ 10월 6일 ]
## axios 설치 및 사용
- 데이터를 로딩할때 사용

- 설치 : 콘솔에 입력 
    ```
    npm install axios
    ```
- 사용
    ``` 
    import axios from 'axios'
    ```
## super
- 자바스크립트는 언어적 제약사항으로 생성자에서 super를 호출하기 전에는 this를 사용할 수 없다. super를 먼저 호출해야 this를 사용할 수 있다.
## setTimeout() 함수
- 첫 번째 인자는 실행할 함수
- 두 번째 인자는 지연시간, 두 번째 인자 시간만큼 지난 후 첫 번째 인자의 함수를 실행함.
- 단위는 msec
    ```
    setTimeout(함수이름, 시간);
    ```
## componentDidUpdate() 함수
- setState()함수가 실행되고, render()함수로 화면이 업데이트된 직후
componentDidUpdate()함수가 실행
## componentDidMount() 함수
- render() 함수 실행 직후 실핼된다

## Constructor() 함수
- Component를 생성할때 state값을 초기화 하거나 매서드를 바인딩할때 사용
- 생성자 내에서는 setState를 사용하지 않고, this.state를 사용하여 state의 초기값을 할당한다.
- React.Component를 상속해서 만들어진 컴포넌트의 생성자를 구현할 때는 super(props)를 선언을
권고하는 이유는 this.props 사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 있기때문이다

-------------------------
## [ 09월 29일 ]
### 동적데이터, 변경될 가능성이 있는 데이터를 다룰때 사용
### 클래스형 컴포넌트를 사용해야한다

- 클래스형 컴포넌트 상속
    ```
    class App extends React.Component {
    }
    ```
- render() 사용
    ```
    class App extends React.Component {
          render() {
            ㅁㄴㅇㅁㄴㅇ
          }   
    }
    ```
    - 리액트는 클래스형 컴포넌트의 render()를 자동으로 실행시켜준다

- State의 사용
    ```
      state = {
          count : 0,
    };
    ```
    - state를 정의하는 모습이다
- State함수의 count 변경
    ```
    add = () => {
        this.setState(current => ({count: this.state.count +1}))
        console.log('add');
    };

    Minus = () => {
        this.setState(current => ({count: this.state.count -1}))
        console.log('Minus')
    }
    ```
    - state를 직접 변경할수 없어서 간접적으로 변경하여야한다
    - setState()사용하면 가능

<hr>

## prop-types
### props의 자료형을 검사할수 있도록 만들어주는 도구
- prop-types 설치
    ```
    npm install prop-types   
    ```
    - package.json 파일에 확인되면 설치완료!!!
- prop-types 사용
    ```
    foodLike.PropTypes = {
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
            rating: PropTypes.number
    };
    ```
<hr>

## map() 함수의 활용

- 맵함수의 첫번째 인자로 특정 작업을 하는 함수
    ```
        const friends = ["dal", "mark", "lynn"]
        
        friends.map(current => {
            console.log(current);
            return 0
        });            //각각의 요소가 출력되고 [0,0,0,0]을 반환
    ```
- 맵함수에 하트를 추가한 배열만들기
    ```
    const friends = ["dal", "mark", "lynn"]
        
        friends.map(function(friend) {
            return friend + "♥";
        });            //각각의 요소뒤에 ♥르르 붙여서 반환 
    ```
    




<hr>
[ 09월 15일 ]


- props
    - 컴포넌트에서 컴포넌트로 전달되는 데이터. 함수의 매개변수 역할을 하는 것.
    - props를 사용하면 컴포넌트를 효율적으로 사용할 수 있음.

    - props를 이용해서 컴포넌트에 데이터를 보내는 방법
        ```
        <Food fav = "kimchi" />
        /* props의 이름이 fav이고, fav에 kimchi라는 값을 넣어 Food 컴포넌트에 전달한 것. */
        ```
    - props에는 불리언 값(true, false), 숫자, 배열과 같은 다양한 형태의 데이터를 사용할 수 있다.
    - props의 전달 데이터는 문자열인 경우를 제외하면 모두 {}로 감싸야 함.
    - 객체의 특정 값 사용 시 점(.) 사용.    (예) props.fav
    - 구조 분해 할당 사용 시 점 연산자를 사용하지 않아도 된다.

- map() 함수
    - 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환해 준다.


[ 09월 08일 ]

- 리액트 앱 생성
```
npx create-react-app 앱 이름
```

- 리액트 앱 실행
    - 리액트 앱의 루트 폴더에서
    ```
    npm start
    ```

- 리액트 동작 원리
    - index.js에서 app.js의 return값을 가져다가 index.html에 전달해준다.

- 컴포넌트
    - function으로 정의 내린 곳.
    - App이라고만 입력하면 오류 발생. <App />이라고 입력할 것.
    - 리액트는 컴포넌트와 함께 동작하고, 리액트 앱은 모두 컴포넌트로 구성된다.
    - Export 구문을 추가하면 다른 파일에서 해당 컴포넌트 사용 가능.
    - 컴포넌트 작성 시 이름은 대문자로 시작해야 한다.

- JSX
    - 자바스크립트와 HTML을 조합한 문법.
    - 버전 17 이전에서는 import 구문을 입력해야 리액트가 JSX를 이해할 수 있었다.

[ 09월 01일 ]
- 클론 코딩
    - 클론 코딩이란?
        - 실제로 존재하는 사이트나 앱의 코드를 보며 그대로 따라 만들면서, 해당 언어나 기술을 습득하는 학습 방법.
    - 클론 코딩의 부작용
        - 잘못된 방법으로 학습하면 아무리 해도 실력이 늘지 않는다.
    - 클론 코딩 학습법
        - GitHub에 올라온 코드를 맹목적으로 카피해서 사용하지 않는다.
        - 코드를 완벽하게 이해할 수 있도록 노력한다.
        - 학습자의 개성을 살린 코딩을 한다.
        - 주석을 단다.
        - 학습한 내용을 문서화 한다.
        - 학습한 내용을 기반으로 한 다른 프로젝트를 스스로 기획하고 개발한다.

- 개발 환경 준비
    - node.js
    - npx
    - VSCode
    - Git