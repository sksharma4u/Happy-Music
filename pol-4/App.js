const loginForm = document.getElementById("login-form");
const codeInput = document.getElementById("codeInput");
const baseUrl = `http:/localhost:3000/`;
let mobileNumber;

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    mobileNumber = parseInt(document.getElementById("phoneInput").value);
    if (isNaN(mobileNumber)) {
        alert("Invalid Phone Number");
    } else {
        //process
        const response = await sendVerificationCode(mobileNumber);
        if (response.status === "pending") {

        }
    }
});

async function sendVerificationCode(mobileNumber) {
    const res = await axios.post(baseUrl + `send-verification-otp`, {
        mobileNumber,
    })
    if (res.status === 200) {
        return res.data.verification;
    } else {
        return res.data;
    }

}