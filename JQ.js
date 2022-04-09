function createDiv() {
  let div = document.createElement("div");
  div.innerHTML = "Os dados foram salvos";
  div.classList.add("infos");

  return div;
}

function createDatadiv() {
  let dataDiv = document.createElement("div");
  dataDiv.classList.add("datas");

  return dataDiv;
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
        $(".showInfo").fadeIn("slow")
        $("#btn1").remove();
        $(".wrapDatas").append(createDiv());
        return;

      } else{
        alert("Preencha todos os campos antes de enviar")
      }
    }
    validate();
  })

  $(".showInfo").click(() => {
    $(".infos").empty().append(createDatadiv());
    $(".showInfo").fadeTo("speed", 0);

    function setDatas() {
      const nameData = $("#name").val();
      const ageData = $("#age").val();
      const numberData = $("#number").val();
      const dataDiv = document.querySelector(".datas")
      dataDiv.innerHTML += "<span>Nome:<br><br>" + nameData + "</span>";
      dataDiv.innerHTML += "<span>Idade:<br><br>" + ageData + " anos</span>";
      dataDiv.innerHTML += "<span>WhatsApp:<br><br>" + numberData + "</span>";

      return;
    }

    $(".infos").append(setDatas())

  });
});