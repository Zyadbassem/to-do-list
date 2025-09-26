import "./App.css";
import FormElement from "./FormElement";
import MoonHoles from "./MoonHoles";
import SpaceShip from "./SpaceShip";
import Star from "./star";

function App() {
  const starsArr = new Array(30);
  for (let i = 0; i < 30; i++) {
    starsArr[i] = i;
  }

  return (
    <>
      <div className="moon">
        <MoonHoles />
        <MoonHoles />
        <MoonHoles />
        <MoonHoles />
        <MoonHoles />
      </div>
      {starsArr.map((_, i) => (
        <Star key={i} />
      ))}
      <SpaceShip />
      <FormElement />
    </>
  );
}

export default App;
