import Counter from "./components/Counter";
import background from "./assets/bg.jpg";

function App() {
  return (
    <main
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Counter />
    </main>
  );
}
export default App;
