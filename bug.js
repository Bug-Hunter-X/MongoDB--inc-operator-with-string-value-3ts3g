```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{incorrectField:"1"}});
```