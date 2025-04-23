import ChatContainer from "./components/chat-container";
import InputMessage from "./components/input-message";

export default function Home() {
  return (
    <div className="flex my-1 flex-col  items-center ">
     <ChatContainer />
     <InputMessage />
    </div>
  );
}
