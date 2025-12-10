// function abcd(fn1){
//     fn1(function(fn3){
//         fn3(function(fn5){
//             fn5()
//         })
//     });
// }

// abcd(function (fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log ("insdie 5 ")
//         })
//     })
// })

// function naamFetchkaro(t , cb){
//     console.log ("fetching data")
//     setTimeout(() => {
//         cb({name : "pratham" , age: 20 , gender : "male" , status : true})
//     }, t);
// }

// naamFetchkaro(4000 , (name)=>{
//     console.log(name)
// })

// function getuser(uname , cb){
//     console.log ("fetching uname")
//     setTimeout(() => {
//         cb({id:12 , username : uname})
//     }, 1000);
// }

// function getPost(id , cb){
//     console.log ("fetching posts")
//     setTimeout(() => {
//         cb(["gm" , "gn" , "hot"])
//     }, 3000);
// }

// getuser("pratham" , (udata)=>{
//     getPost(udata.id , (upost)=>{
//         console.log (udata.username ,  upost)
//     })
// })

//getuser chalta hai and voh 1s ke baaad callback me id deta hai and then voh id ko hum getpost vaale fn ke argument me dete hai phir vaha se voh get post me jake callback me posts deta hai then usse voh print karta hai
// console.log ("start")

// function loginUser(name , cb){
//     console.log ("fetching user data..")
//     setTimeout(() => {
//         cb({id:1212 , username : name})
//     }, 0);
// }

// function fetchPermission(id , cb ){
//     console.log ("fetching persms")
//     setTimeout(() => {
//         cb(["create" , "read" , "update" , "delete"])
//     }, 0);

// }

// function loadDashboard(uname , cb){
//     console.log ("fetching dashboard data...")
//     setTimeout(() => {
//         cb({permisions : uname})
//     }, 0);
// }

// loginUser("pratham" , (udata)=>{
//     fetchPermission(udata.id , (perms)=>{
//         loadDashboard( perms , (data)=>{
//             console.log (data)
//         })
//     })
// })

// console.log ("end")

// function myMap(arr , cb){
//     arr.forEach((element , idx )=> {
//         cb(element ** 2 , idx )
//     });

// }

// let arr = [10,20,30,40,50]
// myMap(arr ,  (i , idx ) => { arr[idx] = i } )
// console.log (arr)

//********************************************************************PROMISES***************************************************************** */
//promise -> mai promise karta hu ki mai yeh kaam jaake karunga 
// state = pending / resolved / reject 

function base(fn1){
    fn1((fn3)=>{
        fn3((fn5)=>{
            fn5()
        })
    })
}

base((fn2)=>{
    fn2((fn4)=>{
        fn4(()=>{
            console.log ("bauht hua !")
        })
    })
})

fn1 = () => Promise.resolve() 
fn2 = ()=> Promise.resolve()
fn3 = ()=> Promise.resolve("bahut hua ")

fn1()
.then(fn2)
.then(fn3)
.then(console.log)