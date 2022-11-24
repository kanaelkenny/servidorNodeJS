// app.use(express.json())

// app.get('/', async(req, res)=>{
//     try {
//         const { data } = await axios("https://www.kooapp.com/apiV1/users/handle/kanael")
//         console.log(data)

//         return res.json(data)
//     } catch (error) {
//         console.error(error)   
//     }

// })



// app.get('/mongo', async(req, res)=>{
    

//     var usernameaut = "kanael"

//     (e || window.event).preventDefault();
//     var con = document.getElementById('idreal')
//     ,   xhr = new XMLHttpRequest();
  
//     xhr.onreadystatechange = function (e) { 
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         con.innerHTML = xhr.responseText;

//         const CSVToJSON = xhr => {
//             const lines = xhr.split('\n');
//             //const liness = xhr.split('\r');
//             const keys = lines[0].split(',');
//             return lines.slice(1).map(line => {
//                 return line.split(',').reduce((acc, cur, i) => {
//                     const toAdd = {};
//                     toAdd[keys[i]] = cur;
//                     return {...acc, ...toAdd };
//             }, {});
//             });
//         };

//         var arr = CSVToJSON(xhr.responseText);

//         var runFilter = function(arr,searchKey) {

//             var filterFn = function(obj) { 
        
//               // Iterate the obj for each key. 
//               for (var k in obj) {
//                 if (typeof obj[k] == "string" && obj[k].indexOf(searchKey) >= 0) {
//                   return true;
//                 }
//               }
//              }
        
        
//               return arr.filter(filterFn);

//             }
        
//         var filteredArr = runFilter(arr,usernameaut)


//         if(filteredArr.length >= 1){

//             console.log(filteredArr[0].nome+"\r")
//             localStorage.setItem('username', filteredArr[0].nome+"\r")
//             location.href = "/autorizado.html";
            
//             } else {
            
//             alert("Voce nao esta cadastrado!");

            
//         }

//       }
//     }
  
//     xhr.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ-BpMDgK3ABlAznfqulUy_Yrf9ZyNP7ckcePwlRobhPS9G10ofxe4GfWrmMiGU2tLpswLBTMexQz7/pub?output=csv", true);
//     //xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.setRequestHeader('Content-type', 'text/html');
//     //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//     xhr.send();


// })

// app.get('/', async(req, res)=>{
//     try {
//         const { data } = await axios("https://www.kooapp.com/apiV1/users/9531a534-4a1e-4e07-aa23-7cdc01727c9b/followers?limit=5&offset=0")
//         console.log(data)

//         return res.json(data)
//     } catch (error) {
//         console.error(error)   
//     }

// })

// app.get('/', async(req, res)=>{
//     try {
//         const { data } = await axios("https://www.kooapp.com/apiV1/users/9531a534-4a1e-4e07-aa23-7cdc01727c9b/followers?limit=5&offset=0")
//         console.log(data)

//         return res.json(data)
//     } catch (error) {
//         console.error(error)   
//     }

// })

app.get('/', async(req, res)=>{
    try {
        const { data } = await axios("https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ-BpMDgK3ABlAznfqulUy_Yrf9ZyNP7ckcePwlRobhPS9G10ofxe4GfWrmMiGU2tLpswLBTMexQz7/pub?output=csv")
        console.log(data)

        return res.json(data)
    } catch (error) {
        console.error(error)   
    }

})


app.get('/mongo', async(req, res)=>{
    try {
        const dados = {id: 202020}
        

        return res.json(dados)
    } catch (error) {
        console.error(error)   
    }

})





app.get('/', async(req, res)=>{
    try {
        const { data } = await axios("https://www.kooapp.com/apiV1/users/9531a534-4a1e-4e07-aa23-7cdc01727c9b/followers?limit=5&offset=0")
        console.log(data)

        return res.json(data)
    } catch (error) {
        console.error(error)   
    }

})