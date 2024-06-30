package com.springboard.spendwise.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboard.spendwise.model.Category;
import com.springboard.spendwise.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findAllByCategory(Category category);
    
}
