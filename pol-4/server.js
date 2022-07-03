const express = require("express")
const app = express();

const port = 3000;

const accountSid = "ACdb985113b69606d0c71feadf58adeb3c";
const authToken = "067d9ee8f2b2a4c0b8031193bc04d80c";
const serviceID = "VAa155ea4a95b90e0545db0941310553a2";
const client = require('twilio')(accountSid, authToken);

app.use(express.static("pol-4"));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index2.html")
});

app.post('/send-verification-otp', (req, res) => {

    const [mobileNumber] = req.body;
    client.verify.services(serviceId)
        .verifications
        .create({ to: "+91" + mobileNumber, channel: 'sms' })
        .then(verification => {
            return res.status(200).json({ verification });
        })
        .catch((error) => {
            return res.status(400).json({ error });
        });
});
app.post('/verify-otp', (req, res) => {
    const { mobileNumber, code } = req.body;

    client.verify.services(serviceID)
        .verificationChecks
        .create({ to: '+91' + mobileNumber, code })
        .then(verification_check => {
            return res.status(200).json({ verification_check });
        })
        .catch((error) => {
            return res.status(400).json({ error });
        });

})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});