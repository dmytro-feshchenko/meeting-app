package com.technoboom.meetingapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/28/17
 * Time: 11:32 AM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp.controller
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Controller
public class AdminController {
    @RequestMapping(value = "/admin")
    public String admin() {
        return "admin";
    }
}
