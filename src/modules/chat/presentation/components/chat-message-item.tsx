import type { z } from "zod";
import type { MessageSchema } from "@/modules/chat/application/schemas/message-schema";

function ChatMesageItem({
	message,
}: { message: z.infer<typeof MessageSchema> }) {
	return (
		<div key={message.id} className="mb-3 text-primary">
			<span className="text-green-500">system:~$ </span>
			{message.text}
		</div>
	);
}

export default ChatMesageItem;
