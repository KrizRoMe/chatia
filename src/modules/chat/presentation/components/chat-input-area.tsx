import { Send } from "lucide-react";

function ChatInputArea() {
	return (
		<div className="border-t p-3">
			<form className="flex items-center font-fira-code">
				<span className="text-green-500 mr-2">user@macos:~$</span>
				<input
					type="text"
					className="flex-1 bg-transparent outline-none text-sm text-primary"
					placeholder="Type your command..."
				/>
				<button
					type="submit"
					className="ml-2 text-muted-foreground hover:text-foreground"
					aria-label="Send message"
				>
					<Send size={16} />
				</button>
			</form>
		</div>
	);
}

export default ChatInputArea;
