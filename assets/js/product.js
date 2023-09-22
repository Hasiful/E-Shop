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


