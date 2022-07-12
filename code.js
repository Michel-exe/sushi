// const msj = {
//     prom: "Cuantos platilos desea escoger?",
//     prom2: "Cuantos platilos desea escoger? \nPara cancelar un platillo escriba el valor a cero",
//     alerError: "Por favor escriba un valor valido",
//     whats: "https://api.whatsapp.com/send?phone=527491086498&text=",
// }
// let icons = {
//     food: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"></path></svg>`,
//     food2: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01H3.62zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z"></path></svg>`,
//     te: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 19h18v2H2zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h3v1.4L7.19 7.85c-.12.09-.19.24-.19.39v4.26c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5V8.24c0-.15-.07-.3-.19-.39L10 6.4V5h6v8zM9.5 7.28l1.5 1.2V12H8V8.48l1.5-1.2zM20 8h-2V5h2v3z"></path></svg>`,
//     drink: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm14 18l-10 .01L5.89 10H18.1L17 20zm1.33-12H5.67l-.44-4h13.53l-.43 4zM12 19c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S9 14 9 16c0 1.66 1.34 3 3 3zm0-5.09c.59.91 1 1.73 1 2.09 0 .55-.45 1-1 1s-1-.45-1-1c0-.37.41-1.19 1-2.09z"></path></svg>`,
//     drink2: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zM12 14.197 8.535 9h6.93L12 14.197zM18.132 5l-1.333 2H7.201L5.868 5h12.264z"></path></svg>`,
//     fish: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 00-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0023.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z"></path><circle cx="416" cy="239.99" r="16"></circle><path fill="none" stroke-linecap="round" stroke-miterlimit="20" stroke-width="32" d="M378.37 356a199.22 199.22 0 010-200"></path></svg>`,
//     fish2: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571"></path><path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504"></path><path d="M18 11v.01"></path><path d="M11.5 10.5c-.667 1 -.667 2 0 3"></path></svg>`,
//     fish3: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M442.906 52.156c-.806.02-1.617.076-2.437.188-13.124 1.79-22.993 13.47-30.47 32.875-5.993 15.552-10.81 37.088-13.938 66.5-32.023-22.095-63.766-29.543-95.28-25.845l-26.97-60.063-24.968 71.282L198.5 107.28l-.813 63.064-46.562 1.75 12.53 30.562c-17.504 16.246-34.963 34.403-52.405 53.844l-92.813-45.375 44.876 75.906-36.47 39.095 36.282 2.78-40.47 59.876 108.064-64.905 87.56 42.53-49.75 17.376 35.564 13.814-32.563 22.22 52.157.967-4.593 46.845 59.312-72.03L365 437.654 496.063 270.47c-3.87-6.63-7.735-12.974-11.594-19.095l-119.376 150.97-4.72 5.967-6.78-3.406-44.344-22.22 8.375-16.717 37.53 18.81L473.69 234.907c-20.158-29.63-40.187-52.59-60.094-69.656 2.96-34.52 8.11-58.353 13.875-73.313 6.36-16.51 12.884-20.706 15.5-21.062 1.306-.178 2.63.047 4.75 1.53 2.118 1.485 4.693 4.293 7 8.19 4.582 7.743 8.005 19.562 8.217 31.686-7.95 3.715-13.437 11.804-13.437 21.157 0 12.878 10.436 23.313 23.313 23.313 12.876 0 23.312-10.435 23.312-23.313 0-9.752-6.002-18.114-14.5-21.593-.284-15.23-4.225-29.62-10.813-40.75-3.322-5.615-7.346-10.478-12.375-14-3.77-2.642-8.322-4.49-13.125-4.875-.8-.065-1.6-.083-2.406-.064zm-52.344 158.156c3.147-.125 6.36.236 9.563 1.094 3.054.82 5.872 2.054 8.438 3.625-.14 0-.268-.03-.407-.03-9.922 0-17.97 6.636-17.97 14.813.002 8.176 8.048 14.812 17.97 14.812 6.503 0 12.16-2.86 15.313-7.125.645 4.24.462 8.684-.72 13.094-4.575 17.074-22.11 27.2-39.188 22.625-17.074-4.576-27.23-22.115-22.656-39.19 3.717-13.872 16.022-23.176 29.656-23.718zm-95.375 11.157l17.907 5.31-12.75 43.064 47.437 38.844-11.842 14.468-52.25-42.78-4.782-3.938 1.75-5.938 14.53-49.03zm-44.937 25.686l17.938 5.313-8.875 29.936 33.437 27.375-11.844 14.47-38.25-31.313-4.812-3.937 1.78-5.97 10.626-35.874z"></path></svg>`,
//     fish4: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288.9 92.42c-5.3 0-10.7.33-16 .88-29.8 3.12-65 23.7-90 51.1-19.5 21.5-32.3 46.6-33.6 69.8l7.6 3.3c6.4-8.9 19.7-26.3 37.6-44.1 25.2-25.1 59.2-51.3 96.5-51 37.6.4 80.9 18 119.9 43.2 18.8 12.2 36.5 26.1 52 40.9-34.4-73.1-106-114.46-174-114.08zm1.9 47.98c-28.3-.3-59.8 22.1-83.6 45.8-23.8 23.6-39.7 47.4-39.7 47.4l-4.2 6.2-31.4-13.4c-7.9 9.9-11.1 24.3-10.7 38.7.4 12.7 4 25.1 7.8 32.5l27.9-12 4.1 6.1c37 54.4 101.5 83.4 157.7 85.5 56.4-7 128.7-26.7 169.3-84l-36-2.5 31.9-31.1c-9.8-15.4-23.8-31.4-40.3-46.3.3 1.1.4 2.3.4 3.5 0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16h.9c-8.8-7.1-18.1-13.9-27.8-20.1-37-23.9-78.3-40-110.3-40.3zm87.7 50.8l15.8 8.6c-26.6 49.1-22.2 96.1 9.4 128.6l-13 12.6c-37.2-38.3-41.6-95.5-12.2-149.8zm-335.64 7c0 21.3-1.94 41.4-18.88 63.2 7.88 6.8 13.34 14.6 16.55 23.6 3.57 10.1 4.67 21.2 5.22 34.2 9.11 1.1 23.71-.3 38.01-4.2 10.03-2.8 19.94-6.7 28.04-10.7-5.3-10.6-8.2-24.2-8.6-38.7-.5-16.2 2.7-33.8 12.5-47.7-8.7-4.9-18.59-9.2-28.74-12.3-15.18-3.8-29.54-7.4-44.1-7.4zM428 248.8c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm-276.7 60.1c1.5 6.1 4.4 12.7 8.6 19.8 8.1 13.7 21 28.3 36.4 41.6 30.8 26.5 71.9 47.4 103.2 49.2 22.2 1.3 47-11.3 69-28.9 2.4-1.9 4.8-3.9 7.1-5.9-19.5 3-39 10.4-56.8 10.5-59.5-1.9-126.1-30.9-167.5-86.3zm270.1 59.6c-7.1 3.2-14.3 6.1-21.5 8.6 1.9 9.8 1.3 19.3.2 28.2 7.5-3.1 14.4-7.5 20.6-14.4 2.5-6.8 2.1-14.2.7-22.4z"></path></svg>`,
//     atun: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 65c-65.3 0-124.4 10.69-166.36 27.5-20.99 8.4-37.64 18.3-48.6 28.7C30.09 131.5 25 141.8 25 152s5.09 20.5 16.04 30.8c10.96 10.4 27.61 20.3 48.6 28.7C131.6 228.3 190.7 239 256 239c65.3 0 124.4-10.7 166.4-27.5 20.9-8.4 37.6-18.3 48.6-28.7 10.9-10.3 16-20.6 16-30.8s-5.1-20.5-16-30.8c-11-10.4-27.7-20.3-48.6-28.7C380.4 75.69 321.3 65 256 65zm.1 13.53c51.3 0 97.8 6.57 132.1 17.57 17.2 5.5 31.4 12 41.9 20 10.6 7.9 18 18 18 29.9 0 11.9-7.4 22-18 29.9-10.5 8-24.7 14.5-41.9 20-34.3 11-80.8 17.6-132.1 17.6s-97.8-6.6-132.1-17.6c-17.2-5.5-31.43-12-41.95-20-10.51-7.9-17.95-18-17.95-29.9 0-11.9 7.44-22 17.95-29.9 10.52-8 24.75-14.5 41.95-20 34.3-11 80.8-17.57 132.1-17.57zm0 17.97c-49.8 0-94.8 6.6-126.7 16.7-15.9 5.1-28.5 11.2-36.49 17.2-8.01 6.1-10.81 11.3-10.81 15.6 0 4.3 2.8 9.5 10.81 15.6 7.99 6 20.59 12.1 36.49 17.2 31.9 10.1 76.9 16.7 126.7 16.7s94.8-6.6 126.7-16.7c15.9-5.1 28.5-11.2 36.5-17.2 8-6.1 10.8-11.3 10.8-15.6 0-4.3-2.8-9.5-10.8-15.6-8-6-20.6-12.1-36.5-17.2-31.9-10.1-76.9-16.7-126.7-16.7zM25 192.2V360c0 13.2 5.88 24.6 17.7 35.4 11.81 10.8 29.56 20.4 51.32 28.1C137.5 439 196.8 447 256 447c59.2 0 118.5-8 162-23.5 21.7-7.7 39.5-17.3 51.3-28.1 11.8-10.8 17.7-22.2 17.7-35.4V192.2c-1.2 1.3-2.4 2.5-3.7 3.7-13.3 12.6-31.8 23.4-54.3 32.3-44.8 18-105.8 28.8-173 28.8s-128.2-10.8-173.05-28.8c-22.45-8.9-40.94-19.7-54.27-32.3-1.28-1.2-2.5-2.4-3.68-3.7zM96 280l64.4 48.2c33.3-15.3 71.8-34.1 135.7-34.1 40 0 120 25.9 120 46 0 19.9-80 45.9-120 45.9-63.9 0-102.4-18.9-135.7-34.2L96 400z"></path></svg>`,
//     meat: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path><ellipse transform="rotate(45 8.025 16.475)" cx="8.025" cy="16.475" rx="7" ry="3"></ellipse><path d="M7.5 16l1 1"></path><path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path></svg>`,
//     meat2: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M440.156 98.063c-4.05-.11-8.044 1.117-11.656 4-1.542 1.23-3.1 2.884-4.47 4.75-22.9 31.22-48.278 57.33-75.186 81-8.76 14.692 10.695 44.406 25.594 44.406 34.144-12.928 69.617-22.516 106.75-26.314 42.628-4.358 17.688-68.134-26.25-45.47 30.3-22.666 7.094-61.79-14.782-62.374zM310.47 108.156c-6.167-.108-12.215 1.172-17.595 4.28-1.576.912-3.042 1.948-4.406 3.095-.038-.056-.09-.13-.126-.186-79.912 66.402-116.334 73.468-158.22 86.844-6.886 2.2-12.27 7.18-16.5 15.5s-6.892 19.843-7.343 33.125c-.9 26.563 6.935 59.927 23.72 89.03 16.72 28.99 43.37 53.946 67.656 67.126 12.143 6.59 23.682 10.167 32.375 10.436 8.694.27 13.915-1.95 17.782-7.375 30.986-43.45 89.343-69.052 156.157-92.25-.005-.006.003-.023 0-.03 2.012-.663 3.967-1.51 5.842-2.594 8.2-4.738 13.535-12.897 16.282-22.125 2.747-9.227 3.22-19.75 2.03-31.25-.953-9.233-3.033-19.127-6.155-29.374-5.916 1.366-11.628 3.157-17.908 5.47 2.835 9.25 4.69 17.978 5.5 25.81 1.007 9.74.403 18.06-1.375 24.033-1.777 5.972-4.412 9.338-7.718 11.25-3.308 1.91-7.543 2.505-13.595 1.06-6.052-1.443-13.55-5.07-21.47-10.81-15.838-11.482-33.334-31.223-47.624-56-14.29-24.78-22.61-49.838-24.624-69.314-1.006-9.738-.403-18.027 1.375-24 1.78-5.973 4.414-9.37 7.72-11.28 1.653-.957 3.52-1.58 5.75-1.782.557-.05 1.147-.067 1.75-.063 1.81.014 3.824.272 6.094.814 6.05 1.444 13.518 5.04 21.437 10.78 8.218 5.957 16.884 14.166 25.314 24.126 5.07-4.055 9.34-8.25 13.406-13.188-8.97-10.46-18.366-19.26-27.75-26.062-9.354-6.78-18.733-11.61-28.094-13.844-2.34-.558-4.674-.935-7.03-1.125-.885-.07-1.776-.108-2.657-.124zm7.967 34.188c-.438.024-.86.063-1.28.125-17.327 2.54-14.97 36.035 5.03 74.56 20 38.528 50.52 67.576 67.844 65.032 5.995-.88 9.263-5.687 10.658-12.875-1.67 2.187-3.847 3.484-6.72 3.907-15.316 2.248-42.316-23.093-60-57.156-17.682-34.064-19.254-63.91-3.937-66.157 3.638-.53 7.69.417 12.345 2.782-8.68-6.8-17.353-10.583-23.938-10.218zM102 325.124c-16.555 1.844-35.304 3.26-57.063 4.376-49.128 2.523-25.555 71.576 30.094 52.22-49.365 29.9 3.86 86.927 26.97 46.75 10.362-18.016 21.88-33.79 34.375-47.814-8.42-9.644-16.078-20.224-22.563-31.47-4.52-7.835-8.462-15.898-11.812-24.06z"></path></svg>`,
// }
// let images = {
//     bento: `media/bento.png`,
//     brochetas: `media/brochetas.png`,
//     gyoza: `media/gyoza.png`,
//     narutomaki: `media/narutomaki.png`,
//     onigiri: `media/onigiri.png`,
//     onigiri2: `media/onigiri2.png`,
//     ramen: `media/ramen.png`,
//     ribs: `media/ribs.png`,
//     rice: `media/rice.png`,
//     salad_bowl: `media/salad_bowl.png`,
//     sopa: `media/sopa.png`,
//     spaghetti: `media/spaghetti.png`,
//     sushi: `media/sushi.png`,
//     sushi2: `media/sushi2.png`,
//     sushi3: `media/sushi3.png`,
//     takoyaki: `media/takoyaki.png`,
//     tamago_maki: `media/tamago_maki.png`,
// }
// let imagesArray = [
//     [`media/bento.png`, "bento", "100"],
//     [`media/brochetas.png`, "brochetas", "75"],
//     [`media/gyoza.png`, "gyoza", "80"],
//     [`media/narutomaki.png`, "narutomaki", "20"],
//     [`media/onigiri.png`, "onigiri", "10"],
//     [`media/onigiri2.png`, "onigiri2", "200"],
//     [`media/ramen.png`, "ramen", "400"],
//     [`media/ribs.png`, "ribs", "45"],
//     [`media/rice.png`, "rice", "21"],
//     [`media/salad_bowl.png`, "salad_bowl", "1"],
//     [`media/sopa.png`, "sopa", "12"],
//     [`media/spaghetti.png`, "spaghetti", "10"],
//     [`media/sushi.png`, "sushi", "90"],
//     [`media/sushi2.png`, "sushi con soya", "80"],
//     [`media/sushi3.png`, "sushi con arrroz", "70"],
//     [`media/takoyaki.png`, "takoyaki", "10"],
//     [`media/tamago_maki.png`, "tamago_maki", "15"],
// ]
// imagesArray.map(i => {
//     document.querySelector(".con").innerHTML += `
//             <div class="food" precio=${i[2]} platillo=${i[1]}>
//                 <picture>
//                     <img src=${i[0]} alt="">
//                 </picture>
//                 <h3>${i[1]}</h3>
//                 <span precio=$${i[2]}></span>
//                 <small class=""></small>
//             </div>
//         `
// })
// const enfocarPlatillo = ()=>{
    
