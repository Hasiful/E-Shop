// user profile change

const userChange = document.getElementById("userChange")
userChange.addEventListener("change", function(){
    userImagechange(this)
})
function userImagechange(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#user_profile')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}