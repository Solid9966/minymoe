package org.example.minymoebackend.repository;

import org.example.minymoebackend.model.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
}
