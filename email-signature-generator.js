let imageInput = "https://neuralimpact.ca/wp-content/uploads/2012/07/sharka.png";
let signOffInput = "Regards, Sharka";
let nameInput = "Sharka Chobot";
let titleInput = "Chief Transformation Officer";
let phoneInput = "604-987-4275";
let countryCode = "1"
let phoneLink = "+16049874275"
let emailInput = "sharka@neuralimpact.ca";

let timezoneInput = "Pacific Daylight Time (UTC-7)";
let quoteInput = "Fear doesn't shut you down; it wakes you up";
let authorInput = "Veronica Roth";

let quoteLine = quoteInput + " - " + authorInput;
let quotePadding = 10;

let logoInput = "https://teamassets.neuralimpact.ca/wp-content/uploads/2022/02/Logo-for-Email.png"

function phoneFormat(phone) {
    return phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, phone.length);

}




/* Team Images */


function submitInfo() {
    imageInput = portraitUrl.src;
    signOffInput = document.getElementById('signOff').value;
    nameInput = document.getElementById('name').value;
    titleInput = document.getElementById('title').value;
    countryCode = document.getElementById('countryCode').value;
    phoneInput = phoneFormat(document.getElementById('phoneNumber').value);
    phoneLink = "+" + document.getElementById('countryCode').value + document.getElementById('phoneNumber').value;
    emailInput = document.getElementById('emailAddress').value;
    timezoneInput = document.getElementById('timeZone').value;
    quoteInput = document.getElementById('quote').value;
    authorInput = document.getElementById('author').value;
    if (quoteInput === "") {
        quotePadding = 0;
        quoteLine = "";
    } else {
        quotePadding = 10;
        quoteLine = quoteInput + " - " + authorInput;
    }
    logoInput = logoUrl.src;

    previewSignature();
}




// Dropbox
// https://www.dropbox.com/s/g2pwm9mpu6kgsqv/Parker%20Pup.png?dl=0
// https://www.dropbox.com/s/g2pwm9mpu6kgsqv/Parker%20Pup.png?raw=1

// Google Drive
// https://drive.google.com/file/d/1oa5VABzp0-us5YMzg6N6m64y_L1gZ4mB/view?usp=sharing
// https://drive.google.com/uc?export=view&id=1oa5VABzp0-us5YMzg6N6m64y_L1gZ4mB

// One Drive
// https://1drv.ms/u/s!Am2vlsJxeudHgRTHAt0LgA2OHQhQ
// https://dsm01pap001files.storage.live.com/y4mJyoUn3z2aeB4lrEACSbRlv7gwYQQpddv1i1xD_ZOw1HObS-bS0l_6ykM5l2t0DqQpRmkaN5y61Jlocf2_ixh6OcWG1dj0S2UqsZILYbY4Df2o2jDandHs6sTgwbgkMEwUDwx0hfZG8F-cV0nK_HP8KfzZwHcBPVQoprV6V1Xc4V4loA8MhT4HonznpbvbEaw?width=5000&height=5000&cropmode=none





// /* Only for Image uploads*/
// function currateImageLink(imageLink) {
//     if (imageLink.includes('dropbox')) {
//         imageLink = imageLink.replace("dl=0", "raw=1");
//         return imageLink;
//     }
//     if (imageLink.includes('drive.google')) {
//         imageLink = imageLink.replace("/file/d/", "/uc?export=view&id=");
//         imageLink = imageLink.replace("/view?usp=sharing", "");
//         return imageLink;
//     }
//     if (imageLink.includes('storage.live.com')) {
//         return imageLink;
//     }
// }






