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
    $(".btnSubmit").click(() => {
      const nameData = $("#name").val();
      const ageData = $("#age").val();
      const numberData = $("#number").val();
      function validate() {
        if(ageData !== "" && numberData !== ""){
          $(".errorTxtall").hide();
          let valid = false;
  
          if(nameData.length > 2){
            $("#name").css({"border": "1.4px solid green"});
            $("#name").siblings("span").empty();
            valid = true;
          } else{
            $("#name").css({"border": "1.4px solid red"});
            $("#name").siblings("span").text("Nome Inválido");
            valid = false;
          }
  
          if(ageData.length == 2 ){
            $("#age").css({"border": "1.4px solid green"});
            $("#age").siblings("span").empty();
          } else{
            $("#age").css({"border": "1.4px solid red"});
            $("#age").siblings("span").text("Idade Inválida");
            valid = false;
          }
  
          if(numberData.length === 9){
            $("#number").css({"border": "1.4px solid green"});
            $("#number").siblings("span").empty();
          } else {
            $("#number").css({"border": "1.4px solid red"});
            $("#number").siblings("span").text("Número Inválido");
            valid = false;
          }
  
          if(valid){
            $(".showInfo").fadeIn("slow")
            $(".bntSubmit").remove();
            $(".wrapDatas").append(createDiv());
            return;
          } else {
            return;
          }
        } else{
          $(".btnSubmit").siblings().show();
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