const projects = [
    'Single-Price-Grid-Component',
    'Base-Apparel-Coming-Soon-Page',
    'Four-Card-Feature-Section'
];

const list = document.getElementById('list');

projects.forEach(project => {
    const link = document.createElement('a');
    link.href = `/${project}/index.html`;
    link.innerText = project;

    list.appendChild(link);

});
