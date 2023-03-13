const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('notinvis');
        } else {
            entry.target.classList.remove('notinvis');
        }
    });
});

const hiddenElements = document.querySelectorAll('.invis');
hiddenElements.forEach((e1) => observer.observe(e1));