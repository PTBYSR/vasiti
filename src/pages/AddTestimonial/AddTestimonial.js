import React, {useState, useEffect} from "react";
import db from "../../firebase";
import {
  FormSection,
  FormInput,
  FormBtn,
  Label,
  TextArea,
} from "./AddTestimonial.element";
import {
  addDoc,
  collection,
} from 'firebase/firestore'

const AddTestimonial = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [story, setStory] = useState("")
  const [interaction, setInteraction] = useState("Customer")
  const [location, setLocation] = useState("")

  //get radio value
  const getRadioValue = (e) => {
    setInteraction(e.target.value)
    console.log(interaction)
  }
  //reset all input
  const resetInput = () => {
    setInteraction('')
    setLastName('')
    setFirstName('')
    setStory('')
    setLocation('')
  }
  //add testimony
  const addTestimony = async () => {
    console.log(
      firstName, lastName, story, location
    )
    try{
      await addDoc(collection(db, "user"), {
        firstName: firstName,
        lastName: lastName,
        story: story,
        location: location,
      })
      resetInput();
      console.log('form submitted')
    } catch (err) {
      console.log(err.message)
      alert("something went wrong")
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimony();
  }
  return (
    <div>
      <FormSection className="flex" onSubmit={handleSubmit}>
        <h1>share your amazing story!</h1>
        <Label for="image">Upload your picture</Label>
        <FormInput name="name" type="file" id="image" />
        <div>
          <Label for="first-name">First Name</Label>
          <FormInput value={firstName} name="First Name" type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)}/>
          <Label for="last-name">Last Name</Label>
          <FormInput value={lastName} name="Last Name" type="text" id="last-name" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <Label for="share-story" >Share your story</Label>
        <TextArea value={story} name="Share Story" onChange={(e) => setStory(e.target.value)} />
        <div>
          <Label for="interact=as">What did you interact with Vasiti as</Label>
          <FormInput type="radio" id="interact-as" value="Customer" checked={interaction === 'Customer'} onChange={getRadioValue}/>
          <Label for="customer"> Customer</Label>
          <FormInput type="radio" id="customer" value="Vendor" checked={interaction === 'Vendor'} onChange={getRadioValue}/>
          <Label for="vendor"> Vendor</Label>
        </div>
        <Label for="for-students">City or Higher Institution (for Students)</Label>
        <FormInput value={location} name="City or Higher Institution" type="text" id="for-students" onChange={(e) => setLocation(e.target.value)}/>
        <FormBtn > Share your story!</FormBtn>
      </FormSection>
    </div>
  );
};

export default AddTestimonial;