// }
// // document.getElementById("form").addEventListener("submit", e=>{
// //     e.preventDefault();
// //     let inp = document.getElementById("obtPedInp");
// //     do {
// //         cantidad = inp.value;
// //         if (/^\d{1,2}$/.test(cantidad)) {
// //             if (cantidad != "0") {
// //                 padre.classList.add("ordenado")
// //                 ultHIjo.innerHTML = cantidad;
// //                 padre.setAttribute("cantidad", cantidad)
// //                 ultHIjo.classList.add("seleccionado")
// //             } else {
// //                 padre.classList.remove("ordenado")
// //                 ultHIjo.innerHTML = "";
// //                 padre.removeAttribute("cantidad")
// //                 ultHIjo.classList.remove("seleccionado")
// //             }
// //             conInput.classList.remove("act");
// //             break;
// //         }
// //         alert(msj.alerError)
// //         cantidad = window.prompt(msj.prom);
// //         padre.classList.remove("ordenado")
// //         ultHIjo.innerHTML = "";
// //         ultHIjo.classList.remove("seleccionado")

// //     } while (inp.length!=0);
// // })
// // let conInput = document.querySelector(".obtPedido");
// document.querySelector(".con").addEventListener("click", e => {
//     const tag = e.target;
//     if (tag.tagName == "SPAN" || tag.tagName == "H3" || tag.tagName == "IMG" || tag.tagName == "PICTURE" || tag.tagName == "SMALL" || tag.classList.contains("food")) {
//         const padre = ((tag.tagName == "SPAN" || tag.tagName == "SMALL" || tag.tagName == "H3" || tag.tagName == "PICTURE") ?
//             tag.parentNode :
//             (tag.tagName == "IMG") ?
//                 tag.parentNode.parentNode : tag)
//         const ultHIjo = padre.lastElementChild
//         let cantidad = window.prompt(msj.prom);
        
