// Body 스타일 설정
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#ffd1dc";
document.body.style.color = "#8e044b";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.margin = "0";
document.body.style.padding = "0";

// 메인 컨테이너 생성
const container = document.createElement('div');
container.style.maxWidth = "600px";
container.style.padding = "20px";
container.style.marginTop = "50px";
container.style.backgroundColor = "#fff";
container.style.borderRadius = "8px";
container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
container.style.textAlign = "center";

// 프로필 이미지 생성
const profileImg = document.createElement('img');
profileImg.src = 'me.jpeg';
profileImg.alt = 'Profile Picture';
profileImg.style.width = "150px";
profileImg.style.height = "150px";
profileImg.style.borderRadius = "50%";
profileImg.style.marginBottom = "20px";

// 이름과 소개 텍스트
const nameHeader = document.createElement('h1');
nameHeader.textContent = "나를 소개합니다!";
nameHeader.style.color = "#8e044b";

const introduction = document.createElement('p');
introduction.textContent = "안녕하세요. 저는 경성대 소프트웨어학과 2학년 박세현입니다.";
introduction.style.fontSize = "1.1em";

// 기술 리스트 생성
const skillsHeader = document.createElement('h2');
skillsHeader.textContent = "취미";
skillsHeader.style.color = "#8e044b";
skillsHeader.style.marginTop = "20px";

const skillsList = document.createElement('ul');
skillsList.style.listStyle = "none";
skillsList.style.padding = "0";
["책읽기", "운동하기", "게임하기", "유튜브보기", "요리하기"].forEach(skill => {
  const skillItem = document.createElement('li');
  skillItem.textContent = skill;
  skillItem.style.fontSize = "1em";
  skillItem.style.marginBottom = "5px";
  skillsList.appendChild(skillItem);
});

// 프로젝트 리스트 생성
const projectsHeader = document.createElement('h2');
projectsHeader.textContent = "거주한곳";
projectsHeader.style.color = "#8e044b";
projectsHeader.style.marginTop = "20px";

const projectsList = document.createElement('ul');
projectsList.style.listStyle = "none";
projectsList.style.padding = "0";
[
  { name: "부산", description: "부산이 고향이며 현재도 부산에서 거주중" },
  { name: "진주", description: "초~중 시절을 진주에서 보냄" },
  { name: "그외", description: "언젠간 미국이나 일본에서 한달 정도 살아보고 싶음" }
].forEach(project => {
  const projectItem = document.createElement('li');
  projectItem.textContent = `${project.name}: ${project.description}`;
  projectItem.style.marginBottom = "8px";
  projectsList.appendChild(projectItem);
});

// 더 많은 정보 버튼 생성
const moreInfoButton = document.createElement('button');
moreInfoButton.textContent = "더 많은 정보";
moreInfoButton.style.backgroundColor = "#ffadc9";
moreInfoButton.style.color = "#8e044b";
moreInfoButton.style.border = "none";
moreInfoButton.style.padding = "10px 20px";
moreInfoButton.style.marginTop = "15px";
moreInfoButton.style.borderRadius = "5px";
moreInfoButton.style.cursor = "pointer";
moreInfoButton.style.fontSize = "1em";

// 더 많은 정보 텍스트 생성 (처음엔 숨김)
const moreInfo = document.createElement('p');
moreInfo.textContent = "앞으로 더 추가될 예정";
moreInfo.style.fontSize = "1em";
moreInfo.style.display = "none"; // 숨김 상태

// 버튼 클릭 시 더 많은 정보 표시
moreInfoButton.onclick = function() {
  moreInfo.style.display = moreInfo.style.display === "none" ? "block" : "none";
};

// 연락처 정보 생성
const contactHeader = document.createElement('h2');
contactHeader.textContent = "그외 정보";
contactHeader.style.color = "#8e044b";
contactHeader.style.marginTop = "20px";

const contactList = document.createElement('ul');
contactList.style.listStyle = "none";
contactList.style.padding = "0";
[
  { platform: "이메일", info: "qkrtpgus73@naver.com" },
  { platform: "GitHub", info: "github.com/myasehyun" }
].forEach(contact => {
  const contactItem = document.createElement('li');
  contactItem.innerHTML = `<strong>${contact.platform}:</strong> ${contact.info}`;
  contactItem.style.marginBottom = "5px";
  contactList.appendChild(contactItem);
});

// 컨테이너에 요소 추가
container.appendChild(profileImg);
container.appendChild(nameHeader);
container.appendChild(introduction);
container.appendChild(skillsHeader);
container.appendChild(skillsList);
container.appendChild(projectsHeader);
container.appendChild(projectsList);
container.appendChild(moreInfoButton);
container.appendChild(moreInfo);
container.appendChild(contactHeader);
container.appendChild(contactList);

// 컨테이너를 body에 추가
document.body.appendChild(container);
