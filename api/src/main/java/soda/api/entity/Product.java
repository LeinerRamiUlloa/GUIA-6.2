package soda.api.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name = "products")
@Data

public class Product {
@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
@Column(name="description", nullable = false)
private String description;
@Column(name="price", nullable = false)
private double price;
@ManyToOne() @JoinColumn(name = "id_category")
private Category category;
}

// Champions League 2023-2024: Manchester City vs Inter Milan, 24th October 2023, 20:00 GMT.

