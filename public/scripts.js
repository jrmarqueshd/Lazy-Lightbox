const $lzyAllImages = document.querySelectorAll('[data-reveal-id="on"]');
let lightBoxModal = document.createElement("div");
let createImage = document.createElement("img");

$lzyAllImages.forEach((e)=>{    
    e.addEventListener("click", ()=>{
        document.querySelector("body").insertAdjacentHTML("beforeend", `
            <div class="lzy-lightbox-display">
                <span id="lzyCloseLightbox">x</span>
                <div class="lzy-modal">
                    <img src="${e.src}" />
                </div>
            </div>
        `);
    });
});


