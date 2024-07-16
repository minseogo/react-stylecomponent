
import './App.css';
import {Title, Abtn, Button, Buttoncolor,Buttonany} from './commonui/ui'

function App() {
  return (
    <div className="App">
      <Title>나는 스타일 컴포넌트입니다</Title>
      <Title>베스트상품</Title>
      <Title en>EN</Title>
      <h2>
        나는 타이틀입니다
        <Abtn>더보기</Abtn>
      </h2>
      <h2>
        나는 타이틀입니다
        <Abtn>응모하기</Abtn>
      </h2>
      <h2>
        <button>나는 일반 버튼</button>
        <button primary>나는 일반 버튼</button>
        <Buttoncolor bgcolor="red" textbgcolor="white">나는 일반 버튼</Buttoncolor>
        <Buttonany bgcolor="black" textbgcolor="white" fontsize="100px" fontfamily="맑은 고딕">fontfamily는 삼항식으로</Buttonany>
      </h2>
    </div>
  );
}

export default App;
