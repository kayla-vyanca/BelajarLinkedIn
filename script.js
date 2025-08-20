const cards = document.querySelectorAll(".classes-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });
    
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });