package com.sms.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sms.entity.Student;
import com.sms.service.StudentService;


@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
public class StudentController {


    @Autowired
    private StudentService studentService;



    // Add Student
    @PostMapping
    public Student addStudent(@RequestBody Student student) {

        return studentService.addStudent(student);
    }



    // Get All Students
    @GetMapping
    public List<Student> getAllStudents() {

        return studentService.getAllStudents();
    }



    // Get Student By ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(
            @PathVariable Long id) {


        Student student = studentService.getStudentById(id);


        if(student != null) {

            return ResponseEntity.ok(student);

        }


        return ResponseEntity.notFound().build();
    }



    // Update Student
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable Long id,
            @RequestBody Student student) {


        Student updatedStudent =
                studentService.updateStudent(id, student);


        if(updatedStudent != null) {

            return ResponseEntity.ok(updatedStudent);

        }


        return ResponseEntity.notFound().build();
    }



    // Delete Student
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(
            @PathVariable Long id) {


        studentService.deleteStudent(id);


        return ResponseEntity.ok(
                "Student deleted successfully"
        );
    }
    
    @GetMapping("/search")
    public List<Student> searchStudents(
            @RequestParam String keyword) {

        return studentService.searchStudents(keyword);

    }

}