//         // conInput.classList.add("act");
//         // document.getElementById("obtPedInp").focus();
//         // let cantidad = document.getElementById("obtPedInp").value;
//         while (cantidad.length!=0) {
//             if (/^\d{1,2}$/.test(cantidad)) {
//                 if (cantidad != "0") {
//                     padre.classList.add("ordenado")
//                     ultHIjo.innerHTML = cantidad;
//                     padre.setAttribute("cantidad", cantidad)
//                     ultHIjo.classList.add("seleccionado")
//                 } else {
//                     padre.classList.remove("ordenado")
//                     ultHIjo.innerHTML = "";
//                     padre.removeAttribute("cantidad")
//                     ultHIjo.classList.remove("seleccionado")
//                 }
//                 // conInput.classList.remove("act");
//                 break;
//             }
//             alert(msj.alerError)
//             cantidad = window.prompt(msj.prom2);
//             padre.classList.remove("ordenado")
//             ultHIjo.innerHTML = "";
//             ultHIjo.classList.remove("seleccionado")
//         }

//     }
// })
// document.getElementById("ordenar").addEventListener("click", e => {
//     let pedido = "Hola me gustaria ordenar:";
//     let ped= [];
//     // let total = 0;
//     const agregarPedido = (o) => {
//         return `
//                 <div>
//                     <h2>${o.plat}</h2>
//                     <span>
//                         <h3>$${o.pre}</h3>
//                         <h4>&nbsp / ${o.pz} pz</h4>
//                     </span>
//                 </div>
//             `
//     }
//     document.querySelector(".pedido section nav").innerHTML = ""
//     document.querySelectorAll(".ordenado").forEach(o => {
//         // total += parseInt(o.getAttribute("precio")) * parseInt(o.getAttribute("cantidad"))
//         document.querySelector(".pedido section nav").innerHTML += agregarPedido({
//             plat: o.getAttribute("platillo"),
//             pre: o.getAttribute("precio"),
//             pz: o.getAttribute("cantidad"),
//         })
//         ped.push({
//             plat: o.getAttribute("platillo"),
//             pz: o.getAttribute("cantidad"),
//         })
//     })
//     pedido+=ped.map(p => ` ${p.pz} - ${p.plat},`)
//     console.log(pedido);
//     pedido=pedido.replaceAll(',,',',')
//     pedido=pedido.replaceAll('_',' ')
//     pedido=pedido.replaceAll(' ','+')
//     console.log(pedido);
//     document.querySelector(".pedido section a").setAttribute("href",msj.whats.concat(pedido))
    
