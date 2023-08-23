        //Account Balance
        var accountBalance = 1000;
        var transaction_time = 5;
        var pin = 1234

        //A while loop(This is to check that you have not used more than 5 mins)
        prompt("Enter your pin")
        while (transaction_time = 5 && pin == 1234) {

            //Transaction using a prompt
            let transaction = prompt(`1. Check Balance 
       2. Deposit
       3. Withdrawal
       4. Pay bills
       5. Change pin
       6. Exit`)

            //Conditional if statement 
            if (transaction == 1) {
                alert(`Your account balance is ${accountBalance}`)
            } else if (transaction == 2) {
                let deposit = Number(prompt("How much do you want to deposit"))
                let newBalance = accountBalance + deposit
                alert(`Your account balance is now ${newBalance}`)

            } else if (transaction == 3) {
                let withdrawal = Number(prompt("How much do you want to withdraw"))
                let newBalance = accountBalance - withdrawal
                alert(`Take your cash
        Your account balance is now ${newBalance}`)

            } else if (transaction == 4) {
                let pay_bills = prompt("1. Airtime \n2. DSTV \n3. School fees \n4 Exit")
                if (pay_bills == 1) {
                    alert("Your mobile phone has successfully been recharged")
                } else if (pay_bills == 2) {
                    alert("Your DSTV subscription has been renewed")
                } else if (pay_bills == 3) {
                    alert("School fees has been paid")
                } else if (pay_bills == 4) {

                    //Do while loop that runs as long as paybills is equal to 4
                    do {
                        alert("Thank you for banking with us")
                    } while (pay_bills == 4)
                    // alert("Thank you for banking with us")
                }
            } else if (transaction == 5) {

                //A for loop that ask you twice to confirm your pin before changing it
                for (i = 0; i < 2; i++) {
                    prompt("Enter your new pin")
                }
                alert("You pin has been succesfully saved")
            } else {
                alert("Thank you for banking with us")
            }
        }
