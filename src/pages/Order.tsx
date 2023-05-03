import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../static/css/App.css";
import "../static/css/Order.css";

const Order = () => {
  const [item, setItem] = useState(Object);
  const [isCustomized, setIsCustomized] = useState(false);
  const [customizedDesc, setCustomizedDesc] = useState("");
  const [quality, setQuality] = useState("normal");
  const [priority, setPriority] = useState("none");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userClass, setUserClass] = useState("");
  const [extraCost, setExtraCost] = useState(0);




  
  const handleItemChange = (event: any) => {
    console.log(event.target.files[0])
    setItem(event.target.files[0]);
  };

  const handleCustomizedChange = (event: any) => {
    setIsCustomized(event.target.checked);

    
  };

  const handleCustomizedDescChange = (event: any) => {
    setCustomizedDesc(event.target.value);
  };

  const handleQualityChange = (event: any) => {
    setQuality(event.target.value);
    
  };

  const handlePriorityChange = (event: any) => {
    setPriority(event.target.value);
    
  };

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleClassChange = (event: any) => {
    setUserClass(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    var pri;
    if (priority === "prioritized") {
      pri = 1;
    } else {
      pri = 0;
    }
 
    console.log(item);

    const formData = new FormData();

    formData.append("email", email);
    formData.append("fullName", name);
    formData.append("grade", userClass);
    formData.append("item", item);
    formData.append("quality", quality);
    formData.append("priority", pri.toString());
    formData.append("customDesc", customizedDesc);
    formData.append("price", "0");

    fetch("https://sql.nubzrcool.repl.co/order", {
      method: "POST",
      body: formData,
    });
      //  .then((response) => response.json())
      //  .then((data) => console.log(data))
      //  .catch((error) => console.error(error));


    //  setItem(Object());
     setIsCustomized(false);
     setCustomizedDesc("");
     setQuality("normal");
     setPriority("none");
     setName("");
     setEmail("");
     setUserClass("");
     setExtraCost(0);
  };

  return (

      <>
        
        <Navbar/>
        
        <form className="orderform" onSubmit={handleFormSubmit}>
        <label>
            Item:
            <input type="file" id="item" name="item" onChange={handleItemChange} accept=".obj" required />
        </label>
        <br />
        <label>
            Customized:
            <input
            type="checkbox"
            checked={isCustomized}
            onChange={handleCustomizedChange}
            required
            />
        </label>
        {isCustomized && (
            <label>
            Customized Desc :
            <input
                type="text"
                value={customizedDesc}
                onChange={handleCustomizedDescChange}
                required
            />
            </label>
        )}
        <br />
        <label>
            Quality:
            <select value={quality} onChange={handleQualityChange}>
            <option value="normal">Normal</option>
            <option value="fine">Fine</option>
            <option value="extra-fine">Extra Fine</option>
            </select>
        </label>
        <br />
        <label>
            Priority:
            <select value={priority} onChange={handlePriorityChange}>
            <option value="none">None</option>
            <option value="prioritized">Prioritized</option>
            </select>
        </label>
        <br />
        <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />
        <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
            Class:
            <input type="text" value={userClass} onChange={handleClassChange} required />
        </label>
        <br />
        <br />
        <button className="submission" type="submit">Submit Order</button>
        </form>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     </>
  )
  }
export default Order;
