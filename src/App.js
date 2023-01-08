

function App() {
  const handleClick = (e) =>{
    // console.log(e.target.value)
    const body = document.querySelector('body');
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  }
   const getRandomColor = () => {
    let letters = '01234567ABCDEF'
    let color = "#"
    for(let i=0;i<6;i++){
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
   }
  return (
    <>
    <div className="mainContainer">
     <h1> Random Background Color Changer</h1>
     <button className="btn" onClick={handleClick}>Click Me</button>
    </div>
    </>
  );
}

export default App;
