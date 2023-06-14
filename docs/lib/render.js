(function () {
  const getImgPath = (icon) => `./rom/${icon}.png`;

  const renderGear = (gearData) => {
    const { name, bold, light, icon, icon_card, stat, ae_attr, note } =
      gearData;

    const outerDiv = document.createElement("div");
    outerDiv.classList.add("gear");
    {
      const leftDiv = document.createElement("div");
      leftDiv.classList.add("left");
      const gearImg = document.createElement("img");
      gearImg.src = getImgPath(icon || icon_card);
      if (icon_card) {
        gearImg.classList.add("card");
      }
      leftDiv.appendChild(gearImg);
      outerDiv.appendChild(leftDiv);
    }
    {
      const rightDiv = document.createElement("div");
      rightDiv.classList.add("right");
      const nameDiv = document.createElement("div");
      if (bold) {
        nameDiv.classList.add("bold");
      } else if (light) {
        nameDiv.classList.add("light");
      }
      nameDiv.innerText = name;
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
    return outerDiv;
  };

  const renderSection = (sectionData) => {
    const { section, gears } = sectionData;

    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");
    if (section) {
      const sectionTitleEl = document.createElement("h2");
      sectionTitleEl.innerText = section;
      sectionDiv.appendChild(sectionTitleEl);
    }
    const sectionInnerDiv = document.createElement("div");
    sectionInnerDiv.classList.add("section-inner");
    let gearWrapperDiv;
    gears.forEach(({ br, ...gearData }) => {
      if (br) {
        sectionInnerDiv.appendChild(gearWrapperDiv);
        gearWrapperDiv = undefined;
        return;
      }
      if (!gearWrapperDiv) {
        gearWrapperDiv = document.createElement("div");
        gearWrapperDiv.classList.add("gear-wrapper");
      }
      gearWrapperDiv.appendChild(renderGear(gearData));
    });
    sectionInnerDiv.appendChild(gearWrapperDiv);
    sectionDiv.appendChild(sectionInnerDiv);
    return sectionDiv;
  };

  const renderSlot = (slotData) => {
    const { slot, sections } = slotData;

    const slotDiv = document.createElement("div");
    slotDiv.classList.add("slot");
    const gearTitleEl = document.createElement("h1");
    gearTitleEl.innerText = slot;
    gearTitleEl.onclick = (e) => {
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
    slotDiv.appendChild(gearTitleEl);
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
    slotDiv.appendChild(sectionsDiv);
    return slotDiv;
  };

  const renderTitle = (titleData) => {
    const { title, title_icon, title_class } = titleData;

    const div = document.createElement("div");
    div.classList.add("title");
    if (title_class) {
      div.classList.add(title_class);
    }
    if (title_icon) {
      const titleIcon = document.createElement("img");
      titleIcon.src = getImgPath(title_icon);
      div.appendChild(titleIcon);
    }
    if (title) {
      const titleEl = document.createElement("span");
      titleEl.innerText = title;
      div.appendChild(titleEl);
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
    creditsImg.src = `./img/logo.png`;
    anchor.appendChild(creditsImg);
    div.appendChild(anchor);
    return div;
  };

  const render = (el, data) => {
    const { slots, tagline, ...titleData } = data;

    el.appendChild(renderTitle(titleData));
    if (tagline) {
      const taglineDiv = document.createElement("div");
      taglineDiv.classList.add("tagline");
      taglineDiv.innerText = tagline;
      el.appendChild(taglineDiv);
    }
    slots.forEach((slotData) => el.appendChild(renderSlot(slotData)));
    el.appendChild(renderCredits());
  };

  render(document.getElementById("root"), DATA);
})();
