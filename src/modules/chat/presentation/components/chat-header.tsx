import { Sun } from "lucide-react";

function ChatHeader() {
	return (
		<div className="bg-[#252526] px-4 py-2 flex items-center border-b border-gray-700 justify-between">
			<div className="flex items-center">
				<div className="flex space-x-2 mr-4">
					<div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
					<div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
					<div className="w-3 h-3 rounded-full bg-[#27c93f]" />
				</div>
			</div>
			<div className="text-gray-400 text-sm font-fira-code">
				user@macos-terminal ~ /chat
			</div>
			<div>
				<button
					type="button"
					className="ml-2 p-1 rounded-md hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
					aria-label="Toggle theme"
				>
					<Sun size={14} className="text-gray-400" />
				</button>
			</div>
		</div>
	);
}

export default ChatHeader;
