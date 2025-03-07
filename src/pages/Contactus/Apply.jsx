import React from "react";

const Contactus = () => {
  return (
    <div>
     <form>
   <label for="position">Position</label>
   <input type="text" id="position" name="position">
   
   <label for="candidate-name">Candidate Name</label>
   <input type="text" id="candidate-name" name="candidate-name">
   
   <label for="nationality">Nationality</label>
   <input type="text" id="nationality" name="nationality">
   
   <label for="contact-number">Contact Number</label>
   <input type="text" id="contact-number" name="contact-number">
   
   <label for="email-id">Email ID</label>
   <input type="email" id="email-id" name="email-id">
</form>

    </div>
  );
};

export default Contactus;

