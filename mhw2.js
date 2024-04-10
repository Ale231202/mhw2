function mainSection_forward() {
    const arrow_forward = event.currentTarget;

    let indexAttuale = parseInt(mainSectionAttuale.getAttribute('data-index'));
    let indexNuovo = indexAttuale;
    indexNuovo++;

    const sfondiMainSection = document.querySelectorAll('#back_main_section');

    for(const sfondo of sfondiMainSection) {

        if(sfondo.getAttribute('data-index') == indexNuovo ) {

            sfondoAttuale.classList.add('hidden');
            sfondo.classList.remove('hidden');
            sfondoAttuale = sfondo; 
            break;
        }
  
    }

    const allMainSection = document.querySelectorAll('#main_section');

    for(const mainSection of allMainSection) {
        console.log('mainSection: ' + mainSection.getAttribute('data-index'));
        if(mainSection.getAttribute('data-index') == indexNuovo) {

            mainSectionAttuale.classList.add('hidden');
            mainSection.classList.remove('hidden');
            mainSectionAttuale = mainSection; 
            break;
        }
    }

    console.log('cliccato');
}

function mainSection_back() {
    const arrow_back = event.currentTarget;

    let indexAttuale = parseInt(mainSectionAttuale.getAttribute('data-index'));
    let indexNuovo = indexAttuale;
    indexNuovo--;

    const sfondiMainSection = document.querySelectorAll('#back_main_section');

    for(const sfondo of sfondiMainSection) {

        if(sfondo.getAttribute('data-index') == indexNuovo ) {

            sfondoAttuale.classList.add('hidden');
            sfondo.classList.remove('hidden');
            sfondoAttuale = sfondo; 
            break;
        }
  
    }

    const allMainSection = document.querySelectorAll('#main_section');

    for(const mainSection of allMainSection) {
        console.log('mainSection: ' + mainSection.getAttribute('data-index'));
        if(mainSection.getAttribute('data-index') == indexNuovo) {

            mainSectionAttuale.classList.add('hidden');
            mainSection.classList.remove('hidden');
            mainSectionAttuale = mainSection; 
            break;
        }
    }

    console.log('cliccato');
}

let sfondoAttuale = document.querySelector('#back_main_section');
let mainSectionAttuale = document.querySelector('#main_section');

for(const arrow_f of document.querySelectorAll('#arrow_forward')) {
    arrow_f.addEventListener('click', mainSection_forward);
}

for(const arrow_b of document.querySelectorAll('#arrow_back')) {
    arrow_b.addEventListener('click', mainSection_back);
}

