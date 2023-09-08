import Counter from "./components/Counter";
import background from "./assets/bg.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <main
      className="flex flex-col justify-between w-screen h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Counter />
      <Footer />
    </main>
  );
}
export default App;
