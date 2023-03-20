//Function that load from the first screen to the landing page
welcomeMsg =() => {
  let waitingTime = setInterval(function () {
    if (true) {
      window.location.href = "adexAppHomePage.html";
    } else {
    }
  }, 5000);
}


// Function that check if the password entered in Registration page 3 is upto 6

 passOk = () => {
  if (pass.value.length == 6) {
    loginBtn.style.backgroundColor = "red";
  } else {
    loginBtn.style.backgroundColor = "gray";
    return false;
  }
}


// Function that check if the pin entered in Registration page 2 is upto 4

pinOk = () => {
  let tryPin = document.querySelectorAll('.pin-for-user-select')
  for (let index = 0; index < tryPin.length; index++) {
    if (tryPin[index].value.length == 4) {
      continueBtn2.style.backgroundColor = "red";
    } else {
      continueBtn2.style.backgroundColor = "gray";
      return false;
    }
    
  }
}

// Function that check if the account Number entered in Registration page 1 is upto 10

validateAccNo = () => {
  if (regAccNo.value.length == 10) {
    continueBtn.style.backgroundColor = "red";
  } else {
    continueBtn.style.backgroundColor = "gray";
    return false;
  }
}

// Function that check if the account Number entered in Registration page 1 is upto 10 as the page load
validateLogin = () => {
  if (loginAcc.value.length == 10 /* && pass.value.length >= 6 */) {
    loginBtn.style.backgroundColor = "red"
  } else {
    loginBtn.style.backgroundColor = "gray"
  }
}

validateLoginOnload = () => {
  validateLogin()
}

validateAccNoOnload = () => {
  validateAccNo();
};




// Function that select between the various help

help = (para) => {
  variousHelp.style.setProperty("display", "block", "important");
  variousHelp.innerHTML = "";
  if (para == 1) {
    variousHelp.innerHTML = `
    <div class="w-100 login d-flex justify-content-between">
        <div class="d-flex text-white mt-auto mb-auto">
          <i
            class="fas fa-angle-left fs-1"
            onclick="goBackToHelp()"
          ></i>
          <h4>Contact Us</h4>
        </div>
        <img src="pic/ade.png" alt="" class="login-img" />
      </div>
      <div class="p-5 all-help">
        <div class="d-flex justify-content-between">
          <h6>Telephone</h6>
          <i class="fas fa-phone-volume fs-4"></i>
        </div>
        <hr class="help-hr" />
        <div class="d-grid">
          <a href="" class="text-decoration-none pb-2">07033959586</a>
          <a href="" class="text-decoration-none pb-2">09014145628</a>
          <a href="" class="text-decoration-none pb-2">07033959586</a>
          <a href="" class="text-decoration-none pb-2">09014145628</a>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <h6>Email</h6>
          <i class="fas fa-envelope fs-4"></i>
        </div>
        <hr class="help-hr" />
        <a href="" class="text-decoration-none">adeoluamole@gmail.com</a>
        <div class="d-flex justify-content-between mt-5">
          <h6>Social Media</h6>
          <i class="fas fa-share-alt fs-4"></i>
        </div>
        <hr class="help-hr" />
        <div class="d-grid">
          <a href="" class="text-decoration-none pb-2">Twitter</a>
          <a href="" class="text-decoration-none pb-2">Facebook</a>
          <a href="" class="text-decoration-none pb-2">Instagram</a>
        </div>
        <div class="w-100 mt-4 d-flex gap-2">
          <div class="live-chat">
            <i class="fa-solid fa-comments text-white"></i>
          </div>
          <span class="mt-auto mb-auto">Live Chat</span>
        </div>
        <div class="d-grid gap-3 mt-4">
          <span
            >For further assistance, kindly walk into any Adex Bank nearest to
            you</span
          >
          <a href="" class="text-decoration-none pb-2">Privacy Policy</a>
        </div>
      </div>
    `;
  } else if (para == 2) {
    variousHelp.innerHTML = `
    <div class="w-100 login d-flex justify-content-between">
        <div class="d-flex text-white mt-auto mb-auto">
          <i
            class="fas fa-angle-left fs-1"
            onclick="goBackToHelp()"
          ></i>
          <h4>Adex Near Me</h4>
        </div>
        <img src="pic/ade.png" alt="" class="login-img" />
      </div>
      <div class="pt-4 px-4 pb-2" style="margin-top: 60px;">
        <div>Working on this Development, check back another time</div>
      </div>
      <hr class="" />
    `;
  } else if (para == 3) {
    variousHelp.innerHTML = `
    <div class="w-100 login d-flex justify-content-between">
        <div class="d-flex text-white mt-auto mb-auto">
          <i
            class="fas fa-angle-left fs-1"
            onclick="goBackToHelp()"
          ></i>
          <h4>About</h4>
        </div>
        <img src="pic/ade.png" alt="" class="login-img" />
      </div>
      <div class="pt-4 px-4 pb-2" style="margin-top: 60px;">
        <h6 class="text-secondary">Version</h6>
        <span class="fw-bold">2.16.8</span> 
      </div>
      <hr class="" />
    `;
  } else if (para == 4) {
    variousHelp.innerHTML = `
    <div class="w-100 login d-flex justify-content-between">
    <div class="d-flex text-white mt-auto mb-auto">
      <i
        class="fas fa-angle-left fs-1"
        onclick="goBackToHelp()"
      ></i>
      <h4>FAQ</h4>
    </div>
    <img src="pic/ade.png" alt="" class="login-img" />
  </div>
  <div class="p-4 all-help">
    <h6 class="faq-h6 mb-4">What is Mobile Banking?</h6>
    <div class="mb-5 faq-txt">
      Adex Mobile Banking is a 24-7 service that is available any time and every day. it is convenient, fast, secure, and affordable. it is simply, your internet banking features accessible via a mobile phone. 
    </div>
    <h6 class="faq-h6 mb-4">
      We offer 3 easy ways to use mobile banking:
    </h6>
    <div class="mb-5 faq-txt">
      <ul>
      <li> Apps for your iPhone or Android - it's just a free download away </li>
      <li>Web browsers allow for mobile banking on devices with internet access</li>
      <li>Push notifications via the App and Text messaging (SMS) capabilities for information and updates</li>
      </ul>
    </div>
    <h6 class="faq-h6 mb-4">
      How can I download the mobile app?
    </h6>
    <div class="mb-5 faq-txt">
      Download the Adex Mobile Banking app directly from Google Play or the Apple App Store. Once the App is installed, input your Account no and select Continue to register (By registering I agree to Adex  Bank's Terms and Privacy Policy) and start using the app.
    </div>
    <h6 class="faq-h6 mb-4">
      What are the available mode for registration?
    </h6>
    <div class="mb-5 faq-txt">
      <ul>
        <li>Hardware Token</li>
        <li>Debit Card (Last six digits of Card and PIN)</li>
        <li>OTP</li>
      </ul>
    </div>
    <h6 class="faq-h6 mb-4">
    How do I Register?
    </h6>
    <div class="mb-5 faq-txt">
    To Register, the user downloads the App from Google Play or Apple Stores and selects any of the 3(three) registration options
    </div>
    <h6 class="faq-h6 mb-4">
    Register with Hardware Token
    </h6>
    <div class="mb-5 faq-txt">
     <span> Enter Account number and continue</span> </br>
     <span>Select Hardware Token, next, enter the PIN plus Token digits displayed on the device</span> </br>
     <span>Create and confirm Password (six digits), next Create and confirm Mobile PIN (four digits) Click on Submit (Operation Successful)</span>
    </div>
    <h6 class="faq-h6 mb-4">
    Register with Card
    </h6>
    <div class="mb-5 faq-txt">
     <span> Enter Account number and continue</span> </br>
     <span>Select Card, next and enter the last Six Digits of the Card and Card PIN </span> </br>
     <span> Create and confirm Password (six digits), next Create and confirm Mobile PIN (four digits) Click on Submit (Operation Successful) </span>
    </div>
    <h6 class="faq-h6 mb-4">
    Register with OTP
    </h6>
    <div class="mb-5 faq-txt">
     <span>Enter Account number and continue</span> </br>
     <span>select OTP</span> </br>
     <span>Create and confirm Password (six digits), next Create and confirm Mobile PIN (four digits) Click on Submit (Operation Successful). Next, enter the OTP received via SMS. </br> Note: SMS will be sent to the registered phone (Alertz) number</span>
    </div>
    <h6 class="faq-h6 mb-4"></h6>
    <div class="mb-5 faq-txt"></div>
    <h6 class="faq-h6 mb-4"></h6>
    <div class="mb-5 faq-txt"></div>
    <h6 class="faq-h6 mb-4"></h6>
    <div class="mb-5 faq-txt"></div>
  </div>
    
    `;
  }
}

