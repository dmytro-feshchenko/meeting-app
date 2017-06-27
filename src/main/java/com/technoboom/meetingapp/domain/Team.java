package com.technoboom.meetingapp.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/27/17
 * Time: 6:03 PM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp.domain
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
public class Team  {
    private @Id @GeneratedValue Long id;
    private String name;
    private String description;
}
