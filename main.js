'use strict'

Vue.createApp({

    data(){

        return{
            toDo:[
                {
                id:1,
                text: "alzarsi dal letto",
                svolto: false,
            },
            {
                id:2,
                text: "mangiare qualcosa",
                svolto: false,
            },
            {
                id:3,
                text: "mangiare qualcosa",
                svolto: false,
            },
            {
                id:4,
                text: "darsi una sistemata",
                svolto: false,
            },
            {
                id:5,
                text: "iniziare a darsi da fare",
                svolto: false,
            }
            ],
            contatore : 5,
            message: "Hai " + this.contatore + " cose da fare" , 
            
            newToDO:{
                id:"",
                text: "",
                svolto: false,
            },
            funzione:function(){},
    }},
    method:{
        function(){
        console.log(contatore)
    }
}
}).mount("#app");