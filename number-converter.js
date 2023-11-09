const italy = {
    name: "Repubblica Italiana",
    flag: {
        color: ["rosso", "verde", "bianco"],
        stripes: "verticali",
        aspectRatio: 16/9,
        creator: {
            nome: "Roberto",
            eta: 40,
        }
    },
    currency: "euro",
    population: 500000000,
}

const stringConverter = (obj) => {
    const keys = Object.keys(obj); 
    for(let i=0; i<keys.length; i++){
        const key = keys[i];
        const value = obj[key];
        if ( (typeof value) === "number"){
            obj[key] = String(value);
        }else if ( (typeof value) === "object"){
            stringConverter(value);
        }
    }
    
    
}

stringConverter(italy);
console.log(italy);
