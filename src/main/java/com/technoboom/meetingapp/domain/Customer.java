package com.technoboom.meetingapp.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/26/17
 * Time: 9:34 PM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String description;

    /**
     * Default constructor for Customer
     * Creates empty Customer object
     */
    public Customer() {
        this.firstName = "";
        this.lastName = "";
        this.description = "";
    }

    /**
     * Constructor for Customer
     * @param firstName     Customer`s first name
     * @param lastName      Customer`s last name
     * @param description   Description of the customer
     */
    public Customer(String firstName, String lastName, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
    }
}
