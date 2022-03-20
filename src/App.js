import Card from "./Components/card";

function App() {
  const x = ["1", "2", "3", "4", "5"];

  return (
    <div className="App">
      <Card star={x}></Card>
    </div>
  );
}

export default App;
