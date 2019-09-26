const $lzyAllImages = document.querySelectorAll('[data-reveal-id="on"]');
let lightBoxModal = document.createElement("div");
let createImage = document.createElement("img");

$lzyAllImages.forEach((e)=>{    
    e.addEventListener("click", ()=>{
        document.querySelector("body").insertAdjacentHTML("beforeend", `
            <div id="lzyLightboxDisplay" class="lzy-lightbox-display on">
                <div class="lzy-modal">
                    <span id="lzyCloseLightbox">&#215;</span>
                    <img src="${e.src}" />
                </div>
            </div>
        `);

        let $closeButton = document.getElementById("lzyCloseLightbox");
        let $lightboxWindow = document.getElementById("lzyLightboxDisplay");

        $closeButton.click() = ()=>{
            $lightboxWindow.classList.remove("on");
        }
    });
});


