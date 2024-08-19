// main.js
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-btn');
  const logoutBtn = document.getElementById('logout-btn');
  
  toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
      document.getElementById('main-content').style.marginLeft = sidebar.classList.contains('closed') ? '0' : '250px';
  });

  logoutBtn.addEventListener('click', () => {
      alert('Logged out!');
      // Redirect or handle logout logic here
       window.location.href = 'index.html';
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const totalDepositElem = document.getElementById('total-deposit');
  const totalWithdrawElem = document.getElementById('total-withdraw');
  const totalBalanceElem = document.getElementById('total-balance');
  const depositBtn = document.getElementById('deposit-btn');
  const withdrawBtn = document.getElementById('withdraw-btn');
  const depositInput = document.getElementById('deposit-amount');
  const withdrawInput = document.getElementById('withdraw-amount');

  let totalDeposit = 0;
  let totalWithdraw = 0;
  let totalBalance = 0;

  function updateDisplay() {
      totalDepositElem.textContent = `$${totalDeposit.toFixed(2)}`;
      totalWithdrawElem.textContent = `$${totalWithdraw.toFixed(2)}`;
      totalBalanceElem.textContent = `$${(totalDeposit - totalWithdraw).toFixed(2)}`;
  }

  depositBtn.addEventListener('click', () => {
      const depositAmount = parseFloat(depositInput.value);
      if (depositAmount > 0) {
          totalDeposit += depositAmount;
          depositInput.value = '';
          updateDisplay();
      } else {
          alert('Please enter a valid deposit amount.');
      }
  });

  withdrawBtn.addEventListener('click', () => {
      const withdrawAmount = parseFloat(withdrawInput.value);
      if (withdrawAmount > 0 && withdrawAmount <= (totalDeposit - totalWithdraw)) {
          totalWithdraw += withdrawAmount;
          withdrawInput.value = '';
          updateDisplay();
      } else if (withdrawAmount > (totalDeposit - totalWithdraw)) {
          alert('Insufficient balance.');
      } else {
          alert('Please enter a valid withdraw amount.');
      }
  });

  // Initialize display
  updateDisplay();
});


// bank_statement //

function filterTable() {
    const filter = document.getElementById('filter').value.toLowerCase();
    const table = document.getElementById('statementTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    let totalBalance = 0;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const description = cells[1].textContent.toLowerCase();
        
        if (description.indexOf(filter) > -1) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
        
        // Update total balance calculation
        const amount = parseFloat(cells[2].textContent.replace(/[^0-9.-]+/g, ""));
        if (!isNaN(amount)) {
            totalBalance += amount;
        }
    }

    // Update total balance display
    document.getElementById('totalBalance').textContent = `$${totalBalance.toFixed(2)}`;
}


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Deposits',
                data: [1200, 1900, 3000, 500, 2000, 300, 4500],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Withdrawals',
                data: [1000, 1500, 2000, 700, 800, 1200, 3500],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


/*index.html*/

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


/*loan.html*/

function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;

    if (amount && rate && years) {
        const monthlyRate = rate / 100 / 12;
        const numberOfPayments = years * 12;
        const x = Math.pow(1 + monthlyRate, numberOfPayments);
        const monthlyPayment = (amount * x * monthlyRate) / (x - 1);
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - amount;

        const result = `
            <h3>Loan Details</h3>
            <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
            <p>Total Payment: $${totalPayment.toFixed(2)}</p>
            <p>Total Interest: $${totalInterest.toFixed(2)}</p>
        `;

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = result;
        resultDiv.style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
}


// contact.html //

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const sidebar = document.getElementById('sidebar');
//     const toggleButton = document.getElementById('nav-toggle');
//     const sideNavbar = document.getElementById('side-navbar');
//     const mainContent = document.getElementById('main-content');

//     toggleButton.addEventListener('click', function() {
//         sidebar.classList.contains('active');
//         sidebar.classList.toggle('active');
//         sideNavbar.classList.toggle('active');
//         mainContent.classList.toggle('active');
//     });
// });















