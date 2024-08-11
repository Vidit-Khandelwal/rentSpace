document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.fa-solid');

            // Hide all other open accordion contents and reset arrows
            document.querySelectorAll('.accordion-content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.classList.remove('show');
                }
            });
            document.querySelectorAll('.fa-solid').forEach(otherArrow => {
                if (otherArrow !== arrow) {
                    otherArrow.classList.remove('fa-chevron-up');
                    otherArrow.classList.add('fa-chevron-down');
                }
            });

            // Toggle the content visibility
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                arrow.classList.remove('fa-chevron-up');
                arrow.classList.add('fa-chevron-down');
            } else {
                content.classList.add('show');
                arrow.classList.remove('fa-chevron-down');
                arrow.classList.add('fa-chevron-up');
            }
        });
    });
});
