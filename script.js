
let cardContainer = document.getElementsByClassName('cardcontainer')[0];
let moon = document.getElementsByClassName('moon')[0];
let navbar = document.getElementsByClassName('navbar')[0];
let navelements = document.getElementsByClassName('navelements');
let card = document.getElementsByClassName('card');
let cardbody = document.getElementsByClassName('card-body');
let moonimage = document.getElementById('moonimage');
let navhead = document.getElementsByClassName('navhead')[0];
let btn = document.getElementsByClassName('btn');

let science = document.getElementById('science');
let entertainment = document.getElementById('entertainment');
let startup = document.getElementById('startup');
let automobile = document.getElementById('automobile');
let india = document.getElementById('india');
let tech = document.getElementById('tech');
let sports = document.getElementById('sports');
let politics = document.getElementById('politics');
let business = document.getElementById('business');
let world = document.getElementById('world');




moon.addEventListener("click",function background(){
    document.body.classList.toggle('darkmode');
    navbar.classList.toggle('navdarkmode');
    for(let i=0; i<navelements.length;i++){
        navelements[i].classList.toggle('navelementsdark');
    };
    if(navbar.classList.contains('navdarkmode')){
        moonimage.src = "images/light.png";
    } else {
        moonimage.src = "images/moon.png";
    };
    navhead.classList.toggle('navheaddark');
    for(let j=0; j<card.length;j++){
        card[j].classList.toggle('carddark');
    };
    for(let k=0; k<cardbody.length;k++){
        cardbody[k].classList.toggle('cardbodydark');
    };
    for(let l=0; l<cardbody.length;l++){
        btn[l].classList.toggle('btndark');
    };
})



async function scienceFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=science');
    let val = await response.json();
    return val;
}

const mainScience = async() =>{
    let json = await scienceFn();
    // console.log(json);
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;
}


async function entertainmentFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=entertainment');
    let val = await response.json();
    return val;
}

const mainEntertainment = async() =>{
    let json = await entertainmentFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;
}


async function startupFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=startup');
    let val = await response.json();
    return val;
}

const mainStartup = async() =>{
    let json = await startupFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;  
}


async function automobileFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=automobile');
    let val = await response.json();
    return val;
}

const mainAutomobile = async() =>{
    let json = await automobileFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;  
        
}
async function indiaFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=india');
    let val = await response.json();
    return val;
}

const mainIndia = async() =>{
    let json = await indiaFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;
}
async function worldFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=world');
    let val = await response.json();
    return val;
}

const mainWorld = async() =>{
    let json = await worldFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='_blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="_blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;
}
async function politicsFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=politics');
    let val = await response.json();
    return val;
}

const mainPolitics = async() =>{
    let json = await politicsFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='__blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="__blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='__blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="__blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;
}
async function sportsFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=sports');
    let val = await response.json();
    return val;
}

const mainSports = async() =>{
    let json = await sportsFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='__blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="__blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl}' target='__blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="__blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;
}
async function businessFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=business');
    let val = await response.json();
    return val;
}

const mainBusiness = async() =>{
    let json = await businessFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl} target='__blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="__blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl}' target='__blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="__blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;
}
async function techFn(){
    let response = await fetch('https://inshorts.deta.dev/news?category=technology');
    let val = await response.json();
    return val;
}

const mainTech = async() =>{
    let json = await techFn();
    let ihtml = '';
    if(navbar.classList.contains("navdarkmode")){
        for(let items in json.data){
                ihtml += `<div class="card carddark" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl}' target='__blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body cardbodydark">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn btndark" target="__blank">Read More</a>
                     </div>
                 </div>`
            }
        }
            else{
                for(let items in json.data){
                ihtml += `<div class="card" style="width: 18rem;">
            <a href='${json.data[items].readMoreUrl}' target='__blank'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
            <div class="card-body">
                         <h5 class="card-title">${json.data[items].title}</h5>
                         <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
                         <p class="card-text" style="font-size: small">${json.data[items].content}</p>
                         <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
                         <a href="${json.data[items].readMoreUrl}" class="btn" target="__blank">Read More</a>
                     </div>
                 </div>`
            }
            
        }
        cardContainer.innerHTML = ihtml;
}





mainIndia();
india.addEventListener("click", function indiaClickHandler(){
    mainIndia();
});
world.addEventListener("click", function worldClickHandler(){
    mainWorld();
});
sports.addEventListener("click", function sportsClickHandler(){
    mainSports();
});
business.addEventListener("click", function businessClickHandler(){
    mainBusiness();
});
politics.addEventListener("click", function politicsClickHandler(){
    mainPolitics();
});
tech.addEventListener("click", function techClickHandler(){
    mainTech();
});
automobile.addEventListener("click", function automobileClickHandler(){
    mainAutomobile();
});
startup.addEventListener("click", function startupClickHandler(){
    mainStartup();
});
entertainment.addEventListener("click", function entertainmentClickHandler(){
    mainEntertainment();
});
science.addEventListener("click", function scienceClickHandler(){
    mainScience();
});

// let ps = fetch('https://inshorts.deta.dev/news?category=science')
// ps.then((response)=>{
//     return response.json();
// }).then((json)=>{
//     // console.log(json);
//     ihtml = "";
//     for(let items in json.data){
//         ihtml += `<div class="card" style="width: 18rem;">
//         <a href='${json.data[items].readMoreUrl}'><img src="${json.data[items].imageUrl}" class="card-img-top"></a>
//         <div class="card-body">
//             <h5 class="card-title">${json.data[items].title}</h5>
//             <p class="time" style="font-weight:lighter; font-size: smaller; color: grey">${json.data[items].time}</p>
//             <p class="card-text" style="font-size: small">${json.data[items].content}</p>
//             <p class="card-text" style="font-style: italic">An article by <span style="font-weight: bold;">${json.data[items].author}</span></p>
//             <a href="${json.data[items].readMoreUrl}" class="btn" target="__blank">Read More</a>
//         </div>
//     </div>`
//     }
//     cardContainer.innerHTML = ihtml;
// })
