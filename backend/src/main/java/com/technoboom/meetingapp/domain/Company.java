package com.technoboom.meetingapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/27/17
 * Time: 6:05 PM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp.domain
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "companies")
public class Company {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    @OneToMany(fetch = FetchType.LAZY)
    private Set<Team> teams = new HashSet<>(0);

    private @Version @JsonIgnore Long version;

    /**
     * Default constructor for Company
     */
    public Company() {
        this.name = "";
        this.description = "";
    }

    /**
     * Constructor for Company
     * @param name company public name
     * @param description company public description
     */
    public Company(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
