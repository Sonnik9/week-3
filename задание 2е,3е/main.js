

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
     let z=0;
   
     let resultPars;
     let job = {};
     let tooltip;
     let liEl;
        
     let btn1 = document.querySelector('.button1');
     let column1 = document.querySelector('ul');
      
     let total = document.querySelector('.total');
     btn1.addEventListener('click', salaryy);
    

     function salaryy() {
     if(z==0) {
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
         middleResult = 0; 
         n = arrnaMes.length;
        }
         
        
            liEl = document.createElement('li');
          
            liEl.classList.add('li-content');
            
           
            column1.append(liEl);
            
            liEl.innerHTML = userList[k].name + ': ' + '  ' + userList[k].salary;
            
       
            
        }
         // цыкл

         
        resultPars = parseInt(result);
        total.innerHTML = 'Итого' + ':  ' + resultPars + '  ГРН.';
        

        // tooltip start

        let getLi = document.querySelectorAll('.li-content');
        
        let b;
        console.log(getLi);

        for (let i = 0; i < getLi.length; i++) {
            let elem = getLi[i];
            elem.addEventListener('mouseover', act);
            elem.addEventListener('mouseout', actOff);
            b = getLi.length;
            console.log(getLi[i]);
           
        }
    
        function act(event) {
            let curEl = event.target;

            tooltip = document.createElement('div');
            tooltip.classList.add('toolTip');
            curEl.append(tooltip);
            tooltip.innerHTML = curEl.textContent;
            console.log(curEl.textContent);
            console.log(b);
        }

        function actOff(event) {
            tooltip.remove();
            tooltip = null;
        }

         // tooltip end

         z=1;
        
        }
        // if z==o

        if(z==1) {
            salaryy = null;
         }


        }
        //  функция salaryy


        