const projects = [
    'Single-Price-Grid-Component',
    'Base-Apparel-Coming-Soon-Page',
    'Four-Card-Feature-Section'
];

const list = document.getElementById('list');

projects.forEach(project => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/${project}/index.html`;
    link.innerText = formatProjectName(project);

    const img = document.createElement('img');
    img.src = `/${project}/design/desktop-design.jpg`;

    listItem.appendChild(img);
    listItem.appendChild(link);
    list.appendChild(listItem);

});

function formatProjectName(name) {
    return name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
