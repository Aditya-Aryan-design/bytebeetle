export const ContactTitle = "Contact";

export const ownerContact = {
    email: "devadityaaryan@gmail.com",
    phone: "+919693967364",
    whatsapp: "https://wa.me/qr/JHMDS3TUB3GCK1"
}

export const Desc = ()=>{
    return <>
        If you want to create a website or web app, send mail on <b className="text-teal-600"><a href={`mailto:${ownerContact.email}`}>{ownerContact.email}</a></b> or Whatsapp on <b className="text-teal-600">
        <a href={`tel:${ownerContact.phone}`}>
        {ownerContact.phone}
        </a></b>
    </>
}