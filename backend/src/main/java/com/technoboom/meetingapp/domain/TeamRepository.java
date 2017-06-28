package com.technoboom.meetingapp.domain;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by IntelliJ IDEA.
 * Date: 6/27/17
 * Time: 6:08 PM
 * Project: MeetingApp
 * Package: com.technoboom.meetingapp.domain
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
public interface TeamRepository extends CrudRepository<Team, Long> {
}
