import Chat from "@/modules/chat/presentation/components/chat";

export default function Home() {
	return (
		<main className="flex flex-wrap items-center justify-center min-h-screen p-4 sm:gap-6">
			<Chat />
			<Chat />
		</main>
	);
}
