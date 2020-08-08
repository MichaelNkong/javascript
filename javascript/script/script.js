

var tipcalculator={
bills:[124,48,268,180,42],
tip:[],
final:[],
 
cal:function(){
    ;
    
   for(var i=0;i<=this.bills.length; i++){

   if(this.bills[i]<50){
   this.tip[i]=(this.bills[i])*0.2;
   this.final[i]=this.bills[i] + this.tip[i];
   
   }
   else if(50 <= this.bills[i] && this.bills[i]<=200){
    this.tip[i]=(this.bills[i])*0.5;
    this.final[i]=this.bills[i] + this.tip[i];
    }
   else if(this.bills[i]>200){
    this.tip[i]=(this.bills[i])*0.1;
    this.final[i]=this.bills[i] + this.tip[i];
    }

    }
    
  }

}


tipcalculator.cal();
console.log(tipcalculator);