import React, {useState, useEffect} from "react";
import db from "../../firebase";
import {
  FormSection,
  FormImageLabel,
  FormImage,
  FormInput,
  FormBtn,
  Label,
  TextArea,
} from "./AddTestimonial.element";
import {
  addDoc,
  collection,
} from 'firebase/firestore'
import { getStorage } from "firebase/storage"
import { ref, uploadBytes } from "firebase/storage"
import {v4} from 'uuid'

const AddTestimonial = () => {
  const [imageUpload, setImageUpload] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [story, setStory] = useState("")
  const [interaction, setInteraction] = useState("Customer")
  const [location, setLocation] = useState("")
  const [id, setId] = useState("")

 
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
    setId('')
  }
  //add image
  const UploadProfilePicture = () => {
    const storage = getStorage()
    const imageRef = ref(storage, `images/${firstName}}`)
    uploadBytes(imageRef, imageUpload).then(()=> {
      console.log("uploaed image")
    }).catch(err => console.log(err))
    console.log(
      firstName, lastName, story, location
    )
  }
  //add testimony
  const addTestimony = async () => {
    console.log(id)
    try{
      await addDoc(collection(db, "user"), {
        firstName: firstName,
        lastName: lastName,
        story: story,
        location: location,
        interaction: interaction,
      })
      console.log('form submitted')
    } catch (err) {
      console.log(err.message)
      alert("something went wrong")
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    UploadProfilePicture();
    addTestimony();
    // resetInput();
  }
  return (
    <div>
      <FormSection className="flex" onSubmit={handleSubmit}>
        <h1>share your amazing story!</h1>
        <FormImageLabel for="image">Upload your picture</FormImageLabel>
        <FormImage required name="name" type="file" id="image" onChange={(e) => setImageUpload(e.target.files[0])} />
        <div>
          <Label for="first-name">First Name</Label>
          <FormInput required value={firstName} name="First Name" type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)}/>
          <Label for="last-name">Last Name</Label>
          <FormInput required ={lastName} name="Last Name" type="text" id="last-name" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <Label for="share-story" >Share your story</Label>
        <TextArea required value={story} name="Share Story" onChange={(e) => setStory(e.target.value)} />
        <div>
          <Label for="interact=as">What did you interact with Vasiti as</Label>
          <FormInput type="radio" id="interact-as" value="Customer" checked={interaction === 'Customer'} onChange={getRadioValue}/>
          <Label for="customer"> Customer</Label>
          <FormInput required type="radio" id="customer" value="Vendor" checked={interaction === 'Vendor'} onChange={getRadioValue}/>
          <Label for="vendor"> Vendor</Label>
        </div>
        <Label for="for-students">City or Higher Institution (for Students)</Label>
        <FormInput required value={location} name="City or Higher Institution" type="text" id="for-students" onChange={(e) => setLocation(e.target.value)}/>
        <FormBtn> Share your story!</FormBtn>
      </FormSection>
    </div>
  );
};

export default AddTestimonial;
