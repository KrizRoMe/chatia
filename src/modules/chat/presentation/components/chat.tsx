import ChatHeader from "./chat-header";
import ChatMessageArea from "./chat-message-area";
import ChatInputArea from "./chat-input-area";

function Chat() {
	// UI Reference: https://v0.dev/chat/macos-terminal-chat-5uo46d3RN0l

	return (
		<div className="flex items-center justify-center w-xs sm:w-md">
			<div className="w-full max-w-3xl bg-card text-card-foreground rounded-lg shadow-xl overflow-hidden border">
				<ChatHeader />
				<ChatMessageArea />
				<ChatInputArea />
			</div>
		</div>
	);
}

export default Chat;
