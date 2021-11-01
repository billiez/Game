package com.kenny.game.controller;

import com.kenny.game.model.Message;
import org.springframework.web.bind.annotation.*;

//TODO: Rename this class

@RestController
@RequestMapping("/rest")
public class Test {

    @PostMapping("/submit")
    public String helloWorld(@RequestBody Message message) {
        return "Received the following message: " + message.getData();
    }

}
