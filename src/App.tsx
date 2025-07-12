import Typewriter from "./src/Typewriter/Typewriter";

const App: React.FC = () => {
  return (
    <div className="typewriter-container">
      <Typewriter
        text={["Hello, World!", "Welcome to the Typewriter Effect!"]}
        speed={50}
        loop={false}
        random={50}
        delay={500}
        cursor={true}
        cursorChar="|"
        onFinished={() => console.log("Typing finished!")}
        onStart={() => console.log("Typing started!")}
        play={true}
      />
    </div>
  );
}
export default App;
