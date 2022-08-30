import "./index.css";

function App() {
  const names = ["hagob", "vrdo"];

  let t: number;
  t = 5;
  const renderNames = names.map((name) => <p key={name}>{name}</p>);

  return (
    <div>
      {renderNames}
      <p>{t}</p>
    </div>
  );
}
export default App;
