# 김영민 201840113
## [ 12월 08일 ]
## 조건부 연산자로 If-Else구문 인라인으로 표현하기
- 엘리먼트를 조건부로 렌더링하는 다른 방법은 조건부 연산자인 condition ? true: false를 사용하는 것입니다.
- 아래 예시처럼 조건이 너무 복잡하다면 컴포넌트를 분리하기 좋을 때 일 수도 있다
```jsx
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
```
## Key
- Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕고 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.
- 대부분의 경우 데이터의 ID를 key로 사용합니다
- key에 인덱스를 사용하는 것은 권장하지 않습니다. 이로 인해 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할 수 있습니다.

### Key로 컴포넌트 추출하기
- ListItem 컴포넌트를 추출 한 경우 ListItem 안에 있는 li 엘리먼트가 아니라 배열의 ListItem 엘리먼트가 key를 가져야 합니다.

### Key는 형제 사이에서만 고유한 값이어야 한다.
- Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없고 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있습니다.

### Hook의 특징
  - 선택적 사용 기존의 코드를 다시 작성할 필요 없이 일부의 컴포넌트들 안에서 Hook을
    사용할 수 있다. 그러니 당장 Hook이 없다면 Hook을 사용할 필요는 없다.
  - 100%이전 버전과 호환성Hook은 호환성을 깨뜨리는 변화가없다.
  - 현재 사용가능 Hook은 v16.8.0에서 사용가능.

### Hook 개요 + State Hook
  ```javascript
        import React, { useState } from 'react';
        function Example() {
        // "count"라는 새 상태 변수를 선언합니다
        const [count, setCount] = useState(0);
        return (
        <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
              Click me
              </button>
        </div>
        );
        }
  ```  
### Hook 개요 + State Hook
```javascript
      import React, { useState } from 'react';
      function Example() {
      // "count"라는 새 상태 변수를 선언합니다
      const [count, setCount] = useState(0);
      return (
      <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
      </div>
      );
      }
```
### 다중 입력 제어하기
* 여러 input 엘리먼트를 제어해야할 때, 각 엘리먼트에 name 어트리뷰트를 추가하고
event.target.name 값을 통해 핸들러가 어떤 작업을 할 지 선택할 수 있게 해줍니다.
```javascript
      class Reservation extends React.Component {
      constructor(props) {
      super(props);
      this.state = {
            isGoing: true,
            numberOfGuests: 2
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
            [name]: value
      });
      }
      render() {
      return (
            <form>
            <label>
            Is going:
            <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
            Number of guests:
            <input
                  name="numberOfGuests"
                  type="number"
                  value={this.state.numberOfGuests}
                  onChange={this.handleInputChange} />
            </label>
            </form>
      );
      }
      }
```
---
### select 태그
- HTML에서 select는 드롭 다운 목록을 만듭니다. 예를 들어, 이 HTML은 과일 드롭 다운 목록을 만듭니다.
```javascript
     <textarea>
            <select>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
            </select>
      </textarea> 
```
## [ 12월 01일 ]
## 클래스에 로컬 스테이트 출력하기
  
  - render() 메서드 안에 있는 this.props.date를 this.state.date로 변경.
    ```
    class Clock extends React.Component {
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
    ```
  - 초기 this.state를 지정하는 class constructor를 추가.
    ```
    class Clock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
    ```
  - 요소에서 date prop을 삭제.
    ```
    ReactDOM.render(
      <Clock />,
      document.getElementById('root')
    );
    ```
- 함수에서 클래스로 변환하기
  ```
    1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성.
    2. render()라고 불리는 빈 메서드를 추가.
    3. 함수의 내용을 render() 메서드 안으로 옮김.
    4. render() 내용 안에 있는 props를 this.props로 변경.
    5. 남아있는 빈 함수 선언을 삭제.
  ```
- React에서 조건부 렌더링은 JavaScript에서의 조건 처리와 같이 동작.
  ```
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  ```
- 로그인 상태에따라 컴포넌트중 하나를 보여주는 화면을 제작
  ```
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );
  ```

## [ 11월 16일 ]
## 1. https://ko.reactjs.org/
### 1. 간단한 컴포넌트
```
class HelloMessage extends React.Component {
    render() {
        return (
        <div>
            Hello {this.props.name}
        </div>
        );
    }   
}
ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
);
``` 
- React component에서 render()메소드를 사용하는 예제.
- render( ) 메소드는 데이터를 입력받아 화면에 반환하는 역할을 한다.


### 2. state가 포함된 component
```
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('timer-example')
);
```
- 동적인 데이터는 this.state로 접근할 수 있다.
- state가 변하면 render( )메소드가 다시 호출되어 화면이 갱신된다.
- 초기의 state를 0으로 출력한다.
- 이후 componentDidMount( )메소드로 1초에 한번씩 tick( )메소드를 호출한다.
- super는 부모 클래스를 의미하는 것으로 부모클래스의 생성자를 사용하겠다는 선언
임과 동시에 this를 사용하기 위한 것이다.
- super를 호출하기 전에는 this를 사용할 수 없다.
### 3. 애플리케이션-Todo List
```
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);
```
- TodoApp과 TodoList 두개의 컴포넌트로 구성
- handleChange는 모든 키보드 입력마다 React의 state를 갱신해서 보여준다.
- render( )메소드 에서 초기 렌더링을 실행한다.
- onChange를 통해 input에 입력되는 값으로 state 상태 변경을 준비한다.
- 입력된 값은 state의 "text: '' "에 임시로 저장된다.



---
## [ 11월 10일 ]
## 리액트 시작하기
## 1. https://ko.reactjs.org/
공부좀해라~~~!!!!!!!
---
## 영화 제목 출력
- detail.js에 추가
    ```
    render(){
        const { location } = this.props
        if(location.state){
            return (
                <span>{ location.state.title }</span>
            )
        } else {
            return null
        }
    }
    ```
- router 사용 후 주소에 hash(#)가 나타나는 현상 제거법
    - HashRouter 대신 BrowserRouter 사용하기.
---
## [ 11월 03일 ]
## Package.json 과 package-lock.json 의 차이
- Package.json
    - 패키지 의존성 파일
    - 협업할때 각자의 컴퓨터의 동일한 개발환경을 구축할때 사용
    - 개인이 프로젝트를 재생성 하겅나 오루가 있을때도 사용
- Package.json
    - package.json 이 변경될 때 마다 업데이트 되는 것으로 좀더 정확한 버전이
기록되어 있다.
  
## 컴포넌트의 설치오류
```
npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1, but
package-lock.json was generated for lockfileVersion@2. I'll try to do my best with it!

npm ERR! Maximum call stack size exceeded

npm ERR! A complete log of this run can be found in:

npm ERR! C:\Users\82102\AppData\Roaming\npm-cache\_logs\2021-10-
27T07_07_17_243Z-debug.log
```
## 컴포넌트 설치 오류등 원인 규먕이 되지않은 오류가 있을때 해결법
```
$ npm cache clean --force
$ npm rebuild
$ rm -rf node_modules
$ npm install
```    
------------------------
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