goBackToHelp = () => {
  window.location.href = "adexAppHelpPage.html";
}


// Function that check if the user is online or offline

let checkNetwork = () => {
  if (navigator.onLine) {
    networkDiv.style.display = "none"
    body.style.pointerEvents = "auto"
  } else {
    body.style.pointerEvents = "none"
    networkDiv.style.display = "block"
    networkDiv.innerHTML = `
  Network not available
      <div class="w-100 pt-2 d-flex justify-content-center">
        <div>Reconnecting</div>
        <div class="spinner-border text-light mx-2" role="status"></div>
      </div>
  `
  }

}

// Some other Function that reload the page
let goBack = () => {
  window.history.back();
};
let toRegistration1 = () => {
  `${(window.location.href = "adexAppRegistrationPage1.html")}`;
};
let toLogin = () => {
  `${(window.location.href = "adexAppLoginPage.html")}`;
};
let toRegister = () => {
  `${(window.location.href = "adexAppRegisterDevice.html")}`;
};
let toHelp = () => {
  `${(window.location.href = "adexAppHelpPage.html")}`;
};
let toNotification = () => {
  `${(window.location.href = "adexAppNotificationPage.html")}`;
};
let toOpenAcc = () => {
  `${(window.location.href = "adexAppOpenAccPage1.html")}`;
};
toBVNPage = () => {
  window.location.href = "adexAppBVNPage.html"
}

toSettings = () => {
  window.location.href = "adexAppSettingsPage.html"
}

goToTravelStart = () => {
  travelStart.innerHTML = "https:www.travelstart.com.ng"
}

toTravelPage = () => {
  window.location.href = "adexAppTravel&LeisurePage.html"
}

toMyDevice = () => {
  window.location.href = "adexAppMyDevicePage.html"
}

logOut = () => {
  
  }


// Function that check if the account No entered belong to the person registering
continueReg = () => {
  // storedAccount = allCustomer[currentUserIndex].registeredAcc;
  let found = false;
  for (let index = 0; index < allCustomer.length; index++) {
    if (
      allCustomer[index].accNo == regAccNo.value
    ) {
      localStorage.setItem("currentUserIndex", index);
      found = true;
      break;
    }
  }
  

    if (found/*  && (storedAccount).includes(regAccNo.value) */) {
      // alert(`${storedAccount}`)
      // alert("This Account has already been registered, proceed to login")
      window.location.href = "adexAppRegistrationPage2.html";
    } 
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect account number. Try again!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }  
  
}


sweet2 = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Incorrect details. Try again!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}


// Function that display the user card pin

let showCardPin = () => {
  welcomeMsg.innerHTML  = `Thank you for opening an account with us at Adex Bank, just because you choose us, we've compensate you with a total sum of ₦1,000 which can be use to perform any transactions and you can as well deposit money from your dashboard by clicking on the Deposit icon. Always check your dashboard history and transfer history for how you perform transactions. Also note that a ₦10 charges will be deducted on every transfer you make. Thanks`
  for (let index = 0; index < allCustomer.length; index++) {
    dispCardPin.innerHTML = `
    ${allCustomer[index].atmPIN}
    `
    
  }
}

text = () => {
  alert(allCustomer[currentUserIndex].atmCardNumber.slice(-6))
}


// Function that check if the pin entered correspond to the saved one

let otp;
continueReg2 = () => {
  let tryGo = document.querySelectorAll('.pin-for-user-select');
  let PAN = document.querySelectorAll('.PAN-for-user-select');
  let found = false;
  // allCustomer.map((eachUser, index) => {
    for (let index = 0; index < tryGo.length; index++) {
      if (
        tryGo[index].value == allCustomer[currentUserIndex].atmPIN && PAN[index].value == allCustomer[currentUserIndex].atmCardNumber.slice(-6)
      ) {
        found = true;
        break;
      }/* }) */
    }
  if (found) {
    window.location.href = "adexAppRegistrationPage3.html"
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "You've entered either incorrect Pin or incorrect last six digit of card. Try again!",
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }  
}


// Function that generate otp and display Acc No on Registration page 3 and display success modal on registration page 3
let put = () => {
  otp = `${Math.floor(Math.random() * 100000)}`;
    swal.fire("Nice!", `Your One Time Password (OTP) is: ${otp}`, "success"
    )/* .then((result) => {
      if (result.isConfirmed) {
        
      }
    }) */
  mumu.innerHTML = `xxxxx`
  accNo.innerHTML = `Account: ${allCustomer[currentUserIndex].accNo}`
  successConfirm.innerHTML = `Registration is successful. Please login to your account`
}

displayOTP = () => {
  if (showOTP.checked == true) {
    mumu.innerHTML = "xxxxx"
    otpLabel.innerHTML = "Show OTP"
  } else {
    mumu.innerHTML = `${otp}`
    otpLabel.innerHTML = "Hide OTP"

  }
}


//Function that closes success modal on registration page 3
closeMyRegSuccessModal = () => {
  regSuccessModalContainer.style.display = "none"
}


let regex = /^(?=.*[a-z])(?=[A-Z])(?=.*\d)(?=.*[#$@!%&_?])[A-Za-z\d#$@!%&_?]{6,30}$/

confirmPass = () => {
  con.style.display = `block`
  // con2.style.display = `block`
  passGood = false
  pinGood = false
  if (accPass.value == confirmAccPass.value && (accPass.value.match(regex) && confirmAccPass.value.match(regex))) {
      con.innerHTML = `Password match`
      con.style.color = `green`
      passGood = true
  } else if (accPass.value == confirmAccPass.value && !(accPass.value.match(regex) && confirmAccPass.value.match(regex))) {
    con.innerHTML = `Password must contain at least one number and one uppercase and lowercase letter, and at least 6 and not morethan 30 characters`
    con.style.color = `red`
    con2.style.display = `none`
    
  }
  else {
    con.innerHTML = `Password does not match`
    con.style.color = `red`
    con2.style.display = `none`

  }
  if (transPIN.value == confirmTransPIN.value) {
  con2.style.display = `none`
    con2.innerHTML = `Pin match`
    con2.style.color = `green`
    pinGood = true
  con2.style.display = `none`

} else {
  con2.innerHTML = `Pin does not match`
  con2.style.color = `red`
  con2.style.display = `block`

}
if (passGood && pinGood) {
  continueBtn3.style.backgroundColor = "rgb(235, 0, 0)"
} else {
  continueBtn3.style.backgroundColor = "gray"

}
}

// changeType = () => {
//   let pinRegex = /^([\d]){4}$/;
//   if (/* pinRegex.test(transPIN.value) */transPIN.value.match(pinRegex)) {
//     // transPIN.value = transPIN.value
//   } else {
//     // transPIN.value = ""
//   }
// }


// Function that generate otp and display Acc No on Registration page 3 and display success modal on registration page 3
continueReg3 = () => {
  let found = false;
  allCustomer.map((eachUserCon3, index) => {
    if (supplyOTP.value == otp && accPass.value == confirmAccPass.value && transPIN.value == confirmTransPIN.value ) {
      found = true;
      return
    }
  })
  if (found && (allCustomer[currentUserIndex].registeredAcc).includes(allCustomer[currentUserIndex].accNo) && (accPass.value != "" || transPIN.value != "")) {
    Swal.fire({
      icon: 'warning',
      title: 'Operation denied',
      text: 'You have already registered this device. Please login to your account!',
      footer: '<a href="">Why do I have this issue?</a>'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `adexAppHomePage.html`
      }
    })
  } else if (found && !(allCustomer[currentUserIndex].registeredAcc).includes(allCustomer[currentUserIndex].accNo) && (accPass.value.match(regex) && confirmAccPass.value.match(regex) )) {
    allCustomer[currentUserIndex].password = accPass.value;
    allCustomer[currentUserIndex].transactionPIN = transPIN.value;
    allCustomer[currentUserIndex].registeredAcc.push(allCustomer[currentUserIndex].accNo)
    localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
   regSuccessModalContainer.style.display = "block"
  } else if (found && !(allCustomer[currentUserIndex].registeredAcc).includes(allCustomer[currentUserIndex].accNo) && !(accPass.value.match(regex) && confirmAccPass.value.match(regex) )) {
	Swal.fire({
        icon: 'error',
        title: 'Please match the format',
        text: 'Password must contain at least one number and one uppercase and lowercase letter, and at least 6 and not morethan 30 characters',
      })  
} else {
    sweet2()
  }
}



// Function that Sign in users
signIn = () => {
  let found = false;
  // allCustomer = JSON.parse(localStorage.getItem("customerPersonalDetails"));
  allCustomer.map((loads, index) => {
      if (
        allCustomer[index].accNo == loginAcc.value &&
        allCustomer[index].password == pass.value
      ) {
        localStorage.setItem("currentUserIndex", index);
        found = true;
        return
      }
    })
    allCustomer.map((loads, index) => {
    if (found && allCustomer[index].registeredAcc.length != 0) {
      window.location.href = "adexAppDashboardPage.html";
    } else if ((found == true || found == false) && allCustomer[index].registeredAcc.length == 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Operation Declined',
        text: "You haven't registered this device, kindly go back and register the device and try again ",
      })  
    } else {
      sweet2()
    }
})
    
}


