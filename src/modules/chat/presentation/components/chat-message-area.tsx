"use client";

import { useState } from "react";
import type { z } from "zod";
import type { MessageListSchema } from "@/modules/chat/application/schemas/message-schema";
import ChatMesageItem from "@/modules/chat/presentation/components/chat-message-item";

const MESSAGE_LIST_DEFAULT_VALUE: z.infer<typeof MessageListSchema> = [
	{
		id: Math.random(),
		text: "Welcome to Terminal Chat. Type a message to begin.",
		isUser: false,
	},
];

function ChatMessageArea() {
	const [messageList, setMessageList] = useState<
		z.infer<typeof MessageListSchema>
	>(MESSAGE_LIST_DEFAULT_VALUE);

	return (
		<div className="h-[30dvh] sm:h-[50dvh] overflow-y-auto p-4 font-fira-code text-sm bg-background">
			{messageList.map((message) => (
				<ChatMesageItem key={message.id} message={message} />
			))}
		</div>
	);
}

export default ChatMessageArea;
