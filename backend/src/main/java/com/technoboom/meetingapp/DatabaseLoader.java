package com.technoboom.meetingapp;

import com.technoboom.meetingapp.domain.Customer;
import com.technoboom.meetingapp.domain.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/26/17
 * Time: 10:02 PM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final CustomerRepository repository;

    /**
     * Constructor for DatabaseLoader
     * @param repository Repository with customers
     */
    @Autowired
    public DatabaseLoader(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Customer("John", "Doe", "BigData Officer"));
    }
}