function generateSignature() {
    const signatureOutput = `

        <table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;max-width:450px;" emb-background-style="" width="450" direction="ltr">
    <tbody>
        <tr>
            <td>
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="padding-top:7.5px;padding-bottom: 30px;">
                                <span style="color:#000;text-decoration:none;font-size:16px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;line-height:18px;mso-line-height-rule:exactly;">
                                    ${signOffInput}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="padding-right:15px;vertical-align:top;font-family:Arial, Helvetica, sans-serif;width:145px;">
                                <table style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td style="height:80px;">
                                                <img src="
                                                ${imageInput}
                                                " height="128" height="128" alt="logo" style="display:block;border:0px;border-radius: 0px;height:128px;width:128px;" border="0" nosend="1">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style="vertical-align:top;font-family:Arial, Helvetica, sans-serif;border: 0px;padding-left:15px;padding-bottom:14px;">
                                <table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" width="100%" emb-background-style="">
                                    <tbody>
                                        <tr>
                                            <td style="color:#000;text-decoration:none;font-size:18.2px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;line-height:18px;mso-line-height-rule:exactly;padding-bottom:5px;">
                                                <span style="color:#000;text-decoration:none;font-size:18.2px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;line-height:18px;mso-line-height-rule:exactly;">
                                                    ${nameInput}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="color:#000000;text-decoration:none;font-size:14.3px;font-family:Arial, Helvetica, sans-serif;font-weight:normal;line-height:18px;mso-line-height-rule:exactly;padding-bottom:20px;">
                                                ${titleInput}</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" height="23" style="color:#000000;text-decoration:none;font-size:13px;font-family:Arial, Helvetica, sans-serif;font-weight:normal;mso-line-height-rule:exactly;vertical-align:middle; valign:middle;">
                                                <img src="https://teamassets.neuralimpact.ca/wp-content/uploads/2022/02/Logo_Phone.png" valign="middle" height="18" width="18" alt="phone" style="display:inline;border:0px;border-radius: 0px;vertical-align:middle;" border="0" nosend="1"><span width=15px style="width:15px;">&nbsp&nbsp&nbsp</span>
                                                <a valign="middle" height="18" href="tel:${phoneLink}" style="display:inline;color:#000000;text-decoration:none;font-size:13px;font-family:Arial, Helvetica, sans-serif;font-weight:normal;mso-line-height-rule:exactly;vertical-align:middle;">
                                                    +${countryCode} ${phoneInput}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" height="23" style="color:#000000;text-decoration:none;font-size:13px;font-family:Arial, Helvetica, sans-serif;font-weight:normal;mso-line-height-rule:exactly;vertical-align:middle; valign:middle;">
                                                <img src="https://teamassets.neuralimpact.ca/wp-content/uploads/2022/02/Logo_Email.png" valign="middle" height="18" width="18" alt="email" style="display:inline;border:0px;border-radius: 0px;vertical-align:middle;" border="0" nosend="1"><span width=15px style="width:15px;">&nbsp&nbsp&nbsp</span>
                                                <a valign="middle" height="18" href="mailto:${emailInput}" style="display:inline;color:#000000;text-decoration:none;font-size:13px;font-family:Arial, Helvetica, sans-serif;font-weight:normal;mso-line-height-rule:exactly;vertical-align:middle;">
                                                    ${emailInput}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" height="23" style="color:#000000;text-decoration:none;font-size:13px;font-family:Arial, Helvetica, sans-serif;font-weight:normal;mso-line-height-rule:exactly;vertical-align:middle; valign:middle;">
                                                <img src="https://teamassets.neuralimpact.ca/wp-content/uploads/2022/02/Logo_Location.png" valign="middle" height="18" width="18" alt="timezone" style="display:inline;border:0px;border-radius: 0px;vertical-align:middle; " border="0" nosend="1"><span width=15px style="width:15px;">&nbsp&nbsp&nbsp</span>
                                                <span valign="middle" height="18" style="display:inline-block;color:#000000;text-decoration:none;font-size:13px;font-family:Arial, Helvetica, sans-serif;font-weight:normal;mso-line-height-rule:exactly;vertical-align:middle; padding-top:3px;">
                                                    <em><strong style="color:#5EA5D6;">Time Zone:</strong> ${timezoneInput}</em></span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="padding-top:0x; padding-bottom:10px;">
                                <span style="color:#000;text-decoration:none;font-size:12px;font-family:Arial, Helvetica, sans-serif;font-style:italic;font-weight:normal;line-height:9px;mso-line-height-rule:exactly;">
                                    ${quoteLine}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" width="450" style=" border-collapse: collapse;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;direction: ltr;vertical-align:middle; valign:middle;" emb-background-style="">
                    <tbody>
                        <tr>
                            <td style="padding-top:7.5px; border-top: 1px solid #000;border-width: 1px 0px 0px;border-top-style: solid;" width="325">
                                <img height="51" src=${logoInput} style="border-radius: 4px;display: block;border: none; height: 51px; max-height: 51px !important;vertical-align:middle; valign:middle;">
                            </td>
                            <td style="padding-top:7.5px; border-top: 1px solid #000;border-width: 1px 0px 0px;border-top-style: solid;">
                                
                                    <a href="https://www.linkedin.com/company/neural-impact/" target="_blank" style="border: 0;display: inline-block">
                                    <img width="30" height="30" src="https://teamassets.neuralimpact.ca/wp-content/uploads/2022/02/Logo_LinkedIn-Icon.png" style="border-radius: 4px;display: block;border: none;width: 30px;max-width: 30px !important; height: 30px; max-height: 30px !important;vertical-align:middle; valign:middle;">
                                    </a>
                                    <span width=6px style="width:6px;">&nbsp</span>
                                    <a href="https://www.youtube.com/channel/UCawa_HRn4wd3N2cVFmSQ5sQ" target="_blank" style="border: 0;display: inline-block">
                                    <img width="30" height="30" src="https://teamassets.neuralimpact.ca/wp-content/uploads/2022/02/Logo_Youtube-Icon.png" style="border-radius: 4px;display: block;border: none;width: 30px;max-width: 30px !important; height: 30px; max-height: 30px !important;vertical-align:middle; valign:middle;">
                                    </a>
                                    <span width=6px style="width:6px;">&nbsp</span>
                                    <a href="https://neuralimpact.ca/" target="_blank" style="border: 0;display: inline-block">
                                    <img width="30" height="30" src="https://teamassets.neuralimpact.ca/wp-content/uploads/2022/02/Logo_Website-Icon.png" style="border-radius: 4px;display: block;border: none;width: 30px;max-width: 30px !important; height: 30px; max-height: 30px !important;vertical-align:middle; valign:middle;">
                                    </a>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>

            </td>
        </tr>
    </tbody>
</table>



      `;
    return signatureOutput;
}





