document.getElementById("button").onclick = function() {
    console.log("Hello")
    alert("Error")
  };

if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
  //SmartPhone and Tablet
  alert("オフラインエディターはPCでのみ利用できます。")
}else{
    // PC
  }
