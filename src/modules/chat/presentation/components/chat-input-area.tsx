import { Send } from "lucide-react";

function ChatInputArea() {
	return (
		<div className="border-t border-gray-700 p-3 bg-[#252526]">
			<form className="flex items-center font-fira-code">
				<span className="text-green-400  mr-2">user@macos:~$</span>
				<input
					type="text"
					className="flex-1 bg-transparent outline-none  text-sm text-gray-300"
					placeholder="Type your command..."
				/>
				<button
					type="submit"
					className="ml-2 text-gray-400 hover:text-white"
					aria-label="Send message"
				>
					<Send size={16} />
				</button>
			</form>
		</div>
	);
}

export default ChatInputArea;
