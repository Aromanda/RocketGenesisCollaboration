/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;

/**
	BROWSER HASH - from php/contact.php redirect!

	#alert_success 		= email sent
	#alert_failed		= email not sent - internal server error (404 error or SMTP problem)
	#alert_mandatory	= email not sent - required fields empty
**/	jQuery(_hash).show();

// Declaration variables

//Eventlistener
// ...

let contact_form = document.getElementById("contact-form")

contact_form.addEventListener("submit", async(e) => { 
	e.preventDefault();
	
	let fullname_select = document.querySelector('[id="fullName"]')
	let email_select = document.querySelector('[id="email"]')
	let phone_select = document.querySelector('[id="phone"]')
	let company_name_select = document.querySelector('[id="companyName"]')
	let project_name_select = document.querySelector('[id="projectName"]')
	let project_description_select = document.querySelector('[id="projectDescription"]')
	let department_select = document.querySelector('[id="department"]')
	let message_select = document.querySelector('[id="message"]')
	let attachment_select = document.querySelector('[id="attachment"]')
	
	
	
	// declaration const data
	const data = { 
		fullname: fullname_select.value,
		email: email_select.value,
		phone: phone_select.value,
		company_name: company_name_select.value,
		project_name: project_name_select.value,
		project_desc: project_description_select.value,
		department: department_select.value,
		message: message_select.value,
		file: attachment_select.value,
	};

	await fetch('http://99.79.77.144:3000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            alert('Success:' + JSON.stringify(data));
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error:' + error);
        });
});

