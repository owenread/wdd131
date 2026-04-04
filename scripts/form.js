const products = [
    { id: "fc-1888", name: "Artemis II", averagerating: 4.5 },
    { id: "fc-2050", name: "Kirby Sneakers", averagerating: 4.7 },
    { id: "fs-1987", name: "Mjolnir", averagerating: 3.5 },
    { id: "ac-2000", name: "Arc Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Mouskatool", averagerating: 5.0 }
];


const select = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});


document.getElementById("last-modified").textContent =
    "Last Modified: " + document.lastModified;