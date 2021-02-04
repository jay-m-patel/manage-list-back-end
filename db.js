const mongoose = require("mongoose")
const dbName = "manage-list"
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.c9wro.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
)
.then(() => console.log('DB connected successfully'))
.catch((err) => console.log('DB connection failure!\n', err))