//Function that changes password

changePassword = () => {
  let found = false;
  let regex = /^(?=.*[a-z])(?=[A-Z])(?=.*\d)(?=.*[#$@!%&_?])[A-Za-z\d#$@!%&_?]{6,30}$/
  for (let index = 0; index < allCustomer.length; index++) {
    if (oldPassword.value == allCustomer[currentUserIndex].password  && newPassword.value == confirmNewPassword.value && (newPassword.value.match(regex) && confirmNewPassword.value.match(regex) )) {
      found = true
      allCustomer[currentUserIndex].password = newPassword.value;
      localStorage.setItem('customerPersonalDetails', JSON.stringify(allCustomer))
      Swal.fire({
        icon: 'success',
        title: 'Great Job',
        text: 'Password changed successfully!',
      })
      break;
    } else if (oldPassword.value == allCustomer[currentUserIndex].password  && newPassword.value != confirmNewPassword.value) {
      Swal.fire({
        icon: 'warning',
        title: 'Try again',
        text: "New Password doesn't match!",
      })
    } else if (oldPassword.value == allCustomer[currentUserIndex].password  && newPassword.value == confirmNewPassword.value && !(newPassword.value.match(regex) && confirmNewPassword.value.match(regex) )) {
      Swal.fire({
        icon: 'error',
        title: 'Please match the format',
        text: 'Password must contain at least one number and one uppercase and lowercase letter, and at least 6 and not morethan 30 characters',
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Try again',
        text: 'Wrong Old Password!',
      })
    }
  }
}

confirmMatch = () => {
  if (newPassword.value === confirmNewPassword.value) {
    confirmChangePassword.style.backgroundColor = "red"
  }  
}

confirmPinMatch = () => {
  if (newPin.value === confirmNewPin.value) {
    confirmChangePin.style.backgroundColor = "red"
  }  
}


changePin = () => {
  let pinRegex = /([.\d]{4,4})/
  let found = false;
  for (let index = 0; index < allCustomer.length; index++) {
    if (oldPin.value == allCustomer[currentUserIndex].transactionPIN  && newPin.value == confirmNewPin.value) {
      found = true
      allCustomer[currentUserIndex].transactionPIN = newPin.value;
      localStorage.setItem('customerPersonalDetails', JSON.stringify(allCustomer))
      Swal.fire({
        icon: 'success',
        title: 'Great Job',
        text: 'Pin changed successfully!',
      })
      break;
    } else if (oldPin.value == allCustomer[currentUserIndex].transactionPIN  && newPin.value != confirmNewPin.value) {
      Swal.fire({
        icon: 'warning',
        title: 'Try again',
        text: "New Pin doesn't match!",
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Try again',
        text: 'Wrong Old Pin!',
      })
    }
  }
}




// Regex for validating email addresses

let emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
validateEmail = () => {
  let found = false;
  em.style.display = "block";
  if (eAddress.value.match(emailRegex)) {
    found = true;
  }
  if (found) {
    em.innerHTML = ''
    // em.style.color = 'green';
    // check.style.display = "block";
    // check.style.color = "green";
  } else {
    em.innerHTML = 'Please enter a valid email address'
    em.style.color = 'red'
    // check.style.display = "none";
  }
}



// Function that register user and push their registration details

let nameRegex = /[.\w]/
let numberRegex = /([.\d]{11,14})/
let allCustomer = [];
if (localStorage.customerPersonalDetails) {
  allCustomer = JSON.parse(localStorage.getItem("customerPersonalDetails"));
}
let toOpenAcc2 = () => {
  let foundInRegistry = false;
  for (let index = 0; index < allCustomer.length; index++) {
    if (allCustomer[index].phonenumber == mNumber.value || allCustomer[index].email == eAddress.value || allCustomer[index].bvn == bvn.value) {
      foundInRegistry = true;
    }
  }
 
  if (mNumber.value == "" && eAddress.value == "") {
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Please fill out all the field!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
    successModalContainer.style.display = "none"
  } if (foundInRegistry) {
    successModalContainer.style.display = "none"
    Swal.fire({
      icon: 'error',
      title: 'Details found!',
      text: `This Mobile Number, email or BVN has already been registered. \nKindly proceed to Register device and then Login with your details and if you need any assistance,\nWe are always here to help you. \nContact us: adeoluamole@gmail.com Telephone: 234-7033959586`,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } else if (foundInRegistry === false && mNumber.value != "" && !(eAddress.value.match(emailRegex))/*  && !(fName.value.match(nameRegex)) */) {
    em.style.display = "block";
    em.innerHTML = 'Please enter a valid email address'
    em.style.color = 'red'
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Please fill out all the field and make sure they match the requirement!',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  else if (foundInRegistry === false && mNumber.value != "" && eAddress.value.match(emailRegex) /* && (fName.value.match(nameRegex)) */) {
    sweet()
    let customerDetails = {
      phonenumber: mNumber.value,
      email: eAddress.value,
      bvn: bvn.value,
      bvnphonenumber: bvnPhoneNo.value,
      dateofbirth: dob.value,
      gender: gender.value,
      maritalStatus: mStatus.value,
      firstName: fName.value,
      middleName: mName.value,
      lastName: lName.value,
      title: pTitle.value,
      // mobileNumber: mNumber.value,
      // emailAddress: eAddress.value,
      occupation: occupation.value,
      stateOfOrigin: stateOrigin.value,
      stateOfResidence: stateResidence.value,
      address: rAddress.value,
      balance: 1000,
      charges: 10,
      password: '',
      transactionPIN: '',
      history: [],
      transferHistory: [],
      receipt: [],
      depositReceipt: [],
      billReceipt: [],
      registeredAcc: [],
      transferLimit: 200000,
      atmPIN: `${Math.floor(Math.random() * 10000)}`,
      accNo: `221${Math.floor(Math.random() * 10000000)}`,
      atmCardNumber: `5399${Math.floor(Math.random() * 10000)}${Math.floor(
        Math.random() * 10000
      )}${Math.floor(Math.random() * 10000)}`,
    };
    allCustomer.push(customerDetails);
    localStorage.setItem(
      "customerPersonalDetails",
      JSON.stringify(allCustomer)
    );
    
    // window.location.href = "adexAppOpenAccPage2.html";
    atmView();
  }
};


//Function that set daily transfer limit

changeTransLimitBg = () => {
  if (transLimit.value.length == 6) {
    transLimitBtn.style.backgroundColor = "red"
  } else if (transLimit.value.length <= 6 || transLimit.value.length >= 6 ) {
    transLimitBtn.style.backgroundColor = "gray"
  }
}

myTransferLimit = () => {
  allCustomer.map((eachUser, index) => {
    if (transLimit.value > 500000) {
      Swal.fire({
        icon: 'warning',
        title: 'Operation Declined',
        text: 'Your daily transfer limit cant exceed ₦500,000',
      })
      validateTransLimit.style.setProperty("display", "none", "important")
    } else if (transLimit.value != "" && (transLimit.value < 200000)) {
      Swal.fire({
        icon: 'warning',
        title: 'Operation Declined',
        text: 'Your daily transfer limit cant be lower than ₦200,000',
      })
      validateTransLimit.style.setProperty("display", "none", "important")
    } else if (transLimit.value == "") {
      validateTransLimit.style.setProperty("display", "block", "important")
    } else {
      allCustomer[index].transferLimit = transLimit.value
      localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
      Swal.fire({
        icon: 'success',
        title: 'Operation Successful',
        text: `Your daily transfer limit has been set to ₦${allCustomer[index].transferLimit}`,
      })
    }
  })
}


// Forgot password function

forgotLoginDetails = () => {
  myPass.innerHTML = ""
  let found = false;
  for (let index = 0; index < allCustomer.length; index++) {
    if (forgotPasswordInput.value == allCustomer[index].phonenumber || forgotPasswordInput.value == allCustomer[index].accNo) {
      found = true;
    }
  }
  if (forgotPasswordInput.value == "") {
    Swal.fire({
      icon: 'warning',
      title: '',
      text: 'This field can not be empty!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } 
  for (let index = 0; index < allCustomer.length; index++) {
    if (found && forgotPasswordInput.value != "") {
      myPass.style.display = "block";
      myPass.innerHTML = `
        <div id="userAccNo">Your Password is: ${allCustomer[index].password}</div>
      `
    } else if (!found && forgotPasswordInput.value != "") {
      Swal.fire({
        icon: 'warning',
        title: 'Try again',
        text: 'Incorrect Details!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    
  }  
}


// Function that shows user details if they dont remember it again

forgotDetails = () => {
  myInfo.innerHTML = ""
  let found = false;
  for (let index = 0; index < allCustomer.length; index++) {
    if (forgotCustomerDetails.value == allCustomer[index].phonenumber || forgotCustomerDetails.value == allCustomer[index].email) {
      found = true;
    }
  }
  if (forgotCustomerDetails.value == "") {
    Swal.fire({
      icon: 'warning',
      title: '',
      text: 'This field can not be empty!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } 
  for (let index = 0; index < allCustomer.length; index++) {
    if (found && forgotCustomerDetails.value != "") {
      myInfo.style.display = "block";
      myInfo.innerHTML = `
        <div id="userAccNo">Account Number: ${allCustomer[index].accNo}</div>
        <div id="userATMNo">ATM Card Number: ${allCustomer[index].atmCardNumber}</div>
        <div id="userATMPIN">ATM Pin: ${allCustomer[index].atmPIN}</div>
      `
    } else if (!found && forgotCustomerDetails.value != "") {
      Swal.fire({
        icon: 'warning',
        title: 'Try again',
        text: 'Incorrect Details!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    
  }  
}

// Function to change ATM PIN

let updatePIN = () => {
  for (let index = 0; index < allCustomer.length; index++) {
    if (myNewPIN.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Try again',
        text: 'The input field can not be empty!',
      })
    }else if (myNewPIN.value.length === 4 && myNewPIN.value != allCustomer[index].atmPIN) {
      allCustomer[index].atmPIN = myNewPIN.value
      localStorage.setItem('customerPersonalDetails', JSON.stringify(allCustomer));
       Swal.fire({
        icon: 'success',
        title: 'Great Job',
        text: `CardPin changed successfully to ${allCustomer[index].atmPIN}!`,
      })
      dispCardPin.innerHTML = allCustomer[index].atmPIN
    } else if (myNewPIN.value == allCustomer[index].atmPIN) {
      Swal.fire({
        icon: 'warning',
        title: 'Try again!',
        text: "The new pin cant't be the same as the old pin",
      })
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Pin must be of four (4) digit',
        text: 'CardPin not changed!',
      })
    }
  }
}

sweet = () => {
  swal.fire("Good job!", "Thank you for opening an account with us at Adex Bank, just because you choose us, we've compensate you with a total sum of ₦1,000 which can be use to perform any transactions and you can as well deposit money from your dashboard by clicking on the Deposit icon. Always check your dashboard history and transfer history for how you perform transactions. Also note that a ₦10 charges will be deducted on every transfer you make. Thanks", "success"
  ).then((result) => {
    if (result.isConfirmed) {
      // Swal.fire('Saved!', '', 'info')
      successModalContainer.style.display = "block"
    }
  })

  // successModalContainer.style.display = "block"
}


// hey = () => {
//   for (let index = 0; index < allCustomer.length; index++) {
//     alert(`${allCustomer[index].atmCardNumber.replace(/ /g,"_")}`)
//   }
// }

// Function that display and create an atm card for user
hello = () => {
  for (let index = 0; index < allCustomer.length; index++) {
  hey.innerHTML = `${allCustomer[index].atmCardNumber.toString().replace(/\d{4}(?=.)/g, '$& ')}`
  }
}

let atmView = () => {
  for (let index = 0; index < allCustomer.length; index++) {
    atmName.innerHTML = `
    ${allCustomer[index].firstName} ${allCustomer[index].middleName.substring(0,1)}. ${allCustomer[index].lastName}
    `;
    atmCardNo.innerHTML = `
    ${allCustomer[index].atmCardNumber.match(new RegExp('.{1,4}', 'g')).join(" ") }
    `;
    accName.innerHTML = `
    <h2 class="text-uppercase">account name: <br>${allCustomer[index].firstName} ${allCustomer[index].middleName} ${allCustomer[index].lastName}</h2>
    `;
    accNumber.innerHTML = `
    <h3>Account Number: ${allCustomer[index].accNo}</h3>
    `;
  }
  atm.classList.add("animate");
  setTimeout(function () {
    atm.classList.remove("animate");
  }, 5000);
};


confirmClose = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this! Make sure you have your details saved. incase you forgot to save them, you can still get it back at the register device page by clicking 'Forgot account details'",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Done'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        // 'Thank You! ',
        // '',
        // 'success'
        window.location.href = `adexAppHomePage.html`
      )
    }
  })
  // swal.fire({
  //   title: "Are you sure?",
  //   text: "Your will not be able to recover this imaginary file!",
  //   type: "warning",
  //   showCancelButton: true,
  //   confirmButtonClass: "btn-danger",
  //   confirmButtonText: "Yes, delete it!",
  //   closeOnConfirm: false
  // },
  // function(){
  //   swal.fire("Deleted!", "Your imaginary file has been deleted.", "success");
  // });
}


currentUserIndex = localStorage.getItem("currentUserIndex");


// Function that display user name, account number, balance etc on the dashboard page and also load history to the dashboard page

genDashboard = () => {
  let whereComing = false
  for (let index = 0; index < allCustomer.length; index++) {
    offcanvasName.innerHTML = ` ${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].middleName.substring(0,1)}. ${allCustomer[currentUserIndex].lastName}`
    dashboardName.innerHTML = `${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].middleName} ${allCustomer[currentUserIndex].lastName} `
    
    dashboardAccNo.innerHTML = `
    ${allCustomer[currentUserIndex].accNo} - ACTIVE
    `;
    totalBalance.innerHTML = allCustomer[currentUserIndex].balance;
    ledgerBalance.innerHTML = `
    ${totalBalance.innerHTML}
    `;

    toAccountModal.innerHTML = `${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].lastName} - ${allCustomer[currentUserIndex].accNo} <br>₦ ${allCustomer[currentUserIndex].balance}
    `
  }
  localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));


  if (allCustomer[currentUserIndex].history.length == 0) {
    historyAlert.innerHTML = `There are currently no history at the moment`
  } else {
    historyContainer.innerHTML = "";
  allCustomer[currentUserIndex].history.reverse()
  currentCustomerHistory = allCustomer[currentUserIndex].history;
  for (let index = 0; index < currentCustomerHistory.length; index++) {
    if (currentCustomerHistory[index].airtimeDay == undefined && currentCustomerHistory[index].totalAirtime == undefined && currentCustomerHistory[index].airtimeNetworkType == undefined && currentCustomerHistory[index].airtimeToNumber == undefined) {
      historyContainer.innerHTML += `
      <div class="d-grid w-100 px-3 py-3 container shadow rounded rounded-2" style="border-left: 4px solid green !important; font-size: 12px" id="failedTrans">
      <div class="d-flex justify-content-between">
      <div>${currentCustomerHistory[index].depositDay}</div>
      <div class="d-flex gap-1">
      <div> ₦</div>
      <div>${currentCustomerHistory[index].totalDeposit}</div>
      </div>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
      <div class="d-flex gap-2">
      <div> ${currentCustomerHistory[index].transactionID}${[index + 1]}</div>
      <div>${currentCustomerHistory[index].depositAccount} </div>
      </div>
      `
    } else if (currentCustomerHistory[index].totalAirtime == undefined && currentCustomerHistory[index].airtimeToNumber == undefined){
      historyContainer.innerHTML += `
      <div class="d-grid w-100 px-3 py-3 container shadow rounded rounded-2" style="border-left: 4px solid red; font-size: 12px" id="failedTrans">
      <div class="d-flex justify-content-between">
      <div>${currentCustomerHistory[index].airtimeDay}</div>
      <div class="d-flex gap-1">
      <div>- ₦</div>
      <div>${currentCustomerHistory[index].chargesAmount}</div>
      </div>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
      <div class="d-flex gap-2">
      <div> ${currentCustomerHistory[index].transactionID}${[index + 1]}</div>
      <div> </div>
      </div>
        <div>${currentCustomerHistory[index].airtimeNetworkType}</div>
      </div>
      </div>
      `
    } else {
      historyContainer.innerHTML += `
      <div class="d-grid w-100 px-3 py-3 container shadow rounded rounded-2" style="border-left: 4px solid red; font-size: 12px" id="failedTrans">
      <div class="d-flex justify-content-between">
      <div>${currentCustomerHistory[index].airtimeDay}</div>
      <div class="d-flex gap-1">
      <div>- ₦</div>
      <div>${currentCustomerHistory[index].totalAirtime}</div>
      </div>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
      <div class="d-flex gap-2">
      <div> ${currentCustomerHistory[index].transactionID}${[index + 1]}</div>
      <div>${currentCustomerHistory[index].airtimeNetworkType} </div>
      </div>
        <div>${currentCustomerHistory[index].airtimeToNumber}</div>
      </div>
      </div>
      `
    }
   
  }
  }
};




// Function that display transfer history onload of the transferHistory Page

transferHistoryHistory = () => {
  window.location.href = "adexAppTransferHistoryHistoryPage.html"
}

loadTransferHistoryHistory = () => {
  if (allCustomer[currentUserIndex].history.length == 0) {
    historyAlert.innerHTML = `There are currently no transfer history at the moment`
  } else {
    historyContainer.innerHTML = "";
  allCustomer[currentUserIndex].transferHistory.reverse()
  currentCustomerHistory = allCustomer[currentUserIndex].transferHistory;
  for (let index = 0; index < currentCustomerHistory.length; index++) {
    historyContainer.innerHTML += `
    <div class="d-grid w-100 px-3 py-3 container shadow rounded rounded-2" style="border-left: 4px solid red; font-size: 12px; cursor: pointer" id="failedTrans" onclick="displayMyReceipt(${index})" data-bs-toggle="modal"
    data-bs-target="#exampleModal">
    <div class="d-flex justify-content-between">
    <div>${currentCustomerHistory[index].airtimeDay}</div>
    <div class="d-flex gap-1">
    <div>- ₦</div>
    <div>${currentCustomerHistory[index].totalAirtime}</div>
    </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between">
    <div class="d-flex gap-2">
    <div> ${currentCustomerHistory[index].transactionID}${[index + 1]}</div>
    <div>${currentCustomerHistory[index].airtimeNetworkType} </div>
    </div>
      <div>${currentCustomerHistory[index].airtimeToNumber}</div>
    </div>
    <div class="d-flex justify-content-between">
    <div>${currentCustomerHistory[index].descriptions}</div>
    <div><i class="fas fa-hand-pointer text-black" style="font-size: 8px"></i> Tap for receipt</div>
    </div>
    </div>
    `
  }
  }
}

pasteDepositValue = (param) => {
  depositInput.value += param
}


pasteDepositPin = (param) => {
  inpTry.value += param
  confirmTxt.innerHTML = ""
    if (inpTry.value == allCustomer[currentUserIndex].transactionPIN) {
      allCustomer[currentUserIndex].balance = Number(allCustomer[currentUserIndex].balance) + Number(depositInput.value);

      const dayss = new Date();
      let depositHistory = {
        depositAccount: allCustomer[currentUserIndex].accNo,
        totalDeposit: depositInput.value,
        depositDay:  dayss.toDateString() + " " + dayss.toLocaleTimeString(),
        transactionID: `DS${Math.floor(Math.random() * 1000000)}/CD/SELF`,
        history: [],
      }

      const eachDepositReceipt = {
        transactionDay: dayss.toDateString(),
        transactionType: `Self`,
        transactionDate: dayss.toDateString() + " " + dayss.toLocaleTimeString(),
        transactionCreditAccount: allCustomer[currentUserIndex].accNo,
        transactionStatus: `Success`,
        transactionAmount: depositInput.value,
        receipt: [],
      }



      allCustomer[currentUserIndex].history.push(depositHistory);
      allCustomer[currentUserIndex].depositReceipt.push(eachDepositReceipt);
      localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))
      successModalContainer.style.display = "block";
      // window.location.reload()
      confirmModalContainer.style.display = "none"
      successConfirm.innerHTML = `Your deposit of ${depositInput.value} into your account ${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].lastName} ${allCustomer[currentUserIndex].accNo} was successful`

    } else if (inpTry.value.length == 4 && inpTry.value != allCustomer[currentUserIndex].transactionPIN) {
      confirmTxt.innerHTML = `Operation failed Try again. Make sure you are entering the right Pin`
      inpTry.value = ""
    }
}




// Function that generate Deposit Receipt on Deposit Receipt Page
genDepositReceipt = () => {
  currentDepositReceipt = allCustomer[currentUserIndex].depositReceipt;
  depositReceiptContainer.innerHTML = "";
  currentDepositReceipt.map((eachUser, index) => {
    depositReceiptContainer.innerHTML = `
    <div class="text-center p-1 text-white mt-3" style="background-color: rgb(235, 0, 0)">
      ${currentDepositReceipt[index].transactionDay}
    </div>
    <div class="py-2"
      style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transType">
      <span class="fw-bold">transaction type:</span>
      ${currentDepositReceipt[index].transactionType}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transDate">
      <span class="fw-bold">transaction date:</span>
      ${currentDepositReceipt[index].transactionDate}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transCreditAcc">
      <span class="fw-bold">credit account:</span>
      ${currentDepositReceipt[index].transactionCreditAccount}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transStatus">
      <span class="fw-bold">status:</span>
      ${currentDepositReceipt[index].transactionStatus}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transAmount">
      <span class="fw-bold">amount:</span>
      ₦${currentDepositReceipt[index].transactionAmount}
    </div>
    <div class="mt-3 px-3" style="font-size: 8px">
      Disclaimer: Your transaction has been successfully processed. Note, however,
      that completion of any deposit may be affected by other factors including but
      not limited to transmission errors. all transaction are subject to Adex
      confirmation and fraud proof verification
    </div>
    `
      
   })
}
    

openDepositModal = () => {
  depositModalContainer.style.display = "block"
}

closeDepositMyModal = () => {
  depositModalContainer.style.display = "none"
  confirmModalContainer.style.display = "none"
}

// Function to deposit money

 deposit = () => {

   if (depositInput.value > 1000000 || Number(allCustomer[currentUserIndex].balance) + Number(depositInput.value) > 1000000) {
    confirmAmount.innerHTML =  "Maximum deposit amount reached. This type of account can't hold more than one million naira (₦1,000,000)"
   } else {
    confirmModalContainer.style.display = "block"
    depositModalContainer.style.display = "none"
  //    allCustomer[currentUserIndex].balance = Number(allCustomer[currentUserIndex].balance) + Number(depositInput.value)

  //  localStorage.setItem("customerPersonalDetails",
  //    JSON.stringify(allCustomer));
  //    totalBalance.innerHTML = allCustomer[currentUserIndex].balance;
  //    ledgerBalance.innerHTML = `
  //    ${totalBalance.innerHTML} `;
   }
 }


// Function that display name on the offcanvas in all pages and also display name, account number and balance on the small modal when click on select an account

genAirtime = () => {
  allCustomer.map((eachUser, index) => {
    offcanvasName.innerHTML = ` ${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].middleName.substring(0,1)}. ${allCustomer[currentUserIndex].lastName}`
    
    
    toAirtimetoTransferModal.innerHTML = `${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].lastName} - ${allCustomer[currentUserIndex].accNo} <br>₦ ${allCustomer[currentUserIndex].balance}
    `
  })
}


myPro = () => {
  allCustomer.map((eachUser, index) => {
    offcanvasName.innerHTML = ` ${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].middleName.substring(0,1)}. ${allCustomer[currentUserIndex].lastName}`

    myProfileName.innerHTML = ` ${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].middleName.substring(0,1)}. ${allCustomer[currentUserIndex].lastName}`
  })
}


// Function that display bvn on the bvn page 

genBVN = () => {
  allCustomer.map((eachUser, index) => {
    bvnDiv.innerHTML = `
    ${allCustomer[currentUserIndex].bvn}
    `
  })
}


// Function that select network type on Airtime page

networkSelect = (parameterize) => {
  shege.innerHTML = parameterize
  shege.style.display = "none"
  if (parameterize == '9mobile') {
    mySelect1.innerHTML = `<i class="fas fa-check-circle fs-4 text-white"></i>`;
    mySelect2.innerHTML = ``;
    mySelect3.innerHTML = ``;
    mySelect4.innerHTML = ``;
  } else if (parameterize == 'airtel') {
    mySelect2.innerHTML = `<i class="fas fa-check-circle fs-4 text-white"></i>`;
    mySelect1.innerHTML = ``;
    mySelect3.innerHTML = ``;
    mySelect4.innerHTML = ``;
  } else if (parameterize == 'MTN') {
    mySelect3.innerHTML = `<i class="fas fa-check-circle fs-4 text-white"></i>`;
    mySelect1.innerHTML = ``;
    mySelect2.innerHTML = ``;
    mySelect4.innerHTML = ``;
  } else if (parameterize == 'glo') {
    mySelect4.innerHTML = `<i class="fas fa-check-circle fs-4 text-white"></i>`;
    mySelect1.innerHTML = ``;
    mySelect2.innerHTML = ``;
    mySelect3.innerHTML = ``;
  }
 

}


// Function that display the confirm modal on Airtime page and also check if the in  field are fill

let nevers = false;
confirmAirtimeTrans = (netType) => {
  if (airtimeTo.value == "" || shege.innerHTML == "" || airtimeAmount.value == "" || clicked == false) {
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Select an Account, select airtime mode and Fill!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } else if (airtimeAmount.value > allCustomer[currentUserIndex].balance) {
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Insufficient fund!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } else if (airtimeAmount.value < 100) {
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Amount too low!, minimum amount is ₦100',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } else {
    nevers = true;
  }
  if (nevers) {
    confirmModalContainer.style.display = "block"
    confirmTxt.innerHTML = `You are about to recharge ₦${airtimeAmount.value} to ${airtimeTo.value}`
  }
}

checkFor = () => {
  if (airtimeTo.value != "" && airtimeAmount.value != "") {
    airtimeContinueBtn.style.backgroundColor = "rgb(235, 0, 0)"
  } else {
    airtimeContinueBtn.style.backgroundColor = "gray"
  }
}



// Function that deduct the amount entered from the main balance during Airtime recharge and also push airtime history to the history page 

pasteValue = (param) => {
  // document.querySelectorAll('.input-digit').forEach(el => el.onkeyup = e => e.target.value && el.nextElementSibling.focus())
  inpTry.value += param;
  confirmTxt.innerHTML = "";
    if (inpTry.value == allCustomer[currentUserIndex].transactionPIN) {
      allCustomer[currentUserIndex].balance = Number(allCustomer[currentUserIndex].balance) - Number(airtimeAmount.value);

      const dayss = new Date();
      let airtimeHistory = {
        airtimeNetworkType: shege.innerHTML,
        airtimeToNumber: airtimeTo.value,
        totalAirtime: airtimeAmount.value,
        airtimeDay:  dayss.toDateString() + " " + dayss.toLocaleTimeString(),
        transactionID: `AT${Math.floor(Math.random() * 10000)}/`,
        history: [],
      }
  
      allCustomer[currentUserIndex].history.push(airtimeHistory);
      localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))
      successModalContainer.style.display = "block";
      confirmModalContainer.style.display = "none"
      successConfirm.innerHTML = `Your airtime purchase to ${airtimeTo.value} was successful`

    } else if (inpTry.value.length == 4 && inpTry.value != allCustomer[currentUserIndex].transactionPIN) {
      confirmTxt.innerHTML = `Operation failed Try again. Make sure you are entering the right Pin`
      inpTry.value = ""
    }

}


let foundAccNo = false;
checkForThisAccNo = () => {
  allCustomer.map((eachUser, index) => {
    if ((allCustomer[index].accNo).match(accountTo.value)) {
      foundAccNo = true;
      return
    } 
    if (foundAccNo) {
      accountNameTo.innerHTML = `${allCustomer[index].firstName} ${allCustomer[index].lastName}`
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Account not found! but you can still proceed',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  })
  
}

// Function that check whether transfer input field are not empty and also open modal to enter pin for transfer 

let notSure = false;
confirmTransferTrans = (netType) => {
  if (banks.value == "" || transAmountTo.value == "" || accountTo.value == "" ||  pasteClicked == false) {
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Select an Account, select airtime mode and Fill!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } else if (transAmountTo.value > allCustomer[currentUserIndex].balance) {
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Insufficient fund!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } else if (transAmountTo.value < 50) {
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Amount too low!, minimum amount is ₦50',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } else {
    notSure = true;
  }
  if (notSure) {
    confirmModalContainer.style.display = "block"
    confirmTxt.innerHTML = `You are about to transfer ₦${transAmountTo.value} to ${accountTo.value}`
  }
}


// Function that deduct the amount entered from the main balance during money transfer and also push transfer history to the transfer history page and general history page, so also push receipt 

pasteValueTrans = (param) => {
  // document.querySelectorAll('.input-digit').forEach(el => el.onkeyup = e => e.target.value && el.nextElementSibling.focus())
  inpTry.value += param
  confirmTxt.innerHTML = ""
    if (inpTry.value == allCustomer[currentUserIndex].transactionPIN) {
      allCustomer[currentUserIndex].balance = Number(allCustomer[currentUserIndex].balance) - Number(transAmountTo.value) - Number(allCustomer[currentUserIndex].charges);;

      const dayss = new Date();
      let myTransferHistory = {
        airtimeNetworkType: banks.value,
        airtimeToNumber: accountTo.value,
        totalAirtime: transAmountTo.value,
        descriptions: descriptn.value,
        airtimeDay:  dayss.toDateString() + " " + dayss.toLocaleTimeString(),
        transactionID: `NIP TRA/ ${Math.floor(Math.random() * 10000)}/`,
        history: [],
      }

      let chargeHistory = {
        airtimeNetworkType: `Transfer fee`,
        // airtimeToNumber: airtimeTo.value,
        // totalAirtime: airtimeAmount.value,
        chargesAmount:  allCustomer[currentUserIndex].charges,
        airtimeDay:  dayss.toDateString() + " " + dayss.toLocaleTimeString(),
        transactionID: `AT${Math.floor(Math.random() * 10000)}/`,
        history: [],
      }


      const transferReceipt = {
        transactionDay: dayss.toDateString(),
        transactionType: `Inter-Bank Transfer`,
        transactionDate: dayss.toDateString() + " " + dayss.toLocaleTimeString(),
        transactionDebitAccount: allCustomer[currentUserIndex].accNo,
        transactionCreditAccount: accountTo.value,
        transactionBeneficiary: accountNameTo.innerHTML,
        transactionBank: banks.value,
        transactionNarration: descriptn.value,
        transactionStatus: `Success`,
        transactionAmount: transAmountTo.value,
        receipt: [],
      }

      allCustomer[currentUserIndex].history.push(myTransferHistory);
      allCustomer[currentUserIndex].transferHistory.push(myTransferHistory);
      allCustomer[currentUserIndex].history.push(chargeHistory);
      allCustomer[currentUserIndex].receipt.push(transferReceipt);
      localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))

      successModalContainer.style.display = "block";
      confirmModalContainer.style.display = "none"
      successConfirm.innerHTML = `Your transfer of   ₦${transAmountTo.value} to ${accountTo.value} (${banks.value}:) was successful`

    } else if (inpTry.value.length == 4 && inpTry.value != allCustomer[currentUserIndex].transactionPIN) {
      confirmTxt.innerHTML = `Operation failed Try again. Make sure you are entering the right Pin`
      inpTry.value = ""
    }

}


// Function that generate each receipt on the history page

displayMyReceipt = (userIndex) => {
  currentReceipt = allCustomer[currentUserIndex].receipt;
    currentReceipt.reverse()
    currentReceipt.map((eachUser, index) => {
      receiptDiv.innerHTML = `
    <div class="text-center p-1 text-white mt-3" style="background-color: rgb(235, 0, 0)">
    ${currentReceipt[userIndex].transactionDay}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transType">
      <span class="fw-bold">transaction type:</span> ${currentReceipt[userIndex].transactionType}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transDate">
    <span class="fw-bold">transaction date:</span> ${currentReceipt[userIndex].transactionDate}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transDebitAcc">
    <span class="fw-bold">debit account:</span> ${currentReceipt[userIndex].transactionDebitAccount}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transCreditAcc">
    <span class="fw-bold">credit account:</span> ${currentReceipt[userIndex].transactionCreditAccount}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transBeneficiary">
    <span class="fw-bold">beneficiary:</span> ${currentReceipt[userIndex].transactionBeneficiary}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transBank">
    <span class="fw-bold">bank:</span> ${currentReceipt[userIndex].transactionBank}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transNarration">
    <span class="fw-bold">narration:</span> ${currentReceipt[userIndex].transactionNarration}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transStatus">
    <span class="fw-bold">status:</span> ${currentReceipt[userIndex].transactionStatus}
    </div>
    <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transAmount">
    <span class="fw-bold">amount:</span> ₦${currentReceipt[userIndex].transactionAmount}
    </div>
    <div class="mt-3 px-3" style="font-size: 8px">
      Disclaimer: Your transaction has been successfully processed.
      Note, however, that completion of any transfer may be affected by other factors including but not limited to transmission errors.
      all transaction are subject to Adex confirmation and fraud proof verification
    </div>
`
    })
  
}



// genEachReceipt = () => {
//   window.location.href = "receipt.html"
// }


// Function that generate receipt on Receipt Page
genReceipt = () => {
  currentReceipt = allCustomer[currentUserIndex].receipt;
  receiptContainer.innerHTML = "";
  currentReceipt.map((eachUser, index) => {
        receiptContainer.innerHTML = `
        <div class="text-center p-1 text-white mt-3" style="background-color: rgb(235, 0, 0)">
        ${currentReceipt[index].transactionDay}
        </div>
        <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transType">
              <span class="fw-bold">transaction type:</span> ${currentReceipt[index].transactionType}
            </div>
            <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transDate">
            <span class="fw-bold">transaction date:</span> ${currentReceipt[index].transactionDate}
            </div>
            <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transDebitAcc">
            <span class="fw-bold">debit account:</span> ${currentReceipt[index].transactionDebitAccount}
            </div>
            <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transCreditAcc">
            <span class="fw-bold">credit account:</span> ${currentReceipt[index].transactionCreditAccount}
            </div>
            <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transBeneficiary">
            <span class="fw-bold">beneficiary:</span> ${currentReceipt[index].transactionBeneficiary}
            </div>
            <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transBank">
            <span class="fw-bold">bank:</span> ${currentReceipt[index].transactionBank}
            </div>
            <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transNarration">
            <span class="fw-bold">narration:</span> ${currentReceipt[index].transactionNarration}
            </div>
            <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transStatus">
            <span class="fw-bold">status:</span> ${currentReceipt[index].transactionStatus}
            </div>
            <div class="py-2" style="border-bottom: 1px solid lightgray; border-bottom-style: dashed" id="transAmount">
            <span class="fw-bold">amount:</span> ₦${currentReceipt[index].transactionAmount}
            </div>
            <div class="mt-3 px-3" style="font-size: 8px">
              Disclaimer: Your transaction has been successfully processed.
              Note, however, that completion of any transfer may be affected by other factors including but not limited to transmission errors.
              all transaction are subject to Adex confirmation and fraud proof verification
            </div>
        
        `
   })
}




// Function that delete the pin user enter if they wish to delete

clearValue = () => {
  inpTry.value = inpTry.value.substring(0, inpTry.value.length - 1);
}

clearDepositValue = () => {
  depositInput.value = depositInput.value.substring(0, depositInput.value.length - 1);
}

// function that paste the name, account number and balance on airtime page modal

let clicked = false
pasteYourValue = () => {
  clicked = true
  allCustomer.map((eachUserPaste, index) => {
  airtimeMNumber.innerHTML = `${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].lastName} - ${allCustomer[currentUserIndex].accNo}`
  })
}


// function that paste the name, account number and balance on transfer page modal

let pasteClicked = false
pasteValueTransToModal = () => {
  pasteClicked = true
  allCustomer.map((eachUserPaste, index) => {
  airtimeMNumber.innerHTML = `${allCustomer[currentUserIndex].firstName} ${allCustomer[currentUserIndex].lastName} - ${allCustomer[currentUserIndex].accNo}`
  })
}
// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
// });


// The footer icon on every page functions

showTrans = (parameter) => {
  if (parameter == 1) {
    window.location.href = `adexAppDashboardPage.html`
  } else if (parameter == 2) {
    window.location.href = `adexAppAirtimePage.html`
  } else if (parameter == 3) {
    window.location.href = `adexAppTransferPage.html`
  } else if (parameter == 4) {
    window.location.href = `adexAppBillPage.html`
  } else if (parameter == 14) {
    window.location.href = `adexAppSettingsPage.html`
  }
}

// Function that show or hide balance and ledger balance on the dashboard page

let switchType = () => {
  if (switchInput.checked == true) {
    balanceLabel.innerHTML = "Hide balance";
    for (let index = 0; index < allCustomer.length; index++) {
      ledgerBalance.innerHTML = `
      ${allCustomer[currentUserIndex].balance}
      ` 
      totalBalance.innerHTML = `${allCustomer[currentUserIndex].balance}`
    }
  } else {
    for (let index = 0; index < allCustomer.length; index++) {
      totalBalance.innerHTML = "******"
    }
    balanceLabel.innerHTML = "Show balance";
    ledgerBalance.innerHTML = "Hidden"
  }
};



// allCustomer = JSON.parse(localStorage.getItem("customerPersonalDetails"));
// let currentUserIndex = localStorage.getItem("currentUserIndex");
// let toOpenAcc3 = () => {

//   if (bvn.value == "" && bvnPhoneNo.value == "") {
//     alert("empty here");
//   } else {
//     // for (let index = 0; index < allCustomer.length; index++) {
//     //   localStorage.setItem("currentUserIndex", index);

//     // }
//     let customerBVNDetails = {
//       bvn: bvn.value,
//       bvnphonenumber: bvnPhoneNo.value,
//       dateofbirth: dob.value,
//     };
//     allCustomer.push(customerBVNDetails)
//   localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
//   window.location.href = "adexAppOpenAccPage3.html";
//   }

// };

// let toOpenAcc4 = () => {
//   for (let index = 0; index < array.length; index++) {
//     localStorage.setItem("currentUserIndex", index);
//   }
//   if (gender.value == "" && mStatus.value == "") {
//     alert("empty");
//   } else {
//     let customerPersonalDetails = {
//       gender: gender.value,
//       maritalStatus: mStatus.value,
//       firstName: fName.value,
//       middleName: mName.value,
//       lastName: lName.value,
//       title: pTitle.value,
//       mobileNumber: mNumber.value,
//       emailAddress: eAddress.value
//     };
//     array.push(customerPersonalDetails)
//     localStorage.setItem("customerPersonalDetails", JSON.stringify(array));
//     window.location.href = "adexAppOpenAccPage4.html";
//   }

// };

// let toOpenAcc5 = () => {

//   if (occupation.value == "" && rAddress.value == "") {

//   } else {
//     for (let index = 0; index < array.length; index++) {
//       localStorage.setItem("currentUserIndex", index);

//     }
//     let customerAddressDetails = {
//       occupation: occupation.value,
//       stateOfOrigin: stateOrigin.value,
//       stateOfResidence: stateResidence.value,
//       address: rAddress.value,
//       accNo: `221${Math.floor(Math.random() * 10000000)}`,
//       atmCardNumber: `5399 ${Math.floor(Math.random() * 10000)} ${Math.floor(Math.random() * 10000)} ${Math.floor(Math.random() * 10000)}`

//     };
//     array.push(customerAddressDetails)
//   localStorage.setItem("customerPersonalDetails", JSON.stringify(array));
//   atmName.innerHTML = `
//   ${array.firstName}
//   `
//   atmCardNo.innerHTML = `
//   ${array.atmCardNumber}
//   `
//   }

//   atm.classList.add("animate");
//   setTimeout(function(){
//     atm.classList.remove("animate");
//   }, 5000);
// };


// Function that select user registration type (token, card or otp)

let userSelect = (regType) => {
  if (regType == "token") {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      text: 'This might seems not available at the moment, try another means',
      footer: '<a href="">Why do I have this issue?</a>'
    })
    mySelect1.innerHTML = `<i class="fas fa-check-circle fs-4 text-danger"></i>`;
    mySelect2.innerHTML = ``;
    mySelect3.innerHTML = ``;
    registrationType.innerHTML = `
    <div id="accNo" class="">Account: ${allCustomer[currentUserIndex].accNo}</div>
        <div class="mb-4 mt-3">
          <label for="validationCustom02" class="form-label fw-bold"
            >Token</label
          >
          <input
            type="number"
            pattern="/^-?\d+\.?\d*$/"
            onKeyPress="if(this.value.length==6) return false;"
            pattern="[0-9]*"
            maxlength="6"
            class="login-input form-control form-control-lg PAN-for-user-select"
            id="PAN"
            value=""
            required
            disabled
            placeholder="Enter Token"
          />
        </div>
        <div class="mb-4">
          <label for="validationCustom02" class="form-label fw-bold"
            >Card PIN</label
          >
          <input
            type="password"
            pattern="[0-9]*"
            inputmode="numeric"
            maxlength="4"
            class="login-input form-control form-control-lg pin-for-user-select"
            placeholder="Enter Card PIN"
            id="toKenPIN"
            disabled
            onkeyup="pinOk()"
          />
        </div>
    `;
  } else if (regType == "card") {
    mySelect2.innerHTML = `<i class="fas fa-check-circle  fs-4 text-danger"></i>`;
    mySelect1.innerHTML = ``;
    mySelect3.innerHTML = ``;
    registrationType.innerHTML = `
    <div id="accNo" class="">Account: ${allCustomer[currentUserIndex].accNo}</div>
        <div class="mb-4 mt-3">
          <label for="validationCustom02" class="form-label fw-bold"
            >CardPAN</label
          >
          <input
            type="number"
            pattern="/^-?\d+\.?\d*$/"
            onKeyPress="if(this.value.length==6) return false;"
            pattern="[0-9]*"
            maxlength="6"
            class="login-input form-control form-control-lg PAN-for-user-select"
            id="PAN"
            value=""
            required
            placeholder="Enter last six digits of card"
          />
        </div>
        <div class="mb-4">
          <label for="validationCustom02" class="form-label fw-bold"
            >Card PIN</label
          >
          <input
            type="password"
            pattern="[0-9]*"
            inputmode="numeric"
            maxlength="4"
            class="login-input form-control form-control-lg pin-for-user-select"
            placeholder="Enter Card PIN"
            id="cardPIN"
            onkeyup="pinOk()"
          />
        </div>
    `;
  } else {
    mySelect3.innerHTML = `<i class="fas fa-check-circle fs-4 text-danger"></i>`;
    mySelect1.innerHTML = ``;
    mySelect2.innerHTML = ``;
    registrationType.innerHTML = `
    <div id="accNo" class="regAccNo">Account: ${allCustomer[currentUserIndex].accNo}</div>
        <div class="mb-4 mt-3">
          <label for="validationCustom02" class="form-label fw-bold"
            >CardPAN</label
          >
          <input
            type="number"
            pattern="/^-?\d+\.?\d*$/"
            onKeyPress="if(this.value.length==6) return false;"
            pattern="[0-9]*"
            maxlength="6"
            class="login-input form-control form-control-lg PAN-for-user-select"
            id="PAN"
            value=""
            required
            placeholder="Enter last six digits of card"
          />
        </div>
        <div class="mb-4">
          <label for="validationCustom02" class="form-label fw-bold"
            >Card PIN</label
          >
          <input
            type="password"
            pattern="[0-9]*"
            inputmode="numeric"
            maxlength="4"
            class="login-input form-control form-control-lg pin-for-user-select"
            placeholder="Enter Card PIN"
            id="OTPPIN"
            onkeyup="pinOk()"
          />
        </div>
    `;
  }
};




