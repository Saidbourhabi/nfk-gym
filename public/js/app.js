// *head nav-bar 
document.addEventListener('DOMContentLoaded', function() {
    // *Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    mobileMenuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // *Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // *Rotate the icon
                const icon = dropdown.querySelector('.dropdown-icon');
                icon.classList.toggle('rotate-180');
            }
        });
    });
    
    // *Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown .nav-link)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navbarMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});

 // *Add scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.getElementById('Home');
    
    // *Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // *Observe elements with animation classes
    document.querySelectorAll('.up-tittle, .Down-info, .right-img').forEach(el => {
        observer.observe(el);
    });

    // *Add hover effect to the name
    const nameElement = document.querySelector('.name');
    nameElement.addEventListener('mouseenter', function() {
        this.style.color = '#fff';
    });
    nameElement.addEventListener('mouseleave', function() {
        this.style.color = '#fff';
    });

    // *Add click effect to the button
    const button = document.querySelector('.button');
    button.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            //* Add your contact form opening logic here
            alert('Contact form would open here!');
        }, 200);
    });
});
        // *Form animation
        document.addEventListener('DOMContentLoaded', function() {
            const formGroups = document.querySelectorAll('.form-group');
            
            formGroups.forEach((group, index) => {
                group.style.opacity = '0';
                group.style.transform = 'translateY(20px)';
                group.style.transition = `all 0.5s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    group.style.opacity = '1';
                    group.style.transform = 'translateY(0)';
                }, 100);
            });
            
            // *Form submission
            const form = document.querySelector('.fitness-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;
                
                // *Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = 'Success! <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                    submitBtn.style.backgroundColor = '#ff00c8'; // *Using your secondary color
                    
                    // *eset form after 2 seconds
                    setTimeout(() => {
                        form.reset();
                        submitBtn.innerHTML = 'Get My Plan <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path></svg>';
                        submitBtn.style.backgroundColor = 'var(--pinky)';
                        submitBtn.disabled = false;
                    }, 2000);
                }, 1500);
            });
        });
