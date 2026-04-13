package soda.api.entity;

import jakarta.persistence.*;
import lombok.*;
@Entity @Table(name = "categories")
@Data

public class Category {
@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
@Column(name="description", nullable = false)
private String description;
}
