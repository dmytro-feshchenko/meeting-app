package com.technoboom.meetingapp.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/28/17
 * Time: 10:35 AM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp.domain
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "administrators")
public class Administrator {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;

}
