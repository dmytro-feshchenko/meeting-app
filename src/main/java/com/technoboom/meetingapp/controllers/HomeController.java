package com.technoboom.meetingapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/26/17
 * Time: 10:21 PM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp.controllers
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}
