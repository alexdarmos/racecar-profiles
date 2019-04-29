$(() => {
     // let moveLeft = 0;
     // let positionX = 0;
     // let dragging = false;
     // let startX = 0;
     let cardCounter = 0;
     let released = false;
     let targetPosition = null;
     let target = null;

     console.log(cardCounter);



     let isMoving = (target, targetPosition, offset) => {


          let newPosition = targetPosition - offset;

          $(target).css("left", newPosition);
          // console.log(`newPosition: ${newPosition}`);

          // let isReleased = (released) => {
               // if (released === true && targetPosition <= 90) {
               //      $(target).css("z-index", 100);
               //      cardCounter++;
               //      console.log(cardCounter);
               //      return false;
               // }
          // }

     }

     // let isReleased = (targetPosition) => {
     //      if (targetPosition <= 90) {
     //           $(target).css("z-index", 100);
     //           cardCounter++;
     //           console.log(cardCounter);
     //           return false;
     //      }
     // }



     $(`.card-1`)

     .on("touchstart", function(e) {
           targetPosition = e.targetTouches[0].pageX;

     })
     
     
     .on("touchstart touchmove", function (e) {
          // console.log(e);
          // console.log(`offset: ${e.target.offsetWidth}`);
          let offset = e.target.offsetWidth;
          let target = e.currentTarget;
           targetPosition = e.targetTouches[0].pageX;
          // console.log(targetPosition);
          // console.log(targetPosition);
          isMoving(target, targetPosition, offset);
          released = false;


     })
          .on("touchend", function (e) {
               //end touch  
               // return released = true;
               // isReleased(released);
               released = true;
               console.log(targetPosition)

               if (released === true && targetPosition <= 90) {
                    $(target).css("z-index", 100);
                    cardCounter++;
                    console.log(cardCounter);
                    return false;
               }

          })

})

