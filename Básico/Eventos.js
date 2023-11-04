function sayName() {
  alert("Lucca");
}

document.querySelector("#btn")
    .addEventListener('click', () => {
        sayName();
        
        // Outras instruções
    });

    // https://www.w3schools.com/jsref/dom_obj_event.asp para mais informações referentes a eventos, são muitos, se atentar aos principais que envolvem mouse