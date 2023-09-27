// size
let productSize = document.getElementById("dp_product_size")
let getAllSize = document.getElementById("all_size_return")
let getAllSizeChild = [...getAllSize.children]

// color
let productColor = document.getElementById("dp_product_color")
let getAllColor = document.getElementById("all_color_return")
let getAllColorChild = [...getAllColor.children]


function activeProduct(allitem, getvalue){

    allitem.forEach((getSizeItem) =>{
        getSizeItem.addEventListener("click", function(){
            allitem.forEach(innerSizeItem => {
                innerSizeItem.classList.remove("activeSize")
            })
            this.classList.toggle("activeSize")
            getvalue.innerText = this.value
        })
    })

}

activeProduct(getAllSizeChild, productSize)
activeProduct(getAllColorChild, productColor)

// reveiw collapse

let reviewCollapseBtn = document.getElementById("review_collapse_btn");
let reviewCollapseForm = document.getElementById("review_collapse_form");

reviewCollapseBtn.addEventListener("click", function() {
    if (reviewCollapseForm.style.display === "block") {
        reviewCollapseForm.style.display = "none";
    } else {
        reviewCollapseForm.style.display = "block";
    }
});

$(document).ready(function() {
    if (window.File && window.FileList && window.FileReader) {
      $("#files").on("change", function(e) {
        var files = e.target.files,
          filesLength = files.length;
        for (var i = 0; i < filesLength; i++) {
          var f = files[i]
          var fileReader = new FileReader();
          fileReader.onload = (function(e) {
            var file = e.target;
            $("<span class=\"pip\">" +
              "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
              "<span class=\"remove\">Remove image</span>" +
              "</span>").insertAfter(".field");
            $(".remove").click(function(){
              $(this).parent(".pip").remove();
            });
          });
          fileReader.readAsDataURL(f);
        }
      });
    } else {
      alert("Your browser doesn't support to File API")
    }
  });

  // reply collapse
  
  let replyBtn = document.getElementsByClassName("reply_btn");
  
  [...replyBtn].forEach((replyBtnInner, index) => {

    let replyForm = document.getElementsByClassName("reply_form")[index]

    replyBtnInner.addEventListener("click", function() {
        if (replyForm.style.display === "block") {
          replyForm.style.display = "none";
        } else {
          replyForm.style.display = "block";
        }
    });
  });


