package com.orjrs.ai.openai.controller;

import org.springframework.ai.image.ImageGeneration;
import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OpenAiImageController {
    /** OpenAiImageModel */
    private final OpenAiImageModel openAiImageModel;

    public OpenAiImageController(OpenAiImageModel openAiImageModel) {
        this.openAiImageModel = openAiImageModel;
    }


    @GetMapping(value = "/ai/image", produces = "text/html")
    public String image(String message) {
        ImageResponse response = openAiImageModel.call(
                new ImagePrompt("A light cream colored mini golden doodle",
                        OpenAiImageOptions.builder()
                                .withQuality("hd")
                                .withN(4)
                                .withHeight(1024)
                                .withWidth(1024).build())

        );
        return "<image src=\"" + response.getResult().getOutput().getUrl() + ">";
    }

}
