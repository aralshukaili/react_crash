import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SocketIO from "socket.io-client";

import Home from "./core/components/Home";
import store from "./state/init";

let io;
function Realtime() {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [room, setRoom] = useState("eMushrif");

  useEffect(() => {
    io = SocketIO("http://localhost:5000");
    io.on("connect", () => {
      console.log("connected");
      setIsConnected(true);
    });
  }, []);

  useEffect(() => {
    io.on("rec_message", msg => {
      setMessages([...messages, msg]);
    });
  }, [messages]);

  useEffect(() => {
    if (isConnected) {
      console.log(room);
      io.emit("join_room", room);
    }
  }, [isConnected, room]);

  return (
    <div>
      <div>
        {messages.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => io.emit("message", { room, text })}>Send</button>
      <select
        value={room}
        onChange={e => {
          io.emit("leave_room", room);
          setRoom(e.target.value);
        }}
      >
        <option value="eMushrif">eMushrif</option>
        <option value="PhazeRo">PhazeRo</option>
      </select>
    </div>
  );
}
// function Realtime() {
//   const [isConnected, setIsConnected] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     io = SocketIO("http://localhost:5000");
//     io.on("connect", socket => {
//       setIsConnected(true);
//     });

//     io.on("rec_message", message => {
//       console.log(message);
//       setMessages([...messages, message]);
//     });
//   }, []);
//   return (
//     <div>
//       {isConnected && "Connected to server"}
//       {messages.map((m, index) => (
//         <p key={index}>{m}</p>
//       ))}
//       <br></br>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={() => io.emit("new_message", text)}>Send</button>
//     </div>
//   );
// }

function App() {
  return (
    <Provider store={store}>
      <Router>
        <h1>Header</h1>
        <Switch>
          <Route exact path="/">
            <Realtime />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
