

// register the grid component 

Vue.component('demo-grid',{

template:'#grid-template',

props:{data :Array,columns:Array,filterKey:String},


data: function(){

// create an empty array
var sortOrders = {}


// loop through the columns
this.columns.forEach(function(key){

sortOrders[key]=1
})


return{

sortKey:'',
sortOrders:sortOrders
}


},





// end of vueComponent
})






