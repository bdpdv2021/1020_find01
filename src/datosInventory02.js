/*
 Datos posteriores
*/
db.inventory.insertMany([
    { 
        item: "ebook", 
        qty: 60, 
        size: { 
            h: 10, 
            w: 15, 
            uom: "cm" 
        }, 
        status: "B"
     },
     { 
        item: "pen", 
        qty: 75, 
        size: { 
            h: 13, 
            w: 2, 
            uom: "cm" 
        }, 
        status: "B"
     }
 ]);