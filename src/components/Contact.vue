<template>
<div>
  <div>
    <div class="container-full-bg">
      <div class="jumbotron kleurtje">
        <p></p><p></p>
        <div class="PTSans titletext">Contact</div>
        <div class="PTSans bodytext">
          Leuk als je een berichtje achterlaat
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <h2 id="kop01">Plaats hier je bericht:</h2>
    <form id="contact-form">
        Aan<br>
        <input type="email" name="email" required value="thirdpiglet@outlook.com" style="background-color:powderblue;" readonly>
        <br>
        Naam<br>
        <input type="text" name="name" required placeholder="Naam..">
        <br>
        Bericht<br>
        <textarea name="message" required placeholder="Bericht.."></textarea>
        <br>
        Email Afzender<br>
        <input type="email" name="EmailAfzender" required>
        <br><br>
        <button type="submit" @click="submitForm()">Verstuur</button>
    </form>

    <div id="success-message" style="display: none">
    <h3>Verzonden 👍</h3>
    <p>
        Bedankt voor je berichtje.
    </p>
    <button id="buttonX" class="buttonX" @click="submitForm()">
    </button>
</div>




    
    <!-- <form id="contact-form" action="/action_page.php">
      <label for="fname">Voornaam</label>
      <input type="text" id="fname" name="firstname" placeholder="Voornaam..">

      <label for="lname">Achternaam</label>
      <input type="text" id="lname" name="lastname" placeholder="Achternaam..">

      <label for="subject">Bericht</label>
      <textarea id="subject" name="subject" placeholder="Je bericht.." style="height:200px"></textarea>

      <input type="submit" value="Submit" @click="submitForm()">
    </form> -->
  </div>
</div>


</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      reRenderKey: 0,
    };
  },
  created() {
    var contactForm = document.getElementById("contact-form");
    var successMessage = document.getElementById("success-message");
  },
  methods: {
  submitForm: async function() {
      let contactForm = document.getElementById("contact-form");
      contactForm.onsubmit = function(event) {
        event.preventDefault(); // Don't let the browser submit the form.
        var payload = {};
        // Build JSON key-value pairs using the form fields.
        contactForm.querySelectorAll("input, textarea").forEach(field => {
            payload[field.name] = field.value;
        });
    
        // Post the payload to the contact endpoint.
        fetch("https://sendformtof.azurewebsites.net/api/contact", {
            method: 'post',
            body: JSON.stringify(payload)
        }).then(resp => {
      if (!resp.ok) {
                console.error(resp);
                return;
            }
            // Display success message.
            let successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";
            contactForm.style.display = "none";
            // Kop weg.
            document.getElementById("kop01").innerHTML = "🐷";
        });
      }
    },

  }
}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
