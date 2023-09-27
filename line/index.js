document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("customer-form");
    const customerList = document.getElementById("list");

    customerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const birthday = document.getElementById("birthday").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const location = document.getElementById("location").value;

        // Create a new list item with customer information
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>姓名：</strong>${name}<br>
                              <strong>性別：</strong>${gender}<br>
                              <strong>生日：</strong>${birthday}<br>
                              <strong>手機：</strong>${phone}<br>
                              <strong>Email：</strong>${email}<br>
                              <strong>住宿地區：</strong>${location}`;

        // Append the list item to the customer list
        customerList.appendChild(listItem);

        // Clear the form fields
        customerForm.reset();
    });
});
