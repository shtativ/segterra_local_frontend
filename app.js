//https://app.mailgun.com
//nzhyrkova@biarum.com
//Nzhyrkova

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('name_1');
});

app.post('/send', (req, res) => {
    const emailShiping = `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html>
        <head>
        <meta http-equiv="content-type" content="text/html" charset="UTF-8">
            <meta name="x-apple-disable-message-reformatting">
            <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
            <style>
            body {
            margin: 0 auto;
            }
            
            table {
            border-collapse: collapse;
            border-spacing: 0;
            min-width: 290px;
            width: 100%;
            margin: 0 auto;
            padding: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            }
            
            td {
            margin: 0;
            padding: 0;
            }
            
            p {
            margin: 0;
            padding: 0;
            }
            
            img {
            outline: none;
            -ms-interpolation-mode: bicubic;
            display: block;
            margin: 0 auto;
            padding: 0;
            }
            
            .table {
            margin-top: 20px;
            max-width: 600px;
            }
            
            .text {
            mso-line-height-rule: exactly;
            font-style: normal;
            letter-spacing: normal;
            color: #000000;
            }
            
            .link {
            color: #12a0d2;
            text-decoration: none;
            font-family: "Open Sans", Arial, sans-serif;
            }
            
            .table-wrap,
            .table-footer {
            background-color: #eef6f8;
            }
            
            .table-header {
            background-color: #12a0d2;
            }
            
            .header-image {
            padding-top: 16px;
            }
            
            .header-text {
            font-family: Arvo, Arial, sans-serif;
            font-size: 17px;
            color: #ffffff;
            line-height: 17px;
            }
            
            .table-content-wrap {
            background-color: #ffffff;
            padding-top: 55px;
            padding-bottom: 75px;
            }
            
            .table-content-title {
            font-family: Arvo, Arial, sans-serif;
            font-size: 28px;
            line-height: 34px;
            padding-bottom: 7px;
            }
            
            .table-content-subtitle {
            font-family: "Open Sans", Arial, sans-serif;
            font-size: 22px;
            line-height: 30px;
            padding-bottom: 25px;
            }
            
            .table-content-text {
            font-family: "Open Sans", Arial, sans-serif;
            font-size: 18px;
            line-height: 24px;
            padding-bottom: 45px;
            }
            
            .table-button-pb {
            padding-bottom: 70px;
            }
            
            .table-content-button {
            font-family: "Open Sans", Arial, sans-serif;
            display: block;
            width: 230px;
            height: 60px;
            background-color: #12a0d2;
            text-decoration: none;
            color: #ffffff;
            line-height: 60px;
            font-weight: 700;
            font-size: 14px;
            text-transform: uppercase;
            -webkit-transition: 0.3s;
                -o-transition: 0.3s;
                transition: 0.3s;
            }
            
            .table-content-button-pt {
            margin-top: 12px;
            }
            
            .table-content-button:hover {
            background-color: #1cb8ef!important;
            }
            
            .table-content-link {
            display: block;
            font-size: 14px;
            line-height: 26px;
            }
            
            .table-footer-wrap {
            padding-top: 60px;
            padding-bottom: 100px;
            }
            
            .table-footer-wrap .table-content-title {
            padding-bottom: 7px;
            }
            
            .footer-text {
            font-family: "Open Sans", Arial, sans-serif;
            color: #818181;
            font-size: 12px;
            line-height: 21px;
            padding-bottom: 40px;
            }
            
            .footer-image {
            width: 32px;
            height: 32px;
            padding-bottom: 22px;
            }
            
            .table-padding-both {
            padding-left: 10px;
            padding-right: 10px;
            }
            
            /**/
            
            .table-content-text-460 {
            padding-left: 70px;
            padding-right: 70px;
            padding-bottom: 35px;
            }
            
            .separator {
            background-color: #babcbe;
            height: 1px;
            width: 100%;
            }
            
            .table-order-wrap {
            padding-left: 32px;
            padding-right: 32px;
            padding-top: 35px;
            }
            
            .table-title-shipping {
            padding-bottom: 5px;
            }
            
            .table-title-order {
            padding-bottom: 14px;
            }
            
            .table-content-address {
            padding-top: 9px;
            }
            
            .table-content-row {
            padding-bottom: 14px;
            padding-top: 14px;
            border-bottom: 1px solid #babcbe;
            }
            
            .table-content-row--first {
            padding-top: 7px;
            }
            
            .table-content-row span {
            float: right;
            padding-left: 10px;
            }
            
            .table-content-row p {
            font-size: 14px;
            }
            
            .table-content--last {
            border-bottom: none;
            font-weight: 700;
            font-size: 22px;
            padding-bottom: 20px;
            }
            
            .table-content--last p {
            font-weight: normal;
            padding-top: 8px;
            line-height: 24px;
            }
            
            .drugs-row {
            border-bottom: 1px solid #babcbe;
            padding-bottom: 14px;
            padding-top: 14px;
            }
            
            .drugs-row--last {
            border-bottom: none;
            }
            
            .drugs-image {
            width: 66px;
            height: 66px;
            float: left;
            padding-right: 18px;
            }
            
            .drugs-name {
            font-family: "Open Sans", Arial, sans-serif;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            padding-top: 18px;
            float: left;
            color: #000000;
            }
            
            .bonus-img-wrap {
            padding-top: 27px;
            padding-bottom: 60px;
            }
            
            .bonus-img {
            max-width: 100%;
            width: auto;
            height: auto;
            }
            
            .bonus-img--mobile {
            max-width: 100%;
            width: auto;
            height: auto;
            display: none;
            }
            
            @media screen and (max-width: 420px){
            .table {
            margin-top: 0 !important;
            }
            .table-header {
            height: 90px !important;
            }
            .header-text {
            display: none  !important;
            }
            .header-image {
            padding-top: 15px !important;
            height: 60px !important;
            }
            .header-image img {
            height: 60px !important;
            }
            .table-content-wrap {
            padding-top: 50px !important;
            }
            .table-order-wrap {
            padding-left: 10px !important;
            padding-right: 10px !important;
            }
            .table-content-text-460 {
            padding-left: 10px !important;
            padding-right: 10px !important;
            padding-bottom: 40px !important;
            }
            .separator {
            margin-left: 10px !important;
            padding-right: 10px !important;
            }
            .table-mobile-center {
            text-align: center !important;
            }
            .bonus-img {
            display: none !important;
            }
            .bonus-img--mobile {
            display: block !important;
            }
            }
            </style>
        </head>
        <body style="margin: 0 auto;">
        <table align="center" border="0" bgcolor="#eef6f8" cellpadding="0" cellspacing="0" width="100%" class="table-wrap" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #eef6f8;">
        <tbody>
        <tr>
        <td style="margin: 0;padding: 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600px" class="table" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin-top: 20px;max-width: 600px;">
        <tbody>
        <tr>
        <td align="center" class="table-header-wrap" style="margin: 0;padding: 0;">
        <table align="center" bgcolor="#eef6f8" border="0" cellpadding="0" cellspacing="0" width="100%" height="110px" class="table-header" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #12a0d2;">
        <tbody>
        <tr>
        <td align="center" height="50" class="header-image" style="margin: 0;padding: 0;padding-top: 16px;">
        <img height="50" src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/email-logo.png" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;">
        </td>
        </tr>
        <tr>
        <td align="center" class="text header-text" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #ffffff;font-family: Arvo, Arial, sans-serif;font-size: 17px;line-height: 17px;">
        Precisely Personalized Supplements
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        <tr>
        <td class="table-content-wrap" style="margin: 0;padding: 0;background-color: #ffffff;padding-top: 55px;padding-bottom: 75px;">
        <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" class="table-content" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
        <tbody>
        <tr>
        <td align="center" class="text table-content-title table-padding-both" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 7px;padding-left: 10px;padding-right: 10px;">
        Your order has been shipped
        </td>
        </tr>
        <tr>
        <td align="center" class="text table-content-subtitle" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 22px;line-height: 30px;padding-bottom: 25px;">
        Tracking #: 12345678ABC
        </td>
        </tr>
        <tr>
        <td align="center" class="text table-content-text table-padding-both" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 18px;line-height: 24px;padding-bottom: 45px;padding-left: 10px;padding-right: 10px;">
        Good news, [FIRST NAME]—your order is on its way!
        </td>
        </tr>
        <tr>
        <td align="center" class="table-button-pb" style="margin: 0;padding: 0;padding-bottom: 70px;">
        <a target="_blank" href="" class="table-content-button table-content-button-pt" style="font-family: &quot;Open Sans&quot;, Arial, sans-serif;display: block;width: 230px;height: 60px;background-color: #12a0d2;text-decoration: none;color: #ffffff;line-height: 60px;font-weight: 700;font-size: 14px;text-transform: uppercase;-webkit-transition: 0.3s;-o-transition: 0.3s;transition: 0.3s;margin-top: 12px;">Track my order</a>
        </td>
        </tr>
        <tr>
        <td align="center" class="text table-content-title" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 7px;">
        Have any questions?
        </td>
        </tr>
        <tr>
        <td align="center" style="margin: 0;padding: 0;">
        <a target="_blank" href="mailto:help@hellorigr.com" class="link table-content-link" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;display: block;font-size: 14px;line-height: 26px;">help@hellorigr.com</a>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        <tr>
        <td class="table-footer-wrap" style="margin: 0;padding: 0;padding-top: 60px;padding-bottom: 100px;">
        <table align="center" bgcolor="#eef6f8" border="0" cellpadding="0" cellspacing="0" width="100%" class="table-footer" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #eef6f8;">
        <tbody>
        <tr>
        <td align="center" class="text table-content-title" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 7px;">
        Join us on Instagram
        </td>
        </tr>
        <tr>
        <td align="center" style="margin: 0;padding: 0;">
        <a href="https://www.instagram.com/hellorigr/" target="_blank">
        <img src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/email-inst.png" alt="" class="footer-image" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;width: 32px;height: 32px;padding-bottom: 22px;"></a>
        </td>
        </tr>
        <tr>
        <td align="center" class="text footer-text" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #818181;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 12px;line-height: 21px;padding-bottom: 40px;">
        Rigr Centrum™ <br>
        1 Giralda Farms, Madison, NJ  07940
        </td>
        </tr>
        <tr>
        <td align="center" class="text footer-text" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #818181;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 12px;line-height: 21px;padding-bottom: 40px;">
        ©2019 Pfizer, Inc. All rights reserved.
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </body>
        </html>
    `;
    const output = `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html>
            <head>
            <meta http-equiv="content-type" content="text/html" charset="UTF-8">
            <meta name="x-apple-disable-message-reformatting">
            <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
            <style>
            body {
            margin: 0 auto;
            }
            
            table {
            border-collapse: collapse;
            border-spacing: 0;
            min-width: 290px;
            width: 100%;
            margin: 0 auto;
            padding: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            }
            
            td {
            margin: 0;
            padding: 0;
            }
            
            p {
            margin: 0;
            padding: 0;
            }
            
            img {
            outline: none;
            -ms-interpolation-mode: bicubic;
            display: block;
            margin: 0 auto;
            padding: 0;
            }
            
            .table {
            margin-top: 20px;
            max-width: 600px;
            }
            
            .text {
            mso-line-height-rule: exactly;
            font-style: normal;
            letter-spacing: normal;
            color: #000000;
            }
            
            .link {
            color: #12a0d2!important;
            text-decoration: none;
            font-family: "Open Sans", Arial, sans-serif;
            }
            
            .table-wrap,
            .table-footer {
            background-color: #eef6f8;
            }
            
            .table-header {
            background-color: #12a0d2;
            }
            
            .header-image {
            padding-top: 16px;
            }
            
            .header-text {
            font-family: Arvo, Arial, sans-serif;
            font-size: 17px;
            color: #ffffff;
            line-height: 17px;
            }
            
            .table-content-wrap {
            background-color: #ffffff;
            padding-top: 55px;
            padding-bottom: 75px;
            }
            
            .table-content-title {
            font-family: Arvo, Arial, sans-serif;
            font-size: 28px;
            line-height: 34px;
            padding-bottom: 7px;
            }
            
            .table-content-subtitle {
            font-family: "Open Sans", Arial, sans-serif;
            font-size: 22px;
            line-height: 30px;
            padding-bottom: 25px;
            }
            
            .table-content-text {
            font-family: "Open Sans", Arial, sans-serif;
            font-size: 18px;
            line-height: 24px;
            padding-bottom: 45px;
            }
            
            .table-button-pb {
            padding-bottom: 70px;
            }
            
            .table-content-button {
            font-family: "Open Sans", Arial, sans-serif;
            display: block;
            width: 230px;
            height: 60px;
            background-color: #12a0d2;
            text-decoration: none;
            color: #ffffff;
            line-height: 60px;
            font-weight: 700;
            font-size: 14px;
            text-transform: uppercase;
            -webkit-transition: 0.3s;
                -o-transition: 0.3s;
                transition: 0.3s;
            }
            
            .table-content-button-pt {
            margin-top: 12px;
            }
            
            .table-content-button:hover {
            background-color: #1cb8ef!important;
            }
            
            .table-content-link {
            display: block;
            font-size: 14px;
            line-height: 26px;
            }
            
            .table-footer-wrap {
            padding-top: 60px;
            padding-bottom: 100px;
            }
            
            .table-footer-wrap .table-content-title {
            padding-bottom: 7px;
            }
            
            .footer-text {
            font-family: "Open Sans", Arial, sans-serif;
            color: #818181;
            font-size: 12px;
            line-height: 21px;
            padding-bottom: 40px;
            }
            
            .footer-image {
            width: 32px;
            height: 32px;
            padding-bottom: 22px;
            }
            
            .table-padding-both {
            padding-left: 10px;
            padding-right: 10px;
            }
            
            /**/
            
            .table-content-text-460 {
            padding-left: 70px;
            padding-right: 70px;
            padding-bottom: 35px;
            }
            
            .separator {
            background-color: #babcbe;
            height: 1px;
            width: 100%;
            }
            
            .table-order-wrap {
            padding-left: 32px;
            padding-right: 32px;
            padding-top: 35px;
            }
            
            .table-title-shipping {
            padding-bottom: 5px;
            }
            
            .table-title-order {
            padding-bottom: 14px;
            }
            
            .table-content-address {
            padding-top: 9px;
            }
            
            .table-content-row {
            padding-bottom: 14px;
            padding-top: 14px;
            border-bottom: 1px solid #babcbe;
            }
            
            .table-content-row--first {
            padding-top: 7px;
            }
            
            .table-content-row span {
            float: right;
            padding-left: 10px;
            }
            
            .table-content-row p {
            font-size: 14px;
            }
            
            .table-content--last {
            border-bottom: none;
            font-weight: 700;
            font-size: 22px;
            padding-bottom: 20px;
            }
            
            .table-content--last p {
            font-weight: normal;
            padding-top: 8px;
            line-height: 24px;
            }
            
            .drugs-row {
            border-bottom: 1px solid #babcbe;
            padding-bottom: 14px;
            padding-top: 14px;
            }
            
            .drugs-row--last {
            border-bottom: none;
            }
            
            .drugs-image {
            width: 66px;
            height: 66px;
            float: left;
            padding-right: 18px;
            }
            
            .drugs-name {
            font-family: "Open Sans", Arial, sans-serif;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            padding-top: 18px;
            float: left;
            color: #000000;
            }
            
            .bonus-img-wrap {
            padding-top: 27px;
            padding-bottom: 60px;
            }
            
            .bonus-img {
            max-width: 100%;
            width: auto;
            height: auto;
            }
            
            .bonus-img--mobile {
            max-width: 100%;
            width: auto;
            height: auto;
            display: none;
            }
            
            @media screen and (max-width: 420px){
            .table {
            margin-top: 0 !important;
            }
            .table-header {
            height: 90px !important;
            }
            .header-text {
            display: none  !important;
            }
            .header-image {
            padding-top: 15px !important;
            height: 60px !important;
            }
            .header-image img {
            height: 60px !important;
            }
            .table-content-wrap {
            padding-top: 50px !important;
            }
            .table-order-wrap {
            padding-left: 10px !important;
            padding-right: 10px !important;
            }
            .table-content-text-460 {
            padding-left: 10px !important;
            padding-right: 10px !important;
            padding-bottom: 40px !important;
            }
            .separator {
            margin-left: 10px !important;
            padding-right: 10px !important;
            }
            .table-mobile-center {
            text-align: center !important;
            }
            .bonus-img {
            display: none !important;
            }
            .bonus-img--mobile {
            display: block !important;
            }
            }
            </style>
            </head>
        <body style="margin: 0 auto;">
            <table align="center" border="0" bgcolor="#eef6f8" cellpadding="0" cellspacing="0" width="100%" class="table-wrap" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #eef6f8;">
            <tbody>
            <tr>
            <td style="margin: 0;padding: 0;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600px" class="table" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin-top: 20px;max-width: 600px;">
            <tbody>
            <tr>
            <td align="center" class="table-header-wrap" style="margin: 0;padding: 0;">
            <table align="center" bgcolor="#eef6f8" border="0" cellpadding="0" cellspacing="0" width="100%" height="110px" class="table-header" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #12a0d2;">
            <tbody>
            <tr>
            <td align="center" height="50" class="header-image" style="margin: 0;padding: 0;padding-top: 16px;">
            <img height="50" src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/email-logo.png" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;">
            </td>
            </tr>
            <tr>
            <td align="center" class="text header-text" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #ffffff;font-family: Arvo, Arial, sans-serif;font-size: 17px;line-height: 17px;">
            Precisely Personalized Supplements
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            <tr>
            <td class="table-content-wrap" style="margin: 0;padding: 0;background-color: #ffffff;padding-top: 55px;padding-bottom: 75px;">
            <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" class="table-content" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
            <tbody>
            <tr>
            <td align="center" class="text table-content-title table-padding-both" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 7px;padding-left: 10px;padding-right: 10px;">
            Your order is complete
            </td>
            </tr>
            <tr>
            <td align="center" class="text table-content-subtitle" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 22px;line-height: 30px;padding-bottom: 25px;">
            Order #: 12345678ABC
            </td>
            </tr>
            <tr>
            <td align="center" class="text table-content-text table-content-text-460" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 18px;line-height: 24px;padding-bottom: 35px;padding-left: 70px;padding-right: 70px;">
            First-time orders typically ship within 2-3 days from the date they're placed. You will receive a shipping confirmation and tracking number when your order ships. Thank you!
            </td>
            </tr>
            <tr>
            <td class="separator" style="margin: 0;padding: 0;background-color: #babcbe;height: 1px;width: 100%;"></td>
            </tr>
            <tr>
            <td class="table-order-wrap" style="margin: 0;padding: 0;padding-left: 32px;padding-right: 32px;padding-top: 35px;">
            <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" class="table-order" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
            <tbody>
            <tr>
            <td align="left" class="text table-content-title table-mobile-center table-title-shipping" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 5px;">
            Shipping To
            </td>
            </tr>
            <tr>
            <td align="left" class="text table-content-text table-content-address table-mobile-center" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 18px;line-height: 24px;padding-bottom: 45px;padding-top: 9px;">
            123 Main Street, Apt. 123
            <br>Boston, MA 01234 US
            </td>
            </tr>
            <tr>
            <td align="left" class="text table-content-title table-mobile-center table-title-order" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 14px;">
            Order summary
            </td>
            </tr>
            <tr>
            <td align="left" class="text table-content-text table-content-row table-content-row--first" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 18px;line-height: 24px;padding-bottom: 14px;padding-top: 7px;border-bottom: 1px solid #babcbe;">
            My plan (monthly)
            <span style="float: right;padding-left: 10px;">$49.00</span>
            </td>
            </tr>
            <tr>
            <td align="left" class="text table-content-text table-content-row" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 18px;line-height: 24px;padding-bottom: 14px;padding-top: 14px;border-bottom: 1px solid #babcbe;">
            <span style="float: right;padding-left: 10px;">FREE</span>
            Shipping <br>
            
            </td>
            </tr>
            <tr>
            <td align="left" class="text table-content-text table-content-row" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 18px;line-height: 24px;padding-bottom: 14px;padding-top: 14px;border-bottom: 1px solid #babcbe;">
            <span style="float: right;padding-left: 10px;">$0.00</span>
            Taxes
            <p style="margin: 0;padding: 0;font-size: 14px;">Calculated after shipping</p>
            </td>
            </tr>
            <tr>
            <td align="left" class="text table-content-text table-content-row table-content--last" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 22px;line-height: 24px;padding-bottom: 20px;padding-top: 14px;border-bottom: none;font-weight: 700;">
            <span style="float: right;padding-left: 10px;">$49</span>
            Order total:
            <p style="margin: 0;padding: 0;font-size: 14px;font-weight: normal;padding-top: 8px;line-height: 24px;">Renews every 30 days. Cancel anytime. <a href="#" class="link table-content-link" style="text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;display: block;font-size: 14px;line-height: 26px;color: #12a0d2!important;">More information</a></p>
            </td>
            </tr>
            <tr>
            <td class="drugs-row" style="margin: 0;padding: 0;border-bottom: 1px solid #babcbe;padding-bottom: 14px;padding-top: 14px;">
            <img class="drugs-image" src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/bcomplex.jpg" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;width: 66px;height: 66px;float: left;padding-right: 18px;">
            <b class="drugs-name" style="font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-weight: 700;font-size: 18px;line-height: 24px;padding-top: 18px;float: left;color: #000000;">B Complex</b>
            </td>
            </tr>
            <tr>
            <td class="drugs-row" align="left" style="margin: 0;padding: 0;border-bottom: 1px solid #babcbe;padding-bottom: 14px;padding-top: 14px;">
            <img class="drugs-image" src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/Glutathione.jpg" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;width: 66px;height: 66px;float: left;padding-right: 18px;">
            <b class="drugs-name" style="font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-weight: 700;font-size: 18px;line-height: 24px;padding-top: 18px;float: left;color: #000000;">Glutathione</b>
            </td>
            </tr>
            <tr>
            <td class="drugs-row drugs-row--last" align="left" style="margin: 0;padding: 0;border-bottom: none;padding-bottom: 14px;padding-top: 14px;">
            <img class="drugs-image" src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/omega3.jpg" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;width: 66px;height: 66px;float: left;padding-right: 18px;">
            <b class="drugs-name" style="font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-weight: 700;font-size: 18px;line-height: 24px;padding-top: 18px;float: left;color: #000000;">Omega 3</b>
            </td>
            </tr>
            <tr>
            <td class="bonus-img-wrap" style="margin: 0;padding: 0;padding-top: 27px;padding-bottom: 60px;">
            <img class="bonus-img" src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/bonus.jpg" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;max-width: 100%;width: auto;height: auto;">
            <img class="bonus-img--mobile" src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/bonus-mobile.jpg" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: none;margin: 0 auto;padding: 0;max-width: 100%;width: auto;height: auto;">
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            <tr>
            <td align="center" class="table-button-pb" style="margin: 0;padding: 0;padding-bottom: 70px;">
            <a target="_blank" href="" class="table-content-button" style="font-family: &quot;Open Sans&quot;, Arial, sans-serif;display: block;width: 230px;height: 60px;background-color: #12a0d2;text-decoration: none;color: #ffffff;line-height: 60px;font-weight: 700;font-size: 14px;text-transform: uppercase;-webkit-transition: 0.3s;-o-transition: 0.3s;transition: 0.3s;">Log in to my account</a>
            </td>
            </tr>
            <tr>
            <td align="center" class="text table-content-title" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 7px;">
            Have any questions?
            </td>
            </tr>
            <tr>
            <td align="center" style="margin: 0;padding: 0;">
            <a target="_blank" href="mailto:help@hellorigr.com" class="link table-content-link" style="text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;display: block;font-size: 14px;line-height: 26px;color: #12a0d2!important;">help@hellorigr.com</a>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            <tr>
            <td class="table-footer-wrap" style="margin: 0;padding: 0;padding-top: 60px;padding-bottom: 100px;">
            <table align="center" bgcolor="#eef6f8" border="0" cellpadding="0" cellspacing="0" width="100%" class="table-footer" style="border-collapse: collapse;border-spacing: 0;min-width: 290px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #eef6f8;">
            <tbody>
            <tr>
            <td align="center" class="text table-content-title" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 7px;">
            Join us on Instagram
            </td>
            </tr>
            <tr>
            <td align="center" style="margin: 0;padding: 0;">
            <a href="https://www.instagram.com/hellorigr/" target="_blank">
            <img src="http://arabesk-dance.by/wp-content/themes/arabesk/img/rigr/email-inst.png" alt="" class="footer-image" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;width: 32px;height: 32px;padding-bottom: 22px;"></a>
            </td>
            </tr>
            <tr>
            <td align="center" class="text footer-text" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #818181;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 12px;line-height: 21px;padding-bottom: 40px;">
            Rigr Centrum™ <br>
            1 Giralda Farms, Madison, NJ  07940
            </td>
            </tr>
            <tr>
            <td align="center" class="text footer-text" style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #818181;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 12px;line-height: 21px;padding-bottom: 40px;">
            ©2019 Pfizer, Inc. All rights reserved.
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
        </body>
        </html>
    `;
    
    const hubspot = `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html" charset="UTF-8">
    <meta name="x-apple-disable-message-reformatting">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap" rel="stylesheet">
    <style>
        body {
            margin:      0 auto;
            font-family: 'Open Sans', Arial, sans-serif;
            color:       #232d37;
        }
    
        table {
            border-collapse:  collapse;
            border-spacing:   0;
            width:            100%;
            margin:           0 auto;
            padding:          0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
    
        td, p {
            margin:  0;
            padding: 0;
        }
    
        img {
            outline:                none;
            -ms-interpolation-mode: bicubic;
            display:                block;
            margin:                 0;
            padding:                0;
            max-width:              100%;
            height:                 auto;
        }
    
        a {
            color:           #12a0d2;
            text-decoration: none;
            font-family:     "Open Sans", Arial, sans-serif;
        }
    
        a:hover {
            color: #1ebeda !important;
        }
    
        .wrapper {
            background: #f5f5f5;
        }
    
        .wrapper_td {
            padding: 60px 0 200px;
        }
    
        .email {
            background: #ffffff;
            width:      100%;
            max-width:  600px;
            min-width:  290px;
        }
    
        .email-inner {
            padding: 41px 60px 18px;
        }
    
        .logo {
            padding-bottom: 54px;
        }
    
        .paragraph {
            padding-bottom: 23px;
            font-size:      14px;
            line-height:    20px;
            letter-spacing: 0.14px;
            font-family:    "Open Sans", Arial, sans-serif;
        }
    
        .paragraph-name {
            padding-bottom: 20px;
        }
    
        .paragraph-pt {
            padding-top: 35px;
        }
    
        .paragraph-pb {
            padding-bottom: 32px;
        }
    
        .paragraph-bold {
            font-weight:    bold;
            font-size:      14px;
            letter-spacing: 0.14px;
        }
    
        .section {
            border-color: #e9f0f5;
            border-style: solid;
            border-width: 0 0 1px 0;
            padding:      20px 0 20px;
        }
    
        .section_bt {
            border-width: 1px 0 1px 0;
        }
    
        .multiple-image {
            border-radius: 6px;
            float:         left;
            width:         140px;
            height:        140px;
        }
    
        .section__text {
            padding-left:   170px;
            font-size:      14px;
            line-height:    20px;
            letter-spacing: 0.14px;
            font-family:    "Open Sans", Arial, sans-serif;
        }
    
        .section__info {
            padding-left:   170px;
            padding-top:    10px;
            font-weight:    600;
            font-size:      12px;
            letter-spacing: 0.14px;
            font-family:    "Open Sans", Arial, sans-serif;
        }
    
        .section__title {
            font-size:      12px;
            font-style:     italic;
            letter-spacing: 0.14px;
            font-family:    "Open Sans", Arial, sans-serif;
        }
    
        .button-wrap {
            padding-top:    36px;
            padding-bottom: 55px;
        }
    
        .button {
            background-color: #00aaff;
            text-decoration:  none;
            display:          inline-block;
            color:            #ffffff;
            border-radius:    3px;
            box-sizing:       border-box;
            font-size:        16px;
            font-weight:      600;
            line-height:      36px;
            cursor:           pointer;
            border:           none;
            width:            auto;
            height:           36px;
            padding:          0 20px;
            letter-spacing:   0.26px;
            font-family:      "Open Sans", Arial, sans-serif;
        }
    
        .button:hover {
            color:            #ffffff !important;
            background-color: #46c3ff !important;
        }
    
        .text--small {
            font-size:      12px;
            padding-bottom: 20px;
            letter-spacing: 0.14px;
            font-family:    "Open Sans", Arial, sans-serif;
        }
    
        .footer-link {
            display:     block;
            padding-top: 3px;
        }
    
        .footer {
            padding: 40px 16px 17px;
        }
    
        .footer-icon {
            padding: 0 5px;
            display: inline-block;
            cursor:  pointer;
        }
    
        .link-unsubscribe {
            color:         #b9c3cd;
            border-bottom: 1px solid #b9c3cd;
        }
    
        .link-unsubscribe:hover {
            color:         #b9c3cd !important;
            border-bottom: none !important;
        }
    
        .footer-icon img {
            width:   26px;
            height:  26px;
            display: block;
        }
    
        .footer-text {
            font-size:      12px;
            color:          #b9c3cd;
            letter-spacing: 0.14px;
            font-family:    "Open Sans", Arial, sans-serif;
        }
    
        .mobile-br {
            display: inline-block;
            padding-bottom: 2px;
        }
    
        .semibold {
            font-weight: 600;
        }
    
        /**/
    
        .single-image {
            width: 100%;
            border-radius: 6px;
            display: block;
            height: 250px;
        }
    
        .logo-single {
            padding-bottom: 60px;
        }
    
        .paragraph-single {
            padding-top: 35px;
        }
    
        @media screen and (max-width: 450px) {
            .wrapper_td {
                padding: 0 0 20px !important;
            }
        
            .email-inner {
                padding-left:  16px !important;
                padding-right: 16px !important;
            }
        
            .logo {
                padding-bottom: 40px !important;
            }
        
            .paragraph-pb {
                padding-bottom: 27px !important;
            }
        
            .paragraph-pt {
                padding-top: 30px !important;
            }
        
            .section {
                padding: 30px 0 30px !important;
            }
        
            .multiple-image {
                float:  none !important;
                width:  100% !important;
                height: 180px !important;
            }
        
            .section__text {
                padding-left: 0 !important;
                padding-top:  27px !important;
            }
        
            .section__info {
                padding-left: 0 !important;
            }
        
            .mobile-br {
                display:     block!important;
                padding-top: 3px !important;
            }
        
            .unsubscribe {
                padding-bottom: 5px !important;
                display:        block !important;
            }
            .single-image {
                height: 180px !important;
            }
            .footer-text {
                color:          #b9c3cd!important;
            }
        }
    </style>
</head>
<body style="margin: 0 auto;font-family: 'Open Sans', Arial, sans-serif;color: #232d37;">

<table class="wrapper" bgcolor="#f5f5f5" style="border-collapse: collapse;border-spacing: 0;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background: #f5f5f5;">
    <tbody>
    <tr>
        <td class="wrapper_td" width="600px" align="center" style="margin: 0;padding: 60px 0 200px;">
            <table class="email" style="border-collapse: collapse;border-spacing: 0;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background: #ffffff;max-width: 600px;min-width: 290px;">
                <tbody>
                <tr>
                    <td class="email-inner" style="margin: 0;padding: 41px 60px 18px;">
                        <table class="content" style="border-collapse: collapse;border-spacing: 0;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                            <tbody>
                            <tr>
                                <td class="logo logo-single" style="margin: 0;padding: 0;padding-bottom: 60px;">
                                    <img src="https://i2.yapics.com/05/27/2327vBaL05.png" alt="Inside Tracker Team" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0;padding: 0;max-width: 100%;height: auto;">
                                </td>
                            </tr>
                            <tr>
                                <td style="margin: 0;padding: 0;">
                                    <img class="single-image" src="https://s2.yapics.com/05/28/2228BCx905_th.jpg" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0;padding: 0;max-width: 100%;height: 250px;width: 100%;border-radius: 6px;">
                                </td>
                            </tr>
                            <tr>
                                <td style="margin: 0;padding: 0;">
                                    <p class="paragraph paragraph-single paragraph-name" style="margin: 0;padding: 0;padding-bottom: 20px;font-size: 14px;line-height: 20px;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;padding-top: 35px;">Hi [user_name],</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="margin: 0;padding: 0;">
                                    <p class="paragraph paragraph-name" style="margin: 0;padding: 0;padding-bottom: 20px;font-size: 14px;line-height: 20px;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">Internal site body copy.  Sit amet, consectetur adipiscing elit. Pellentesque dapibus felis
                                        <a href="https://insidetracker.com" class="link" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">sit amet arcu ullamcorper</a> eleifend.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="margin: 0;padding: 0;">
                                    <p class="paragraph paragraph-name" style="margin: 0;padding: 0;padding-bottom: 20px;font-size: 14px;line-height: 20px;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra volutpat mi, rhoncus egestas est sagittis eget. Quisque elementum convallis quam nec accumsan. Vivamus felis diam, venenatis eu auctor nec, ultrices sed odio. </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="margin: 0;padding: 0;">
                                    <p class="paragraph" style="margin: 0;padding: 0;padding-bottom: 23px;font-size: 14px;line-height: 20px;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">Aliquam eu neque est. Cras vestibulum ipsum lectus, nec consectetur justo faucibus nec. Sed
                                        <a href="https://insidetracker.com" class="link" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">gravida tortor vel lacus</a>
                                         rutrum, sed mollis libero bibendum. Suspendisse potenti. Sed porttitor arcu sed ipsum faucibus, ipsum
                                        <a href="https://insidetracker.com" class="link" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">consectetur urna</a>
                                         imperdiet. Praesent in purus nulla. Donec dignissim, urna eu cursus vulputate, velit velit aliquam dolor.</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="paragraph-bold" style="margin: 0;padding: 0;font-weight: bold;font-size: 14px;letter-spacing: 0.14px;">
                                    <p class="semibold" style="margin: 0;padding: 0;font-weight: 600;">The InsideTracker team</p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="button-wrap" style="margin: 0;padding: 0;padding-top: 36px;padding-bottom: 55px;">
                                    <a href="https://insidetracker.com" target="_blank" class="button" style="color: #ffffff;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;background-color: #00aaff;display: inline-block;border-radius: 3px;box-sizing: border-box;font-size: 16px;font-weight: 600;line-height: 36px;cursor: pointer;border: none;width: auto;height: 36px;padding: 0 20px;letter-spacing: 0.26px;">Call to action</a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="text--small" style="margin: 0;padding: 0;font-size: 12px;padding-bottom: 20px;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">
                                    <p style="margin: 0;padding: 0;">
                                        <span class="semibold" style="font-weight: 600;">Questions?</span> Our team is here to help at<span class="mobile-br" style="display: inline-block;padding-bottom: 2px;"></span>
                                        <a href="mailto:contactus@insidetracker.com" class="link" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">contactus@insidetracker.com</a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="text--small" style="margin: 0;padding: 0;font-size: 12px;padding-bottom: 20px;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">
                                    <p style="margin: 0;padding: 0;">
                                        The proof is in the data. Read our peer-reviewed <span class="mobile-br" style="display: inline-block;padding-bottom: 2px;"></span>paper in
                                        <a href="https://insidetracker.com" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">Scientific Reports.</a>
                                        <br>
                                        <a href="https://insidetracker.com" class="link footer-link" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;display: block;padding-top: 3px;">www.insidetracker.com</a>
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="footer" bgcolor="#f5f5f5" style="margin: 0;padding: 40px 16px 17px;">
                        <div class="footer-icons">
                            <a class="footer-icon" target="_blank" href="https://www.instagram.com/InsideTracker" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;padding: 0 5px;display: inline-block;cursor: pointer;">
                                <img src="https://s4.yapics.com/05/27/43273HkL05_th.png" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0;padding: 0;max-width: 100%;height: 26px;width: 26px;">
                            </a>
                            <a class="footer-icon" target="_blank" href="http://www.facebook.com/pages/InsideTracker-from-Segterra/271094716266705" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;padding: 0 5px;display: inline-block;cursor: pointer;">
                                <img src="https://s1.yapics.com/05/27/1327DkAO05_th.png" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0;padding: 0;max-width: 100%;height: 26px;width: 26px;">
                            </a>
                            <a class="footer-icon" target="_blank" href="https://twitter.com/insidetracker" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;padding: 0 5px;display: inline-block;cursor: pointer;">
                                <img src="https://s5.yapics.com/05/27/5327lr9305_th.png" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0;padding: 0;max-width: 100%;height: 26px;width: 26px;">
                            </a>
                            <a class="footer-icon" target="_blank" href="http://www.linkedin.com/company/segterra" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;padding: 0 5px;display: inline-block;cursor: pointer;">
                                <img src="https://s5.yapics.com/05/27/5327i78o05_th.png" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0;padding: 0;max-width: 100%;height: 26px;width: 26px;">
                            </a>
                            <a class="footer-icon" target="_blank" href="http://www.youtube.com/user/InsideTracker2?feature=watch" style="color: #12a0d2;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;padding: 0 5px;display: inline-block;cursor: pointer;">
                                <img src="https://s5.yapics.com/05/27/5327mVCk05_th.png" alt="" style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0;padding: 0;max-width: 100%;height: 26px;width: 26px;">
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#f5f5f5" style="margin: 0;padding: 0;">
                        <div class="unsubscribe footer-text" style="font-size: 12px;color: #b9c3cd;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">
                            <a href="https://insidetracker.com" class="link-unsubscribe" style="color: #b9c3cd;text-decoration: none;font-family: &quot;Open Sans&quot;, Arial, sans-serif;border-bottom: 1px solid #b9c3cd;">Unsubscribe</a>
                            from this list
                        </div>
                        <div class="footer-text" style="font-size: 12px;color: #b9c3cd;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">
                            101 Main Street Cambridge MA, <span class="mobile-br" style="display: inline-block;padding-bottom: 2px;"></span> Phone (800) 513-2359
                        </div>
                        <div class="footer-text" style="font-size: 12px;color: #b9c3cd;letter-spacing: 0.14px;font-family: &quot;Open Sans&quot;, Arial, sans-serif;">
                            &copy;2009-2019 InsideTracker, Inc. <span class="mobile-br" style="display: inline-block;padding-bottom: 2px;"></span> All rights reserved.
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>

 `;
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
        auth: {
            user: 'postmaster@sandboxa68360e453624943b3b5f6f10881f74e.mailgun.org',
            pass: 'd45bc27df74b3f220f200678307f2de7-4a62b8e8-df47c46e'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    let mailOptions = {
        from: '"natalia Contact" <nzhyrkova@gmail.com>',
        to: 'varkhipenka@biarum.com',
        subject: ' Request123123123123',
        text: '?',
        html: hubspot
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
        res.render('name_1', {msg: 'Email has been sent'});
    });
    
});
app.listen(3030, () => console.log('Server started...'));
