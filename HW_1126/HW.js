document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");


    const sectionData = {
      "main-section": [
        { id: "1.1", name: "변수", children: [
          { id: "1.1.1", name: "변수 만들기", children: [
            { id: "1.1.1.1", name: "나이가 담긴 변수", file: "1_1_1.html" }
          ] },
          { id: "1.1.2", name: "이름과 나이가 담긴 변수", file: "1_1_2.html" }
        ] }
      ],
    };

    const createSubSections = (section, parentElement) => {
      section.children.forEach((child) => {
        const button = document.createElement("button");
        button.textContent = `${child.id} ${child.name}`;
        button.classList.add("btn", "btn-link");
        button.dataset.bsToggle = "collapse";
        button.dataset.bsTarget = `#collapse-${child.id}`;
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", `collapse-${child.id}`);
        
        const div = document.createElement("div");
        div.id = `collapse-${child.id}`;
        div.classList.add("collapse", "section");
        
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("card-body");
        div.appendChild(innerDiv);

        
        button.addEventListener("click", () => {
          if (child.file) {
     
            window.open(child.file, "_blank");
          } else if (child.children) {
        
            if (innerDiv.children.length === 0) {
              createSubSections(child, innerDiv); 
            }
          }
        });

        parentElement.appendChild(button);
        parentElement.appendChild(div);
      });
    };


    document.getElementById("main-section").addEventListener("click", function () {
      if (content.children.length === 0) {
        const sections = sectionData[this.id];
        sections.forEach((section) => {
          const button = document.createElement("button");
          button.textContent = `${section.id} ${section.name}`;
          button.classList.add("btn", "btn-link");
          button.dataset.bsToggle = "collapse";
          button.dataset.bsTarget = `#collapse-${section.id}`;
          button.setAttribute("aria-expanded", "false");
          button.setAttribute("aria-controls", `collapse-${section.id}`);
          
          const div = document.createElement("div");
          div.id = `collapse-${section.id}`;
          div.classList.add("collapse");
          
          const innerDiv = document.createElement("div");
          innerDiv.classList.add("card-body");
          div.appendChild(innerDiv);
          
          button.addEventListener("click", () => {
      
            if (innerDiv.children.length === 0) {
              createSubSections(section, innerDiv); 
            }
          });

          content.appendChild(button);
          content.appendChild(div);
        });
      }
    });
});
