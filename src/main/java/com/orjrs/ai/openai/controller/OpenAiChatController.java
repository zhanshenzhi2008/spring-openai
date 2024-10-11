package com.orjrs.ai.openai.controller;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.util.Map;

@RestController
public class OpenAiChatController {
//    private final ChatClient chatClient;
//
//    public OpenAiChatController(ChatClient.Builder chatClientBuilder) {
//        this.chatClient = chatClientBuilder.build();
//    }
    /** ChatClient */
    private final ChatClient chatClient;

    OpenAiChatController(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @GetMapping("/ai/chat")
    public String generation(@RequestParam(defaultValue = "tell me a joke") String prompt) {
        return this.chatClient.prompt()
                .user(prompt)
                .call()
                .content();
    }

    @GetMapping("/ai/chat/stream")
    public Flux<String> chatStream(String prompt) {
        Flux<String> output = chatClient.prompt()
                .user(prompt)
                .stream()
                .content();
        return output;
    }
}
