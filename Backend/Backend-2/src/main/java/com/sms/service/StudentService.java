package com.sms.service;

import java.util.List;

import com.sms.entity.Student;

public interface StudentService {

    // Create Student
    Student addStudent(Student student);


    // Get All Students
    List<Student> getAllStudents();


    // Get Student By Id
    Student getStudentById(Long id);


    // Update Student
    Student updateStudent(Long id, Student student);


    // Delete Student
    void deleteStudent(Long id);
    
 // Search Students
    List<Student> searchStudents(String keyword);

}