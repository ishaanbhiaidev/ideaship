"use client";

import { ChatMessageList } from "@/features/chat/ChatMessageList";
import { PromptInput } from "@/components/PromptInput";
import { useChatPanel } from "./useChatPanel";
import React from "react";

type Props = { initialMessages: import("@/actions/chat-conversations").Message[] };

export function ChatPanel({ initialMessages }: Props) {
  const chat = useChatPanel(initialMessages);

  return (
    <>
      <div className="flex flex-col md:h-full h-[calc(100vh-4rem)] gap-2">
        <ChatMessageList
          messages={chat.messages}
          isBotThinking={chat.isBotThinking}
          sessionLoading={false}
          status={chat.status}
        />

        <PromptInput
          onSendMessage={({ content: { text, image } }) => {
            chat.setInput(text);
            chat.send(image);
          }}
          generating={chat.isLoading}
          onError={chat.clearError}
          input={chat.input}
          handleInputChange={chat.handleInputChange}
          setInput={chat.setInput}
          stop={chat.stop}
          onAttachments={chat.setAttachments}
        />

        {chat.error && <p className="text-red-500 mt-2">{chat.error}</p>}
      </div>


    </>
  );
}
