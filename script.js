let a =[
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    }
]
let div1 = document.getElementsByTagName("div")
let line1 = document.getElementsByTagName("ul")

for(i=0;i<6;i++){
for(j in a[i]){
var inline1=document.createElement("li")
line1[i].appendChild(inline1);
inline1.innerText=a[i][j]
// console.log(a[i][j])
}
if(k="rating"){
for(k in a[i][j] ){
    let inline1=document.createElement('li');
    line1[i].appendChild(inline1);
    inline1.innerText=`"${k}"${a[i][j][k]}`
}
}
}

for(i=0;i<90;i++){
line1[i].style.width="500px"
line1[i].style.height="270px"
line1[i].style.flexWrap="wrap";

// document.body.style.flexWrap="wrap";

// line1[i].style.overflow="auto"

// line1[i].style.wordBreak="break-all";
line1[i].style.boxShadow='0 8px 16px 0 rgba(7,6,0,1.3)';
}
div1[i].style.display="flex";
// document.body.style.display="flex";
// document.body.style.justifyContent="space-around"
// document.body.style.backgroundColor="rgba(0,0,255,0.1)"



// console.log("aaaaaa"+bb)
// let ul=document.getElementsByClassName("ul");
// let lili=document.createElement("li");
// lili.innerText=a[0]["id"];

// var bb=a.forEach(obj=>{
//     // let id = obj.id;
//     // let title=obj.title;
//     let price=obj.price
// //    console.log(id,title)
// //    console.log(price)
// })
// let ul1=document.getElementsByTagName("ul");
// console.log(ul1)
// let li1=document.createElement("li");
// console.log(li1)
// li1=document.appendChild(aaa())



// // a.map((val,ind,arr)=>{
// //     li1.innerText=bb;
// //     aaa()
// // })
// // ul1.style.border="1px solid black"
// console.log(li1)