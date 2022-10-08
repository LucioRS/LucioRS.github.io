(() => {
  const root = document.documentElement;
  const storageKey = "lucio-site-theme";
  const button = document.querySelector("[data-theme-toggle]");

  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === "dark" || savedTheme === "light") {
    root.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
  }

  if (button) {
    button.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(storageKey, next);
    });
  }

  const filter = document.querySelector("[data-pub-filter]");
  if (filter) {
    const items = Array.from(document.querySelectorAll("[data-pub-item]"));
    const total = document.querySelector("[data-pub-total]");
    const visible = document.querySelector("[data-pub-visible]");

    const updateCount = () => {
      const shown = items.filter(item => !item.hidden).length;
      if (total) total.textContent = String(items.length);
      if (visible) visible.textContent = String(shown);
    };

    filter.addEventListener("input", () => {
      const query = filter.value.trim().toLowerCase();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.hidden = query.length > 0 && !text.includes(query);
      });
      updateCount();
    });

    updateCount();
  }
})();
