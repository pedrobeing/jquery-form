function createDiv() {
  let div = document.createElement("div");
  div.innerHTML = "os dados foram salvos";
  div.classList.add("infos");
  let innerDiv = document.createElement("div");
  innerDiv.classList.add("datas");

  div.appendChild(innerDiv);
  return div;;
}


$(document).ready(() => {
  $("#btn1").click(() => {
    const nameData = $("#name").val();
    const ageData = $("#age").val();
    const numberData = $("#number").val();

    function validate() {
      if(nameData !== "" && ageData !== "" && numberData !== "" ){
        if(ageData.length == 2 ){
          $(".datas").append(ageData);
        } else{
          alert("idade inválida")
          return;
        }

        if(numberData.length === 9){
          $(".datas").append(numberData);
        } else {
          alert("número inválido")
          return;
        }

        $(".showInfo").show("slow")
        $("#btn1").remove();
        $(".form").after(createDiv());

        return;

      } else{
        alert("Preencha todos os campos antes de enviar")
      }
    }

    validate();
  })

  $(".showInfo").click(() => {
    $(".infos").empty();
    $(".showInfo").remove();

    function setDatas() {
      
      const nameData = $("#name").val();
      const ageData = $("#age").val();
      const numberData = $("#number").val();
      return innerDiv;
    }
    
    $(".infos").append(setDatas())
    
  });
});

