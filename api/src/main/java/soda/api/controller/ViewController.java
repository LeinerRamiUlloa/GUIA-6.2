package soda.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/")
    public String index() {
        return "index"; // nombre del archivo index.html en templates
    }

    @GetMapping("/login")
    public String login() {
        return "login"; // nombre del archivo login.html en templates
    }
}

