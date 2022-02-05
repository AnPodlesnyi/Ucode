let user1 = [
	{
		name: 'Planet',
		surname: 'Diameter, km',
		patronymic: 'Day, in Earth days',
        yer: 'Year, in Earthyears',
        mons: 'Moons',
        dist: 'Distance from Sun, AU'
	}
]
let users = [
	{
		name: 'Mercury',
		surname: '4879',
		patronymic: '58.6',
        yer: '0.24',
        mons: '0',
        dist: '0,4'
	},
	{
		name: 'Venus',
		surname: '12100',
		patronymic: '243',
        yer: '0.24',
        mons: '0',
        dist: '0,7'
	},
    {
		name: 'Earth',
		surname: '12742',
		patronymic: '1',
        yer: '1',
        mons: '1',
        dist: '1'
	},
    {
		name: 'Mars',
		surname: '6780',
		patronymic: '1.03',
        yer: '1.88',
        mons: '2',
        dist: '1.5'
	},
    {
		name: 'Jupiter',
		surname: '142984',
		patronymic: '0.41',
        yer: '11.86',
        mons: '79',
        dist: '5.2'
	},
	{
		name: 'Saturn',
		surname: '116464',
		patronymic: '0.45',
        yer: '29.45',
        mons: '62',
        dist: '9.5'
	},
	{
		name: 'Uranus',
		surname: '50724',
		patronymic: '0.72',
        yer: '84',
        mons: '27',
        dist: '19.8'
	},
	{
		name: 'Neptune',
		surname: '49244',
		patronymic: '0.67',
        yer: '164.81',
        mons: '14',
        dist: '30.1'
	},
];

let tablee = document.getElementById('placeholder');
tablee.innerHTML = " ";
let tbl = document.createElement('table');
tbl.setAttribute("class", "table_sort")
tablee.appendChild(tbl)
let thead = document.createElement('thead');
tbl.appendChild(thead)
let tbody = document.createElement('tbody');
tbl.appendChild(tbody);
function tabl(){
	for (let user of user1){
	let tr = document.createElement('tr');
	let th1 = document.createElement('th');
	th1.innerHTML = user.name;
	tr.appendChild(th1);

	let th2 = document.createElement('th');
	th2.innerHTML = user.surname;
	tr.appendChild(th2);

	let th3 = document.createElement('th');
	th3.innerHTML = user.patronymic;
	tr.appendChild(th3);

	let th4 = document.createElement('th');
	th4.innerHTML = user.yer;
	tr.appendChild(th4);

	let th5 = document.createElement('th');
	th5.innerHTML = user.mons;
	tr.appendChild(th5);

	let th6 = document.createElement('th');
	th6.innerHTML = user.dist;
	tr.appendChild(th6);

	thead.appendChild(tr);
	}
for (let user of users) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.innerHTML = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.innerHTML = user.surname;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.innerHTML = user.patronymic;
	tr.appendChild(td3);

    let td4 = document.createElement('td');
	td4.innerHTML = user.yer;
	tr.appendChild(td4);

    let td5 = document.createElement('td');
	td5.innerHTML = user.mons;
	tr.appendChild(td5);

    let td6 = document.createElement('td');
	td6.innerHTML = user.dist;
	tr.appendChild(td6);
	
	tbody.appendChild(tr);
}
}
tabl()
document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
		let cnop = document.getElementById('notification')
        if (target.dataset.order ==-1) {
			function hide(e) {
				let er = e.target.innerHTML
				if(er==er)
				cnop.innerHTML = `Sorting by ${er}, order: ASC`;
			}
			thead.addEventListener('click', hide, false);
		}if (target.dataset.order ==1) {
			function hide(e) {
				let er = e.target.innerHTML
				if(er==er)
				cnop.innerHTML = `Sorting by ${er}, order: DESC`;
			}
			thead.addEventListener('click', hide, false);
		}
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    
});
