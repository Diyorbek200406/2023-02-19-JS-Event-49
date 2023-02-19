/*           Lesson-49 Js Event Click       */
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("You Are Clicked Me !");
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("Item Clicked");
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = "line-through";
    e.target.style.opacity = "0.5";
    console.log("Chiziq Chizildi Va Opasity = 0.5 ga ");
  });
});
