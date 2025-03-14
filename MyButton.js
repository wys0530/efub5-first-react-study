function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button', 
        { onClick: () => setIsClicked(true)}, 
        isClicked ? 'Clicked!' : 'Click here!'
        
    )
}

// 리액트 돔에 랜더함수를 사용해서 리액트 컴포넌트를 돔컨테이너에 랜더링하는 코드
// 이 코드를 쓰는 이유는 스크립트 태그를 사용해서 컴포넌트를 가져왔다고 해도 컴포넌트가 화면에 보이는 게 아니기 때문임.
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);