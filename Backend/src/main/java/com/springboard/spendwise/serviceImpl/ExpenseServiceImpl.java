package com.springboard.spendwise.serviceImpl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboard.spendwise.exception.ResourceNotFoundException;
import com.springboard.spendwise.model.Category;
import com.springboard.spendwise.model.Expense;
import com.springboard.spendwise.model.User;
import com.springboard.spendwise.repository.CategoryRepository;
import com.springboard.spendwise.repository.ExpenseRepository;
import com.springboard.spendwise.repository.UserRepository;
import com.springboard.spendwise.service.ExpenseService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    ExpenseRepository expenseRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public Expense createExpense(Expense expense) {
        if (expense.getCategory() != null) {
            Category category = categoryRepository.findById(expense.getCategory().getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + expense.getCategory().getCategoryId()));
            expense.setCategory(category);
        }
        if (expense.getUser() != null && expense.getUser().getId() != null) {
            User user = userRepository.findById(expense.getUser().getId())
                                      .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + expense.getUser().getId()));
            expense.setUser(user);
        }
        expense.setDate(LocalDate.now());
        return expenseRepository.save(expense);
    }

    @Override
    public Expense updateExpense(Long expenseId, Expense expense) {
        Expense existingExpense = getExpenseById(expenseId);
        if (expense.getCategory() != null) {
            Category category = categoryRepository.findById(expense.getCategory().getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + expense.getCategory().getCategoryId()));
            existingExpense.setCategory(category);
        }
        if (expense.getUser() != null && expense.getUser().getId() != null) {
            User user = userRepository.findById(expense.getUser().getId())
                                      .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + expense.getUser().getId()));
            existingExpense.setUser(user);
        }
        existingExpense.setAmount(expense.getAmount());
        existingExpense.setDescription(expense.getDescription());
        existingExpense.setDate(expense.getDate());
        return expenseRepository.save(existingExpense);
    }

    @Override
    public void deleteExpense(Long expenseId) {
        Expense expense = getExpenseById(expenseId);
        expenseRepository.delete(expense);
    }

    @Override
    public Expense getExpenseById(Long expenseId) {
        return expenseRepository.findById(expenseId)
                .orElseThrow(() -> new ResourceNotFoundException("Expense not found with id: " + expenseId));
    }

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }
}

