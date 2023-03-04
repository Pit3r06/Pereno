/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

*/

function aside(){
    
    let persone=``;

    for (let i=1; i<genereUt.length; i++ ) {

        if(genereUt[i]=="m"){
            persone +=`
                <li>
                  
                    <div class="material-symbols-outlined icone"  >
                        face
                    </div>
                    ${nomeUtenti[i]}
                    ${cognomeUtenti[i]}
                    

                </li>
            `;
        }else{
            persone +=`
                <li>
                    
                    <div class="material-symbols-outlined icone"  >
                        face_3
                    </div>
                    ${nomeUtenti[i]}
                    ${cognomeUtenti[i]}
                   
                </li>
            `;
        } 
        
    
    }
    
    console.log(persone);

    document.querySelector(".listUtenti").innerHTML += persone;

    document.querySelector(".header").innerHTML = `
                                                <div class="material-symbols-outlined icone">
                                                    face                
                                                </div>
                                                    <div>
                                                        <div id="nomeIMG">Mario</div>
                                                        <div id="cognomeIMG">Rossi</div>
                                                        <div id="divUltimoMes">Oggi alle 9:45</div>
                                                    </div>
                                                `;
}



function ciao(){
    let i=1;
    do
        if(nomeUtenti[i]==""){
            
        }else{
            
        }
    while(i<nomeUtenti.length);

    document.querySelector(".header").innerHTML = icona;
    icona =`
            <div class="material-symbols-outlined icone">
                face            
            </div>
            <div>
                ${nomeUtenti[i]}
                ${cognomeUtenti[i]}
                <div id="divUltimoMes">Oggi alle 9:45</div>
            </div>
        `;
}




