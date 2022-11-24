import mongoose from 'mongoose'


(async () => {
  await mongoose.connect('mongodb://172.16.132.2/webapp-database');
  console.log('Database is connect')
  })()

