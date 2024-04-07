


function init(){
    let ele_1= document.getElementById("subComponent_2_educacion")
    let ele_2= document.getElementById("subComponent_2_view")
    
    ele_1.remove();
    const node = ele_2
    node.appendChild(ele_1);

}

function menu(event) {
    let ruta_2= "subComponent_2_view"
    let ele_resp= document.getElementById(ruta_2)

    let elemet_using= event.target
    let data= elemet_using.childNodes[0].textContent

    let result = data.toLowerCase();
    
    elem_toUse=""
    switch(result) {
        case "educacion":
            elem_toUse= "educacion"
            break;
        case "habilidades":
            elem_toUse= "skills"
            break;
        case "experiencia":
            elem_toUse= "experince"
            break;
        default:
            elem_toUse= null
    }

    function elem_goBack() {
        let ruta_toBack= "subComponent_1_"
        let search_ele= ele_resp.childNodes
        let ele_found= search_ele[1].id
        let arrays= ele_found.split("_")
        let ele_found_toUse= arrays[2]

        ruta_toBack += ele_found_toUse

        let ele_1= document.getElementById(ele_found)
        let ele_2= document.getElementById(ruta_toBack)

        ele_1.remove();
        const node = ele_2
        node.appendChild(ele_1);

        elem_change()
    }


    function elem_change() {
        console.log(elem_toUse)
        let ruta_1= "subComponent_2_" + elem_toUse
        let ele_using= document.getElementById(ruta_1)
        
        if(elem_toUse == "experince"){
            ele_using.style.marginTop="12%"
        }
        if(elem_toUse == "skills"){
            ele_using.style.marginTop="12%"
        }
    
        ele_using.remove();
        const node = ele_resp
        node.appendChild(ele_using);
    }

    (ele_resp.childNodes.length == 1)? elem_change() : elem_goBack()




}

function experiencia() {
    let element_1= document.getElementById("data_2_experince")
    let element_2= document.getElementById("data_3_experince")
    let element_3= document.getElementById("data_4_experince")    

    const cssObj = window.getComputedStyle(element_1, null);
    let know_display = cssObj.getPropertyValue("display");

    switch(know_display) {
        case "block":
            element_1.style.display="none"
            element_2.style.display="block"
            element_3.childNodes[1].innerText="TRABAJOS TECNOLOGICOS"
            break;
        case "none":
            element_1.style.display="block"
            element_2.style.display="none"
            element_3.childNodes[1].innerText="DEMAS EXPERIENCIAS"
            break;
        default:
            element_1.style.display="block"
            element_2.style.display="none"
            element_3.childNodes[1].innerText="DEMAS EXPERIENCIAS"
    }

}


