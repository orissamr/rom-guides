(function () {
  const getImgPath = (icon) => `./rom/${icon}.png`;
  const getTableImgPath = (name) => `./tables/${name}.png`;
  const getRuneImg = (type) => {
    switch (type) {
      case "B":
        return "rune-levelb";
      case "A":
        return "rune-levela";
      case "S":
        return "rune-levels";
      case "Star":
        return "rune-levelss";
      default:
        return null;
    }
  };

  const renderEntry = (entryData) => {
    const {
      name,
      type,
      tags,
      bold,
      light,
      icon,
      icon_card,
      icon_skill,
      icon_rune1,
      icon_rune2,
      stat,
      ae_attr,
      note,
      table_title,
      table_img,
    } = entryData;

    const outerDiv = document.createElement("div");
    outerDiv.classList.add("entry");
    {
      const leftDiv = document.createElement("div");
      leftDiv.classList.add("left");
      if (icon_card) {
        leftDiv.classList.add("card");
      }
      if (icon_skill) {
        leftDiv.classList.add("skill");
      }
      if (icon_rune1 || icon_rune2) {
        leftDiv.classList.add("rune");
      }
      if ((icon_rune1 || icon_rune2) && type) {
        const iconBgSrc = getRuneImg(type);
        if (iconBgSrc) {
          const iconImg = document.createElement("img");
          iconImg.loading = "lazy";
          iconImg.src = getImgPath(iconBgSrc);
          leftDiv.appendChild(iconImg);
        }
      }
      const iconSrc =
        icon || icon_card || icon_skill || icon_rune1 || icon_rune2;
      if (iconSrc) {
        const iconImg = document.createElement("img");
        iconImg.loading = "lazy";
        iconImg.src = getImgPath(iconSrc);
        if (icon_rune1) {
          iconImg.classList.add("rune-fg1");
        }
        if (icon_rune2) {
          iconImg.classList.add("rune-fg2");
        }
        leftDiv.appendChild(iconImg);
      }
      if (iconSrc !== undefined) {
        outerDiv.appendChild(leftDiv);
      }
    }
    if (name || type || tags || stat || note) {
      const rightDiv = document.createElement("div");
      rightDiv.classList.add("right");
      const nameDiv = document.createElement("div");
      nameDiv.classList.add("entry-name");
      const nameSpan = document.createElement("span");
      if (bold) {
        nameSpan.classList.add("bold");
      } else if (light) {
        nameSpan.classList.add("light");
      }
      nameSpan.innerText = name;
      nameDiv.appendChild(nameSpan);
      const chips = [[type, true]];
      if (tags) {
        tags.forEach((chipText) => chips.push([chipText, false]));
      }
      chips
        .filter(([chipText, _]) => !!chipText)
        .forEach(([chipText, isType]) => {
          const typeSpan = document.createElement("span");
          typeSpan.classList.add("chip");
          if (isType) {
            typeSpan.classList.add("main");
          }
          typeSpan.innerText = chipText;
          nameDiv.appendChild(typeSpan);
        });
      rightDiv.appendChild(nameDiv);
      const secondaryDiv = document.createElement("div");
      secondaryDiv.classList.add("secondary");
      const secondaryArr = [];
      if (stat) {
        secondaryArr.push(
          ` <span class="stat">${stat}</span>${ae_attr ? "," : ""}`
        );
      }
      if (ae_attr) {
        secondaryArr.push(
          `<span class="ae">AE attribute</span> <span class="stat">${ae_attr}</span>`
        );
      }
      if (note) {
        secondaryArr.push(` <span class="note">(${note})</span>`);
      }
      secondaryDiv.innerHTML = secondaryArr.join("\n");
      rightDiv.appendChild(secondaryDiv);
      outerDiv.appendChild(rightDiv);
    }
    if (table_title && table_img) {
      const tableDiv = document.createElement("div");
      tableDiv.classList.add("table-wrapper");
      const tableTitleDiv = document.createElement("div");
      tableTitleDiv.innerText = table_title;
      tableDiv.appendChild(tableTitleDiv);
      const tableImgPath = getTableImgPath(table_img);
      const tableImg = document.createElement("img");
      tableImg.loading = "lazy";
      tableImg.src = tableImgPath;
      const tableImgAnchor = document.createElement("a");
      tableImgAnchor.classList.add("table");
      tableImgAnchor.href = tableImgPath;
      tableImgAnchor.target = "_blank";
      tableImgAnchor.appendChild(tableImg);
      tableDiv.appendChild(tableImgAnchor);
      outerDiv.appendChild(tableDiv);
    }
    return outerDiv;
  };

  const renderSection = (sectionData, isSubsection) => {
    const { section, entries, subsections } = sectionData;

    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");
    if (isSubsection) {
      sectionDiv.classList.add("sub");
    }
    if (section) {
      const sectionTitleEl = document.createElement(isSubsection ? "h3" : "h2");
      sectionTitleEl.innerText = section;
      sectionDiv.appendChild(sectionTitleEl);
    }
    if (entries && entries.length) {
      const sectionInnerDiv = document.createElement("div");
      sectionInnerDiv.classList.add("section-inner");
      let entryGroupDiv;
      entries.forEach(({ br, ...entryData }) => {
        if (br) {
          sectionInnerDiv.appendChild(entryGroupDiv);
          entryGroupDiv = undefined;
          return;
        }
        if (!entryGroupDiv) {
          entryGroupDiv = document.createElement("div");
          entryGroupDiv.classList.add("entry-group");
        }
        entryGroupDiv.appendChild(renderEntry(entryData));
      });
      sectionInnerDiv.appendChild(entryGroupDiv);
      sectionDiv.appendChild(sectionInnerDiv);
    }
    if (subsections) {
      subsections.forEach((subsection) => {
        const subsectionDiv = document.createElement("div");
        subsectionDiv.classList.add("subsection-wrapper");
        subsectionDiv.classList.add(
          subsection.align === "column" ? "column" : "row"
        );
        subsection.sections.forEach((subsectionData) =>
          subsectionDiv.appendChild(renderSection(subsectionData, true))
        );
        sectionDiv.appendChild(subsectionDiv);
      });
    }
    return sectionDiv;
  };

  const renderCategory = (categoryData) => {
    const { category, sections } = categoryData;

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    const categoryTitleEl = document.createElement("h1");
    categoryTitleEl.innerText = category;
    categoryTitleEl.onclick = (e) => {
      const arr = e.target.parentNode.getElementsByClassName("sections");
      if (arr && arr.length) {
        if (!arr[0].style.height) {
          arr[0].style.height = `${arr[0].offsetHeight}px`;
          setTimeout(() => arr[0].classList.toggle("hidden"), 50);
        } else {
          arr[0].classList.toggle("hidden");
        }
      }
    };
    categoryDiv.appendChild(categoryTitleEl);
    const sectionsDiv = document.createElement("div");
    sectionsDiv.classList.add("sections");
    const sectionRows = {};
    sections.forEach((sectionData) => {
      const row = sectionData.row || 0;
      if (!sectionRows.hasOwnProperty(row)) {
        const div = document.createElement("div");
        div.classList.add("section-wrapper");
        sectionRows[row] = div;
      }
      sectionRows[row].appendChild(renderSection(sectionData));
    });
    Object.values(sectionRows).forEach((div) => sectionsDiv.appendChild(div));
    categoryDiv.appendChild(sectionsDiv);
    return categoryDiv;
  };

  const renderTitle = (titleData) => {
    const { title, title_icon, title_class, video } = titleData;

    const div = document.createElement("div");
    div.classList.add("title");
    if (title_class) {
      div.classList.add(title_class);
    }
    {
      const backDiv = document.createElement("div");
      backDiv.classList.add("back-arrow");
      const backAnchor = document.createElement("a");
      backAnchor.href = "./index.html";
      backAnchor.textContent = "\u2039";
      backDiv.appendChild(backAnchor);
      div.appendChild(backDiv);
    }
    if (title_icon) {
      const titleIcon = document.createElement("img");
      titleIcon.src = getImgPath(title_icon);
      titleIcon.classList.add("title-icon");
      div.appendChild(titleIcon);
    }
    if (title) {
      const titleEl = document.createElement("span");
      titleEl.innerText = title;
      div.appendChild(titleEl);
    }
    {
      const videoDiv = document.createElement("div");
      videoDiv.classList.add("video-wrapper");
      if (video) {
        const anchor = document.createElement("a");
        anchor.href = video;
        anchor.target = "_blank";
        const videoIcon = document.createElement("img");
        videoIcon.src = "./img/yt_icon_mono_dark.png";
        anchor.appendChild(videoIcon);
        videoDiv.appendChild(anchor);
      }
      div.appendChild(videoDiv);
    }
    return div;
  };

  const renderCredits = () => {
    const div = document.createElement("div");
    div.classList.add("credits");
    const anchor = document.createElement("a");
    anchor.href = "https://youtube.com/@Orissamr";
    anchor.target = "_blank";
    const creditsText = document.createElement("span");
    creditsText.innerText = "Created by Orissamr";
    anchor.appendChild(creditsText);
    const creditsImg = document.createElement("img");
    creditsImg.src = "./img/logo.png";
    anchor.appendChild(creditsImg);
    div.appendChild(anchor);
    return div;
  };

  const render = (el, data) => {
    const { categories, tagline, ...titleData } = data;

    el.appendChild(renderTitle(titleData));
    if (tagline) {
      const taglineDiv = document.createElement("div");
      taglineDiv.classList.add("tagline");
      taglineDiv.innerText = tagline;
      el.appendChild(taglineDiv);
    }
    categories.forEach((categoryData) =>
      el.appendChild(renderCategory(categoryData))
    );
    el.appendChild(renderCredits());
  };

  render(document.getElementById("root"), DATA);
})();
