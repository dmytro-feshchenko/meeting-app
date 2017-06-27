package com.technoboom.meetingapp.domain;

import lombok.Data;

import javax.persistence.*;

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
@Table(name = "teams")
public class Team  {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
}
