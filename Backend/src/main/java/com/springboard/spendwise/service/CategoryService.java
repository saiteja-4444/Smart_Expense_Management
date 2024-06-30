package com.springboard.spendwise.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springboard.spendwise.model.Category;

@Service
public interface CategoryService {
    
    Category createCategory(Category category);

    Category updateCategory(Long categoryId, Category category);

    void deleteCategory(Long categoryId);

    Category getCategoryByCategoryId(Long categoryId);

    List<Category> getCategories();
    
}
