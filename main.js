$(() => {

     let cardCounter = 0;
     let indexCounter = 0;
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
               title: "1",
               poster: "assets/Wing-small.jpg",
               factOne: "snowbalt fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "snowbalt fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "snowbalt fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "snowbalt fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "snowbalt fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          },
          {
               title: "2",
               poster: "assets/CamaroGrandville-small.jpg",
               factOne: "camaro fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "camaro fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "camaro fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "camaro fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "camaro fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          },
          {
               title: "3",
               poster: "assets/ats-small.jpg",
               factOne: "ATS Wallpaper fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "ATS Wallpaper fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "ATS Wallpaper fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "ATS Wallpaper fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "ATS Wallpaper fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          },
          {
               title: "4",
               poster: "assets/car-4.jpg",
               factOne: "Demo-1 fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "Demo-1 fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "Demo-1 fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "Demo-1 fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "Demo-1 fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          },
          {
               title: "5",
               poster: "assets/car-5.jpg",
               factOne: "Demo-2 fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "Demo-2 fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "Demo-2 fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "Demo-2 fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "Demo-2 fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/blower.png"
          },
          {
               title: "6",
               poster: "assets/car-6.jpg",
               factOne: "Demo-3 fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "Demo-3 fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "Demo-3 fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "Demo-3 fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "Demo-3 fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          },
          {
               title: "7",
               poster: "assets/car-7.jpg",
               factOne: "Demo-4 fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "Demo-4 fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "Demo-4 fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "Demo-4 fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "Demo-4 fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/blower.png"
          },
          {
               title: "8",
               poster: "assets/car-8.jpg",
               factOne: "Demo-5 fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "Demo-5 fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "Demo-5 fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "Demo-5 fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "Demo-5 fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/turbo.png"
          },
          {
               title: "9",
               poster: "assets/car-9.jpg",
               factOne: "Demo-6 fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factTwo: "Demo-6 fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factThree: "Demo-6 fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFour: "Demo-6 fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               factFive: "Demo-6 fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
               boost: "assets/icons/blower.png"
          },
     ]




     //array of visible cars on slider
     let visibleCarProfiles = [carProfiles[0], carProfiles[1], carProfiles[2]];
     //array of the rest of the cars
     let hiddenCarProfiles = [carProfiles[3], carProfiles[4], carProfiles[5], carProfiles[6], carProfiles[7], carProfiles[8]];

     function updateCards() {
          console.log(visibleCarProfiles);
          $(`.card-1`).css("background-image", `url("${visibleCarProfiles[0].poster}")`);
          $(`.card-2`).css("background-image", `url("${visibleCarProfiles[1].poster}")`);
          $(`.card-3`).css("background-image", `url("${visibleCarProfiles[2].poster}")`);

          $(`.car-title-1`).text(visibleCarProfiles[0].title);
          $(`.car-title-2`).text(visibleCarProfiles[1].title);
          $(`.car-title-3`).text(visibleCarProfiles[2].title);
     }

     updateCards();

     function isMoving() {
          newPosition = targetPositionX - 280;
          $(target).css("left", newPosition);
          // console.log(targetPosition);
     }

     function isReleased() {
          released = true;
          // console.log(cardCounter);

          if (released === true && targetPositionX <= 90 || targetPositionX >= 300 ) {
               cardCounter++;


               hiddenCarProfiles.push(visibleCarProfiles[0])
               visibleCarProfiles.push(hiddenCarProfiles[0]);

               visibleCarProfiles.shift();
               hiddenCarProfiles.shift();
               updateCards();

               $(`.card-1`).css({ "left": `${30}px`, "top": `${480}px`, "z-index": 100 });
               $(`.card-2`).css({ "left": `${-30}px`, "top": `${23}px`, "z-index": 300 });
               $(`.card-3`).css({ "left": `${0}px`, "top": `${-500}px`, "z-index": 200 });


          }

     }

     function isSelected() {
          // console.log($(selected).css("left"));
          // console.log(selected);

          if (selected === "card card-1") {
               $(`.fact-one`).empty().append(visibleCarProfiles[0].factOne);
               $(`.fact-two`).empty().append(visibleCarProfiles[0].factTwo);
               $(`.fact-three`).empty().append(visibleCarProfiles[0].factThree);
               $(`.fact-four`).empty().append(visibleCarProfiles[0].factFour);
               $(`.fact-five`).empty().append(visibleCarProfiles[0].factFive);
               $(`.boost-icon`).empty().attr('src', visibleCarProfiles[0].boost);

               // console.log(carProfiles[0].boost)
          }  
          
          if (selected === "card card-2") {
               $(`.fact-one`).empty().append(visibleCarProfiles[1].factOne);
               $(`.fact-two`).empty().append(visibleCarProfiles[1].factTwo);
               $(`.fact-three`).empty().append(visibleCarProfiles[1].factThree);
               $(`.fact-four`).empty().append(visibleCarProfiles[1].factFour);
               $(`.fact-five`).empty().append(visibleCarProfiles[1].factFive);
               $(`.boost-icon`).empty().attr('src', visibleCarProfiles[1].boost);

          }

          if (selected === "card card-3") {
               $(`.fact-one`).empty().append(visibleCarProfiles[2].factOne);
               $(`.fact-two`).empty().append(visibleCarProfiles[2].factTwo);
               $(`.fact-three`).empty().append(visibleCarProfiles[2].factThree);
               $(`.fact-four`).empty().append(visibleCarProfiles[2].factFour);
               $(`.fact-five`).empty().append(visibleCarProfiles[2].factFive);
               $(`.boost-icon`).empty().attr('src', visibleCarProfiles[2].boost);

          }

     }

     $(`.card`).on("touchstart", function (e) {
          targetPositionX = e.targetTouches[0].pageX;
          targetLeft = $(e.target).css("left");

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
          selected = e.currentTarget.className;
          isSelected();

     })

     $(`#exit-button`).on("click", function (e) {
          $(`#popup-container`).fadeOut("slow");
     })

})

