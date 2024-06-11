import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

//email is the email where we have to send the email,
//email Type is what type of mail it is,verification mail, changepassword mail and so on
//userId is used to grab information from the User

//we're sending a mail here
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }
    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "6cffc3deee5128",
        pass: "15f7f96c1b39cd",
        //add these credentials to .env file
      },
    });
    const mailOptions={
          from:"rohitga93@gmail.com",
          to:email,
          subject:emailType==="VERIFY"?"Verify ypu email":"Reset your password",
          html:`<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here<a/>to ${emailType==="VERIFY"?"Verify your email":"Reset your password"}
          or
          copy and paste the link in your browser.<br>
          ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
          </p>`
    }


    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse



  } catch (error: any) {
    console.log(error.message);
  }
};
