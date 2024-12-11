document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            const dropdownContent = btn.nextElementSibling;

            if (dropdownContent) {
                dropdownContent.classList.toggle("show");
            }

            // Close other dropdowns
            document.querySelectorAll(".dropdown-content").forEach((content) => {
                if (content !== dropdownContent) {
                    content.classList.remove("show");
                }
            });
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-content").forEach((content) => {
                content.classList.remove("show");
            });
        }
    });
});