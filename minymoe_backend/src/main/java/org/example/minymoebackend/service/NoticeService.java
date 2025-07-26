package org.example.minymoebackend.service;

import org.example.minymoebackend.model.Notice;
import org.example.minymoebackend.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeService {
    @Autowired
    private NoticeRepository repository;

    public List<Notice> findAll() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    public Notice save(Notice notice) {
        return repository.save(notice);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

}

