
const navbarHeight = document.getElementById("navbar").offsetHeight;

function nextPage(project) {
    console.log(project)
    switch (project) {
        case "promptu":
            window.open('./projects/promptu',
            '_blank')
            break;
        case "bluetootharduino":
            window.open('./projects/arduinovacuum',
            '_blank')
            break;
        case "refugeevrexperience":
            window.open('./projects/refugeevrexperience',
            '_blank')
            break;
        case "challengeforchange":
            window.open('./projects/challengeforchange',
            '_blank')
            break;
        case "jackstones":
            window.open('./projects/jackstones',
            '_blank')
            break;
        case "radiothonbooth":
            window.open('./projects/radiothonbooth',
            '_blank')
            break;
        case "snapchatlenses":
            window.open('./projects/snapchatlenses',
            '_blank')
            break;
        case "ordrup":
            window.open('./projects/ordrup',
            '_blank')
            break;
    }
}

function externalLink(website) {
    switch (website) {
        case "linkedIn":
            window.open(
                'https://www.linkedin.com/in/martin-mendoza/',
                '_blank' // <- This is what makes it open in a new window.
            );
            break;
        case "github":
            window.open(
                'https://github.com/mendozanmartin',
                '_blank'
            );
            break;
        case "email":
            window.open(
                'mailto:mendozan@mcmaster.ca',
                '_blank'
            );
            break;
        case "vimeo":
            window.open(
                'https://vimeo.com/user100529261',
                '_blank'
            );
    }
}





$(document).ready(function () {
    $("#aboutLink, #learnMore, .aboutLink").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutPage").offset().top - navbarHeight
        }, 1750);

    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    $("#portfolioLink, .portfolioLink").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolioPage").offset().top - navbarHeight
        }, 1750);
    });

    $("#resumeLink, .resumeLink").click(function () {
        window.open(
            './Resume.pdf',
            '_blank' // <- This is what makes it open in a new window.
        );
    });

    // hide our element on page load
  $('#first-row').css('opacity', 0);
  $('#second-row').css('opacity', 0);
  $('#third-row').css('opacity', 0);
  $('#aboutText').css('opacity', 0);
  $('#aboutImage').css('opacity', 0);
//   $('#aboutTitle').css('opacity', 0);
  $('#projectTitle').css('opacity', 0);


 
  $('#first-row').waypoint(function() {
      $('#first-row').addClass('fadeInUp');
  }, { offset: '65%' });
  $('#second-row').waypoint(function() {
    $('#second-row').addClass('fadeInUp');
}, { offset: '65%' });
$('#third-row').waypoint(function() {
    $('#third-row').addClass('fadeInUp');
}, { offset: '65%' });
$('#aboutImage').waypoint(function() {
    $('#aboutImage').addClass('fadeIn');
}, { offset: '65%' });
$('#aboutText').waypoint(function() {
    $('#aboutText').addClass('fadeInRight');
}, { offset: '65%' });

$('#projectTitle').waypoint(function() {
    $('#projectTitle').addClass('fadeIn');
}, { offset: '65%' });

// $('#aboutTitle').waypoint(function() {
//     $('#aboutTitle').addClass('fadeIn');
// }, { offset: '65%' });
});



