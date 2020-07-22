// var loader = function(e) {
//  let file = e.target.files;
//  let output = document.getElementById("selector");
//  output.classList.add("active");
// }

// //add event listener for input

// let fileInput = document.getElementById("file");
// fileInput.addEventListener("change", loader);

function fileValidation(){
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<div><img src="'+e.target.result+'"/></div>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}