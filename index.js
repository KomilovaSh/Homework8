// 1-masala
// function fibonachchi(n) {
//     if (n <= 0) {
//       return 0;
//     } else if (n === 1) {
//       return 1;
//     } else {
//       return fibonachchi(n - 1) + fibonachchi(n - 2);
//     }
//   }
//   let son = 8; 
//   let natija = fibonachchi(son);
//   document.writeln(`Fibonachchi soni ${son}: ${natija}`);

  
//   2-masala
// let students = [
//     {
//          ism: 'Ali',
//          yosh: 20 
//     },
//     {
//          ism: 'Vali', 
//          yosh: 22 
//     },
//     {
//          ism: 'Sara', 
//          yosh: 19 
//     },
//     { 
//         ism: 'John',
//          yosh: 25 
//     },
//   ];
//   function middleage(students) {
//     let youthset = 0;
//     for (let i = 0; i < students.length; i++) {
//       youthset += students[i].yosh;
//     }
//     return youthset / students.length;
//   }
//   document.writeln("O'rtacha yosh: ", middleage(students));

  
  // Ikkinchi constructor funksiya
//   function Car(model, yil, rang) {
//     this.model = model;
//     this.yil = yil;
//     this.rang = rang;
//   }
  
//   // Ikkinchi constructor funksiyasiga method qo'shish
//   Car.prototype.malumot = function () {
//     console.log(`Model: ${this.model}, Ishlab chiqarilgan yili: ${this.yil}, Rangi: ${this.rang}`);
//   };
  
//   // Uchunchi constructor funksiya
//   function kitob (nomi, muallif, nashriyot, narxi) {
//     this.nomi = nomi;
//     this.muallif = muallif;
//     this.nashriyot = nashriyot;
//     this.narxi = narxi;
//   }
//   Book.prototype.info = function () {
//     console.log(`Kitob nomi: ${this.nomi}, Muallifi: ${this.muallif}, Nashriyoti: ${this.nashriyot}, Narxi: ${this.narxi}`);
//   };


// 4-masala
//   Ob'ektlarni yaratish
//   let talaba = new Student('Ali', 'Valiyev', 20);
//   let mashina = new Car('Toyota', 2022, 'Oq');
//   let kitob = new Book('Javascript Programming', 'John Doe', 'Tech Books', 50.00);
//   talaba.Student();
//   mashina.Car();
//   kitob.Book();


// let son = parseInt(prompt("Istalgan sonni kiriting:"));
// if (son % 2 === 1) {
//   let kub = son * son * son;
//   localStorage.setItem('kub', kub);
//   console.log(`Kub: ${kub} local storage ga saqlandi.`);
// } else {
//   let kvadrat = son * son;
//   localStorage.setItem('kvadrat', kvadrat);
//   console.log(`Kvadrat: ${kvadrat} local storage ga saqlandi.`);
// }


// function maxfind(obyekt) {
//     let max = null;
//     let maxkey = null;
//     for (let key in obyekt) {
//       if (typeof obyekt[key] === "number" || typeof obyekt[key] === "string") {
//         if (max === null || obyekt[key] >max) {
//           max = obyekt[key];
//           maxkey = key;
//         }
//       }
//     }
//     return maxkey;
//   }
//   let obyekt = {
//     ism: "Jack",
//     yosh: 18,
//     stipendiya: 517000,
//   };
//   let maxkey = maxfind(obyekt);
//   if (maxkey !== null) {
//     console.log(`Eng katta qiymatga ega xususiyat: ${maxkey}`);
//   } else {
//     console.log("Obyekt bo'sh, eng katta qiymat yo'q!");
//   }

  
  function mavjudKalitniTekshir(obyekt, kalit) {
    if (kalit in obyekt) {
      return obyekt[kalit];
    } else {
      return "Kalit mavjud emas";
    }
  }
  
  // Obyekt yaratish
  var obyekt = {
    ism: "John",
    yosh: 30,
    tanaffus: "Hayir",
    maosh: 45000,
  };
  
  // Berilgan kalit mavjudligini tekshirish va qiymatni olish
  var tekshirishKaliti = "ism"; // Tekshirilayotgan kalit
  var natija = mavjudKalitniTekshir(obyekt, tekshirishKaliti);
  
  console.log(natija); // Natijani konsolga chiqarish

  
//   function key(obyekt) {
//     return Object.keys(obyekt);
//   }
//   let obyekt = {
//     ism: "John",
//     yosh: 30,
//     tanaffus: "Bye",
//     maosh: 45000,
//   };
//   console.log(key(obyekt)); 

//   9-masala
//   function result(obyekt) {
//     let qiymatlar = [];
//     for (let key in obyekt) {
//       if (obyekt.hasOwnProperty(key)) {
//         qiymatlar.push(obyekt[key]);
//       }
//     }
//     return qiymatlar;
//   }
//   let obyekt = {
//     ism: "Vali",
//     yosh: 30,
//     maosh: 120000,
//   };
//   console.log(result(obyekt)); 

  
//  10-masala
//   function obyektNusxasiniOlish(obyekt) {
//     let nusxa = {}; 
//     for (let key in obyekt) {
//       if (obyekt.hasOwnProperty(key)) {
//         nusxa[key] = obyekt[key];
//       }
//     }
//     return nusxa; 
//   }
//   let asosiyObyekt = {
//     ism: "Ali",
//     yosh: 23,
//     maosh: 45045,
//   };
//   console.log(obyektNusxasiniOlish(asosiyObyekt)); 
  
  