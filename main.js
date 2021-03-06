$(() => {

     let moveTracker = false;
     let positionMoved = 0;
     let initialPosition = null;


     let cardCounter = 0;
     let clickCount = 0;
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
               poster: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/snobalt-01.jpg",
               posterMobile: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/snobalt-mobile-01.jpg",
               facts: [
                    "The Snobalt is the only Cobalt to win a domestic vehicle class at the world touring WekFest Car Show.",
                    "It has the second highest horse power, putting out as much as 612hp at the wheels. ",
                    "This is the only Cobalt in the world to sport a swapped LHU PCM.",
                    // "Snobalt fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "Snobalt fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit."
               ],
               gallery: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/snobalt-01.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/snobalt-02.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/snobalt-03.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/snobalt-07.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/snobalt-05.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/snobalt-06.jpg"
               ],
               mods: [
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-zzp-girdled-gen3-block-1_300x300.jpg?v=1540834786",
                         url: "https://zzperformance.com/products/zzp-girdled-gen3-block"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-ecotec-ported-head-1_300x.jpg?v=1540835704",
                         url: "https://zzperformance.com/products/ecotec-ported-head"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-lash-adjusters-1_large_cropped.jpg?v=1540832567",
                         url: "https://zzperformance.com/products/lash-adjusters",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-ecotec-4340-connecting-rods-1_300x300.jpg?v=1540835235",
                         url: "https://zzperformance.com/products/ecotec-4340-connecting-rods",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-neutral-balance-shafts-1_300x300.jpg?v=1540834491",
                         url: "https://zzperformance.com/products/neutral-balance-shafts-1",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/exhaust-ecotec-stainless-turbo-manifold-1_300x300.jpg?v=1540836193",
                         url: "https://zzperformance.com/products/ecotec-stainless-turbo-manifold",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-zzp-oversized-aluminum-radiator-1_300x300.jpg?v=1540834636",
                         url: "https://zzperformance.com/products/zzp-oversized-aluminum-radiator",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/ZZ-RTMNT-FNT_300x300.png?v=1549468680",
                         url: "https://zzperformance.com/products/front-trans-mount",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/ZZ-LNFUPICP_300x300.png?v=1549485076",
                         url: "https://zzperformance.com/products/lnf-upper-intercooler-pipe",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/intercooling-lnf-lower-intercooler-pipe-1_300x300.jpg?v=1540836209",
                         url: "https://zzperformance.com/products/lnf-lower-intercooler-pipe",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/turbo-parts-kits-zzp-turbo-swap-intake-1_300x300.jpg?v=1540836303",
                         url: "https://zzperformance.com/products/zzp-turbo-swap-intake-1",
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/gauge-gauge-pods-cobalt-coupe-a-pillar-triple-gauge-pod-1_300x300.jpg?v=1540833486",
                         url: "https://zzperformance.com/products/cobalt-coupe-a-pillar-triple-gauge-pod",
                    }

               ],
               modUrl: [
                    "https://zzperformance.com/products/zzp-girdled-gen3-block",


               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ]

          },
          {
               title: "Camaro",
               poster: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/camaro-01.jpg",
               posterMobile: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/camaro-mobile-01.jpg",

               facts: [
                    "In its current state, the ZZP Camaro puts out around 325 hp and 375 torque.",
                    "Its personal best lap time at Ginerman raceway is 00:01:46:12.",
                    "It is also the first Camaro to sport Forgestar F10 D Wheels.",
                    // "camaro fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "camaro fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               gallery: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/camaro-01.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/camaro-02.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/camaro-03.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/camaro-04.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/camaro-05.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/camaro-06.jpg"
               ],
               mods: [
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-je-forged-ltg-pistons-1_300x300.jpg?v=1540837176",
                         url: "https://zzperformance.com/products/je-pistons-for-ltg-2-0"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-ltg-4340-connecting-rods-1_300x.jpg?v=1540836619",
                         url: "https://zzperformance.com/products/ltg-4340-connecting-rods"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-zzp-ltg-performance-cams-3_300x300.jpg?v=1540835366",
                         url: "https://zzperformance.com/products/zzp-ltg-performance-cams"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-82-ltg-valve-springs-1_300x.jpg?v=1540835264",
                         url: "https://zzperformance.com/products/82-ltg-valve-springs"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/exhaust-awd-rwd-ltg-downpipe-1_300x300.jpg?v=1540835671",
                         url: "https://zzperformance.com/products/awd-rwd-ltg-downpipe"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/air-intake-zzp-camaro-2-0l-cold-air-intake-1_300x300.jpg?v=1540837152",
                         url: "https://zzperformance.com/products/zzp-camaro-2-0l-cold-air-intake"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/intercooling-camaro-intercooler-kit-1_300x300.jpg?v=1540837006",
                         url: "https://zzperformance.com/products/camaro-intercooler-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/fueling-zzp-ltg-e85-flex-fuel-conversion-kit-1_300x300.jpg?v=1540835819",
                         url: "https://zzperformance.com/products/ltg-e85-flex-fuel-conversion-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/air-intake-ltg-larger-throttle-body-kit-2_300x300.jpg?v=1540836763",
                         url: "https://zzperformance.com/products/ltg-larger-throttle-body-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/CamaroCatchCan1_300x300.png?v=1548255557",
                         url: "https://zzperformance.com/products/zzp-catch-can"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/exhaust-ltg-turbo-heat-shield-1_300x.jpg?v=1540836382",
                         url: "https://zzperformance.com/products/ltg-turbo-heat-shield"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-bc-racing-coilovers-1_66088286-ef2d-4de8-996d-2b86ed6126c5_300x300.jpg?v=1540836219",
                         url: "https://zzperformance.com/collections/ats/products/ats-cts-bc-racing-coilovers"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-zzp-front-sway-bar-5_300x300.jpg?v=1540837132",
                         url: "https://zzperformance.com/products/zzp-front-sway-bar-1"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-zzp-ats-trailing-arms-1_bb8a472f-ada9-4ecd-9553-d4c202e090cc_300x300.jpg?v=1541515325",
                         url: "https://zzperformance.com/products/zzp-camaro-trailing-arms"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/ZZ-2POD-CAM_300x.jpg?v=1540848694",
                         url: "https://zzperformance.com/products/camaro-dual-gauge-pillar-pod"
                    },
                    // {
                    //      photo: "assets/camaro/mod-gallery/",
                    //      url: ""
                    // }

               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ]

          },
          {
               title: "WallPaper",
               poster: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wallpaper-03.jpg",
               posterMobile: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wallpaper-mobile-01.jpg",
               facts: [
                    "The ZZP Wallpaper ATS is the highest WHP ATS, topping out at 456 WHP.",
                    "It was also chosen to be a display vehicle for SEMA 2014.",
                    "On top of being chosen to be showcased at SEMA, it was also chosen for the Optima Ultimate Street Car Invitational.",
                    // "ATS Wallpaper fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "ATS Wallpaper fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               gallery: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wallpaper-07.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wallpaper-02.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wallpaper-03.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wallpaper-04.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wallpaper-05.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wallpaper-06.jpg"
               ],
               mods: [
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-je-forged-ltg-pistons-1_300x300.jpg?v=1540837176",
                         url: "https://zzperformance.com/products/je-pistons-for-ltg-2-0"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-ltg-4340-connecting-rods-1_300x.jpg?v=1540836619",
                         url: "https://zzperformance.com/products/ltg-4340-connecting-rods"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-zzp-ltg-performance-cams-3_300x300.jpg?v=1540835366",
                         url: "https://zzperformance.com/products/zzp-ltg-performance-cams"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-zzp-ltg-performance-cams-3_300x300.jpg?v=1540835366",
                         url: "https://zzperformance.com/products/zzp-ltg-performance-cams"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-82-ltg-valve-springs-1_300x.jpg?v=1540835264",
                         url: "https://zzperformance.com/products/82-ltg-valve-springs"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/turbo-parts-kits-zzp-z54-turbo-1_300x300.jpg?v=1540836987",
                         url: "https://zzperformance.com/products/zzp-z54-turbo"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/fueling-zzp-ltg-e85-flex-fuel-conversion-kit-1_300x300.jpg?v=1540835819",
                         url: "https://zzperformance.com/products/ltg-e85-flex-fuel-conversion-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/air-intake-zzp-ats-cold-air-intake-1_300x300.jpg?v=1540835957",
                         url: "https://zzperformance.com/products/zzp-ats-cold-air-intake"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/exhaust-awd-rwd-ltg-downpipe-1_300x.jpg?v=1540835671",
                         url: "https://zzperformance.com/products/awd-rwd-ltg-downpipe"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/exhaust-zzp-ats-3-inch-stainless-steel-catback-exhaust-1_300x.jpg?v=1540837342",
                         url: "https://zzperformance.com/products/zzp-ats-3-inch-stainless-steel-catback-exhaust"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/intercooling-ats-intercooler-kit-2_300x.jpg?v=1557251560",
                         url: "https://zzperformance.com/products/ats-intercooler-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/air-intake-ltg-larger-throttle-body-kit-1_300x.jpg?v=1540836763",
                         url: "https://zzperformance.com/products/ltg-larger-throttle-body-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/CamaroCatchCan1_300x300.png?v=1548255557",
                         url: "https://zzperformance.com/products/zzp-catch-can"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/transmission-drivetrain-clutch-masters-clutch-kit-1_300x300.jpg?v=1540837254",
                         url: "https://zzperformance.com/products/clutch-masters-clutch-kit"
                    },
                    // {
                    //      photo: "assets/ats-wallpaper/mod-gallery/",
                    //      url: "http://cdn.shopify.com/s/files/1/0022/0718/7055/products/transmission-drivetrain-clutch-masters-clutch-kit-1_300x300.jpg?v=1540837254"
                    // },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/FW-302-AL_Clutch_Masters_Aluminum_Flywheel_-3_300x300.jpg?v=1557163403",
                         url: "https://zzperformance.com/products/clutch-masters-aluminum-flywheel"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-ats-14-6-front-brake-kit-1_300x300.jpg?v=1540836072",
                         url: "https://zzperformance.com/products/ats-14-6-front-brake-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-ats-14-4-rear-brake-kit-1_300x.jpg?v=1540836074",
                         url: "https://zzperformance.com/products/ats-14-4-rear-brake-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-bc-racing-coilovers-1_66088286-ef2d-4de8-996d-2b86ed6126c5_300x300.jpg?v=1540836219",
                         url: "https://zzperformance.com/products/ats-cts-bc-racing-coilovers"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-zzp-front-sway-bar-5_300x300.jpg?v=1540837132",
                         url: "https://zzperformance.com/products/zzp-front-sway-bar-1"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-zzp-ats-rear-sway-bar-1_300x300.jpg?v=1540837138",
                         url: "https://zzperformance.com/products/zzp-ats-rear-sway-bar"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-ats-goodridge-stainless-brake-lines-1_300x.jpg?v=1540836348",
                         url: "https://zzperformance.com/products/goodridge-stainless-brake-lines-2"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-zzp-ats-trailing-arms-1_300x300.jpg?v=1540836880",
                         url: "https://zzperformance.com/products/zzp-ats-trailing-arms"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/gauge-gauge-pods-ats-sedan-single-gauge-pillar-pod-2_300x300.jpg?v=1540837021",
                         url: "https://zzperformance.com/products/ats-sedan-single-gauge-pillar-pod"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/gauge-gauge-pods-aeroforce-interceptor-scan-gauge-1_300x300.jpg?v=1540834149",
                         url: "https://zzperformance.com/products/aeroforce-interceptor-scan-gauge"
                    },
               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ],
          },
          {
               title: "ATS-V",
               poster: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/atsv-02.jpg",
               posterMobile: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/atsv-mobile-01.jpg",

               facts: [
                    "Our ATS-V is the fastest on the planet and can go from 0 to 134mph in 10.34 seconds.",
                    "This is also the highest horsepower ATS-V, putting out 619 WHP.",
                    "You can see our ATS-V in action on time attack courses and on the drag strip.",
                    // "ATS-V fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "ATS-V fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               gallery: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/atsv-01.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/atsv-02.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/atsv-03.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/atsv-04.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/atsv-05.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/atsv-06.jpg"
               ],
               mods: [
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/ATSVPCM_300x300.jpg?v=1548708745",
                         url: "https://zzperformance.com/products/zzp-ats-v-pcm-tune-test"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/air-intake-zzp-ats-v-cold-air-intake-1_300x300.jpg?v=1540837348",
                         url: "https://zzperformance.com/products/zzp-ats-v-cold-air-intake"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/exhaust-ats-v-downpipes-1_300x300.jpeg?v=1540837170",
                         url: "https://zzperformance.com/products/ats-v-downpipes"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-82-ltg-valve-springs-1_300x.jpg?v=1540835264",
                         url: "https://zzperformance.com/products/82-ltg-valve-springs"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/intercooling-aem-water-methanol-injection-kit-1_300x300.jpg?v=1540833121",
                         url: "https://zzperformance.com/products/aem-water-methanol-injection-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-zzp-ats-trailing-arms-1_300x300.jpg?v=1540836880",
                         url: "https://zzperformance.com/products/zzp-ats-trailing-arms"
                    },
                    // {
                    //      photo: "https:",
                    //      url: ""
                    // }

               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ]
          },
          {
               title: "Matt's Grand Prix",
               poster: "assets/car-5.jpg",
               posterMobile: "assets/car-5.jpg",
               facts: [
                    "Matt's Grand Prix fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Matt's Grand Prix fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Matt's Grand Prix fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Matt's Grand Prix fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Matt's Grand Prix fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               gallery: [],
               mods: [
                    {
                         photo: "https:",
                         url: ""
                    },
                    {
                         photo: "https:",
                         url: ""
                    },
                    {
                         photo: "",
                         url: ""
                    },
                    {
                         photo: "",
                         url: ""
                    }
               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ]
          },
          {
               title: "Zoom's Grand Prix",
               poster: "assets/car-6.jpg",
               posterMobile: "assets/car-6.jpg",
               facts: [
                    "Zoom's Grand Prix fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Zoom's Grand Prix fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Zoom's Grand Prix fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Zoom's Grand Prix fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Zoom's Grand Prix fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               gallery: [],
               mods: [
                    {
                         photo: "https:",
                         url: ""
                    },
                    {
                         photo: "https:",
                         url: ""
                    },
                    {
                         photo: "",
                         url: ""
                    },
                    {
                         photo: "",
                         url: ""
                    }
               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ]
          },
          {
               title: "Sonic",
               poster: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/sonic-04.jpg",
               posterMobile: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/sonic-mobile-01.jpg",
               facts: [
                    "Our Sonic LTZ's fastest 1/4 mile time is 13.65 seconds, hitting a top speed of 105 mph.",
                    // "Sonic fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "Sonic fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "Sonic fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "Sonic fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               gallery: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/sonic-01.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/sonic-02.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/sonic-03.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/sonic-04.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/sonic-05.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/sonic-06.jpg"
               ],
               mods: [
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/air-intake-ported-intake-manifold-1_300x.jpg?v=1540837267",
                         url: "https://zzperformance.com/products/ported-intake-manifold"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/air-intake-zzp-sonic-cold-air-intake-1_300x300.jpg?v=1540836441",
                         url: "https://zzperformance.com/products/zzp-sonic-cold-air-intake"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/intercooling-sonic-intercooler-package-1_300x300.jpg?v=1540836407",
                         url: "https://zzperformance.com/products/sonic-intercooler-package"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-72-valve-springs-1_300x.jpg?v=1540837073",
                         url: "https://zzperformance.com/collections/sonic-cruze/products/72-valve-springs"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-sonic-cruze-12-front-brake-kit-1_300x300.jpg?v=1540834640",
                         url: "https://zzperformance.com/products/12-front-brake-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/suspension-brakes-zzp-sonic-rear-disc-brake-conversion-kit-1_300x300.jpg?v=1540832670",
                         url: "https://zzperformance.com/products/zzp-sonic-rear-disc-brake-conversion-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/exhaust-zzp-1-4l-sonic-stainless-catback-exhaust-1_300x300.jpg?v=1540834166",
                         url: "https://zzperformance.com/products/zzp-1-4l-sonic-stainless-catback-exhaust"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/8236_front_300x300.png?v=1546975147",
                         url: "https://zzperformance.com/products/msd-coil-pack"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/SonicBigTurbo6_300x300.png?v=1551287110",
                         url: "https://zzperformance.com/products/zzp-big-wheel-turbo"
                    }
               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ]
          },
          {
               title: "Slingshot",
               poster: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/slingshot-07.jpg",
               posterMobile: "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/slingshot-mobile-01.jpg",
               facts: [
                    "Our manual transmission SlingShot holds the record for the fastest quarter-mile record pulling in at 12.21 seconds and topping out at 118.67mph.",
                    "Not only does it dominate the quarter-mile, but it's also the fastest stock bottom end Slingshot in a standing half-mile, reaching a top speed of 131.12mph on 9psi 93 octane fuel. ",
                    // "Slingshot fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "Slingshot fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    // "Slingshot fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               gallery: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/slingshot-01.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/slingshot-02.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/slingshot-03.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/slingshot-04.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/slingshot-05.jpg",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/slingshot-06.jpg",
               ],
               mods: [
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/polaris-slingshot-polaris-slingshot-turbo-kit-1_300x300.jpg?v=1540837148",
                         url: "https://zzperformance.com/products/polaris-slingshot-turbo-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/electronics-n2mb-wot-box-1_300x.jpg?v=1540837439",
                         url: "https://zzperformance.com/collections/slingshot/products/n2mb-wot-box"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/ForgedCoatedLJSLE5_300x300.png?v=1550080425",
                         url: "https://zzperformance.com/collections/slingshot/products/forged-coated-pistons-for-lsj-le5"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/engine-ecotec-4340-connecting-rods-1_300x300.jpg?v=1540835235",
                         url: "https://zzperformance.com/products/ecotec-4340-connecting-rods"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/fueling-siemens-80-injectors-4-1_d53ae2c1-3a4b-43d6-ab0b-0ea53b791adc_300x300.jpg?v=1556192732",
                         url: "https://zzperformance.com/products/siemens-80-injectors-5"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/polaris-slingshot-slingshot-rear-mount-radiator-kit-1_300x.jpg?v=1540837507",
                         url: "https://zzperformance.com/products/rear-mount-radiator-kit"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/camshafts-valvetrain-82-ecotec-valve-springs-titanium-retainers-1_300x300.jpg?v=1540833923",
                         url: "https://zzperformance.com/collections/slingshot/products/82-ecotec-valve-springs-titanium-retainers"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/gauge-gauge-pods-aem-temperature-gauge-1_300x300.jpg?v=1540835453",
                         url: "https://zzperformance.com/products/aem-temperature-gauge"
                    },
                    {
                         photo: "https://cdn.shopify.com/s/files/1/0022/0718/7055/products/gauge-gauge-pods-aem-wideband-failsafe-gauge-1_300x300.jpg?v=1540835049",
                         url: "https://zzperformance.com/collections/slingshot/products/aem-wideband-failsafe-gauge"
                    },
                    // {
                    //      photo: "https:",
                    //      url: ""
                    // }
               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    // "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ]
          },
          {
               title: "2-Tone Cobalt",
               poster: "assets/car-9.jpg",
               posterMobile: "assets/car-9.jpg",
               facts: [
                    "2-Tone Cobalt fact one. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "2-Tone Cobalt fact two. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "2-Tone Cobalt fact three. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "2-Tone Cobalt fact four. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "2-Tone Cobalt fact five. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
               ],
               gallery: [],
               mods: [
                    {
                         photo: "https:",
                         url: ""
                    },
                    {
                         photo: "https:",
                         url: ""
                    },
                    {
                         photo: "",
                         url: ""
                    },
                    {
                         photo: "",
                         url: ""
                    }
               ],
               icons: [
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/wheel.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/piston.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/turbo.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/coilover.png",
                    "https://cdn.shopify.com/s/files/1/0022/0718/7055/files/gauge.png"
               ]
          },
     ]



     //array of visible cars on slider
     let visibleCarProfiles = [carProfiles[0], carProfiles[1], carProfiles[2]];
     // let firstVisible = $(visibleCarProfiles).first();
     // let lastVisible = $(visibleCarProfiles).last();
     //array of the rest of the cars
     let hiddenCarProfiles = [carProfiles[3], carProfiles[6], carProfiles[7]];

     function updateCards(visible) {
          if (screenWidth <= 600) {
               $(`.card-1`).css("background-image", `url("${visible[0].posterMobile}")`);
               $(`.card-2`).css("background-image", `url("${visible[1].posterMobile}")`);
               $(`.card-3`).css("background-image", `url("${visible[2].posterMobile}")`);
          } else {
               $(`.card-1`).css("background-image", `url("${visible[0].poster}")`);
               $(`.card-2`).css("background-image", `url("${visible[1].poster}")`);
               $(`.card-3`).css("background-image", `url("${visible[2].poster}")`);
          }
          $(`.car-title-1`).text(visible[0].title);
          $(`.car-title-2`).text(visible[1].title);
          $(`.car-title-3`).text(visible[2].title);
     }

     updateCards(visibleCarProfiles);

     function isNext() {
          console.log(`vis: ${visibleCarProfiles.length}`);
          console.log(`hid: ${hiddenCarProfiles.length}`);
          visibleCarProfiles.push(hiddenCarProfiles[0]);
          hiddenCarProfiles.push(visibleCarProfiles[0]);
          visibleCarProfiles.shift();
          hiddenCarProfiles.shift();
          updateCards(visibleCarProfiles);
     }

     function isPrevious() {
          console.log(`vis: ${visibleCarProfiles.length}`);
          console.log(`hid: ${hiddenCarProfiles.length}`);
          visibleCarProfiles.unshift(hiddenCarProfiles[(hiddenCarProfiles.length - 1)]);
          hiddenCarProfiles.unshift(visibleCarProfiles[3]);
          visibleCarProfiles.pop();
          hiddenCarProfiles.pop();
          updateCards(visibleCarProfiles);
     }
     console.log($(`.card-1`).css("left"))
     function isMoving() {
          newPosition = targetPositionX - initialPosition;
          $(target).css("left", newPosition);
     }

     function isReleased() {
          released = true;

          if (released === true) {

               if (screenWidth < 600) {
                    if (targetPositionX <= 90 || targetPositionX >= 300) {
                         isNext();

                         $(`.card-1`).css({ "left": `${20}px`, "top": `${475}px`, "z-index": 30 });
                         $(`.card-2`).css({ "left": `${0}px`, "top": `${10}px`, "z-index": 20 });
                         $(`.card-3`).css({ "left": `${-20}px`, "top": `${-455}px`, "z-index": 10 });

                    } else {
                         $(`.card-1`).css({ "left": `${20}px`, "top": `${475}px`, "z-index": 30 });
                         $(`.card-2`).css({ "left": `${0}px`, "top": `${10}px`, "z-index": 20 });
                         $(`.card-3`).css({ "left": `${-20}px`, "top": `${-455}px`, "z-index": 10 });
                    }
               }
               if (screenWidth >= 600 && screenWidth <= 768) {
                    if (targetPositionX < 300 || targetPositionX >= 800) {
                         console.log(`position X: ${targetPositionX}`);
                         isNext();

                         $(`.card-1`).css({ "left": `${55}px`, "top": `${0}px`, "z-index": 30 });
                         $(`.card-2`).css({ "left": `${90}px`, "top": `${-525}px`, "z-index": 20 });
                         $(`.card-3`).css({ "left": `${130}px`, "top": `${-1050}px`, "z-index": 10 });
                    }
               }




          }

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
               modList = visibleCarProfiles[1].mods;

          } else {
               factList = visibleCarProfiles[2].facts;
               iconList = visibleCarProfiles[2].icons;
               galleryList = visibleCarProfiles[2].gallery;
               modList = visibleCarProfiles[2].mods;
          }

          factList.forEach(function (item, key, arr) {
               let result = key % 2;

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
<a href="${item.url}" target="_blank"><img class="mod-gallery-item" src="${item.photo}"/></a>
`)
          });

          if (screenWidth > 831)
               $(`.photo-gallery-item`).on(`click`, (e) => {
                    clickCount++;

                    if (clickCount === 1) {

                         console.log(e);
                         $($(e.currentTarget).animate({
                              "width": "750px",
                              "height": "540px",
                              "position": "fixed",
                              "z-index": "2000"
                         }));
                    } else {
                         clickCount = 0;
                         $($(e.currentTarget).animate({
                              "width": "348px",
                              "height": "242px",
                              "position": "unset",
                              "z-index": "unset"
                         }));
                    }
               })
     }

     $(`.card`).on("touchstart", function (e) {
          targetPositionX = e.targetTouches[0].pageX;
          initialPosition = targetPositionX;
          console.log(`initial: ${initialPosition}`);

          target = e.target;
          targetLeft = $(e.target).css("left");

     }).on("touchmove", function (e) {
          moveTracker = true;
          e.preventDefault();

          console.log(e);
          target = e.currentTarget;
          targetPositionX = e.targetTouches[0].pageX;

          nextTarget = $(target).next();
          prevTarget = $(target).prev();
          isMoving();

     }).on("touchend", function (e) {
          moveTracker = false;
          positionMoved = 0;
          isReleased();

     }).on("click", function (e) {
          $(`#popup-container`).fadeIn("slow").css("display", "flex");
          if (screenWidth >= 831) {
               $(`.slider-buttons`).toggle();
          }
          selected = e.currentTarget.className;
          isSelected();

     })

     $(`#exit-button`).on("click", function (e) {
          $(`#popup-container`).fadeOut("slow");
          if (screenWidth >= 831) {
               $(`.slider-buttons`).toggle();
          }
     })

     $(`#previous-button`).on("click", function (e) {
          isPrevious();
     })

     $(`#next-button`).on("click", function (e) {
          isNext()
     })


})

