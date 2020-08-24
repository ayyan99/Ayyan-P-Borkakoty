const menu = [

{
	id:1,
	title:'Switzerland',
	price: 99,
	img: "./Images/bg_1.jpeg",
	description: 'good place to visit'
},

{
	id:2,
	title:'India',
	price: 124,
	img: "./Images/bg_3.jpeg",
	description: 'nice place'
},

{
	id:3,
	title:'China',
	price: 115,
	img: "./Images/bg_7.jpeg",
	description: 'good Asian country'
},


{
	id:4,
	title:'USA',
	price: 150,
	img: "./Images/bg_12.jpeg",
	description: 'very good place'
},

{
	id:5,
	title:'Brazil',
	price: 75,
	img: "./Images/bg_6.jpeg",
	description: 'good place to visit in winter'
},

{
	id:6,
	title:'Luxemborg',
	price: 89,
	img: "./Images/bg_10.jpeg",
	description: 'visit once'
},

{
	id:7,
	title:'Canada',
	price: 140,
	img: "./Images/bg_11.jpeg",
	description: 'very cold here'
}

];


const menus = document.querySelector('.menu');

window.addEventListener('DOMContentLoaded',function(){
	//console.log('shake')
	let displayMenu = menu.map(function(item){
		console.log(item);
		return `<section class="menu">
	<div class="menu-item-tile col-md-6">
	  <div class="row">
	    <div class="col-sm-5">
	      <div class="menu-item-photo">
	        <div>${item.title}</div>
	        <img class="img-responsive" width="250" height="150" src=${item.img} alt=${item.title} />
	      </div>
	      <div class="menu-item-price">$${item.price}</div>
	    </div>
	    <div class="menu-item-description col-sm-7">
	      <h3 class="menu-item-title">${item.title}</h3>
	      <p class="menu-item-details">${item.description}</p>
	    </div>
	  </div>
	  <hr class="visible-xs">
	</div>
</section>`;
	});
	displayMenu = displayMenu.join("");
	menus.innerHTML = displayMenu;
	console.log(displayMenu);
});













