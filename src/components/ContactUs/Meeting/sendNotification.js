const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "YOUR_EMAIL@gmail.com", // Your Gmail address
    pass: "YOUR_PASSWORD", // Your Gmail password
  },
});

// Function to send notification email
const sendNotification = async (eventDetails) => {
  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: "YOUR_EMAIL@gmail.com", // Your Gmail address
      to: "sepnoty@gmail.com", // Recipient email address
      subject: "Meeting Scheduled", // Email subject
      text: `A meeting has been scheduled:\n\nTitle: ${eventDetails.title}\nDescription: ${eventDetails.description}\nLocation: ${eventDetails.location}\nTime: ${eventDetails.time}`, // Email body
    });

    console.log("Notification email sent successfully.");
  } catch (error) {
    console.error("Error sending notification email:", error);
  }
};

module.exports = sendNotification;
module.exports = {
  // other webpack configurations
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      url: require.resolve("url/"),
      // Add more fallbacks for other modules if needed
    },
  },
};
