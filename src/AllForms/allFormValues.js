const handleFormValues = (formData) => {
    // Process the form data here
    // You can access form values from the formData object
    
    // For example, if formData is an object with key-value pairs representing form fields,
    // you can access the values like this:
    const { field1, field2, field3 ,field4,field5,field6,field7,field8} = formData;

   console.log(field1);
   console.log(field2);
   console.log(field3);
   console.log(field4);
   console.log(field4);
   console.log(field5);
   console.log(field6);
   console.log(field7)

    // Perform any logic or processing on the form values
    // For example, you can log them
   

    // Return or perform any other necessary action with the form values
    // You can return them or perform any other action based on your requirements
    // For example, you can return an object with processed form values
    return {
        field1, field2, field3 ,field4,field5,field6,field7
    };
};


export default handleFormValues;