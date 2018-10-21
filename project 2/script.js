var a=1, x=0;
	 	var array = [["Iphone X",1000,"$"],		
                     ["Pocophone F1",350,"$"],
                     ["Samsung",750,"$"],
                     ["Oppo",250,"$"],
                     ["Vivo",300,"$"]],
        	table = document.getElementById("mytable");

         for(var i = 0; i < array.length; i++)
           {
               // create a new row
               var newRow = table.insertRow(-1);
               for(var j = 0; j < array[i].length; j++)
               {
                   // create a new cell
                   var cell = newRow.insertCell(-1);
                   
                   // insert value to the cell
                   cell.innerHTML = array[i][j];
               }

           }

        selectTb()   

        function selectTb()
        {
        	for(var i = 0; i < array.length; i++)
           {
           		table.rows[i+1].onclick = function()
                    {
                         //rIndex = this.rowIndex;
                         document.getElementById("itemtext").value = this.cells[0].innerHTML;
                         document.getElementById("itemprice").value = this.cells[1].innerHTML + " Unit/ Item";
                    };
           }
           
        }

	 	function checkEmptyInput(){	
            var isEmpty = false,
           		iname = document.getElementById("iname").value,
                inumber = document.getElementById("inumber").value;

                if(iname === ""){
                    isEmpty = true;
                }
                else if(inumber === ""){
                    isEmpty = true;
                }
                return isEmpty;
        }

	 	function insertItem() {
	 		if(!checkEmptyInput()){
		      	var table = document.getElementById("mytable");
		      	var row = table.insertRow(-1);
		      	var cell1 = row.insertCell(0);
		      	var cell2 = row.insertCell(1);
		      	cell1.innerHTML = document.getElementById("iname").value;
		        cell2.innerHTML = document.getElementById("inumber").value;
		        if(cell2.innerHTML<0){
		        	document.getElementById("mytable").deleteRow(-1);
		        }
		        else array.push([cell1.innerHTML,cell2.innerHTML]);
			    selectTable()
		        document.getElementById("iname").value = "";
			    document.getElementById("inumber").value = "";
	     	}
		}
		
		function insertData() {
	      	var tableb = document.getElementById("maintable");
	      	var rowb = tableb.insertRow(-1);
	      	var cell1 = rowb.insertCell(0), cell2 = rowb.insertCell(1), cell3 = rowb.insertCell(2), cell4 = rowb.insertCell(3), cell5 = rowb.insertCell(4);
	      	cell1.innerHTML = a;
	        cell2.innerHTML = document.getElementById("itemtext").value;
	        cell3.innerHTML = document.getElementById("itemprice").value;
	        cell4.innerHTML = document.getElementById("itemamount").value;
	        cell5.innerHTML = document.getElementById("finalprice").value;
	        a++; 
	        x += Number(cell5.innerHTML);
	        if (cell2.innerHTML === "" || cell4.innerHTML === ""){
	        	a--;
	        	document.getElementById("maintable").deleteRow(-1);
	        }
	        else document.getElementById("totalprice").value = x;
		  	document.getElementById("itemtext").value = "";
	        document.getElementById("itemprice").value = "";
	        document.getElementById("itemamount").value = "";
	        document.getElementById("finalprice").value = "";
	    }
	    
	    function calculate(aForm) {
	      var price = parseFloat(aForm.itemprice.value)
		  if (isNaN(price)) price=0;
		  var amount = parseFloat(aForm.itemamount.value)
		  if (isNaN(amount)) amount=0;
		  var finalprice =  price * amount
		  aForm.finalprice.value=finalprice.toFixed();
		}

     	function calculated(aForm) {
	      var pay = parseFloat(aForm.payment.value)
		  if (isNaN(pay)) pay=0;
		  var tp = parseFloat(aForm.totalprice.value)
		  if (isNaN(tp)) tp=0;
		  var dc = parseFloat(aForm.discount.value)
		  if (isNaN(dc) | dc<0){
		  	dc=0;
		  	document.getElementById("discount").value = 0;
		  }
		  else if (dc>100) {
		  	dc = 100;
		  	document.getElementById("discount").value = 100;
		  }
		  var totalpriced = tp * ((100-dc)/100) 
		  aForm.totalpriced.value=totalpriced.toFixed();
		  var change = pay - totalpriced
		  aForm.change.value=change.toFixed();
		}