// =============================================================
// PART 1

function MiniBank(balance) {
  this.balance = balance;
  (this.getBalance = function() {
    return this.balance;
  }),
    // Add a `` function
    function setBalance() {

    }


    // Add a `` function
    function deposit() {

    }


    // Add a `` function
    function withdraw() {

    }


    (this.printBalance = function() {
      console.log(`Balance: ${this.getBalance()}`);
    });
}

// =============================================================
// PART 2

// Create a new `bank` object

// Print the `bank` balance

// Deposit some money and then print the `bank` balance

// Withdraw some money and then print the `bank` balance
