
const topics = [...new Set(ITEMS.map(x => x.category))];

const nav = document.getElementById("topics");
const out = document.getElementById("questions");
const intro = document.getElementById("intro");
const results = document.getElementById("results");
const title = document.getElementById("topicTitle");
const search = document.getElementById("search");

let selected = "";

function render() {
    intro.hidden = false;
    results.hidden = !selected;
    out.replaceChildren();

    if (!selected) return;

    title.textContent = selected.toUpperCase();

    const matches = ITEMS.filter(x =>
        x.category === selected &&
        (x.title + " " + x.id)
            .toLowerCase()
            .includes(search.value.toLowerCase())
    );

    for (const x of matches) {
        const card = document.createElement("article");
        card.className = "question";

        const h = document.createElement("h2");
        h.textContent = "Q" + x.id + ". " + x.title;

        card.append(h);

        for (const [label, value, cl] of [
            ["Code", x.code, ""],
            ["Output (sample)", x.output, "output"]
        ]) {
            const d = document.createElement("details");
            d.open = label === "Code";

            const s = document.createElement("summary");
            s.textContent = label;

            const p = document.createElement("pre");
            p.className = cl;
            p.textContent = value;

            d.append(s, p);
            card.append(d);
        }

        const acts = document.createElement("div");
        acts.className = "actions";

        const a = document.createElement("a");
        a.className = "download";
        a.href = x.path;
        a.download = "Main.java";
        a.textContent = "Download Java Source";

        const b = document.createElement("button");
        b.className = "copy";
        b.textContent = "Copy Code";

        b.onclick = () =>
            navigator.clipboard.writeText(x.code).then(() => {
                b.textContent = "Copied!";
            });

        acts.append(a, b);
        card.append(acts);
        out.append(card);
    }
}

for (const t of topics) {
    const b = document.createElement("button");

    b.textContent = t.toUpperCase();

    b.onclick = () => {
        selected = t;
        search.value = "";

        for (const el of nav.children) {
            el.classList.toggle("active", el === b);
        }

        render();

        document.getElementById("results").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    nav.append(b);
}

search.oninput = () => {
    if (!selected) {
        const match = topics.find(t =>
            t.toLowerCase().includes(
                search.value.toLowerCase()
            )
        );

        if (match) {
            selected = match;

            for (const el of nav.children) {
                el.classList.toggle(
                    "active",
                    el.textContent.toLowerCase() ===
                    match.toLowerCase()
                );
            }
        }
    }

    render();
};

render();