function previewSignature() {
    document.getElementById("signature-container").innerHTML = generateSignature();
    document.querySelector('#signature-preview').scrollIntoView()
}

function publishSignature() {
    submitInfo();
    document.getElementById('popup-display').style.display = "block";
    document.getElementById("popup-code").innerHTML = generateSignature();
}
document.querySelector('#previewSignature').addEventListener('click', submitInfo)
document.querySelector('#publishSignature').addEventListener('click', publishSignature)


function closePopup() {
    document.getElementById('popup-display').style.display = "none";
}


function copyCode() {
    let range = document.createRange();
    range.selectNode(document.getElementById("popup-code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect

    let tooltip = document.getElementById("myTooltip");
    tooltip.style.opacity = "1";
}


function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.style.opacity = "0";
}

/-------------------------- Image Input --------------------------/
const portraitField = document.querySelector("#portrait-input");
const logoField = document.querySelector("#logo-input");

let portraitUrl = new Image();
let logoUrl = new Image();

portraitField.addEventListener("change", getImageURL);
logoField.addEventListener("change", getImageURL);

function getImageURL() {
    let element = this.getAttribute('data-attribute');
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        if (element == 'portrait') {
            portraitUrl.src = uploaded_image
            console.log(portraitUrl)
        } else if (element == 'logo') {
            logoUrl.src = uploaded_image
            console.log(logoUrl)
        }

    });
    reader.readAsDataURL(this.files[0]);
}

function uploadFile(target) {
    let element = target.getAttribute('data-attribute');
    document.getElementById(`${element}-name`).innerHTML = target.files[0].name;
}

/-------------------------- Draw Image to Canvas --------------------------/








previewSignature();