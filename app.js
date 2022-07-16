$(".openBtn").click(
    function () {
        setTimeout(()=>{
            $(".sideBar").toggleClass("open");
        },100);
        $(".sideBar").addClass("animate__fadeInLeft");
        $(".sideBar").removeClass("animate__fadeOutLeft");

    }
)
$(".closeBtn").click(
    function () {
        setTimeout(()=>{
            $(".sideBar").toggleClass("open");
        },200);
        $(".sideBar").addClass("animate__fadeOutLeft");
        $(".sideBar").removeClass("animate__fadeInLeft");
    }
)
function card(url){
    console.log("clicked")
    location.href = url;
}
  $('.counter-up').counterUp({
    delay: 10,
    time: 1000,
});
// const carousel = new bootstrap.Carousel('#myCarousel');
// $(document).ready(function () {           
//     $('.carousel').carousel();       
// });
// $('.carousel').carousel()
feather.replace();
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))