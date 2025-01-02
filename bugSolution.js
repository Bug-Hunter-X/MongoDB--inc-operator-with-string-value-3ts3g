```javascript
// Correct usage of $inc operator in MongoDB update query
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{correctField:1}});
```