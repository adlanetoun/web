document.addEventListener('DOMContentLoaded', function() {
    // Simple cart functionality
    const addToCartBtns = document.querySelectorAll('.product-card .btn');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Add animation
            cartCount.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 300);
        });
    });
});