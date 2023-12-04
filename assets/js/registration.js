document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
});