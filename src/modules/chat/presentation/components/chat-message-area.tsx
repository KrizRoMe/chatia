import React from "react";

function ChatMessageArea() {
	return (
		<div className="h-[60vh] overflow-y-auto p-4 font-fira-code text-sm bg-[#1e1e1e]">
			<div className="mb-3 text-gray-300">
				<span className="text-green-400">system:~$ </span>
				Welcome to the terminal chat.
			</div>
		</div>
	);
}

export default ChatMessageArea;
