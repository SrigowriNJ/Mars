const sales=[
    {itemname:'PS4 Pro', quantity:3, originalprice:399.99},
    {itemname:'Xbox one X' ,quantity:1, originalprice:499.99,discount:0.1},
    {itemname:'Nintendo Switch', quantity:4, originalprice:299.99},
    {itemname:'PS2 Console', quantity:1, originalprice:299.99,discount:0.8},
    {itemname:'Nintendo 64', quantity:2, originalprice:199.99, discount:0.65}
]
 //iterating through the array
for (var i=0;i<sales.length;i++){
    //check if discount needs to be applied and calculate total
    if(!sales[i].discount){
        sales[i].saleprice=sales[i].originalprice;
        sales[i].total=sales[i].quantity*sales[i].saleprice;
    }
   else{
        sales[i].saleprice=sales[i].originalprice-(sales[i].discount*sales[i].originalprice)
        sales[i].total=sales[i].quantity *sales[i].saleprice;
    }
   
};

console.log(sales)
