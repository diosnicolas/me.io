
$(document).ready(inicio);

function inicio(){
    $(".linksWork").mouseover(getId);
}
function getId(){
    var id = $(this).attr('id');
    switch(id){
        case 'glass':
            $("#viewerContainer").css("background-image", "url('img/glass.jpg')");
            $("#viewerLink").attr("href", "https://www.behance.net/gallery/74272413/Glass-Website");
            break;
        case 'corrosivo':
            $("#viewerContainer").css("background-image", "url('img/corrosivo.jpg')");
            $("#viewerLink").attr("href", "https://www.behance.net/gallery/74272413/Glass-Website");
            break;
        case 'cook':
            $("#viewerContainer").css("background-image", "url('img/cook.jpg')");
            $("#viewerLink").attr("href", "#");
            break;
        case '3D':
            $("#viewerContainer").css("background-image", "url('img/3d.png')");
            $("#viewerLink").attr("href", "#");
            break;
       case 'underground':
            $("#viewerContainer").css("background-image", "url('img/underground.png')");
            $("#viewerLink").attr("href", "https://www.behance.net/gallery/100394843/Underground-Logo-Brand");
            break;
            }
}

