
           
           var usuario = prompt(" cual es tu peso? " );
           var planeta = prompt(" que planeta deseas?" +"\n 1 marte " + "\n 2 jupiter ");
           
           var g_tierra = 8.8;
           var g_marte = 7.5;
           var g_jupiter = 5.5;
           var mi_peso = usuario;
           var nombre;
                  
           
           if
           (planeta == 1)
           {
            var peso_final = mi_peso * g_marte / g_tierra;
            var nombre = "marte";
            
            
            
           }

           else if(planeta == 2)
           {
            var peso_final = mi_peso * g_jupiter / g_tierra;
            var nombre = "jupiter";
           

           }

           else
           {
            peso_final = 0;
            
           }

           

           peso_final = parseInt(peso_final);
           usuario = parseInt(usuario);
           
           document.write(" tu peso es " + peso_final + " kilos ");
           document.write(" en " + nombre);
           
                
                  
        