const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  // Hover effect: Highlight stars on hover
  star.addEventListener("mouseover", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("filled");
      } else {
        s.classList.remove("filled");
      }
    });
  });

  // Click to fix the rating
  star.addEventListener("click", () => {
    const rating = index + 1;
    console.log(`You rated: ${rating} stars`);

    // Set the fixed stars
    stars.forEach((s, i) => {
      if (i < rating) {
        s.classList.add("filled");
      } else {
        s.classList.remove("filled");
      }
    });
  });

  // Reset stars on mouse out if not clicked
  star.addEventListener("mouseout", () => {
    const activeStars = document.querySelectorAll(".star.filled");
    if (activeStars.length === 0) {
      stars.forEach((s) => s.classList.remove("filled"));
    }
  });
});
