const projects = [
    '1_Single%20price%20grid%20component',
    '2_Base%20Apparel%20coming%20soon%20page%20',
    '3_Four%20Card%20Feature%20Section'
];

const list = document.getElementById('list');

projects.forEach(project => {
    const link = document.createElement('a');
    link.href = `/${project}/index.html`;
    link.innerText = project;

    list.appendChild(link);

});
