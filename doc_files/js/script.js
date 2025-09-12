// Add a scroll event listener to the window
    const header = document.querySelector('.header');
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add('scrolled'); // Add the 'scrolled' class
            } else {
                header.classList.remove('scrolled'); // Remove the 'scrolled' class

            }
        });
    });

      // team carousel
    $(document).ready(function(){
        $(".team-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        active:true,
        // center:true,
        responsiveBaseElement: $(".team-carousel").parent(),
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
        });
    });

    // testimonial carousel
    $(document).ready(function(){
        $(".testimonial-wrapper").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: true,
        active:true,
        center:true,
        responsiveBaseElement: $(".testimonial-wrapper").parent(),
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
        });
    });
    // Faqs items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-icon').classList.remove('fa-times');
                faq.querySelector('.faq-icon').classList.add('fa-plus');
                faq.querySelector('.faq-answer').style.display = 'none';
            });

            // If the clicked item wasn't already active, open it
            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.faq-icon').classList.remove('fa-plus');
                item.querySelector('.faq-icon').classList.add('fa-times');
                item.querySelector('.faq-answer').style.display = 'block';
            }
        });
    });

    // Read more button 

    // Wow animation
    var wow = new WOW(
        {
            boxClass:'wow',      // default
            animateClass:'animated', // default
            offset:0,          // default
            // mobile:false,       // default
            live:true        // default
        }
    );
    wow.init();
