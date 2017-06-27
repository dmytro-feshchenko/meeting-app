package com.technoboom.meetingapp.domain;

import com.technoboom.meetingapp.domain.Customer;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/26/17
 * Time: 10:00 PM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
