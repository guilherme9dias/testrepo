function getPercentage(val) {
    var interestRate = document.getElementById('displaySlide').value=val;
    var amount = document.getElementById('amountId').value;
    var years = document.getElementById('years').value;
    var rate = document.getElementById('scale').value;

    document.getElementById("scale").oninput = function() {
        document.getElementById("spanscale").innerHTML = Number(this.value).toFixed(1);
      }

    if (amount < 1){
        console.log('Please insert any positive number');
        focusError();
    } else if (isNaN(amount)){
         alert("Please enter a positive number.");
     } else {
        openTable();
    }

    function focusError(){
        document.getElementById('amountId').focus();
    }

    function openTable(){
        var yearRate = rate*100;
        var interestAmount = yearRate*years;
        var totalAmount = +amount + +interestAmount;
        console.log('The amount you have to pay at the end is ', totalAmount+' €');
        document.getElementById("totalAmount").innerHTML = amount+' €';
        document.getElementById("totalInterestAmount").innerHTML = interestAmount+' €';
        document.getElementById("totalTableAmount").innerHTML = totalAmount+' €';
        document.getElementById("totaIlnteresRate").innerHTML = rate +'%';
        document.getElementById("tableId").style.display = "";
        document.getElementById("button2").style.display = "";

        var totalMonths = +years*+12;
        var monthlyPayment = +totalAmount/+totalMonths;

        document.getElementById("totalMonthlyPayment").innerHTML = monthlyPayment.toFixed(2)+' €';

        console.log('Amount: ', amount);
        console.log('Years: ', years);
        console.log('Rate: ', rate);
    }

    function refreshPage() {
        document.location.reload();

    }
  }

