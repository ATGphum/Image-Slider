//global image store
var imgStore = [];
var imgIndex = 0;

/*
 * shows the image found at the link at the given css id
 * idName: the name of the id which will contain the image
 * imgLink: string source of the image
 */
const imgDisplay = (idName, imgLink) => {
    const image = document.querySelector(idName);
    image.src = imgLink;
}

/*
 * displays the image stored in the current index on the idName owner
 * idName: name of the id which belongs to the html image element and will contain the image
 * imgLink: string source of the image
 */
const indexDisplayer = (idName, index) => {
    imgDisplay(idName, imgStore[index]); 
}

/*
 * changes the index depending on the button clicked and then calls indexDisplayer
 * buttonid1: the id of the button to go to the previous picture
 * buttonid2: the id of the button to go to the next picture
 * displayid: the id of the image html object
 */
const changeIndex = (buttonid1, buttonid2, displayid) => {
    document.querySelector(buttonid1).addEventListener('click', () => {
        imgIndex--;
        if(imgIndex == -1){
            imgIndex = imgStore.length - 1;
        }
        indexDisplayer(displayid, imgIndex);
    });
    document.querySelector(buttonid2).addEventListener('click', () => {
        imgIndex++;
        if(imgIndex == imgStore.length){
            imgIndex = 0;
        }
        indexDisplayer(displayid, imgIndex);
    });
    document.addEventListener("keydown", (e) => {
        if(e.key == "ArrowLeft"){
            imgIndex--;
            if(imgIndex == -1){
                imgIndex = imgStore.length - 1;
            }
            indexDisplayer(displayid, imgIndex);
        }
        else if(e.key == "ArrowRight"){
            imgIndex++;
            if(imgIndex == imgStore.length){
                imgIndex = 0;
            }
            indexDisplayer(displayid, imgIndex);
        }
    });
}

/*
 * shows the preview image for all images
 * parentId: the id of the parent dom object to append the previews to
 */
const previewImage = (parentId) => {
    for(var i = 0; i < imgStore.length; i++){
        const preview = document.createElement("IMG");
        preview.src = imgStore[i];
        document.querySelector(parentId).appendChild(preview);
        preview.classList.add("icon");
        preview.id = i;
        preview.addEventListener("click", (e) => {
            imgIndex = e.srcElement.id;
            indexDisplayer("#mainImage", imgIndex); 
        });
    }
}

imgStore[0] = "Liao-clean.jpg";
imgStore[1] = "Li-pull.jpg";
imgStore[2] = "Liao-snatch.jpg";
imgStore[3] = "Lu-flies.jpg";
imgStore[4] = "Lu-jerk.jpg";
imgStore[5] = "Lu-snatch.jpg";
imgStore[6] = "Lu-Tian.jpg";
imgStore[7] = "Shi-celebrate.jpg";

indexDisplayer("#mainImage", 0);
changeIndex("#back", "#forward", "#mainImage");
previewImage("#previewicons");