//     document.querySelector(".pedido").classList.add("act")
// })
// document.querySelector(".pedido").addEventListener("click", e => {
//     console.log(e.target);
//     if (e.target.getAttribute("class") == "pedido act") {
//         document.querySelector(".pedido").classList.remove("act")
//     }
// })

const msj = {
    prom: "Cuantos platilos desea escoger?",
    prom2: "Cuantos platilos desea escoger? \nPara cancelar un platillo escriba el valor a cero",
    alerError: "Por favor escriba un valor valido",
    whats: "https://api.whatsapp.com/send?phone=527491086498&text=",
}
let icons = {
    food: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"></path></svg>`,
    food2: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01H3.62zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z"></path></svg>`,
    te: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 19h18v2H2zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h3v1.4L7.19 7.85c-.12.09-.19.24-.19.39v4.26c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5V8.24c0-.15-.07-.3-.19-.39L10 6.4V5h6v8zM9.5 7.28l1.5 1.2V12H8V8.48l1.5-1.2zM20 8h-2V5h2v3z"></path></svg>`,
    drink: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm14 18l-10 .01L5.89 10H18.1L17 20zm1.33-12H5.67l-.44-4h13.53l-.43 4zM12 19c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S9 14 9 16c0 1.66 1.34 3 3 3zm0-5.09c.59.91 1 1.73 1 2.09 0 .55-.45 1-1 1s-1-.45-1-1c0-.37.41-1.19 1-2.09z"></path></svg>`,
    drink2: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zM12 14.197 8.535 9h6.93L12 14.197zM18.132 5l-1.333 2H7.201L5.868 5h12.264z"></path></svg>`,
    fish: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 00-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0023.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z"></path><circle cx="416" cy="239.99" r="16"></circle><path fill="none" stroke-linecap="round" stroke-miterlimit="20" stroke-width="32" d="M378.37 356a199.22 199.22 0 010-200"></path></svg>`,
    fish2: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571"></path><path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504"></path><path d="M18 11v.01"></path><path d="M11.5 10.5c-.667 1 -.667 2 0 3"></path></svg>`,
    fish3: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M442.906 52.156c-.806.02-1.617.076-2.437.188-13.124 1.79-22.993 13.47-30.47 32.875-5.993 15.552-10.81 37.088-13.938 66.5-32.023-22.095-63.766-29.543-95.28-25.845l-26.97-60.063-24.968 71.282L198.5 107.28l-.813 63.064-46.562 1.75 12.53 30.562c-17.504 16.246-34.963 34.403-52.405 53.844l-92.813-45.375 44.876 75.906-36.47 39.095 36.282 2.78-40.47 59.876 108.064-64.905 87.56 42.53-49.75 17.376 35.564 13.814-32.563 22.22 52.157.967-4.593 46.845 59.312-72.03L365 437.654 496.063 270.47c-3.87-6.63-7.735-12.974-11.594-19.095l-119.376 150.97-4.72 5.967-6.78-3.406-44.344-22.22 8.375-16.717 37.53 18.81L473.69 234.907c-20.158-29.63-40.187-52.59-60.094-69.656 2.96-34.52 8.11-58.353 13.875-73.313 6.36-16.51 12.884-20.706 15.5-21.062 1.306-.178 2.63.047 4.75 1.53 2.118 1.485 4.693 4.293 7 8.19 4.582 7.743 8.005 19.562 8.217 31.686-7.95 3.715-13.437 11.804-13.437 21.157 0 12.878 10.436 23.313 23.313 23.313 12.876 0 23.312-10.435 23.312-23.313 0-9.752-6.002-18.114-14.5-21.593-.284-15.23-4.225-29.62-10.813-40.75-3.322-5.615-7.346-10.478-12.375-14-3.77-2.642-8.322-4.49-13.125-4.875-.8-.065-1.6-.083-2.406-.064zm-52.344 158.156c3.147-.125 6.36.236 9.563 1.094 3.054.82 5.872 2.054 8.438 3.625-.14 0-.268-.03-.407-.03-9.922 0-17.97 6.636-17.97 14.813.002 8.176 8.048 14.812 17.97 14.812 6.503 0 12.16-2.86 15.313-7.125.645 4.24.462 8.684-.72 13.094-4.575 17.074-22.11 27.2-39.188 22.625-17.074-4.576-27.23-22.115-22.656-39.19 3.717-13.872 16.022-23.176 29.656-23.718zm-95.375 11.157l17.907 5.31-12.75 43.064 47.437 38.844-11.842 14.468-52.25-42.78-4.782-3.938 1.75-5.938 14.53-49.03zm-44.937 25.686l17.938 5.313-8.875 29.936 33.437 27.375-11.844 14.47-38.25-31.313-4.812-3.937 1.78-5.97 10.626-35.874z"></path></svg>`,
    fish4: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288.9 92.42c-5.3 0-10.7.33-16 .88-29.8 3.12-65 23.7-90 51.1-19.5 21.5-32.3 46.6-33.6 69.8l7.6 3.3c6.4-8.9 19.7-26.3 37.6-44.1 25.2-25.1 59.2-51.3 96.5-51 37.6.4 80.9 18 119.9 43.2 18.8 12.2 36.5 26.1 52 40.9-34.4-73.1-106-114.46-174-114.08zm1.9 47.98c-28.3-.3-59.8 22.1-83.6 45.8-23.8 23.6-39.7 47.4-39.7 47.4l-4.2 6.2-31.4-13.4c-7.9 9.9-11.1 24.3-10.7 38.7.4 12.7 4 25.1 7.8 32.5l27.9-12 4.1 6.1c37 54.4 101.5 83.4 157.7 85.5 56.4-7 128.7-26.7 169.3-84l-36-2.5 31.9-31.1c-9.8-15.4-23.8-31.4-40.3-46.3.3 1.1.4 2.3.4 3.5 0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16h.9c-8.8-7.1-18.1-13.9-27.8-20.1-37-23.9-78.3-40-110.3-40.3zm87.7 50.8l15.8 8.6c-26.6 49.1-22.2 96.1 9.4 128.6l-13 12.6c-37.2-38.3-41.6-95.5-12.2-149.8zm-335.64 7c0 21.3-1.94 41.4-18.88 63.2 7.88 6.8 13.34 14.6 16.55 23.6 3.57 10.1 4.67 21.2 5.22 34.2 9.11 1.1 23.71-.3 38.01-4.2 10.03-2.8 19.94-6.7 28.04-10.7-5.3-10.6-8.2-24.2-8.6-38.7-.5-16.2 2.7-33.8 12.5-47.7-8.7-4.9-18.59-9.2-28.74-12.3-15.18-3.8-29.54-7.4-44.1-7.4zM428 248.8c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm-276.7 60.1c1.5 6.1 4.4 12.7 8.6 19.8 8.1 13.7 21 28.3 36.4 41.6 30.8 26.5 71.9 47.4 103.2 49.2 22.2 1.3 47-11.3 69-28.9 2.4-1.9 4.8-3.9 7.1-5.9-19.5 3-39 10.4-56.8 10.5-59.5-1.9-126.1-30.9-167.5-86.3zm270.1 59.6c-7.1 3.2-14.3 6.1-21.5 8.6 1.9 9.8 1.3 19.3.2 28.2 7.5-3.1 14.4-7.5 20.6-14.4 2.5-6.8 2.1-14.2.7-22.4z"></path></svg>`,
    atun: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 65c-65.3 0-124.4 10.69-166.36 27.5-20.99 8.4-37.64 18.3-48.6 28.7C30.09 131.5 25 141.8 25 152s5.09 20.5 16.04 30.8c10.96 10.4 27.61 20.3 48.6 28.7C131.6 228.3 190.7 239 256 239c65.3 0 124.4-10.7 166.4-27.5 20.9-8.4 37.6-18.3 48.6-28.7 10.9-10.3 16-20.6 16-30.8s-5.1-20.5-16-30.8c-11-10.4-27.7-20.3-48.6-28.7C380.4 75.69 321.3 65 256 65zm.1 13.53c51.3 0 97.8 6.57 132.1 17.57 17.2 5.5 31.4 12 41.9 20 10.6 7.9 18 18 18 29.9 0 11.9-7.4 22-18 29.9-10.5 8-24.7 14.5-41.9 20-34.3 11-80.8 17.6-132.1 17.6s-97.8-6.6-132.1-17.6c-17.2-5.5-31.43-12-41.95-20-10.51-7.9-17.95-18-17.95-29.9 0-11.9 7.44-22 17.95-29.9 10.52-8 24.75-14.5 41.95-20 34.3-11 80.8-17.57 132.1-17.57zm0 17.97c-49.8 0-94.8 6.6-126.7 16.7-15.9 5.1-28.5 11.2-36.49 17.2-8.01 6.1-10.81 11.3-10.81 15.6 0 4.3 2.8 9.5 10.81 15.6 7.99 6 20.59 12.1 36.49 17.2 31.9 10.1 76.9 16.7 126.7 16.7s94.8-6.6 126.7-16.7c15.9-5.1 28.5-11.2 36.5-17.2 8-6.1 10.8-11.3 10.8-15.6 0-4.3-2.8-9.5-10.8-15.6-8-6-20.6-12.1-36.5-17.2-31.9-10.1-76.9-16.7-126.7-16.7zM25 192.2V360c0 13.2 5.88 24.6 17.7 35.4 11.81 10.8 29.56 20.4 51.32 28.1C137.5 439 196.8 447 256 447c59.2 0 118.5-8 162-23.5 21.7-7.7 39.5-17.3 51.3-28.1 11.8-10.8 17.7-22.2 17.7-35.4V192.2c-1.2 1.3-2.4 2.5-3.7 3.7-13.3 12.6-31.8 23.4-54.3 32.3-44.8 18-105.8 28.8-173 28.8s-128.2-10.8-173.05-28.8c-22.45-8.9-40.94-19.7-54.27-32.3-1.28-1.2-2.5-2.4-3.68-3.7zM96 280l64.4 48.2c33.3-15.3 71.8-34.1 135.7-34.1 40 0 120 25.9 120 46 0 19.9-80 45.9-120 45.9-63.9 0-102.4-18.9-135.7-34.2L96 400z"></path></svg>`,
    meat: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path><ellipse transform="rotate(45 8.025 16.475)" cx="8.025" cy="16.475" rx="7" ry="3"></ellipse><path d="M7.5 16l1 1"></path><path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path></svg>`,
    meat2: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M440.156 98.063c-4.05-.11-8.044 1.117-11.656 4-1.542 1.23-3.1 2.884-4.47 4.75-22.9 31.22-48.278 57.33-75.186 81-8.76 14.692 10.695 44.406 25.594 44.406 34.144-12.928 69.617-22.516 106.75-26.314 42.628-4.358 17.688-68.134-26.25-45.47 30.3-22.666 7.094-61.79-14.782-62.374zM310.47 108.156c-6.167-.108-12.215 1.172-17.595 4.28-1.576.912-3.042 1.948-4.406 3.095-.038-.056-.09-.13-.126-.186-79.912 66.402-116.334 73.468-158.22 86.844-6.886 2.2-12.27 7.18-16.5 15.5s-6.892 19.843-7.343 33.125c-.9 26.563 6.935 59.927 23.72 89.03 16.72 28.99 43.37 53.946 67.656 67.126 12.143 6.59 23.682 10.167 32.375 10.436 8.694.27 13.915-1.95 17.782-7.375 30.986-43.45 89.343-69.052 156.157-92.25-.005-.006.003-.023 0-.03 2.012-.663 3.967-1.51 5.842-2.594 8.2-4.738 13.535-12.897 16.282-22.125 2.747-9.227 3.22-19.75 2.03-31.25-.953-9.233-3.033-19.127-6.155-29.374-5.916 1.366-11.628 3.157-17.908 5.47 2.835 9.25 4.69 17.978 5.5 25.81 1.007 9.74.403 18.06-1.375 24.033-1.777 5.972-4.412 9.338-7.718 11.25-3.308 1.91-7.543 2.505-13.595 1.06-6.052-1.443-13.55-5.07-21.47-10.81-15.838-11.482-33.334-31.223-47.624-56-14.29-24.78-22.61-49.838-24.624-69.314-1.006-9.738-.403-18.027 1.375-24 1.78-5.973 4.414-9.37 7.72-11.28 1.653-.957 3.52-1.58 5.75-1.782.557-.05 1.147-.067 1.75-.063 1.81.014 3.824.272 6.094.814 6.05 1.444 13.518 5.04 21.437 10.78 8.218 5.957 16.884 14.166 25.314 24.126 5.07-4.055 9.34-8.25 13.406-13.188-8.97-10.46-18.366-19.26-27.75-26.062-9.354-6.78-18.733-11.61-28.094-13.844-2.34-.558-4.674-.935-7.03-1.125-.885-.07-1.776-.108-2.657-.124zm7.967 34.188c-.438.024-.86.063-1.28.125-17.327 2.54-14.97 36.035 5.03 74.56 20 38.528 50.52 67.576 67.844 65.032 5.995-.88 9.263-5.687 10.658-12.875-1.67 2.187-3.847 3.484-6.72 3.907-15.316 2.248-42.316-23.093-60-57.156-17.682-34.064-19.254-63.91-3.937-66.157 3.638-.53 7.69.417 12.345 2.782-8.68-6.8-17.353-10.583-23.938-10.218zM102 325.124c-16.555 1.844-35.304 3.26-57.063 4.376-49.128 2.523-25.555 71.576 30.094 52.22-49.365 29.9 3.86 86.927 26.97 46.75 10.362-18.016 21.88-33.79 34.375-47.814-8.42-9.644-16.078-20.224-22.563-31.47-4.52-7.835-8.462-15.898-11.812-24.06z"></path></svg>`,
}
let images = {
    bento: `media/bento.png`,
    brochetas: `media/brochetas.png`,
    gyoza: `media/gyoza.png`,
    narutomaki: `media/narutomaki.png`,
    onigiri: `media/onigiri.png`,
    onigiri2: `media/onigiri2.png`,
    ramen: `media/ramen.png`,
    ribs: `media/ribs.png`,
    rice: `media/rice.png`,
    salad_bowl: `media/salad_bowl.png`,
    sopa: `media/sopa.png`,
    spaghetti: `media/spaghetti.png`,
    sushi: `media/sushi.png`,
    sushi2: `media/sushi2.png`,
    sushi3: `media/sushi3.png`,
    takoyaki: `media/takoyaki.png`,
    tamago_maki: `media/tamago_maki.png`,
}
let imagesArray = [
    [`media/bento.png`, "bento", "100"],
    [`media/brochetas.png`, "brochetas", "75"],
    [`media/gyoza.png`, "gyoza", "80"],
    [`media/narutomaki.png`, "narutomaki", "20"],
    [`media/onigiri.png`, "onigiri", "10"],
    [`media/onigiri2.png`, "onigiri2", "200"],
    [`media/ramen.png`, "ramen", "400"],
    [`media/ribs.png`, "ribs", "45"],
    [`media/rice.png`, "rice", "21"],
    [`media/salad_bowl.png`, "salad_bowl", "1"],
    [`media/sopa.png`, "sopa", "12"],
    [`media/spaghetti.png`, "spaghetti", "10"],
    [`media/sushi.png`, "sushi", "90"],
    [`media/sushi2.png`, "sushi con soya", "80"],
    [`media/sushi3.png`, "sushi con arrroz", "70"],
    [`media/takoyaki.png`, "takoyaki", "10"],
    [`media/tamago_maki.png`, "tamago_maki", "15"],
]
imagesArray.map(i => {
    document.querySelector(".con").innerHTML += `
            <div class="food" precio=${i[2]} platillo=${i[1]}>
                <picture>
                    <img src=${i[0]} alt="">
                </picture>
                <h3>${i[1]}</h3>
                <span precio=$${i[2]}></span>
                <small class=""></small>
            </div>
        `
})
document.querySelector(".con").addEventListener("click", e => {
    const tag = e.target;
    if (tag.tagName == "SPAN" || tag.tagName == "H3" || tag.tagName == "IMG" || tag.tagName == "PICTURE" || tag.tagName == "SMALL" || tag.classList.contains("food")) {
        const padre = ((tag.tagName == "SPAN" || tag.tagName == "SMALL" || tag.tagName == "H3" || tag.tagName == "PICTURE") ?
            tag.parentNode :
            (tag.tagName == "IMG") ?
                tag.parentNode.parentNode : tag)
        const ultHIjo = padre.lastElementChild
        let cantidad = window.prompt(msj.prom);
        while (cantidad != null) {
            if (/^\d{1,2}$/.test(cantidad)) {
                if (cantidad != "0") {
                    padre.classList.add("ordenado")
                    ultHIjo.innerHTML = cantidad;
                    padre.setAttribute("cantidad", cantidad)
                    ultHIjo.classList.add("seleccionado")
                } else {
                    padre.classList.remove("ordenado")
                    ultHIjo.innerHTML = "";
                    padre.removeAttribute("cantidad")
                    ultHIjo.classList.remove("seleccionado")
                }
                break;
            }
            alert(msj.alerError)
            cantidad = window.prompt(msj.prom);
            padre.classList.remove("ordenado")
            ultHIjo.innerHTML = "";
            ultHIjo.classList.remove("seleccionado")
        }

    }
})
document.getElementById("ordenar").addEventListener("click", e => {
    let pedido = "Hola me gustaria ordenar:";
    let ped= [];
    let total = 0;
    const agregarPedido = (o) => {
        return `
                <div>
                    <h2>${o.plat}</h2>
                    <span>
                        <h3>$${o.pre}</h3>
                        <h4>&nbsp / ${o.pz} pz</h4>
                    </span>
                </div>
            `
    }
    document.querySelector(".pedido section nav").innerHTML = ""
    document.querySelectorAll(".ordenado").forEach(o => {
        total += parseInt(o.getAttribute("precio")) * parseInt(o.getAttribute("cantidad"))
        document.querySelector(".pedido section nav").innerHTML += agregarPedido({
            plat: o.getAttribute("platillo"),
            pre: o.getAttribute("precio"),
            pz: o.getAttribute("cantidad"),
        })
        ped.push({
            plat: o.getAttribute("platillo"),
            pz: o.getAttribute("cantidad"),
        })
    })
    pedido+=ped.map(p => ` ${p.pz} - ${p.plat},`)
    console.log(pedido);
    pedido=pedido.replaceAll(',,',',')
    pedido=pedido.replaceAll('_',' ')
    pedido=pedido.replaceAll(' ','+')
    console.log(pedido);
    document.querySelector(".pedido section a").setAttribute("href",msj.whats.concat(pedido))
    
    document.querySelector(".pedido").classList.add("act")
})
document.querySelector(".pedido").addEventListener("click", e => {
    console.log(e.target);
    if (e.target.getAttribute("class") == "pedido act") {
        document.querySelector(".pedido").classList.remove("act")
    }
})
