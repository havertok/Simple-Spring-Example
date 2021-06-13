package com.simple.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//Will return a Thymeleaf served template that should plugin to React later
@Controller
public class IndexController {
	
	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

}
