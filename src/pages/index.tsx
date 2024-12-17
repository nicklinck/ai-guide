import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateMessage } from "@/hooks/useCreateMessage";
import { useGetAllMessages } from "@/hooks/useGetAllMessages";
import { useState } from "react";

export default function Home() {
  const [inputMessage, setInputMessage] = useState("");

  const { data: messages, isLoading, isError } = useGetAllMessages();

  const { mutateAsync: createMessage, isPending: isCreating } =
    useCreateMessage();

  const handleSendMessage = async () => {
    console.log("message being sent is", inputMessage);
    if (!inputMessage || inputMessage.length === 0) return;
    await createMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <div className="w-full h-screen flex-col flex items-center justify-center">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <p className="text-4xl font-bold">Welcome to ai-guide</p>
      <div className="border shadow-xl p-4 rounded-lg min-w-96 max-w-xs mt-4 flex flex-col gap-y-4">
        {messages?.length === 0 ? (
          <p className="mx-auto text-sm text-gray-500">No messages yet</p>
        ) : (
          messages?.map((message) => {
            return (
              <div
                key={message.id}
                className="text-sm break-all px-3 py-1 rounded-bl-none rounded-xl bg-blue-500 text-white font-medium w-fit"
              >
                <p>{message.message}</p>
              </div>
            );
          })
        )}
        <div className="w-full flex gap-x-4 items-center">
          <Input
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
            placeholder="Type your message here"
          />
          <Button onClick={handleSendMessage}>
            {isCreating ? "Sending..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}
