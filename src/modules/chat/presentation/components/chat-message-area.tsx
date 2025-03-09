import React from "react";

function ChatMessageArea() {
	return (
		<div className="h-[30dvh] sm:h-[50dvh] overflow-y-auto p-4 font-fira-code text-sm bg-background">
			<div className="mb-3 text-primary">
				<span className="text-green-500">system:~$ </span>
				Welcome to the terminal chat.
			</div>
		</div>
	);
}

export default ChatMessageArea;
