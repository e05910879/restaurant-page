


const setContact = () => {
    const contact_container = document.createElement('div');
    contact_container.setAttribute('id', 'contact_container');
    
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact';
    contact_container.appendChild(contactTitle);


    const phone_container = document.createElement('div');
    phone_container.setAttribute('class', 'container');
    const phoneTitle = document.createElement('div');
    phoneTitle.textContent = 'Phone Number';
    phone_container.appendChild(phoneTitle);

    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = '111-111-1111';
    phone_container.appendChild(phoneNumber);


    const email_container = document.createElement('div');
    email_container.setAttribute('class', 'container');
    const emailTitle = document.createElement('div');
    emailTitle.textContent = 'Email';
    email_container.appendChild(emailTitle);

    const emailAddress = document.createElement('div');
    emailAddress.textContent = 'contact@larestaurante.com';
    email_container.appendChild(emailAddress);

    contact_container.appendChild(phone_container);
    contact_container.appendChild(email_container);

    // querySelectorAll only applies from the parentNode calling it.
    const contacts = contact_container.querySelectorAll('.container');
    console.log(contacts);
    contacts.forEach((contact) => {
        contact.setAttribute('style', 'display: flex; justify-content: space-between;');

    });

    contact_container.setAttribute('style', 'display: grid; grid-template-rows: auto; width: 400px; gap: 20px;');

    // contact_container.setAttribute('style', 'display: grid; grid-template-rows: auto;');


    return contact_container;
};

export default setContact;