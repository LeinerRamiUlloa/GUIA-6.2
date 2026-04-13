const API_URL = 'http://localhost:8080/categories';

function getCategories() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('category-list');
            list.innerHTML = '';
            data.forEach(category => {
                const li = document.createElement('li');
                li.textContent = `${category.id}: ${category.name}`;
                list.appendChild(li);
            });
        });
}

function getCategoryById() {
    const id = document.getElementById('search-id').value;
    fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .then(category => {
            document.getElementById('search-result').textContent = category ? `ID: ${category.id}, Nombre: ${category.name}` : 'Categoría no encontrada';
        });
}

function addCategory() {
    const name = document.getElementById('new-category').value;
    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    }).then(() => getCategories());
}

function updateCategory() {
    const id = document.getElementById('update-id').value;
    const name = document.getElementById('update-name').value;
    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    }).then(() => getCategories());
}

function deleteCategory() {
    const id = document.getElementById('delete-id').value;
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        .then(() => getCategories());
}
