package com.springboard.spendwise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.springboard.spendwise.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByCategoryName(String categoryName);
    // Category findByCategoryId(Long categoryId);

    // boolean existsByCategoryId(Long categoryId);

    // void deleteByCategoryId(Long categoryId);
}
