function menuItemActivated(item){
    switch(item){
        case 'about':
            document.getElementById("home-content").style.display='none';
            document.getElementById("about-content").style.display='block';
            document.getElementById("contact-content").style.display='none';
        break;
        default:
            alert(`Pressed ${item}`);
        break;
    }
}