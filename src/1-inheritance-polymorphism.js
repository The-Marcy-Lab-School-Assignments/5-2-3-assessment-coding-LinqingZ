class Phone {
  constructor(phoneNumber, contacts=[]){
    this.phoneNumber = phoneNumber
    this.contacts = contacts
  }
  makeCall(callContact){
    const result = this.contacts.find((contact)=> contact.phoneNumber === callContact || contact.name === callContact)
    if (!result){
      if (callContact.match(/^[0-9]{10}$/)){
        return `Calling ${callContact}...`
      }else{
        return "Invalid"
      }
    }else{
      return `Calling ${result.name}...`
    }

  }
  addContact(newContact){
    if(!newContact.hasOwnProperty("name") || !newContact.hasOwnProperty("phoneNumber") || newContact.name === ""|| newContact.phoneNumber ==="" || !newContact.phoneNumber.match(/^[0-9]{10}$/)){
      return "Invalid"
    }
    this.contacts.push(newContact)
    return `${newContact.name} added.`

  }
  removeContact(name){
    const result  = this.contacts.find((contact)=> contact.name === name)
    if (!result){
      return "Contact not found."
    }else{
      this.contacts.splice(result, 1)
    return `${name} removed.`
    }
    
  }
}

class AppleIPhone extends Phone{
  constructor(phoneNumber, model, contact){
    super(phoneNumber, contact)
    this.model = model
  }
  sendIMessage(phone, message){
    if(phone.hasOwnProperty("model") && phone instanceof AppleIPhone){
      return `Message: ${message} - sent from ${this.model}`
    }else{
      return 'Message could not be sent.'
    }

  }

}

module.exports = {
  Phone,
  AppleIPhone,
};
