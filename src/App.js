import "./App.css";

// import ChatBot from "react-simple-chatbot";
import Home from "./component/Home";

function App() {
  // const steps = [
  //   {
  //     id: "0",
  //     message: "Welcome to react chatbot!",
  //     trigger: "1"
  //   },
  //   {
  //     id: "1",
  //     message: "Bye!",
  //     end: true
  //   }
  // ];
  return (
    <div className="App">
      <Home />

      {/* <ChatBot steps={steps} /> */}
    </div>
  );
}

export default App;
