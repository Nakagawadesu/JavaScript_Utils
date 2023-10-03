const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');

const inputFile = '/home/matheus/Documents/EmailsMapadoTesouro'; 
const outputFile = '/home/matheus/Documents/Emails_Mapado_Tesouro.csv'; 

const generateCSVFromFile = async () => {
  try {
    
    const rawData = fs.readFileSync(inputFile, 'utf8');
    const usersWithReceiveEmails = JSON.parse(rawData);

    const userObjects = usersWithReceiveEmails.map(user => ({ name: user.name, email: user.email }));

    const csvWriter = createObjectCsvWriter({
      path: outputFile, 
      header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
      ],
    });

    await csvWriter.writeRecords(userObjects);

    console.log(`CSV file generated successfully and saved as ${outputFile}`);
  } catch (error) {
    console.error('Error reading input file or generating CSV:', error);
  }
};

generateCSVFromFile();
