# MongoDB $inc Operator with String Value

This repository demonstrates a common error when using MongoDB's `$inc` operator:  attempting to increment a field with a string value. The `$inc` operator is designed to increment numerical values only. Providing a string results in a failure to update the document.  The solution showcases how to use `$inc` properly with numeric values.

**Bug:** Using a string value with the `$inc` operator results in an error.  The solution demonstrates the correct usage with numeric values.

**Solution:** Replacing the string value with a number correctly updates the document.