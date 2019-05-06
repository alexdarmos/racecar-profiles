$(() => {

     let cardCounter = 0;
     let factList = [];
     let iconList = [];
     let galleryList = [];
     let modList = [];
     let indexCounter = 0;
     let released = false;
     let targetPositionX = null;
     let target = null;
     let nextTarget = null;
     let prevTarget = null;
     let selected = null;
     let newPosition = 0;
     let targetLeft = null;
     let screenWidth = $(window).width();
     console.log(`screen width: ${screenWidth}`);

     let carProfiles = [
          {
               title: "Snobalt",
               poster: "assets/Wing-small.jpg",
               facts: [
                    "Snobalt fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Snobalt fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Snobalt fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Snobalt fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Snobalt fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit."
               ],
               gallery: [
                    "assets/snobalt/photo-gallery/snobalt-1.jpg",
                    "assets/snobalt/photo-gallery/snobalt-2.jpg",
                    "assets/snobalt/photo-gallery/snobalt-3.jpg",
                    "assets/snobalt/photo-gallery/snobalt-4.jpg",
                    "assets/snobalt/photo-gallery/snobalt-5.jpg",
                    "assets/snobalt/photo-gallery/snobalt-6.jpg"
               ],
               mods: [
                    "assets/snobalt/mod-gallery/aem-gauge.jpg",
                    "assets/snobalt/mod-gallery/o2-harness.jpg",
                    "assets/snobalt/mod-gallery/pulley-system.jpg",
                    "assets/snobalt/mod-gallery/stage-3-kit.jpg",
                    "assets/snobalt/mod-gallery/stainless-downpipe.jpg",
                    "assets/snobalt/mod-gallery/z54-turbo.jpg"
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ]

          },
          {
               title: "Camaro",
               poster: "assets/CamaroGrandville-small.jpg",
               facts: [
                    "camaro fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "camaro fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "camaro fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "camaro fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "camaro fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ],
          },
          {
               title: "WallPaper",
               poster: "assets/ats-small.jpg",
               facts: [
                    "ATS Wallpaper fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "ATS Wallpaper fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "ATS Wallpaper fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "ATS Wallpaper fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "ATS Wallpaper fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ],
          },
          {
               title: "ATS-V",
               poster: "assets/car-4.jpg",
               facts: [
                    "ATS-V fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "ATS-V fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "ATS-V fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "ATS-V fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "ATS-V fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ]
          },
          {
               title: "Matt's Grand Prix",
               poster: "assets/car-5.jpg",
               facts: [
                    "Matt's Grand Prix fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Matt's Grand Prix fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Matt's Grand Prix fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Matt's Grand Prix fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Matt's Grand Prix fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ]
          },
          {
               title: "Zoom's Grand Prix",
               poster: "assets/car-6.jpg",
               facts: [
                    "Zoom's Grand Prix fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Zoom's Grand Prix fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Zoom's Grand Prix fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Zoom's Grand Prix fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Zoom's Grand Prix fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ]
          },
          {
               title: "Sonic",
               poster: "assets/car-7.jpg",
               facts: [
                    "Sonic fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Sonic fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Sonic fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Sonic fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Sonic fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ]
          },
          {
               title: "Slingshot",
               poster: "assets/car-8.jpg",
               facts: [
                    "Slingshot fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Slingshot fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Slingshot fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Slingshot fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Slingshot fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ]
          },
          {
               title: "2-Tone Cobalt",
               poster: "assets/car-9.jpg",
               facts: [
                    "2-Tone Cobalt fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "2-Tone Cobalt fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "2-Tone Cobalt fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "2-Tone Cobalt fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "2-Tone Cobalt fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               icons: [
                    "assets/icons/wheel.png",
                    "assets/icons/piston.png",
                    "assets/icons/turbo.png",
                    "assets/icons/coilover.png",
                    "assets/icons/gauge.png"
               ]
          },
     ]



     //array of visible cars on slider
     let visibleCarProfiles = [carProfiles[0], carProfiles[1], carProfiles[2]];
     //array of the rest of the cars
     let hiddenCarProfiles = [carProfiles[3], carProfiles[4], carProfiles[5], carProfiles[6], carProfiles[7], carProfiles[8]];

     function updateCards() {
          // console.log(visibleCarProfiles);
          $(`.card-1`).css("background-image", `url("${visibleCarProfiles[0].poster}")`);
          $(`.card-2`).css("background-image", `url("${visibleCarProfiles[1].poster}")`);
          $(`.card-3`).css("background-image", `url("${visibleCarProfiles[2].poster}")`);

          $(`.car-title-1`).text(visibleCarProfiles[0].title);
          $(`.car-title-2`).text(visibleCarProfiles[1].title);
          $(`.car-title-3`).text(visibleCarProfiles[2].title);
     }

     updateCards();

     function isMoving() {
          if (screenWidth < 600) {
               newPosition = targetPositionX - 280;
               // console.log(targetPosition);
          } else if (screenWidth >= 600 && screenWidth <= 768) {
               newPosition = targetPositionX - 480;
          }
          $(target).css("left", newPosition);

     }

     function isReleased() {
          released = true;

          if (released === true) {

               if (screenWidth < 600) {
                    if (targetPositionX <= 90 || targetPositionX >= 300) {
                         hiddenCarProfiles.push(visibleCarProfiles[0]);
                         visibleCarProfiles.push(hiddenCarProfiles[0]);

                         visibleCarProfiles.shift();
                         hiddenCarProfiles.shift();

                         updateCards();


                         $(`.card-1`).css({ "left": `${-30}px`, "top": `${525}px`, "z-index": 300 });
                         $(`.card-2`).css({ "left": `${0}px`, "top": `${0}px`, "z-index": 200 });
                         $(`.card-3`).css({ "left": `${30}px`, "top": `${-525}px`, "z-index": 100 });

                    }
               }
               if (screenWidth >= 600 && screenWidth <= 768) {
                    if (targetPositionX < 300 || targetPositionX >= 800) {
                         console.log(`position X: ${targetPositionX}`);

                         hiddenCarProfiles.push(visibleCarProfiles[0]);
                         visibleCarProfiles.push(hiddenCarProfiles[0]);

                         visibleCarProfiles.shift();
                         hiddenCarProfiles.shift();

                         updateCards();

                         $(`.card-1`).css({ "left": `${55}px`, "top": `${0}px`, "z-index": 300 });
                         $(`.card-2`).css({ "left": `${90}px`, "top": `${-525}px`, "z-index": 200 });
                         $(`.card-3`).css({ "left": `${130}px`, "top": `${-1050}px`, "z-index": 100 });
                    }
               }




          }

     }

     function isSelectedPrevious() {
          hiddenCarProfiles.push(visibleCarProfiles[0]);
          visibleCarProfiles.push(hiddenCarProfiles[0]);
          visibleCarProfiles.shift();
          hiddenCarProfiles.shift();
          updateCards();
     }

     function isSelectedNext() {
          hiddenCarProfiles.unshift(visibleCarProfiles[2]);
          visibleCarProfiles.unshift(hiddenCarProfiles[5]);
          visibleCarProfiles.pop();
          hiddenCarProfiles.pop();
          updateCards();







     }





     function isSelected() {

          $(`.car-stats`).empty();
          $(`.photo-gallery`).empty();
          $(`.mod-gallery`).empty();


          if (selected === "card card-1") {
               factList = visibleCarProfiles[0].facts;
               iconList = visibleCarProfiles[0].icons;
               galleryList = visibleCarProfiles[0].gallery;
               modList = visibleCarProfiles[0].mods;

          } else if (selected === "card card-2") {
               factList = visibleCarProfiles[1].facts;
               iconList = visibleCarProfiles[1].icons;
               galleryList = visibleCarProfiles[1].gallery;
          } else {
               factList = visibleCarProfiles[2].facts;
               iconList = visibleCarProfiles[2].icons;
               galleryList = visibleCarProfiles[2].gallery;

          }
          factList.forEach(function (item, key, arr) {
               let result = key % 2;
               console.log(result);
               console.log(item);
               console.log(arr);

               if (result === 0) {
                    $(`.car-stats`).append(`      
                    <div class="mod-part-sub-container">
                    <div class="icon"><img src="${iconList[key]}"/></div>
                    <div class="car-fact">${arr[key]}</div>
                    </div>`);
               } else {
                    $(`.car-stats`).append(`      
                    <div class="mod-part-sub-container reverse-row">
                    <div class="icon"><img src="${iconList[key]}"/></div>
                    <div class="car-fact">${arr[key]}</div>
                    </div>`);
               }
          });

          galleryList.forEach(function (item, key, arr) {
               $(`.photo-gallery`).append(`
               <img class="photo-gallery-item" src="${item}"/>
               `)
          });

          modList.forEach(function (item, key, arr) {
               $(`.mod-gallery`).append(`
               <img class="mod-gallery-item" src="${item}"/>
               `)
          });
     }

     $(`.card`).on("touchstart", function (e) {
          targetPositionX = e.targetTouches[0].pageX;
          target = e.target;
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

     $(`#previous-button`).on("click", function (e) {
          isSelectedPrevious();
     })

     $(`#next-button`).on("click", function (e) {
          isSelectedNext()
     })


})

