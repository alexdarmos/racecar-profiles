$(() => {

     let cardCounter = 0;
     let released = false;
     let targetPositionX = null;
     let target = null;
     let nextTarget = null;
     let prevTarget = null;
     let selected = null;
     let newPosition = 0;
     let targetLeft = null;
     let carProfiles = [
          {
               title: "snowbalt",
               factOne: "snowbalt fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "snowbalt fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "snowbalt fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "snowbalt fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "snowbalt fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          },
          {
               title: "camaro",
               factOne: "camaro fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "camaro fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "camaro fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "camaro fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "camaro fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          },
          {
               title: "WallPaper ATS",
               factOne: "WallPaper ATS fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "WallPaper ATS fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "WallPaper ATS fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "WallPaper ATS fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "WallPaper ATS fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          }
     ]

     console.log(cardCounter);

     function isMoving() {
          newPosition = targetPositionX - 280;
          $(target).css("left", newPosition);
          // console.log(targetPosition);

     }

     function isReleased() {
          released = true;
          console.log(cardCounter);

          if (released === true && targetPositionX <= 90 || targetPositionX >= 300 ) {
               cardCounter++;
               if (cardCounter === 1) {
                    $(target).css({ "left": `${30}px`, "top": `${480}px`, "z-index": 100 });
                    $(nextTarget).next().css({ "left": `${0}px`, "top": `${-500}px`, "z-index": 200 });
                    $(target).next().css({ "left": `${-30}px`, "top": `${23}px`, "z-index": 300 });

               } else if (cardCounter === 2) {
                    $(target).css({ "left": `${30}px`, "top": `${-23}px`, "z-index": 100 });
                    $(prevTarget).css({ "left": `${0}px`, "top": `${500}px`, "z-index": 200 });
                    $(target).next().css({ "left": `${-30}px`, "top": `${-479}px`, "z-index": 300 });
               } else if (cardCounter === 3) {
                    $(target).css({ "left": `${30}px`, "top": `${-525}px`, "z-index": 100 });
                    $(target).prev().css({ "left": `${0}px`, "top": `${0}px`, "z-index": 200 });
                    $(prevTarget).prev().css({ "left": `${-30}px`, "top": `${525}px`, "z-index": 300 });
                    cardCounter = 0;
                    return;
               }
          }

          // if (released === true && targetPositionX > 90 && targetPositionX < 299){
          //      // cardCounter = 0;
          //      console.log(cardCounter);
          //      $(target).css("left", targetLeft);

          // }
     }

     function isSelected() {
          // console.log($(selected).css("left"));
          // console.log(selected);

          if (selected === "card card-1") {
               $(`.fact-one`).empty().append(carProfiles[0].factOne);
               $(`.fact-two`).empty().append(carProfiles[0].factTwo);
               $(`.fact-three`).empty().append(carProfiles[0].factThree);
               $(`.fact-four`).empty().append(carProfiles[0].factFour);
               $(`.fact-five`).empty().append(carProfiles[0].factFive);
               $(`.boost-icon`).empty().attr('src', carProfiles[0].boost);

               // console.log(carProfiles[0].boost)
          }  
          
          if (selected === "card card-2") {
               $(`.fact-one`).empty().append(carProfiles[1].factOne);
               $(`.fact-two`).empty().append(carProfiles[1].factTwo);
               $(`.fact-three`).empty().append(carProfiles[1].factThree);
               $(`.fact-four`).empty().append(carProfiles[1].factFour);
               $(`.fact-five`).empty().append(carProfiles[1].factFive);
               $(`.boost-icon`).empty().attr('src', carProfiles[1].boost);

          }

          if (selected === "card card-3") {
               $(`.fact-one`).empty().append(carProfiles[2].factOne);
               $(`.fact-two`).empty().append(carProfiles[2].factTwo);
               $(`.fact-three`).empty().append(carProfiles[2].factThree);
               $(`.fact-four`).empty().append(carProfiles[2].factFour);
               $(`.fact-five`).empty().append(carProfiles[2].factFive);
               $(`.boost-icon`).empty().attr('src', carProfiles[2].boost);

          }

     }

     $(`.card`).on("touchstart", function (e) {
          targetPositionX = e.targetTouches[0].pageX;
          targetLeft = $(e.target).css("left");
          // console.log(e.target);
          // console.log($(e.target).css("left"));


          // targetLeft = e.target.css("left");
          // console.log(targetLeft);

          console.log(e);

     }).on("touchmove", function (e) {
          target = e.currentTarget;
          targetPositionX = e.targetTouches[0].pageX;
          nextTarget = $(target).next();
          prevTarget = $(target).prev();
          isMoving();

     }).on("touchend", function (e) {
          isReleased();

     }).on("click", function (e) {
          $(`#popup-container`).fadeIn("slow").css("display", "flex");
          // console.log(e);
          selected = e.currentTarget.className;
          isSelected();

     })

     $(`#exit-button`).on("click", function (e) {
          $(`#popup-container`).fadeOut("slow");
     })

})

