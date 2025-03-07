import { Sun } from "lucide-react";

function ChatHeader() {
	return (
		<div className="bg-muted px-4 py-2 flex items-center border-b border-border justify-between">
			<div className="flex items-center">
				<div className="flex space-x-2 mr-4">
					<div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
					<div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
					<div className="w-3 h-3 rounded-full bg-[#27c93f]" />
				</div>
			</div>
			<div className="text-muted-foreground  text-sm font-mono">
				user@macos-terminal ~ /chat
			</div>
			<div>
				<button
					type="button"
					className="ml-2 p-1 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
					aria-label="Toggle theme"
				>
					<Sun size={14} className="text-muted-foreground " />
				</button>
			</div>
		</div>
	);
}

export default ChatHeader;
