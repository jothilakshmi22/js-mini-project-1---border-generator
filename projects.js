document.addEventListener("DOMContentLoaded", () => {
  let textbox = document.getElementById("txt");
  let btnbox = document.getElementById("btncopy");
  let container = document.querySelector(".container");
  let range = document.getElementById("all");
  let span = document.getElementById("span");
  let span2 = document.getElementById("span2");

  let select = document.getElementById("select");
  let color = document.getElementById("colorpicker");
  let bordersize = document.getElementById("bordersize");

  ///!!!!!!!!!!unproper code
  //   range.value = "50";
  //   const allborderupdated = () => {
  //     const pxvalue = (span.innerText = `${range.value}px`);
  //     // var coding = `border-radius:"${pxvalue}" border:"4px ${selectvalue} black" `;
  //     // let textboxvalue = (textbox.innerHTML = coding);
  //     container.style.borderRadius = pxvalue;
  //     // container.style.border = "1px  black";
  //     select.addEventListener("change", () => {
  //       let select = document.getElementById("select");
  //       let selectvalue = select.value;
  //       let color = "red";
  //       container.style.border = `"4px ${selectvalue} ${color}"`;
  //       //   //   color picker
  //       //   color.addEventListener("change", () => {
  //       //     colorvalue = color.value;
  //       //   });

  //       var coding = `border-radius:"${pxvalue}" border:"4px ${selectvalue} black"`;
  //       let textboxvalue = (textbox.innerHTML = coding);
  //       // alert("hi");
  //     });
  //   };

  // ------------------------

  //   select.addEventListener("change", () => {
  //     let select = document.getElementById("select");
  //     let selectvalue = select.value;
  //     container.style.border = `1px ${selectvalue} black`;
  //     // alert("hi");
  var coding = "";
  borderstyle = "solid";
  bordercolor = "blue";
  borderpx = "1px";
  const allborderupdated = () => {
    var rangevalue = range.value;
    borderpx = bordersize.value;
    var resultrange = (span.innerText = `${rangevalue}px`);
    var resultborderpx = (span2.innerText = `${borderpx}px`);
    coding = `border-radius:${rangevalue}px; border:${borderpx}px ${borderstyle} ${bordercolor};`;
    textbox.value = coding;
    // container.style.borderRadius = resultrange; multi css style can be added
    container.style.cssText = coding;
  };
  function updatecode9() {}

  //range move
  range.addEventListener("change", allborderupdated);
  range.addEventListener("mousemove", allborderupdated);

  bordersize.addEventListener("change", allborderupdated);
  bordersize.addEventListener("mousemove", allborderupdated);
  //   copytext
  btnbox.addEventListener("click", () => {
    document.getElementById("txt").select();
    document.execCommand("copy");
    alert("code copyed");
  });

  //borderstyle dynamic change
  select.addEventListener("change", () => {
    let select = document.getElementById("select");
    let selectvalue = select.value;
    //   container.style.border = `1px ${selectvalue} black`;
    borderstyle = selectvalue;
    allborderupdated();
    // alert("hi");
  });
  //   color picker
  color.addEventListener("change", () => {
    colorvalue = color.value;
    bordercolor = colorvalue;
    allborderupdated();
  });
});
