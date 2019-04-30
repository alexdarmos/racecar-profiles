$(() => {

     let cardCounter = 0;
     let released = false;
     let targetPosition = null;
     let target = null;
     let nextTarget = null;
     let prevTarget = null;

          console.log(cardCounter);



     function isMoving() {
          let newPosition = targetPosition - 280;
          $(target).css("left", newPosition);
     }

     function isReleased() {
          released = true;
          console.log(targetPosition)

          if (released === true && targetPosition <= 90) {
               cardCounter++;

               console.log(cardCounter);

               if (cardCounter === 1) {
                    $(target).css({"left":`${30}px`, "top":`${480}px`, "z-index": 100});
                    $(nextTarget).next().css({"left": `${0}px`, "top": `${-500}px`, "z-index": 200});
                    $(target).next().css({"left": `${-30}px`, "top": `${23}px`, "z-index": 300});

               } else if (cardCounter === 2) {
                    $(target).css({"left":`${30}px`, "top":`${-23}px`, "z-index": 100});
                    $(prevTarget).css({"left": `${0}px`, "top": `${500}px`, "z-index": 200});
                    $(target).next().css({"left": `${-30}px`, "top": `${-479}px`, "z-index": 300});
               } else {
                    $(target).css({"left":`${30}px`, "top":`${-525}px`, "z-index": 100});
                    $(target).prev().css({"left": `${0}px`, "top": `${0}px`, "z-index": 200});
                    $(prevTarget).prev().css({"left": `${-30}px`, "top": `${525}px`, "z-index": 300});
                    cardCounter = 0;
                    return;
               }
          }
     }




     $(`.card`).on("touchstart", function (e) {
          targetPosition = e.targetTouches[0].pageX;
     }).on("touchmove", function (e) {
          target = e.currentTarget;
          targetPosition = e.targetTouches[0].pageX;
          nextTarget = $(target).next();
          prevTarget = $(target).prev();

          isMoving();
     }).on("touchend", function (e) {
          isReleased();
     })














     // if (cardCounter === 0) {
     //      $(`.card.card-2`).unbind("touchstart touchmove touchend");
     // }
     // if (cardCounter === 1) {
     //      $(`.card.card-1`).unbind("touchstart touchmove touchend");
     //      $(`.card.card-2`).bind("touchstart touchmove touchend");
     // }
})

