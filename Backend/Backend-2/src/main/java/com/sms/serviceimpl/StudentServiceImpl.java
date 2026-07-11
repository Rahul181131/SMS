package com.sms.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.entity.Student;
import com.sms.repository.StudentRepository;
import com.sms.service.StudentService;


@Service
public class StudentServiceImpl implements StudentService {


    @Autowired
    private StudentRepository studentRepository;


    // Add Student
    @Override
    public Student addStudent(Student student) {

        return studentRepository.save(student);
    }


    // Get All Students
    @Override
    public List<Student> getAllStudents() {

        return studentRepository.findAll();
    }


    // Get Student By Id
    @Override
    public Student getStudentById(Long id) {

        return studentRepository.findById(id)
                .orElse(null);
    }


    // Update Student
    @Override
    public Student updateStudent(Long id, Student student) {

        Student existingStudent = studentRepository.findById(id)
                .orElse(null);


        if(existingStudent != null) {

            existingStudent.setStudentId(student.getStudentId());
            existingStudent.setName(student.getName());
            existingStudent.setEmail(student.getEmail());
            existingStudent.setMobile(student.getMobile());
            existingStudent.setGender(student.getGender());
            existingStudent.setDepartment(student.getDepartment());
            existingStudent.setCourse(student.getCourse());
            existingStudent.setDob(student.getDob());
            existingStudent.setAddress(student.getAddress());


            return studentRepository.save(existingStudent);
        }


        return null;
    }


    // Delete Student
    @Override
    public void deleteStudent(Long id) {

        studentRepository.deleteById(id);
    }
    
    @Override
    public List<Student> searchStudents(String keyword) {

        return studentRepository.findByNameContainingIgnoreCase(keyword);

    }

}