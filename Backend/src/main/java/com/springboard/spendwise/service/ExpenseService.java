package com.springboard.spendwise.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springboard.spendwise.model.Expense;

@Service
public interface ExpenseService {
    Expense createExpense(Expense expense);
    Expense updateExpense(Long expenseId, Expense expense);
    void deleteExpense(Long expenseId);
    Expense getExpenseById(Long expenseId);
    List<Expense> getAllExpenses();
}
