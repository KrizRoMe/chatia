import { z } from "zod";

export const MessageSchema = z.object({
	id: z.number(),
	text: z.string().min(1, "El mensaje no puede estar vacío"),
	isUser: z.boolean(),
});

export const MessageListSchema = z.array(MessageSchema);
