import Typewriter from "./src/Typewriter/Typewriter";

const App: React.FC = () => {
  return (
    <div>
      <Typewriter
        text={["Hello, World!", "Welcome to the Typewriter Effect!"]}
        speed={100}
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