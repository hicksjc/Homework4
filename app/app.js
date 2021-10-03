function showContent(pageID){
    console.log(pageID);
}

function addModalListener(){
    $(".bg-click").click(function(e){
        gsap.to($(".modal"), {ease: "elastic.in", scale: 0, duration: 2});
    })
}

function initListeners(){
    $(window).on("hashchange", function(e){
        let navID = e.currentTarget.id;

        MODEL.route(navID, showContent);
    })


    $("#callout-submit").click(function(e){
        e.preventDefault();

        let text = $("callout-text").val();
        gsap.to($(".modal"), {
            scale: 0,
            duration: 2,
            onComplete: showAlert("You're Signed In"),
            onCompleteParams: [text]
        });
    })

    $("#signup-submit").click(function(e){
        e.preventDefault();

        let text = $("signup-text").val();
        gsap.to($(".modal"), {
            scale: 0,
            duration: 2,
            onComplete: showAlert("You've Signed Up"),
            onCompleteParams: [text]
        });
    })

    $("#login").click(function(e){
        gsap.to($(".modal"), {ease: "elastic.out", scale: 1, duration: 2});
        addModalListener();
    })
}

function showAlert(info){
    alert(info);
    $("#callout-text").val("");
    $("#signup-text").val("");
}

$(document).ready(function(){
    
    initListeners();
    MODEL.route("home", showContent);
    gsap.set($(".modal"), {scale:0});
})