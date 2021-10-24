const { google } = require('googleapis');
const path = require('path')
const fs = require('fs');


const CLIENT_ID = '490918671975-hi0gvukljol2a2dmupqpnp1glkrvsvnk.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//041Yp2RF9UYfXCgYIARAAGAQSNwF-L9IrNbLS4JUcNuUG_bFP-XEEHZLkwTfDHusGik3oNaCMunvAu_bjeiovEO018PnEtUFXaJg';

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})

const filePath = path.join(__dirname, 'hello.txt')


async function uploadFile() {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'hello.txt',
                mimeType: 'text/plain',
                writersCanShare: false
            },
            media: {
                mimeType: 'text/plain',
                body: fs.createReadStream(filePath),
            },
        })

        console.log(response.data);
    }
    catch (error) {
        console.log(error.message);
    }
}

uploadFile();