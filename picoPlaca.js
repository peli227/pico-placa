window.addEventListener("load",function (params) {
    
    var results=document.getElementById("results")
    var boton = document.getElementById("boton");
    boton.addEventListener("click",function (params) {
        
        var Datefield = document.getElementById("selectDia"); 
        var date= Datefield.value;
        console.log(date)
        
        var placafield = document.getElementById("placa"); 
        var placa= placafield.value; 
        var placa2;
        var horafield = document.getElementById("hora"); 
        var hora= moment(horafield.value,'HH:mm').format('HH:mm');
        console.log(hora, typeof(hora));
        const hDMin= moment('07:00','HH:mm').format('HH:mm');
        const hDMax= moment('09:30','HH:mm').format('HH:mm');
        const hTMin= moment('16:00','HH:mm').format('HH:mm');
        const hTMax= moment('19:30','HH:mm').format('HH:mm');

        if(placa>=100){
            placa2=((placa%100)%10);
        }
        switch (date) {
            case "1":
                if (placa2==0 || placa2==1) {
                    if(hora>=hDMin && hora<=hDMax){
                        results.innerHTML="Car can´t be on the road";
                    }else if (hora >= hTMin && hora <=hTMax){
                        results.innerHTML="Car can´t be on the road";
                    }else{
                        results.innerHTML="Car can be on the road";
                    }
                }else{
                    results.innerHTML="Car can be on the road";
                }break;

            case "2":
                if (placa2==2 || placa2==3) {
                    if(hora>=hDMin && hora<=hDMax){
                        results.innerHTML="Car can´t be on the road";
                    }else if (hora >= hTMin && hora <=hTMax){
                        results.innerHTML="Car can´t be on the road";
                    }else{
                        results.innerHTML="Car can be on the road";
                    }
                }else{
                    results.innerHTML="Car can be on the road";
                }break;
                
            case "3":
                if (placa2==4 || placa2==5) {
                    if(hora>=hDMin && hora<=hDMax){
                        results.innerHTML="Car can´t be on the road";
                    }else if(hora >= hTMin && hora <=hTMax){
                        results.innerHTML="Car can´t be on the road";
                    }else{
                        results.innerHTML="Car can be on the road";
                    }
                }else{
                    results.innerHTML="Car can be on the road";
                }break;

            case "4":
                if (placa2==6 || placa2==7) {
                    if(hora>=hDMin && hora<=hDMax){
                        results.innerHTML="Car can´t be on the road";
                    }else if(hora >= hTMin && hora <=hTMax){
                        results.innerHTML="Car can´t be on the road";
                    }else{
                        results.innerHTML="Car can be on the road";
                    }
                }else{
                    results.innerHTML="Car can be on the road";
                }break;

            case "5":
                if (placa2==8 || placa2==9) {
                    if(hDMin && hora<=hDMax){
                        results.innerHTML="Car can´t be on the road";
                    }else if(hora >= hTMin && hora <=hTMax){
                        results.innerHTML="Car can´t be on the road";
                    }else{
                        results.innerHTML="Car can be on the road";
                    }
                }else{
                    results.innerHTML="Car can be on the road";
                }break;

            default:
                break;
        }
    });
});
