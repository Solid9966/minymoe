// 기존 domain 패키지를 model 패키지로 바꾸는 이유
// DDD 관점에서 MVC 관점으로 재설계 (훨씬 간단함, DDD는 도메인 주도 설계에 주로 사용)

package org.example.minymoebackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String writer;
    private String date;

    // Lombok 사용 말고, 명시적으로 getter 추가
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getWriter() { return writer; }
    public String getDate() { return date; }
}