// Function that open or select contact from the phone 

function openContactPicker() {
  const supported = "contacts" in navigator && "ContactsManager" in window;

  if (supported) {
    getContacts();
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Try again',
      text: 'Contact list API not supported!. Only for android mobile chrome and chrome version > 80',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}
async function getContacts() {
  const props = ["name", "email", "tel"];
  const opts = { multiple: true };

  try {
    const contacts = await navigator.contacts.select(props, opts);
    Swal.fire({
      // icon: 'warning',
      // title: 'Try again',
      text: `${JSON.stringify(contacts)}`,
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  } catch (err) {
    Swal.fire({
      icon: 'warning',
      // title: 'Try again',
      text: `${err}`,
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}


// Function that closes both Airtime and transfer modal when clicked on the close icon

closeMyModal = () => {
  successModalContainer.style.display = "none"
  confirmModalContainer.style.display = "none"
      window.location.reload()
}



// Function that closes the modal i created when user click anywhere on the window

// window.onclick = function(event) {
//   if (event.target == successModalContainer) {
//     successModalContainer.style.display = "none";
//   }
// }
// window.onclick = function(event) {
//   if (event.target == confirmModalContainer) {
//     confirmModalContainer.style.display = "none";
//   }
// }



// Function that shows users device

let devices = () => {
  myDevice.innerHTML = navigator.userAgent;
};

  
