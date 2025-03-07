import ChatHeader from "@/modules/chat/presentation/components/chat-header";
import ChatInputArea from "@/modules/chat/presentation/components/chat-input-area";
import ChatMessageArea from "@/modules/chat/presentation/components/chat-message-area";

function ChatPage() {
	// UI Reference: https://v0.dev/chat/macos-terminal-chat-5uo46d3RN0l

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#121212] p-4">
			<div className="w-full max-w-3xl bg-[#1e1e1e] text-gray-300 rounded-lg shadow-xl overflow-hidden border border-gray-700">
				<ChatHeader />
				<ChatMessageArea />
				<ChatInputArea />
			</div>
		</div>
	);
}

export default ChatPage;
