package org.example.minymoebackend.controller;

import  org.example.minymoebackend.model.Notice;
import  org.example.minymoebackend.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notice")

public class NoticeController {
    @Autowired
    private NoticeService service;

    @GetMapping
    public List<Notice> getAll() {
        return service.findAll();
    }

    @PostMapping
    public Notice add(@RequestBody Notice notice) {
        return service.save(notice);
    }

    // 글 삭제 컨트롤러
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNotice(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}

