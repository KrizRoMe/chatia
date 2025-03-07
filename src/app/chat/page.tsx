import ChatHeader from "@/modules/chat/presentation/components/chat-header";
import ChatInputArea from "@/modules/chat/presentation/components/chat-input-area";
import ChatMessageArea from "@/modules/chat/presentation/components/chat-message-area";

function ChatPage() {
	// UI Reference: https://v0.dev/chat/macos-terminal-chat-5uo46d3RN0l

	return (
		<div className="flex items-center justify-center min-h-screen p-4">
			<div className="w-full max-w-3xl bg-card text-card-foreground rounded-lg shadow-xl overflow-hidden border">
				<ChatHeader />
				<ChatMessageArea />
				<ChatInputArea />
			</div>
		</div>
	);
}

export default ChatPage;
