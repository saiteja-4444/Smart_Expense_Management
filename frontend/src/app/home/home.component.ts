import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';


interface ExpenseItem {
  name: string;
  value: number;
  category: string;
  
  [key: string]: any
  

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],



})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {}



  public barChart: any;
  public pieChart: any;

  // Sample data for the last 30 days expenses 
  expenseData: ExpenseItem[] = [
    { name: '2024-03-01', value: 1000, category: "Food"},
    { name: '2024-01-02', value: 150, category: "Clothing"},
    { name: '2024-04-03', value: 500, category: "Food"},
    { name: '2024-03-04', value: 3100, category: "Travel"},
    { name: '2024-03-05', value: 650, category: "Clothing"},
    { name: '2023-03-06', value: 350, category: "Food"},
    { name: '2024-03-07', value: 500, category: "Travel"},
    { name: '2022-07-08', value: 1000, category: "Medical"},
    { name: '2024-03-09', value: 700, category: "Food"},
    { name: '2024-03-10', value: 560, category: "Travel"},
    { name: '2020-03-10', value: 2260, category: "Bills"},
    { name: '2022-03-10', value: 960, category: "Food"},
    { name: '2022-03-10', value: 1560, category: "Clothing"},
    { name: '2022-03-10', value: 1960, category: "Food"},
    { name: '2022-01-10', value: 160, category: "Bills"},
    { name: '2022-03-10', value: 960, category: "Food"},
  ];

  ngOnInit(): void {
    this.createBarChart();
    this.createPieChart();
  }
  
  createBarChart() {
    const names = this.expenseData.map(item => item.name);
    const values = this.expenseData.map(item => item.value);

    const barChartData = {
      labels: names,
      datasets: [{
        label: 'Expense in Budget',
        data: values,
        backgroundColor: values.map(value => value > 2000 ? '#A10A28' : '#0182A2'),
      }]
    };

    if (this.barChart) {
      this.barChart.data.labels = names;
      this.barChart.data.datasets = barChartData.datasets;
      this.barChart.update();
    } else {
      this.barChart = new Chart("barChart", {
        type: 'bar',
        data: barChartData,
        options: {
          aspectRatio: 1.5, 
          responsive: true, 
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
                font: {
                  size: 16, 
                  weight: 'bold' 
                }
              },
              ticks: {
                font: {
                  size: 14 
                }
              }
            },
            y: {
              title: {
                display: true,
                text: 'Expense',
                font: {
                  size: 16, 
                  weight: 'bold' 
                }
              },
              ticks: {
                font: {
                  size: 16 
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 14, 
                  weight: 'bold', 
                  // color: '#025157' // Change legend text color
                }
              }
            }
          }
        }
      });
    }
  }

  
  createPieChart() {
    const categories: { [category: string]: number } = {};

    this.expenseData.forEach(item => {
      categories[item.category] = (categories[item.category] || 0) + item.value;
    });

    const categoryNames = Object.keys(categories);
    const categoryExpenses = Object.values(categories);

    const pieChartData = {
      labels: categoryNames,
      datasets: [{
        data: categoryExpenses,
        backgroundColor: this.getRandomColors(categoryNames.length)
      }]
    };

    if (this.pieChart) {
      this.pieChart.data.labels = pieChartData.labels;
      this.pieChart.data.datasets = pieChartData.datasets;
      this.pieChart.update();
    } else {
      this.pieChart = new Chart("pieChart", {
        type: 'pie',
        data: pieChartData,
        options: {
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 14, 
                  weight: 'bold', 
                  // color: '#D95219' 
                }
              }
            }
          }
        }
      });
    }
  }

  getRandomColors(count: number): string[] {
    const colors = [];
    const increment = 360 / count;
    for (let i = 0; i < count; i++) {
        const hue = (increment * i) % 360;
        // Decrease saturation and increase lightness for lighter colors
        const color = `hsl(${hue}, 70%, 39%)`;
        colors.push(color);
    }
    return colors;
}

  


  

  firstName = 'Anisha';
  lastName = 'Rani';

  selectedInterval: string = 'daily';

  addNewExpense() {
    // Navigate to the add new expense route
    this.router.navigate(['/spendwise/expense/add']);
  }

  editExpense() {
    // Navigate to the add new expense route
    this.router.navigate(['/spendwise/expense/edit']);
  }

  viewAllExpenses() {
    // Navigate to the view all expenses route
    this.router.navigate(['/spendwise/expense/list']);
  }

  // Define the gradient property
  gradient: boolean = true;
}
