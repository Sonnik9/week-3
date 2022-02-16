

   
     let nnaMes = prompt('ВВедите имена сотрудников через пробел', );
     let numbers = prompt('ВВедите зарплаты через пробел', );

     let arrnaMes = nnaMes.split(' '); 
     let arrSal = numbers.split(' ');
     
     let userList =[];
    //  {name: '', salary: 800 }, {name: '', salary: 1800}
     let middleResult = 0;
     let result = 0;
     let k;
     let n;
     let i;
     let m;
    //  let i;
     let resultPars;
     let job = {};
     let tooltip;
    // let spannEl;
   
     let li1;
     let li2;
     
     
     let btn1 = document.querySelector('.button1');
     let column1 = document.querySelector('.ul-1');
     let column2 = document.querySelector('.ul-2');
   
     
     
     let total = document.querySelector('.total');
     btn1.addEventListener('click', salaryy, {once: true});
    




     function salaryy() {

     for (k = 0; k < arrnaMes.length; k++) {

        function Job(name, salary) {

            this.name = name;
            this.salary = salary;

        }

        job = new Job(arrnaMes[k], arrSal[k]);
        userList[k] = job;

        middleResult = (middleResult + (+userList[k].salary));

        if(k == arrnaMes.length-1) {

         result = middleResult/(arrnaMes.length);    
        //  middleResult = 0; 
         n = arrnaMes.length;
        }
         
        
            li1 = document.createElement('li');
            li2 = document.createElement('li');
            li1.classList.add('li-namee');
            
            li2.classList.add('li-salary');
            column1.append(li1);
            column2.append(li2);
            li1.innerHTML = userList[k].name;
            li2.innerHTML = userList[k].salary;
           
            

            
            



           
        }
         // цыкл


        resultPars = parseInt(result);
        total.innerHTML = 'Итого' + ':  ' + resultPars + '  ГРН.';
        
        // console.log(result);
        // console.log(userList);
       

        }
        //  функция salaryy




        // let spanTarget = document.querySelector('.nameUsers');
        // let n;
        // let tooltip;
        column1.addEventListener('mouseover', cupters);
        column1.addEventListener('mouseout', cuptersOff);
        column2.addEventListener('mouseover', cupters2);
        column2.addEventListener('mouseout', cuptersOff2);


        function cupters(e) {

            if(e.target.tagName = 'LI') {
                let curEl = e.target;
                
                tooltip = document.createElement('span');
                tooltip.classList.add('toolTip');
                curEl.append(tooltip);
                // tooltip.innerHTML = curEl.textContent;
                
                for (i = 0; i < n; i++) {

                    if(curEl.textContent == userList[i].name) {
                        tooltip.innerHTML = userList[i].name + ':  ' + userList[i].salary;
                        console.log(userList[i].name + userList[i].salary);
                    }
                         
                }


                     
                    
            }
        
        }

        


        function cuptersOff(e) {
            tooltip.remove();
            tooltip = null;
        }

 
        

        function cupters2(e) {
           
           if(e.target.tagName = 'LI') {
               let curEl = e.target;
               
               tooltip = document.createElement('span');
               tooltip.classList.add('toolTip');
               curEl.append(tooltip);
                  
               for (m = 0; m < n; m++) {
                   
                   if(curEl.textContent == userList[m].salary) {
                       tooltip.innerHTML = userList[m].name + ':  ' + userList[m].salary;
                       console.log(userList[m].name + userList[m].salary);
                   }
                        
                   }
                   
           
           
             }
           
           }
        
        
        function cuptersOff2(e) {
            tooltip.remove();
            tooltip = null;
        }
           
           


