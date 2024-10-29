document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll('.review');

    reviews.forEach((review, index) => {
        setTimeout(() => {
            review.style.opacity = 1;
            review.style.transform = "translateY(0)";
        }, index * 200); // Задержка для последовательного появления
    });
});

