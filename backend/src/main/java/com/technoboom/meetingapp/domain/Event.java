package com.technoboom.meetingapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/27/17
 * Time: 10:17 PM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp.domain
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String location;
    private Date startDate;
    private Date endDate;

    private @Version @JsonIgnore Long version;

    /**
     * Default constructor for Event
     */
    public Event() {
        name = "";
        description = "";
        location = "";
    }
}
