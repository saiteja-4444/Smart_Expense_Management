package com.springboard.spendwise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboard.spendwise.model.Expense;
import com.springboard.spendwise.service.ExpenseService;

@RestController
@CrossOrigin
@RequestMapping("/spendwise/expense")
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;

    @PostMapping("/")
    public Expense createExpense(@RequestBody Expense expense) {
        return expenseService.createExpense(expense);
    }

    @GetMapping("/")
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @GetMapping("/{expenseId}")
    public Expense getExpenseById(@PathVariable Long expenseId) {
        return expenseService.getExpenseById(expenseId);
    }

    @DeleteMapping("/{expenseId}")
    public void deleteExpense(@PathVariable Long expenseId) {
        expenseService.deleteExpense(expenseId);
    }

    @PostMapping("/{expenseId}")
    public Expense updateExpense(@PathVariable Long expenseId, @RequestBody Expense expense) {
        return expenseService.updateExpense(expenseId, expense);
    }
}

